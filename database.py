import sqlite3
db = sqlite3.connect('mydb.db')
cur = db.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS users
(
username varchar(20)	unique	not	null,
password	varchar(100),
name varchhar(50),
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

cur.execute('''CREATE TABLE IF NOT EXISTS share_spaces
(
admin_username varchar(20),
admin_password varchar(20),
user_username varchar (20),
classname varchar(20),
sharespace_password varchar(20),
file_name varchar(50)
)''')

db.commit()


