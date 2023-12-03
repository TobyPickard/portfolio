'''
    hntbgrvfec
'''
###############################################################################

from unittest import TestCase

from src.db_queries import pragma_query, select_query, delete_query, update_query, insert_query
from src.classes.operator_classes import ComparisonOperators

###############################################################################

class TestingQueryFormer(TestCase):
    '''
        fe
    '''
    # Pragma query tests
    def test_pragma_query_former(self):
        '''
            er
        '''
        self.assertEqual(pragma_query('test'), 'PRAGMA table_info(test)')

    # Select query tests
    def test_select_query_all(self):
        '''
            er
        '''
        self.assertEqual(select_query('test', ['*']), 'SELECT * FROM test')

    def test_select_query_specified_columns(self):
        '''
            er
        '''
        test_columns = ['this', 'is', 'my', 'test']
        self.assertEqual(
            select_query('test', column_names=test_columns),
            f'SELECT {",".join(test_columns)} FROM test')

    def test_select_query_count_boolean(self):
        '''
            er
        '''
        self.assertEqual(
            select_query('test', True),
            'SELECT COUNT(*) FROM test')

    # Update query tests
    def test_update_query(self):
        '''
            er
        '''
        self.assertEqual(
            update_query('test', {'this':'that'}, 'that', ComparisonOperators.EQUAL),
            'UPDATE test SET this="that" WHERE that=?'
        )

    def test_update_query_multiple_values(self):
        '''
            er
        '''
        self.assertEqual(
            update_query(
                'test',
                {'this':'that','this2':'that2','this3':'that3'},
                'that', ComparisonOperators.MORETHAN),
            'UPDATE test SET this="that", this2="that2", this3="that3" WHERE that>?'
        )

    def test_update_query_stringupdates(self):
        '''
            er
        '''
        self.assertEqual(
            update_query('test', {'id': 'id-1'}, 'that', ComparisonOperators.MORETHAN),
            'UPDATE test SET id="id-1" WHERE that>?'
        )

    # Delete query tests
    def test_delete_query(self):
        '''
            er
        '''
        self.assertEqual(
            delete_query('test',primary='id', primary_value=50),
            'DELETE FROM test WHERE id=50')

    def test_insert_query(self):
        '''
            er
        '''
        self.assertEqual(
            insert_query('test', [1,2,3,4], [1,2,3,4]),
            'INSERT INTO test (1, 2, 3, 4) VALUES (1, 2, 3, 4)')
