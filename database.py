import sqlite3
db = sqlite3.connect('mydb.db')
cur = db.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS users
(
username varchar(20)	unique	not	null,
password	varchar(100),
email varchar(60),
role varchar (50),
email_confirmed varchar (10)
)''')

db.commit()

cur.execute('''CREATE TABLE	IF NOT EXISTS badges
(
username varchar(20),
badge_id varchar (50),
points int,
level varchar (50)
)''')

db.commit()

cur.execute('''CREATE TABLE IF NOT EXISTS sharespace_setup(
classname varchar(20),
sharespace_password varchar(20))''')

db.commit()

cur.execute('''CREATE TABLE IF NOT EXISTS sharespace_users
(
username varchar (20),
classname varchar (20),
role varchar (20))
''')

cur.execute('''CREATE TABLE IF NOT EXISTS sharespace_images
(
username varchar(20),
classname varchar(20),
file_name varchar(20),
date_uploaded varchar(20),
confirmed varchar(20),
role varchar (20),
category varchar(20))

''')

db.commit()

cur.execute('''CREATE TABLE IF NOT EXISTS sharespace_blog_posts(
username varchar(20),
classname varchar(20),
blog_title varchar(20),
blog_post varchar(500),
date_uploaded varchar(20),
confirmed varchar (20),
role varchar(20),
category varchar(30))''')

db.commit()

