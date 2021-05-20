import requests
from bs4 import BeautifulSoup
import json
import urllib
import sys

# 147 quests in total
CURRENT_QUEST_AMOUNT = 147


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

# for all tables (tr) rows on page
for i in rows:
    td = i.find_all('td')
    new = {}

    # if the table rows meet the qualifitcations for a quest
    if td:
        try:
            add_quest = True
            if len(td) > 0:
                indexStr = td[0].findAll(text=True)
                indexStr = indexStr[0].replace('\n', '')
                new['index'] = int(indexStr)

            if len(td) > 1:
                questNameStr = td[1].findAll(text=True)
                questNameStr = questNameStr[0].replace('\n', '')
                new['questName'] = questNameStr

            if len(td) > 2:
                diffStr = td[2].findAll(text=True)
                diffStr = diffStr[0].replace('\n', '')
                new['difficulty'] = diffStr

            if len(td) > 3:
                lengthStr = td[3].findAll(text=True)
                lengthStr = lengthStr[0].replace('\n', '')
                new['length'] = lengthStr
            if len(td) > 4:
                questPointsStr = td[4].findAll(text=True)
                questPointsStr = questPointsStr[0].replace('\n', '')
                new['questPoints'] = questPointsStr
            if len(td) > 5:
                seriesStr = td[5].findAll(text=True)
                seriesStr = seriesStr[0].replace('\n', '')
                new['series'] = seriesStr
        except ValueError:
            # print('something went wrong', ValueError)
            add_quest = False

        lengthCheck = 'length' in new.keys()
        quest_has_all_keys = lengthCheck and 'difficulty' in new.keys(
        ) and 'questName' in new.keys() and 'index' in new.keys(
        ) and 'series' in new.keys()

        # if the quest did not have any parsing errors and has all the keys to
        # be a quest [1-5], add to array of quests we need to look at
        if add_quest and quest_has_all_keys:
            all_quests.append(new)
    # if len(all_quests) > 4:
    #     break
print(len(all_quests))


# if we currently have all the quests, write this array to the json
if CURRENT_QUEST_AMOUNT == len(all_quests):
    with open('./tools/getQuestData.json', 'w') as outfile:
        json.dump(all_quests, outfile)


BASE_QUEST_URL = "https://oldschool.runescape.wiki/w/"


def get_quest_url(x):
    return urllib.parse.urlencode({'': i['questName']}).replace('+', '_')[1:]


def parse_req_str(requirementString):

    requirementObject = {}

    quests = []
    x_arr = requirementString.split(' ')
    # TODO
    # determine if quest or skill
    if '(boostable)' in x_arr:
        # if its boostable its definitely a skill
        if type(int(x_arr[1])) == int and len(x_arr) >= 3:
            requirementObject = {'type': 'skill', 'level': int(
                x_arr[1]), 'skill': x_arr[2].lower(), 'boostable': 'boost' in x_arr[3]}
        if 'quest points' in requirementString or 'Quest points' in requirementString:
            # if its boostable its definitely a skill
            if type(int(x_arr[1])) == int and len(x_arr) >= 3:
                requirementObject = {'type': 'skill', 'level': int(x_arr[1]),
                                     'skill': x_arr[2].lower(
                ), 'boostable': 'boost' in x_arr[3]}
        if 'Completion of the following quests:' in requirementString:
            print('x', requirementString)
            questSplit = requirementString.split('\n')
            requirementObject = {'type': 'quest', 'level': int(x_arr[1]),
                                 'skill': x_arr[2].lower(
            ), 'boostable': 'boost' in x_arr[3]}
            print('questSplit', questSplit)
            for i in questSplit:
                quests.append(i)
            print(quests)

        try:
            pass
        except ValueError:
            print('error on', x)
        # print([skill, x])
        return requirementObject


