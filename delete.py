import sqlite3

def delete_all():
    try: 
        sqliteConnection = sqlite3.connect('reviews.db')
        cursor = sqliteConnection.cursor()
        print('Connected')
        
        sql_delete_query = """DELETE from reviews;"""
        cursor.execute(sql_delete_query)
        sqliteConnection.commit()
        print("table restored to empty")
        cursor.close()
    except sqlite3.Error as error:
        print('Failed to delete the records of the table', error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print('the sqlite connection is closed')
            
delete_all()