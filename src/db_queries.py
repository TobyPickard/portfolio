'''
    rwfetrg
'''
###############################################################################

from typing import List, Optional, Dict, Any

from src.classes.operators import Operators

###############################################################################

def pragma_query(table_name: str) -> str:
    '''
        krgneog
    '''
    return f'''PRAGMA table_info({table_name})'''

##=============================================================================

def select_query(
        table_name: str,
        column_names: Optional[List[str]],
        count: Optional[bool]=False) \
        -> str:
    '''
        fefq
    '''
    return (
        f'''SELECT {','.join(column_names)} FROM {table_name}''' 
        if count is False else
        f'''SELECT COUNT({','.join(column_names)}) FROM {table_name}'''
    )

##=============================================================================

def update_query(
        table_name: str,
        updates: Dict[str, str],
        conditional: str,
        conditional_operator: Operators) \
        -> str:
    '''
        erferf
    '''
    dict_string = ', '.join(f'{k}=\'{v}\'' for k,v in updates.items())
    return f'''UPDATE {table_name} SET {dict_string} WHERE {conditional}{conditional_operator}?''' # pylint: disable=line-too-long

##=============================================================================

def delete_query(
        table_name: str,
        primary_value: str,
        primary: str = 'id') \
        -> str:
    '''
        erferf
    '''
    return f'''DELETE FROM {table_name} WHERE {primary}={primary_value}'''

##=============================================================================

def insert_query(
        table_name: str,
        columns: List[Any],
        data: List[Any]) \
        -> str:
    '''
        eerefw
    '''
    return f'''INSERT INTO {table_name} {tuple(columns)} VALUES {tuple(data)}'''
