import sqlite3

connection = sqlite3.connect('example.db')

cursor = connection.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS projects (
        proj_id INTEGER PRIMARY KEY,
        proj_name TEXT,
        proj_purpose TEXT,
        objective TEXT,
        tech_stack TEXT,
        description TEXT,
        proj_start TEXT,
        proj_end TEXT,
        final_product TEXT,
        gh_Link TEXT
    )
''')

connection.commit()
connection.close()