quest_detail_array = []
error_on = []
counter_stop_test = 0
for i in all_quests:
    # for each quests we determine we need to look at,
    # scrape its page for the data for the quest
    name = get_quest_url(i['questName'])
    if i['questName'] == 'Legends\' Quest':  # or True
        try:
            cur_quest_url = BASE_QUEST_URL + name
            page = requests.get(cur_quest_url)
            soup = BeautifulSoup(page.content, 'html.parser')

            quest_details = soup.find_all("th", class_="questdetails-header")
            index = 0
            quest_to_add = {'questName': i['questName'], 'url': cur_quest_url}
            # print(len(quest_details))

            # 1-9
            # Start point
            # Official
            # Description
            # Official length
            # Requirements
            # Items required
            # Recommended
            # Enemies to defeat
            # Ironman concerns
            for i in range(len(quest_details)):

                # first th is always the label of what data is coming

                section = quest_details[i].text.lower()
                print(section)
                detail_row = quest_details[i].parent.find_all(
                    "td", class_="questdetails-info")

                # Start point
                if section == 'start point' or section == 'startpoint' \
                        or section == 'start_point' or section in 'start point':

                    start_area_text = ''
                    for tag in detail_row:
                        start_area_text += tag.text

                    quest_to_add['startArea'] = start_area_text

                # Official difficulty
                if section == 'official difficulty' or section == 'officialdifficulty' or section == 'difficulty' \
                        or section == 'official_difficulty' \
                        or section in 'official difficulty':

                    difficulty_text = ''
                    for tag in detail_row:
                        difficulty_text += tag.text

                    quest_to_add['difficulty'] = difficulty_text
                if section == 'description' or section == 'descri' or section in 'description':

                    description_text = ''
                    for tag in detail_row:
                        description_text += tag.text

                    quest_to_add['description'] = description_text

                    # official length
                if section == 'official length' or section == 'officiallength' or section == 'official_length' or section in 'official length':
                    length_text = ''
                    for tag in detail_row:
                        length_text += tag.text

                    quest_to_add['length'] = length_text

                #   Requirements
                if section == 'requirements' or section == 'requirements' or section == 'req' or section in 'requirements':
                    reqs = []
                    for tag in detail_row:
                        tag = tag.find_all('ul')
                        for x in tag:
                            for item in x.find_all('li'):
                                parse_req_str(item.text)
                                reqs.append(item.text)

                    quest_to_add['requirements'] = reqs

                    # Items required
                if section == 'items required' or section == 'itemsrequired'\
                        or section == 'items_required' or section in 'items required':
                    items_required = []
                    for tag in detail_row:
                        tag = tag.find_all('ul')
                        for x in tag:
                            for item in x.find_all('li'):
                                items_required.append(item.text)

                    quest_to_add['itemsRequired'] = items_required

                    # Recommended
                if section == 'recommended' or section == 'recommended' \
                        or section == 'reco' or section in 'recommended':
                    recommended_list = []
                    for monster in detail_row:
                        ul_els = monster.find_all('ul')
                        if len(ul_els) > 0:
                            for x in ul_els:
                                for item in x.find_all('li'):
                                    recommended_list.append(item.text)
                        else:
                            recommended_list.append(monster.text)

                    quest_to_add['recommended'] = recommended_list

                    # Enemies to defeat
                if section == 'enemies to defeat' or section == 'enemiestodefeat'\
                        or section == 'enemies' or section in 'enemies to defeat':
                    enemies_to_defeat = []
                    for monster in detail_row:
                        monster = monster.find_all('ul')
                        for x in monster:
                            for item in x.find_all('li'):
                                enemies_to_defeat.append(item.text)

                    quest_to_add['enemiesToDefeat'] = enemies_to_defeat
                if section == 'ironman concerns' or section == 'ironmanconcerns' \
                    or section == 'ironman_concerns' \
                        or section == 'ironman ' or section in 'ironman concerns':
                    enemies_to_defeat = []
                    for monster in detail_row:
                        monster = monster.find_all('ul')
                        for x in monster:
                            for item in x.find_all('li'):
                                enemies_to_defeat.append(item.text)

                    quest_to_add['enemiesToDefeat'] = enemies_to_defeat

                index += 1
            quest_detail_array.append(quest_to_add)

            # catch *all* exceptions
        except:
            e = sys.exc_info()[0]
            print("<p>Error: %s</p>" % e)
            error_on.append(i['questName'])

    # counter_stop_test += 1
    # if counter_stop_test == 34:
    #     break

# print(quest_detail_array)
with open('./tools/questDetailArr.json', 'w') as outfile:
    json.dump(quest_detail_array, outfile)
with open('./tools/errors.json', 'w') as outfile:
    json.dump(error_on, outfile)
