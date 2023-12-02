from enum import Enum

class Operators: 
    pass

class OtherOperators(Operators):
    LIKE = 'LIKE'
    IN = 'IN'
    BETWEEN = 'BETWEEN'
    NULL = 'IS NULL'
    NOT_NULL = 'IS NOT NULL'

class ComparisonOperators(Operators):
    EQUAL = '='
    NOTEQUAL = '!='
    LESSTHAN = '<'
    MORETHAN = '>'
    LESSTHANOREQUAL = '<='
    MORETHANOREQUAL = '>='

class LogicalOperators(Operators):
    AND = 'AND'
    OR = 'OR'
    NOT = 'NOT'
