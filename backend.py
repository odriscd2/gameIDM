import flask, sqlite3, os, hashlib, datetime
from flask_mail import Mail, Message
from flask import send_from_directory, render_template, redirect, url_for, request, g, session
from itsdangerous import URLSafeTimedSerializer
from flask import abort, flash

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

app.config['ALLOWED_EXTENSIONS'] = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

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
        cur.execute("SELECT sharespace_password FROM sharespace_users")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]
            print("we are", row[0], row[1])
            if dbUser == classname:
                print(dbPass)
                completion = check_password(dbPass, sharespace_password)

    return completion

def validate_sharespace_users(user_username, sharespace_password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT user_username, user_password FROM sharespace_user")
        rows = cur.fetchall()
        for row in rows:
            dbUser = row[0]
            dbPass = row[1]
            print(row[0], row[1])
            if dbUser ==  user_username:
                print(dbPass)
                completion = check_password(dbPass, sharespace_password)

    return completion

def validate_sharespace_admin(admin_username, admin_password):
    db = sqlite3.connect('mydb.db')
    completion = False
    with db:
        cur = db.cursor()
        cur.execute("SELECT admin_username, admin_password FROM sharespace_admin")
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


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.errorhandler(410)
def internal_server_error(e):
    return render_template('410.html'), 410
# creating routes & static folders for badges
@app.route('/')
def index():
    skip=True
    if skip == True:

        return redirect(url_for('map_page'))

    else:
        return render_template("earth_black.html")

@app.route('/map', methods=["GET"])
def map_page():
    if 'username' in flask.session:
        username=flask.session['username']
        cur.execute("SELECT classname FROM sharespace_users WHERE username = '%s'" %username)
        classrow = cur.fetchone()
        classname = classrow[0]
        cur.execute("SELECT role from users where username = '%s'" %username)
        rolerow= cur.fetchone()
        role= rolerow[0]


        if classname is None and role == 'Teacher':
                return redirect(url_for('create_sharespace', classname=classname))

        elif classname is None and role == 'Student':
            return redirect(url_for('join_sharespace', classname=classname))

        else:
                # badges = os.listdir('./static')

                print("studnet this far")
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


                cur.execute("SELECT username, classname, role from sharespace_users where username='%s'" %username)
                rows=cur.fetchall()
                for row in rows:
                    print (row[0], row[1], row[2])
                if int(points) < 350:
                    level = "level1"
                    cur.execute('''UPDATE badges SET level = 'level1'
                            WHERE username ="''' + username + '"')
                    db.commit()
                    print(level)
                elif int(points) >= 350 and points < 800:
                    level = "level2"
                    print(level)
                    cur.execute('''UPDATE badges SET level = 'level2'
                                        WHERE username ="''' + username + '"')
                    db.commit()
                elif int(points) >= 800:
                    level = "level3"
                    print(level)
                    cur.execute('''UPDATE badges SET level = 'level3'
                                        WHERE username ="''' + username + '"')
                    db.commit()

        return flask.render_template("infowindow.html", name=flask.session['username'],badges=badges, badge_list=badge_list, length=length,
                                             points=points, level=level, classname=classname)

    else:
        badges = 'Local Activist'
        badge_list='Local Activist'
        length = len(badge_list)


        return flask.render_template('infowindow.html', badges=badges, badge_list=badge_list, length=length,
                                    points=200, level='level1') # return map_page and relevant variables

@app.route('/render_content/<template>', methods=['GET'])
def render_content(template):
    if 'username' in flask.session:
        username = flask.session['username']
        return render_template("content/"+template, username=username)
    else:
        username="none"
        return render_template("content/"+template, username=username)

@app.route('/game', methods=['GET'])
def game():
    print("game")
    story=request.args.get('story')
    print(story)
    username=request.args.get('username')
    print(username)


    if username == "none":
        print("sign up to earn points!")
        # enter in a pop up that tells you that you should sign up
        completion = "complete"
    else:
        cur.execute('''SELECT %s FROM badges WHERE username = '%s' ''' % (story, username))
        story_result_list = cur.fetchone()
        print(story_result_list)
        complete_check = story_result_list[0]
        cur.execute('''SELECT points FROM badges WHERE username = '%s' ''' % (username))
        points_list = cur.fetchone()
        points = points_list[0]
        if complete_check == "complete":
            print("story already has been completed")
            completion="complete"
        else:
            cur.execute('''UPDATE badges SET '%s' = 'complete'
                        WHERE username ='%s' ''' % (story, username))
            points_new= int(points) + 50
            print(points_new)
            cur.execute('''UPDATE badges SET points = '%s'
                                    WHERE username ='%s' ''' % (points_new, username))
            print("points updated")
            db.commit()
            completion="complete"

    return completion

@app.route('/register', methods=['GET','POST'])
def register():
    error=None
    if flask.request.method == 'POST':
        username = flask.request.form['username']
        password = flask.request.form['password']
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
            cur.execute("INSERT INTO users( username, password, email, role, email_confirmed) "
                        "VALUES('%s','%s', '%s', '%s', 'FALSE')"
                        % (username, hash_password,  hash_email, role))
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
                cur.execute("INSERT INTO sharespace_users (username, role) VALUES('%s', '%s')"
                            % (username, role))
                db.commit()

            elif role== 'Teacher':
                cur.execute(
                    "INSERT INTO badges (username, badge_id, points, level) VALUES('%s', 'Teacher', 2000, 'level3')" % username)
                db.commit()
                cur.execute("INSERT INTO sharespace_users (username, role) VALUES('%s', '%s')"
                            % (username, role))
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
        if completion == False:
            error = "Your login details are incorrect"


        elif confirmed == False:
           error = "You must confirm your email"
        else:
            flask.session['username'] = flask.request.form['username']
            return flask.redirect(flask.url_for('map_page'))

    return flask.render_template('login.html', error=error)

@app.route('/logout', methods=['POST'])
def logout():
    flask.session.pop('username', None)
    return flask.redirect(flask.url_for('map_page'))

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

            return redirect(url_for('map_page'))

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

        else:
            error="Your login details are incorrect"
    return render_template('update_email.html', error=error)

@app.route('/delete_account', methods=["POST"])
def delete_account():
    error=None
    if flask.request.method == "POST":
        if 'username' in flask.session:
            username=flask.session['username']

            cur.execute("SELECT username from users where username='%s'" %username)
            userexists = cur.fetchone()
            if userexists:
                cur.execute("DELETE from sharespace_users where username='%s'" %username)
                db.commit()
                cur.execute("DELETE from sharespace_images where username='%s'" %username)
                db.commit()
                cur.execute("DELETE from users where username='%s'" %username)
                db.commit()
                cur.execute("DELETE from badges WHERE username = '%s'" % username)
                db.commit()
                flask.session.pop('username', None)
                cur.execute("SELECT username, points FROM badges")
                results = cur.fetchall()
                print(results)
                return redirect(url_for('map_page'))


        else:
            error= "You must sign in"
            flask.render_template("login.html", error=error)
    return flask.render_template("delete-account.html", error=error)

@app.route('/create_sharespace', methods= ["GET", "POST"])
def create_sharespace():
    error=None
    if flask.request.method == "POST":
        if 'username' in flask.session:
            username = flask.session['username']
            cur.execute("SELECT role FROM users WHERE username = '%s'" %username)
            row = cur.fetchone()
            role= row[0]
            print ('debug', role)
            if role == "Student":
                error = "You'll have to wait for your teacher to set one up"
                return redirect(url_for('map_page', error=error))
            elif role == "Teacher":
                classname=flask.request.form['classname']
                sharespace_password=flask.request.form['sharespace_password']
                hash_sharespace_password= hashlib.md5(sharespace_password.encode()).hexdigest()
                cur.execute("SELECT classname from sharespace_users WHERE classname = '%s'" %classname)
                classname_exists=cur.fetchone()
                if classname_exists:
                    error="This name already exists. Choose another"
                else:
                    cur.execute("UPDATE sharespace_users SET classname='%s' "
                                " WHERE username = '%s'" %(classname,  username))
                    db.commit()
                    cur.execute("INSERT INTO sharespace_setup(classname, sharespace_password) VALUES ('%s', '%s')" %(classname, hash_sharespace_password))
                    db.commit()
                    os.makedirs('static/classfolders/%s' %classname)
                    return flask.redirect(url_for('sharespace', classname=classname, error=error))
        else:
            error= "You must be logged in to create a sharespace"
            return flask.redirect(url_for('login', error=error))


    return flask.render_template('sharespace-setup.html',error=error)

@app.route('/join_sharespace', methods=["GET", "POST"])
def join_sharespace():
    error=None
    if 'username' in flask.session:
        username = flask.session['username']
        cur.execute("SELECT role from users where username='%s'" % username)
        rowrole = cur.fetchone()
        role = rowrole[0]
        if role == 'Teacher':
            error = "Set up a sharespace instead"
            return redirect(url_for('create_sharespace', error=error))
        else:
            if flask.request.method == "POST":
                print("debug", username)
                classname= flask.request.form['classname']
                sharespace_password=flask.request.form['sharespace_password']
                cur.execute("SELECT classname from sharespace_users where username = '%s'" %username)
                classrow = cur.fetchone()
                print ('classrow', classrow[0])
                cur.execute("SELECT classname, sharespace_password from sharespace_setup")
                rows=cur.fetchall()
                for row in rows:
                    dbuser=row[0]
                    dbpass=row[1]
                    if dbuser == classname:
                        completion= check_password(dbpass, sharespace_password)
                        if completion:
                            cur.execute("UPDATE sharespace_users SET classname= '%s' WHERE username = '%s'" %(classname, username))
                            db.commit()
                            return redirect(url_for('sharespace', classname=classname,error=error))
                        else:
                            error="Incorrect classname or password"

    return flask.render_template("join-sharespace.html", error=error)

@app.route('/sharespace/<classname>')
def sharespace(classname):
    error=None
    if 'username' in session and classname is not None:
        username=flask.session['username']
        cur.execute("SELECT classname FROM sharespace_users where username='%s'" %username)
        classrow=cur.fetchone()
        classname=classrow[0]
        file_names = os.listdir('./static/classfolders/%s' %classname)
        cur.execute('''SELECT file_name, username, classname, date_uploaded, confirmed, role, category FROM sharespace_images''')
        file_list= cur.fetchall()
        cur.execute('''SELECT username, classname, blog_title, blog_post, date_uploaded, confirmed, role, category FROM
        sharespace_blog_posts''')
        blog_list=cur.fetchall()
        cur.execute("SELECT role FROM users WHERE username = '%s'" %username)
        rowrole=cur.fetchone()

        if rowrole[0] is None:
            error="There is no role"
        else:
            role= rowrole[0]

            length= len(file_list)
            print(file_names)
            print(file_list)
            sharespace_url = url_for(
                'sharespace',
                classname=classname,
                _external=True
            )

            return render_template("sharespace.html", sharespace_url=sharespace_url,
                               classname=classname, length=length, file_names=file_names,
                               file_list=file_list, username=username, error=error, role=role, blog_list=blog_list)
    else:
        return redirect(url_for('login'))

@app.route('/upload_to_sharespace', methods=["POST"])
def upload_to_sharespace():
    if flask.request.method == "POST":
        username = flask.session['username']
        cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
        classrow = cur.fetchone()
        classname = classrow[0]
        category = flask.request.form["category"]
        cur.execute("SELECT role from sharespace_users where username= '%s'" %username)
        rowrole=cur.fetchone()
        role= rowrole[0]
        file = flask.request.files["sharefile"]
        file.save('static/classfolders/'+classname+'/' + file.filename )
        filename = file.filename
        print (filename)

        date_uploaded = datetime.date.today().strftime('%d-%m-%Y')
        cur.execute("INSERT INTO sharespace_images( username, file_name, date_uploaded, classname, confirmed, role, category) "
                    "VALUES('%s','%s', '%s', '%s', 'FALSE', '%s', '%s')" % (username, filename,  classname, date_uploaded, role, category))
        print ("ATTENTION",category)
        return redirect(url_for('sharespace',
                                filename=filename, classname=classname))

@app.route('/delete_upload', methods=["POST"])
def delete_upload():
    if 'username' in flask.session:
        username= flask.session['username']
        cur.execute("SELECT role from sharespace_users where username = '%s'" %username)
        rowrole= cur.fetchone()
        role=rowrole[0]
        cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
        classrow= cur.fetchone()
        classname=classrow[0]
        filename= flask.request.form["filename"]
        print('this is debug DOD', filename)
        if role == "Teacher":
            os.remove(os.path.join('./static/classfolders/'+classname+'/'+ filename))
            cur.execute("DELETE from sharespace_images where file_name='%s'" % filename)
            db.commit()
            return redirect(url_for('sharespace', classname=classname))

@app.route('/moderate_upload', methods=["POST"])
def moderate_upload():
    if 'username' in flask.session:
        username= flask.session['username']
        cur.execute("SELECT role from sharespace_users where username = '%s'" %username)
        rowrole= cur.fetchone()
        role=rowrole[0]
        cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
        classrow= cur.fetchone()
        classname=classrow[0]
        filename = flask.request.form["filename"]
        print('this is debug DOD moderate', filename)


        if role == "Teacher":
            cur.execute("UPDATE sharespace_images SET confirmed= 'TRUE' where file_name = '%s'" %filename)
            db.commit()
            return redirect(url_for('sharespace', classname=classname))

        else:
            error="Looks like you can't do that"
            return redirect(url_for('sharespace', classname=classname))

@app.route('/blog_post', methods=["POST"])
def blog_post():
    if flask.request.method == "POST":
        username = flask.session['username']
        cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
        classrow = cur.fetchone()
        classname = classrow[0]
        cur.execute("SELECT role from sharespace_users where username= '%s'" %username)
        rowrole=cur.fetchone()
        role= rowrole[0]
        blog_title=flask.request.form['blog_title']
        blog_post=flask.request.form['blog_post']
        date_uploaded = datetime.date.today().strftime('%d-%m-%Y')
        category=flask.request.form['category']


        cur.execute("INSERT INTO sharespace_blog_posts (username, classname, blog_title, blog_post,"
                    "date_uploaded, confirmed, role, category) VALUES('%s','%s','%s','%s', '%s', 'FALSE', '%s','%s')"
                    %(username, classname, blog_title, blog_post, date_uploaded, role, category))

        db.commit()

        return redirect(url_for('sharespace',
                                 classname=classname))

@app.route('/moderate_blog_post', methods=["POST"])
def moderate_blog_post():
    if 'username' in flask.session:
        username= flask.session['username']
        cur.execute("SELECT role from sharespace_users where username = '%s'" %username)
        rowrole= cur.fetchone()
        role=rowrole[0]
        cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
        classrow= cur.fetchone()
        classname=classrow[0]

        blog_post= flask.request.form['blog_post']

        if role == "Teacher":
            cur.execute("UPDATE sharespace_blog_posts SET confirmed= 'TRUE' where  blog_post ='%s'" % blog_post)
            db.commit()
            return redirect(url_for('sharespace', classname=classname))

        else:
            error="Looks like you can't do that"
            return redirect(url_for('sharespace', classname=classname))

@app.route('/delete_blog_post', methods=["POST"])
def delete_blog_post():
    if 'username' in flask.session:
            username= flask.session['username']
            cur.execute("SELECT role from sharespace_users where username = '%s'" %username)
            rowrole= cur.fetchone()
            role=rowrole[0]
            cur.execute("SELECT classname from sharespace_users where username = '%s'" % username)
            classrow= cur.fetchone()
            classname=classrow[0]
            blog_post= flask.request.form['blog_post']

            if role == "Teacher":
                cur.execute("DELETE from sharespace_blog_posts where blog_post='%s'" % blog_post)
                db.commit()
                return redirect(url_for('sharespace', classname=classname))

            else:
                error="Looks like you can't do that"
                return redirect(url_for('sharespace', classname=classname))

app.secret_key = "RQuo1HhBvjsxQj0StcNYhQ6zoYyGYUVX"

app.run()
