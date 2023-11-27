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
data = {
    'proj_id':2,
    'proj_name': 'dict_test'
}

###############################################################################

cursor.execute('''
        INSERT INTO projects ({}) VALUES ({})
    '''.format(','.join(data.keys()), ','.join(['?'] * len(data))), tuple(data.values())) # pylint: disable=line-too-long 

# for thing in data: 
#     cursor.execute('''
#         INSERT INTO projects (proj_id, proj_name, proj_purpose, objective, tech_stack, description, proj_start, proj_end, final_product, gh_link)
#         VALUES (?,?,?,?,?,?,?,?,?,?)
# ''', thing)

connection.commit()
connection.close()
