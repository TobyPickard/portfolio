'''This module will not be used'''
import sqlite3

def delete_all():
    '''this isn't being used'''
    try:
        sqlite_connection = sqlite3.connect('reviews.db')
        cursor = sqlite_connection.cursor()
        print('Connected')

        sql_delete_query = """DELETE from reviews;"""
        cursor.execute(sql_delete_query)
        sqlite_connection.commit()
        print("table restored to empty")
        cursor.close()
    except sqlite3.Error as error:
        print('Failed to delete the records of the table', error)
    finally:
        if sqlite_connection:
            sqlite_connection.close()
            print('the sqlite connection is closed')

delete_all()
