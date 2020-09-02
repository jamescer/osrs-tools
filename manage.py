

def makeJsonToArray():
    import json
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
