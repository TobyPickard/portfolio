import sqlite3 
data = {'id': '1', 'name': '.vefve', 'purpose': '', 'objective': '', 'stack': '', 'start': '', 'end': '', 'github': '', 'result': 'boobies'}

id = data.pop('id')

connection = sqlite3.connect('example.db')
cursor = connection.cursor()


for k,v in data.items():
    query = f'''UPDATE projects SET {k}=? WHERE id=?'''
    cursor.execute(query, (v, id))
    print(query)

connection.commit()
connection.close()

    # f"UPDATE {table_name} SET {column_to_update} = ? WHERE {condition_column} = ?"
