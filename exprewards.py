
import sys
import json
data_file = "./questData.json"

with open(data_file) as json_file:
    qd = json.load(json_file)
expFile = "./exp.json"

with open(expFile) as json_file:
    exparr = json.load(json_file)

# Reset experience array
# qd[i['Name']]['Rewards']['Experience'].clear()s

for i in exparr.items():
    print(i[0], i[1])
    for z in i[1]:
        print(z)
        qd[z['name']]['Rewards']['Experience'].append(
            {"skill": z['skill'], "amount": z['amount']})


with open('quest_data2.json', 'w') as outfile:
    json.dump(qd, outfile)
