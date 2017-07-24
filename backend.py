import flask
import sqlite3
import os
import hashlib
import datetime
from flask_mail import Mail, Message
from flask import send_from_directory, render_template, redirect, url_for, request, g
from itsdangerous import URLSafeTimedSerializer
from flask import abort
#This is a comment to show GIT
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
    EMAIL_CONFIRM_KEY="westlandsquare",
    RECOVER_KEY = "recoverkey"
)
mail = Mail(app)

ts = URLSafeTimedSerializer(app.config["SECRET_KEY"])


def check_email(hashed_email, user_email):
    return hashed_email == hashlib.md5(user_email.encode()).hexdigest()


def check_password(hashed_password, user_password):
    return hashed_password == hashlib.md5(user_password.encode()).hexdigest()

def email_match(username, email):
    db=sqlite3.connect('mydb.db')
    match=False
    with db:
        cur=db.cursor()
        cur.execute("SELECT username, email FROM users")
        rows=cur.fetchall()
        for row in rows:
            dbUS=row[0]
            dbEM=row[1]
            print (row[0], row[1])
            if dbUS == username:
                match=check_email(dbEM, email)
    return match

def check_confirmed():
    db=sqlite3.connect('mydb.db')
    confirmed=False
    with db:
        cur=db.cursor()
        cur.execute("SELECT username, email_confirmed FROM users")
        rows=cur.fetchall()
        for row in rows:
            dbUsername=row[0]
            dbEmail_confirmed=row[1]
            print(row[0], row[1])
            if dbEmail_confirmed== 'TRUE':
                confirmed=True
    return confirmed


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
        # badges = os.listdir('./static')
        username= flask.session['username']
        cur.execute('''SELECT badge_id FROM badges WHERE username = "%s" ''' % username)
        badge_list = cur.fetchone()
        badges=badge_list[0]
        length = len(badge_list)
        # print(length)
        print(badges)
        print(badge_list)
        cur.execute('''SELECT points FROM badges WHERE username = "%s" ''' % username)
        pointslist = cur.fetchone()
        points=pointslist[0]
        print(points)
        if int(points) < 300:
            level = "level1"
            cur.execute('''UPDATE badges SET level = 'level1'
                    WHERE username ="''' + username + '"')
            db.commit()
            print(level)
        elif int(points) >= 300 and points < 700:
            level = "level2"
            print(level)
            cur.execute('''UPDATE badges SET level = 'level2'
                                WHERE username ="''' + username + '"')
            db.commit()
        elif int(points) >= 700:
            level = "level3"
            print(level)
            cur.execute('''UPDATE badges SET level = 'level3'
                                WHERE username ="''' + username + '"')
            db.commit()

        return flask.render_template("infowindow.html", name=flask.session['username'],badges=badges, badge_list=badge_list, length=length, points=points, level=level)

    else:
        badges = 'Local Activist'
        badge_list='Local Activist'
        length = len(badge_list)
        print('No Sign In')

        return flask.render_template('infowindow.html', badges=badges, badge_list=badge_list, length=length,
                                    points=200, level='level1') # return index and relevant variables





