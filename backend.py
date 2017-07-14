import flask
import sqlite3
import os
import hashlib
import datetime
import flask_mail
from flask_mail import Mail, Message
from flask import send_from_directory, render_template, redirect, url_for, request, g
from itsdangerous import URLSafeTimedSerializer
from flask import abort

# database
db = sqlite3.connect('mydb.db')
cur = db.cursor()

app = flask.Flask(__name__)

app.config.update(
    # Email Settings
    MAIL_SERVER="smtp.gmail.com",
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME="activismapp@gmail.com",
    MAIL_PASSWORD="westlandsquare",
    SECURITY_PASSWORD_SALT='westlandsquare',
    MAIL_DEFAULT_SENDER='activismapp@gmail.com',
    SECRET_KEY="3BC237B64244579DF4829313861D8",
    EMAIL_CONFIRM_KEY=" "
)
mail = Mail(app)

ts = URLSafeTimedSerializer(app.config["SECRET_KEY"])



def check_email(hashed_email, user_email):
    return hashed_email == hashlib.md5(user_email.encode()).hexdigest()


def check_password(hashed_password, user_password):
    return hashed_password == hashlib.md5(user_password.encode()).hexdigest()


def validate(username, password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT username, password FROM users")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]
            print(row[0], row[1])
            if dbUser == username:
                print(dbPass)
                completion = check_password(dbPass, password)
                print(check_password, completion)

    return completion


def send_email(email, subject, html):
    msg = Message(subject,
                  sender="activismapp@gmail.com",
                  recipients=[email],
                  body=html)
    mail.send(msg)
    print("Message sent")


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


# creating routes & static folders for badges
@app.route('/')
def index():
    if 'username' in flask.session:
        badges = os.listdir('./static')
        cur.execute('''SELECT username, badge_id FROM badges''')
        badge_list = cur.fetchall()
        length = len(badge_list)
        # print(length)
        print(badges)
        print(badge_list)

        return flask.render_template("profile.html", name=flask.session['username'], badges=badges,
                                     badge_list=badge_list, length=length)
    else:
        # Increment variable
        badges = os.listdir('./static')  # create list of image names
        cur.execute('''SELECT username, badge_id FROM badges''')  # select image details from table
        badge_list = cur.fetchall()  # create list from results
        length = len(badge_list)

        return flask.render_template('infowindow.html', badges=badges, badge_list=badge_list,
                                     length=length)  # return index and relevant variables


@app.route('/register', methods=['GET', 'POST'])
def register():
    error = None
    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
        name = flask.request.form['name']
        email = flask.request.form['email']
        role = flask.request.form['role']

        hash_password = hashlib.md5(password.encode()).hexdigest()
        hash_email = hashlib.md5(email.encode()).hexdigest()
        cur.execute("SELECT username from users where username = (?)", [username])
        userexists = cur.fetchone()

        cur.execute("SELECT email from users where email= (?)", [hash_email])
        emailexists = cur.fetchone()
        if userexists:
            error = 'Username taken'
        elif emailexists:
            error = 'An account with this email address already exists'

        else:
            cur.execute("INSERT INTO users( username, password, name,email, role) VALUES('%s','%s', '%s', '%s', '%s')"
                        % (username, hash_password, name, hash_email, role))
            db.commit()
            subject = "Confirm your email"

            token = ts.dumps(email, salt=app.config['EMAIL_CONFIRM_KEY'])

            confirm_url = url_for(
                'confirm_email',
                token=token,
                _external=True
            )

            html = render_template('email/activate.html',
                                   confirm_url=confirm_url)

            send_email(email, subject, html)
            if role == 'Student':
                cur.execute("INSERT INTO badges (username, badge_id) VALUES('%s', 'Local Activist')"
                            % username)
                db.commit()
                cur.execute("SELECT username, badge_id FROM badges")
                row = cur.fetchone()
                while row is not None:
                    print(row[0], row[1])
                    row = cur.fetchone()
            else:
                cur.execute("INSERT INTO badges (username, badge_id) VALUES('%s', 'Teacher')" % username)
                db.commit()
                cur.execute("SELECT username, badge_id FROM badges")
                row = cur.fetchone()
                while row is not None:
                    print(row[0], row[1])
                    row = cur.fetchone()

            return flask.render_template("registered.html")

    return flask.render_template("register.html", error=error)


@app.route('/confirm/<token>')
def confirm_email(token):
    confirm_email=False
    try:
        email = ts.loads(token, salt=app.config['EMAIL_CONFIRM_KEY'], max_age=86400)
        confirm_email=True
    except:
        abort(404)


    print("This far", confirm_email)


    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None

    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
        completion = validate(username, password)
        if completion == False:
            error = "Your login details are incorrect"
        if confirm_email==False:
            error="Please confirm your registration and email by clicking on the link sent to your inbox"

        else:
            print("Log in successful")
            return flask.redirect(flask.url_for('index'))

    return flask.render_template('login.html', error=error)


@app.route('/logout', methods=['POST'])
def logout():
    flask.session.pop('username', None)
    print("Log out successful")
    return flask.redirect(flask.url_for('index'))


app.secret_key = "RQuo1HhBvjsxQj0StcNYhQ6zoYyGYUVX"

app.run()
