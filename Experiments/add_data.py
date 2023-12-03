'''
    This is an experiment for turning adding data to a database
'''
##############################################################################

import sqlite3

###############################################################################

connection = sqlite3.connect('example.db')
cursor = connection.cursor()

data = [
    (
        1,
        'test',
        'testing database bruh',
        'testing',
        'python',
        'testing',
        'now',
        'later',
        'see for yo self',
        'gh link'
    ),
    (
        2,
        'test',
        'testing database bruh',
        'testing',
        'python',
        'testing',
        'now',
        'later',
        'see for yo self',
        'gh link' 
    )
]

###############################################################################

# cursor.execute(f'''
#     INSERT INTO projects ({','.join(data.keys())})
#     VALUES ({','.join(['?'] * len(data))})
#     {tuple(data.values())}''')

connection.commit()
connection.close()
