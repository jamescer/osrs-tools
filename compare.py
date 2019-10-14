import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import numpy as np
import json
length_data = pd.read_excel(r'questlengths.xlsx')

with open('quest_data.json') as json_file:
    quest_data = json.load(json_file)


df = pd.DataFrame(
    length_data, columns=['#',	'Name',	'Difficulty',	'Length',	'Quest points', 'Series'])

var = 0
for index, row in df.iterrows():
    # try:
    questfound = False
    var = var+1
    for i in quest_data:
        if(i['Name'] == row['Name']):
            questfound = True
            print(var, i['Name'], ' == ', row['Name'])
            print(i['Difficulty'], ' = ', row['Difficulty'])
            print(i['Length'], ' = ', row['Length'])
            print(i['QuestPointReward'], ' = ', int(row['Quest points']))

            i['Difficulty'] = row['Difficulty']
            i['Length'] = row['Length']
            i['QuestPointReward'] = int(
                row['Quest points'])

    if questfound == False:

        print(var, row['Name'], 'not found!')

    # except Exception as e:
    #     print(e)

with open('quest_data2.json', 'w') as outfile:
    json.dump(quest_data, outfile)
