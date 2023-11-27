import sqlite3
from typing import List

def create_table(db_name: str) -> None:
    sqlite3.connect(db_name)

# def close_connection():

def add_data(data) -> None:
    

# def delete_data():

# def modify_data():

def create_table(db_name: str) -> None:
    connection = sqlite3.connect(db_name)
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
