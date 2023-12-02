'''
    tyhrgtfedw
'''
###############################################################################

from dataclasses import dataclass

###############################################################################

@dataclass
class Operators:
    '''
        errfe
    '''

@dataclass
class OtherOperators(Operators):
    '''
        weedw
    '''
    LIKE='LIKE'
    IN='IN'
    BETWEEN='BETWEEN'
    NULL='IS NULL'
    NOT_NULL='IS NOT NULL'

@dataclass
class ComparisonOperators(Operators):
    '''
        wrfewrf
    '''
    EQUAL='='
    NOTEQUAL='!='
    LESSTHAN='<'
    MORETHAN='>'
    LESSTHANOREQUAL='<='
    MORETHANOREQUAL='>='

@dataclass
class LogicalOperators(Operators):
    '''
        ewfrgferg
    '''
    AND='AND'
    OR='OR'
    NOT='NOT'
