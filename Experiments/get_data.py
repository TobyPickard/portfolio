'''
    This is an experiment for getting data from the database.
'''
###############################################################################

import sqlite3

###############################################################################

connection = sqlite3.connect('example.db')
cursor = connection.cursor()

###############################################################################

cursor.execute('SELECT * from projects')
rows= cursor.fetchall()

for row in rows:
    print(row)

connection.close()