@app.route('/register', methods=['GET','POST'])
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
            cur.execute("INSERT INTO users( username, password, name,email, role, email_confirmed) "
                        "VALUES('%s','%s', '%s', '%s', '%s', 'FALSE')"
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
                cur.execute("INSERT INTO badges (username, badge_id, points) VALUES('%s', 'Local Activist', 0)"
                            % username)
                db.commit()
                cur.execute("SELECT username, badge_id FROM badges")
                row = cur.fetchone()
                while row is not None:
                    print(row[0], row[1])
                    row = cur.fetchone()
            else:
                cur.execute(
                    "INSERT INTO badges (username, badge_id, points, level) VALUES('%s', 'Teacher', 2000, 'level3')" % username)
                db.commit()
                print(role)
                cur.execute("SELECT username, badge_id FROM badges")
                row = cur.fetchone()
                while row is not None:
                    print(row[0], row[1])
                    row = cur.fetchone()

                    return redirect(url_for('/'))

    return redirect(url_for('/'))


@app.route('/confirm/<token>')
def confirm_email(token):
    request.args.get('username')
    try:
        email = ts.loads(token, salt=app.config['EMAIL_CONFIRM_KEY'], max_age=86400)


    except:
        abort(404)

    db = sqlite3.connect('mydb.db')
    with db:
        cur = db.cursor()
        cur.execute("SELECT username, email_confirmed FROM users")
        cur.execute("UPDATE users SET email_confirmed = 'TRUE' WHERE username = username ")
        db.commit()

    return redirect(url_for('login'))


@app.route('/login', methods=[ 'POST'])
def login():
    error = None
    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
        completion = validate(username, password)
        confirmed= check_confirmed()
        print(confirm_email)

        if completion == False:
            error = "Your login details are incorrect"

        elif confirmed == False:
            error="You must confirm your email address"
        else:
            print("Log in successful")
            return flask.redirect(flask.url_for('index'))

        return flask.redirect("/")


@app.route('/logout', methods=['POST'])
def logout():
    flask.session.pop('username', None)
    print("Log out successful")
    return flask.redirect(flask.url_for('index'))


@app.route ('/reset', methods=['GET','POST'])
def reset():
    error= None
    if flask.request.method== 'POST':
        email=flask.request.form['email']
        username=flask.request.form['username']
        match=email_match(username, email)

        if match == True:
            subject = "Password reset requested"

            token= ts.dumps(email, salt=app.config['RECOVER_KEY'])

            recover_url= url_for(
                'reset_with_token',
                token=token,
                _external=True
            )

            html = render_template('email/recover.html', recover_url=recover_url)

            send_email(email, subject, html)

            return redirect(url_for('index'))

        else:
            error= "This username and password do not match"
    return render_template('reset.html', error=error)


@app.route('/reset/<token>', methods=['GET', 'POST'])
def reset_with_token(token):
    request.args.get('username')
    try:
        email=ts.loads(token, salt=app.config['RECOVER_KEY'], max_age=86400)

    except:
        abort(404)

    if flask.request.method == 'POST':
        newpassword=flask.request.form['newpassword']
        hash_newPassword = hashlib.md5(newpassword.encode()).hexdigest()

        db =sqlite3.connect('mydb.db')
        with db:
            cur=db.cursor()
            cur.execute("SELECT username, password FROM users")
            cur.execute("UPDATE users SET password = '%s' WHERE username= username " %hash_newPassword)

            return redirect(url_for('login'))
    return render_template('reset_with_token.html', token=token)


@app.route('/reset_email', methods=['GET','POST'])
def reset_email():
    error=None
    if flask.request.method == 'POST':
        username=flask.request.form['username']
        password=flask.request.form['password']
        newEmail=flask.request.form['newEmail']
        hash_NewEmal = hashlib.md5(newEmail.encode()).hexdigest()
        completion=validate(username,password)

        db=sqlite3.connect('mydb.db')
        if completion:
            with db:
                cur=db.cursor()
                cur.execute("SELECT username, email FROM users")
                cur.execute("UPDATE users SET email= '%s', email_confirmed = 'FALSE' WHERE username=username" %hash_NewEmal)

                subject = "Confirm your email"

                token = ts.dumps(newEmail, salt=app.config['EMAIL_CONFIRM_KEY'])

                confirm_url = url_for(
                    'confirm_email',
                    token=token,
                    _external=True
                )

                html = render_template('email/activate.html',
                                       confirm_url=confirm_url)

                send_email(newEmail, subject, html)

                return redirect(url_for('login'))
    return render_template('update_email.html')



app.secret_key = "RQuo1HhBvjsxQj0StcNYhQ6zoYyGYUVX"

app.run()
