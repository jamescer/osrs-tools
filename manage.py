import json


def makeJsonToArray():
    data = []
    d2 = []
    with open('questData.json') as json_file:
        data = json.load(json_file)

    for key in data:
        val = data[key]
        # print(val)
        d2.append(val)

    with open('testarray.json', 'w') as outfile:
        json.dump(d2, outfile)


# We will need to make a solid array of tasks per diary?
# so instead of ArdougneDiary.easy.tasks its
# arrayEasy = [
#     {'task': "...",
#      "requirement": [...],
#      "diary":"ardougne",
#      "type":"easy"}
# ]
# TODO
