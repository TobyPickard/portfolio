
data = [
    (0, 'name', 'purpose', 'objective', 'stack', 'start', 'end ', 'result', 'link'), 
    (1, 'name', 'purpose', 'objective', 'stack', 'start', 'end ', 'result', 'link'), 
    (2, '', '', '', '', '', '', '', '')
]

columns = ['id', 'name', 'purpose', 'objective', 'stack', 'start', 'end', 'result', 'github']

temp_list = []
for stuff in data: 
    temp = {columns[idx]: i for idx, i in enumerate(stuff)}
    temp_list.append(temp)

print(temp_list)
