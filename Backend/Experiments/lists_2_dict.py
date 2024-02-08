'''
    This is an experiment for getting data in the right format.
'''
###############################################################################
data = [
    (0, 'name', 'purpose', 'objective', 'stack', 'start', 'end ', 'result', 'link'), # pylint: disable=line-too-long
    (1, 'name', 'purpose', 'objective', 'stack', 'start', 'end ', 'result', 'link'), # pylint: disable=line-too-long
    (2, '', '', '', '', '', '', '', '')
]

columns = [
    'id',
    'name',
    'purpose',
    'objective',
    'stack',
    'start',
    'end',
    'result',
    'github'
]

temp_list = []
for stuff in data:
    temp = {columns[idx]: i for idx, i in enumerate(stuff)}
    temp_list.append(temp)

print(temp_list)
