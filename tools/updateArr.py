import json
f = open('./src/data/quest/questDataArray.json')
qArr = json.load(f)
seriesArr = []
objArr = []
for i in qArr:
    cur = i
    tempObj = {"QuestName": cur['name'], 'series': cur['series']}
    if cur['series'] not in seriesArr:
        objArr.append(tempObj)
        seriesArr.append(cur['series'])

exportDict = {"Object Array": objArr, "seriesarr": seriesArr}
with open('./tools/seriesArr.json', 'w') as outfile:
    json.dump(exportDict, outfile)
