'''
    This was just an experiment for editing project data.
'''

import sqlite3

data = {
    'id': '1',
    'name': 'dgvh ',
    'purpose': '',
    'objective': '',
    'stack': '',
    'start': '',
    'end': '',
    'github': 'haha',
    'result': 'boobies'
}

my_id = data.pop('id')

connection = sqlite3.connect('example.db')
cursor = connection.cursor()

test_something = ', '.join(f'{k}="{v}"' for k,v in data.items())

for k,v in data.items():
    query = f'''UPDATE projects SET {test} WHERE id=?'''
    cursor.execute(query, (my_id))
    print(query)

connection.commit()
connection.close()

    # f"UPDATE {table_name} SET {column_to_update} = ? WHERE {condition_column} = ?"
