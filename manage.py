import json


def makeJsonToArray():
    data = []
    d2 = []
    with open('questData.json') as json_file:
        data = json.load(json_file)

    for key in data:
        # print(val)
        data[key]['subquests'] = []

    with open('testObj.json', 'w') as outfile:
        json.dump(data, outfile)


makeJsonToArray()
# We will need to make a solid array of tasks per diary?
# so instead of ArdougneDiary.easy.tasks its
# arrayEasy = [
#     {'task': "...",
#      "requirement": [...],
#      "diary":"ardougne",
#      "type":"easy"}
# ]
# TODO
