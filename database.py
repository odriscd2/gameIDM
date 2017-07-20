import sqlite3
db = sqlite3.connect('mydb.db')
cur = db.cursor()

cur.execute('''
INSERT INTO badges (username, points)
     VALUES ('jazzi','700')
 ''')

cur.execute('''
INSERT INTO badges (username, points)
     VALUES ('user2','500')
 ''')

db.commit()

