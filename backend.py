import flask
import sqlite3
import os
import hashlib
import datetime
from flask_mail import Mail, Message
from flask import send_from_directory, render_template, redirect, url_for, request, g
from itsdangerous import URLSafeTimedSerializer
from flask import abort, flash
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


    return completion

def validate_join_sharespace(classname, sharespace_password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT classname, sharespace_password FROM share_space_admin")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]
            print(row[0], row[1])
            if dbUser == classname:
                print(dbPass)
                completion = check_password(dbPass, sharespace_password)

    return completion




def validate_sharespace(user_username, sharespace_password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT user_username, sharespace_password FROM share_space_user")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]
            print(row[0], row[1])
            if dbUser ==  user_username:
                print(dbPass)
                completion = check_password(dbPass, sharespace_password)

    return completion




def validate_admin(admin_username, admin_password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT admin_username, admin_password FROM share_space_admin")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]

            if dbUser == admin_username:

                completion = check_password(dbPass, admin_password)

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


        return flask.render_template('infowindow.html', badges=badges, badge_list=badge_list, length=length,
                                    points=200, level='level1') # return index and relevant variables

@app.route('/register', methods=['POST'])
def register():
    error=None
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
            error = "Username taken"
        elif emailexists:
            error = "An account with this email address already exists"

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

            return flask.render_template('registered.html', error=error)

    return flask.render_template('register.html', error=error)

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


        return flask.render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    error=None
    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
        completion = validate(username, password)
        confirmed= check_confirmed()
        print(confirm_email)

        if completion == False:
            error = "Your login details are incorrect"


        elif confirmed == False:
           error = "You must confirm your email address"
        else:
            return flask.redirect(flask.url_for('index'))

    return flask.render_template('login.html', error=error)

@app.route('/logout', methods=['POST'])
def logout():
    flask.session.pop('username', None)
    flash("Log out successful")
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

@app.route('/reset_email', methods=['POST'])
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

@app.route('/create_sharespace', methods=["GET","POST"])
def create_sharespace():
    error=None
    if flask.request.method == 'POST':
        cur.execute("SELECT role FROM users WHERE username = username")
        row=cur.fetchone()
        if row[0] == "Student":
            error = "You'll have to wait for your teacher to set one up"
        else:
            admin_username = flask.request.form ['admin_username']
            admin_password= flask.request.form['admin_password']
            completion = validate(admin_username, admin_password)

            if completion == False:
                error= "Your login details are not correct!"


            else:
                classname = flask.request.form['classname']
                sharespace_password = flask.request.form['sharespace_password']
                hash_sharespace_password = hashlib.md5(sharespace_password.encode()).hexdigest()

                cur.execute("SELECT classname from share_space where classname=(?)", [classname])
                classname_exists = cur.fetchone()

                if classname_exists:
                    error = "This classname exists!"

                else:
                    cur.execute("SELECT admin_username FROM share_space")
                    cur.execute("UPDATE share_space SET classname, sharespace_password= '%s', '%s' WHERE admin_username= admin_username"
                                %(classname, hash_sharespace_password))
                    db.commit()

                return flask.redirect('sharespace_admin_login')

    return flask.render_template("sharespace-setup.html", error=error)

@app.route('/join_sharespace', methods=["GET", "POST"])
def join_sharespace():
    error= None
    if flask.request.method == 'POST':
        classname= flask.request.form['classname']
        sharespace_password=flask.request.form['sharespace_password']
        completion= validate (classname, sharespace_password)

        if completion == False:
            error= "Your sharespace details are incorect"
        else:
            username= flask.session['username']
            password= flask.request.form['password']
            hash_ss_password = hashlib.md5(password.encode()).hexdigest()
            cur.execute("SELECT user_username FROM sharespace_user where user_username=(?)", [username])
            user_exists= cur.fetchone()
            if user_exists:
                error= "You have already registered to this sharespace"
            else:
                confirmed= validate(username, password)
                if confirmed:
                    cur.execute("INSERT INTO sharespace_user (user_username, user_password) VALUES ('%s', '%s')" %(username, hash_ss_password ))
                    db.commit()
                    return flask.redirect(url_for('sharespace_login'))

    return render_template("join-sharespace.html", error=error)







@app.route ('/sharespace_admin_login', methods=["GET", "POST"])
def sharespace_admin_login():
    error = None
    if flask.request.method == 'POST':
        admin_username = flask.request.form['admin_username']
        admin_password = flask.request.form['admin_password']
        completion = validate(admin_username, admin_password)

        if completion == False:
            error = "Your login details are incorrect"

        else:
            return flask.render_template("sharespace-admin.html", error=error)

    return render_template("sharespace-admin-login.html", error=error)


@app.route('/sharespace_login', methods=["GET", "POST"])
def sharespace_login():
    error = None
    if flask.request.method == 'POST':
        username = flask.request.form['user_username']
        sharespace_password = flask.request.form['password']
        completion = validate(username, sharespace_password)

        if completion == False:
            error = "Your login details are incorrect"

        else:
            return flask.render_template("sharespace.html")

    return flask.render_template('sharespace-login.html', error=error)


@app.route('/upload_to_sharespace', methods=["GET","POST"])
def upload_to_sharespace():
    if flask.request.method == "GET":
        return flask.render_template("upload-form.html")
    else:
        file= flask.request.files["image"]
        file.save("static/classfolders"+file.filename)

        filename = file.filename
        user = flask.session ['username']

        cur.execute("SELECT user_username FROM share_space")
        cur.execute("UPDATE share_space SET filename = '%s', WHERE admin_username= '%s'"
            % (filename, user))
        db.commit()

        return flask.render_template("sharespace.html")





app.secret_key = "RQuo1HhBvjsxQj0StcNYhQ6zoYyGYUVX"



app.run()
