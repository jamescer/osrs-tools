import requests
from bs4 import BeautifulSoup
import json

# Create Python Script that gets all the quests currently.
# We have to create a list of quests to get the requirements for
# We have to then get the requirements and rewards for each quest
# Create json files off of this.

# Issues will definitely come with the scraping of each quest.
# Each quest html will most likely be different.
# WIP TODO

quest_data_url = 'https://oldschool.runescape.wiki/w/Quests/List'
URL = quest_data_url
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')


rows = soup.find_all('tr')

td = rows[78].find_all('td')

all_quests = []


print([0, td[0]])  # index
print([1, td[1]])  # questName
print(td[1].findAll(text=True))
print([2, td[2]])  # Difficulty
print([3, td[3]])  # Length

# for all tables (tr) rows on page
for i in rows:
    td = i.find_all('td')
    new = {}
    print(td)
    # if the table rows meet the qualifitcations for a quest
    if td:
        if len(td) > 0:
            indexStr = td[0].findAll(text=True)
            indexStr = indexStr[0].replace('\n', '')
            new['index'] = int(indexStr)
            pass
        if len(td) > 1:
            questNameStr = td[1].findAll(text=True)
            questNameStr = questNameStr[0].replace('\n', '')
            new['questName'] = questNameStr
            pass
        if len(td) > 2:
            diffStr = td[2].findAll(text=True)
            diffStr = diffStr[0].replace('\n', '')
            new['difficulty'] = diffStr
            pass
        if len(td) > 3:
            lengthStr = td[3].findAll(text=True)
            lengthStr = lengthStr[0].replace('\n', '')
            new['length'] = lengthStr
            pass
        bool2 = 'length' in new.keys() and 'difficulty' in new.keys(
        ) and 'questName' in new.keys() and 'index' in new.keys()
        if bool2:
            all_quests.append(new)
    # if len(all_quests) > 4:
    #     break
print(all_quests)

with open('getQuestData.json', 'w') as outfile:
    json.dump(all_quests, outfile)
