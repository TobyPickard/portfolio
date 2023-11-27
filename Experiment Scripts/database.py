import sqlite3

connection = sqlite3.connect('example.db')

cursor = connection.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY,
        name TEXT,
        purpose TEXT,
        objective TEXT,
        stack TEXT,
        start TEXT,
        end TEXT,
        result TEXT,
        github TEXT
    )
''')

connection.commit()
connection.close()
