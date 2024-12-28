import requests
from bs4 import BeautifulSoup
import json
import urllib
import sys

# 156 quests in total
CURRENT_QUEST_AMOUNT = 156
TOTAL_QUEST_POINTS = 293
BASE_QUEST_URL = "https://oldschool.runescape.wiki/w/"
QUEST_LIST_URL = 'https://oldschool.runescape.wiki/w/Quests/List'

# Create Python Script that gets all the quests currently.
# We have to create a list of quests to get the requirements for
# We have to then get the requirements and rewards for each quest
# Create json files off of this.

# Issues will definitely come with the scraping of each quest.
# Each quest html will most likely be different.
# This is a work in progress

# TODO - Recipe for Disaster quest most likely needs some hard-coded stuff

# Update the quest data based on the row of details we are in



# Determines if a skill name is in the string param
def isSkillInString(text):
    for skill in SKILL_NAMES:
        if skill in text or skill.lower() in text or skill.upper() in text:
            return True
    return False


def createListFromDetails(details, arr):
    return arr


def updateQuestDataByRow(quest_data, row):
    sections = row.find_all("th", {"class": "questdetails-header"})
    details = row.find_all("td", {"class": "questdetails-info"})
    quest_details = None
    section_name = None
    if len(sections) > 0:
        section_name = sections[0].text.lower()

    if len(details) > 0:
        quest_details = details[0]

    if section_name in ['start point', 'startpoint', 'start_point', 'starting point', ]:
        start_area_text = ''
        for tag in quest_details:
            start_area_text += tag.text.lstrip()
        quest_data['start_area'] = start_area_text

    elif section_name in ['official difficulty', 'officialdifficulty', 'official_difficulty', 'difficulty']:

        difficulty_text = ''
        for tag in quest_details:
            difficulty_text += tag.text

        quest_to_add['difficulty'] = difficulty_text
    elif section_name in ['descri', 'description']:
        description_text = ''
        for tag in quest_details:
            description_text += tag.text

        quest_data['description'] = description_text

    elif section_name in ['official length', 'officiallength', 'officiallength', 'official_length']:
        length_text = ''
        for tag in quest_details:
            length_text += tag.text
        quest_data['length'] = length_text
    elif section_name in ['requirements', 'req']:
        reqs = []
        # TODO - implement this
        levels_and_quests = quest_details.find_all('ul')
        skills_needed = []
        if len(levels_and_quests) > 0:
            for levelOrQuest in levels_and_quests:
                if levelOrQuest.text is not None and isSkillInString(levelOrQuest.text):
                    req_items = levelOrQuest.text.split('\n')
                    for any_requirement in req_items:
                        skills_needed.append("any: "+any_requirement)

                elif 'not boostable' in levelOrQuest.text or 'boostable' in levelOrQuest.text:
                    req_items = levelOrQuest.text.split('\n')
                    for any_requirement in req_items:
                        skills_needed.append("any: "+any_requirement)

                elif len(levelOrQuest.text.split('\n')) > 0:
                    req_items = levelOrQuest.text.split('\n')
                    for any_requirement in req_items:
                        reqs.append("any: "+any_requirement)
                elif levelOrQuest.text is not None and 'quest points' in levelOrQuest.text.lower():
                    # get quest point requyirement
                    points = levelOrQuest.text.lower().split('quest points')
                    reqs.append({"questPoints": int(points[0])})
                elif 'Completion of the following quests:' in levelOrQuest.text:
                    # parse for other quests
                    some_list = levelOrQuest.find_all("li")
                    for any_requirement in some_list:
                        reqs.append(
                            {'type': 'quest', 'name': any_requirement.text})
            # levels_and_quests = levels_and_quests[0]
            # levels_list = levels_and_quests.find_all("li", {"class": "scp"})
            # for lev in levels_list:
            #     parse_req_str(lev.text)
            #     reqs.append(item.text)
        quest_data['requirements'] = reqs

    elif section_name in ['items required', 'itemsrequired', 'items_required', 'items required']:
        items_required = []

        item_list = quest_details.find_all("ul")
        if len(item_list) > 0:
            items = item_list[0].find_all("li")
            for item in items:
                items_required.append(item.text)

        quest_data['items_required'] = items_required

    elif section_name in ['enemies to defeat', 'enemiestodefeat', 'enemies']:
        enemies_to_defeat = []
        monsters = quest_details.find_all('ul')
        if len(monsters) > 0:
            monster_list = monsters[0].find_all('li')
            for monster in monster_list:
                enemies_to_defeat.append(monster.text)
        elif len(quest_details.text) > 0:
            if 'None' in quest_details.text:
                enemies_to_defeat.append('None')
            else:
                enemies_to_defeat.append(quest_details.text)

        quest_data['enemies_to_defeat'] = enemies_to_defeat
    elif section_name in ['recommended', 'reco', 'reccommended']:
        quest_data['recommended'] = section_name
        recommended_list = []
        recommended_items = quest_details.find_all("ul")
        if len(recommended_items) > 0:
            reco_list = recommended_items[0].find_all("li")
            for reco_list_item in reco_list:
                if len(reco_list_item.text.split('\n')) > 0:
                    reco_slots = reco_list_item.text.split('\n')
                    for reco1 in reco_slots:
                        recommended_list.append(reco1)
                else:
                    recommended_list.append(reco_list_item.text)
        quest_data['recommended'] = recommended_list

    elif section_name in ['ironman concerns', 'ironmanconcerns', 'ironman_concerns']:
        concerns = []
        quest_concerns = quest_details.find_all('ul')
        if len(quest_concerns) > 0:
            concern_list = quest_concerns[0].find_all('li')
            for concern in concern_list:
                concerns.append(concern.text)
        quest_data['ironman_concerns'] = concerns

    name = row
    quest = quest_data
    return quest_data


#  Creates an array given the quest table from the wiki url
def createArrayFromTable(table, isminiquest):
    # for all tables (tr) rows on page
    rowNum = 0
    table_body = table.find('tbody')
    rows = table_body.find_all('tr')
    quests = []
    for row in rows:
        td = row.find_all('td')
        cols = row.find_all('td')
        cols = [ele.text.strip() for ele in cols]
        new_quest = {}
    # ['148', 'Below Ice Mountain', 'Novice', 'Short', '1', 'N/A', '14 April 2021']
        if len(cols) > 0:
            if isminiquest:
                if cols[0] is not None:
                    new_quest['quest_name'] = cols[0]
                if cols[1] is not None:
                    new_quest['difficulty'] = cols[1]

                if cols[2] is not None:
                    new_quest['quest_length'] = cols[2]

                if cols[3] is not None:
                    new_quest['series'] = cols[3]

                if cols[4] is not None:
                    new_quest['release_date'] = cols[4]

            elif not isminiquest:
                if cols[0] is not None:
                    new_quest['index'] = cols[0]
                if cols[1] is not None:
                    new_quest['quest_name'] = cols[1]

                if cols[2] is not None:
                    new_quest['difficulty'] = cols[2]

                if cols[3] is not None:
                    new_quest['quest_length'] = cols[3]

                if cols[4] is not None:
                    new_quest['quest_points'] = cols[4]

                if cols[5] is not None:
                    new_quest['series'] = cols[5]

                if cols[6] is not None:
                    new_quest['release_date'] = cols[6]
            quests.append(new_quest)

        rowNum += 1

    return quests



# Main method -- Call Wiki quest url, parse the page for the quest list, then parse each quest individually through their own URLs

page = requests.get(QUEST_LIST_URL)

soup = BeautifulSoup(page.content, 'html.parser')

tables = soup.find_all("table", {"class": "wikitable"})
free_to_play_quests_table = tables[1]  # free_to_play_quests table
members_quests_table = tables[3]  # members_quests table
mini_quests_table = tables[4]  # mini_quests table

free_to_play_quests = createArrayFromTable(free_to_play_quests_table, False)
members_quests = createArrayFromTable(members_quests_table, False)
mini_quests = createArrayFromTable(mini_quests_table, True)

print('Total free_to_play_quests: '+str(len(free_to_play_quests)))
print('Total members_quests: '+str(len(members_quests)))
print('Total mini_quests: '+str(len(mini_quests)))
all_quests = free_to_play_quests + members_quests


# if we currently have all the quests, write this array to the json
with open('./tools/getQuestData.json', 'w') as outfile:
    json.dump(all_quests, outfile)


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
        if 'quest points' in requirementString.lower() or 'questpoints' in requirementString.lower():
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

test_quest = ''  # "Heroes' Quest"
if test_quest != '':
    name = urllib.parse.urlencode({'': test_quest}).replace('+', '_')[1:]
    BASE_QUEST_URL = "https://oldschool.runescape.wiki/w/"
    # try:
    cur_quest_url = BASE_QUEST_URL + name
    page = requests.get(cur_quest_url)
    soup = BeautifulSoup(page.content, 'html.parser')

    quest_detail_tables = soup.find_all("table", {"class": "questdetails"})
    if len(quest_detail_tables) > 0:
        quest_detail_table = quest_detail_tables[0]
        quest_detail_table_body = quest_detail_table.find('tbody')
        quest_details_rows = quest_detail_table_body.find_all('tr')

        index = 0
        quest_to_add = {
            'quest_name': test_quest, 'url': cur_quest_url}

        # new quest to add
        new_quest_details = {'url': cur_quest_url,
                             'quest_name': test_quest}
        for row in quest_details_rows:
            updateQuestDataByRow(new_quest_details, row)
        quest_detail_array.append(new_quest_details)

for i in all_quests:
    # for each quests we determine we need to look at,
    # scrape its page for the data for the quest
    name = urllib.parse.urlencode({'': i['quest_name']}).replace('+', '_')[1:]

    # Lets avoid the speedrun quests for now
    if 'Speedrun' in i['quest_name']:
        print('Skipping, '+i['quest_name'])
        continue
    else:
        print('Parsing, '+i['quest_name'])

    try:
        cur_quest_url = BASE_QUEST_URL + name
        page = requests.get(cur_quest_url)
        soup = BeautifulSoup(page.content, 'html.parser')

        quest_detail_tables = soup.find_all("table", {"class": "questdetails"})
        if len(quest_detail_tables) > 0:
            quest_detail_table = quest_detail_tables[0]
            quest_detail_table_body = quest_detail_table.find('tbody')
            quest_details_rows = quest_detail_table_body.find_all('tr')

            index = 0
            quest_to_add = {
                'quest_name': i['quest_name'], 'url': cur_quest_url}

            # new quest to add
            new_quest_details = {'url': cur_quest_url,
                                'quest_name': i['quest_name']}
            for row in quest_details_rows:
                updateQuestDataByRow(new_quest_details, row)
            quest_detail_array.append(new_quest_details)

            # catch *all* exceptions
    except:
        e = sys.exc_info()
        print("<p>Error: %s</p>" % e[0])
        print(i['quest_name'])
        error_on.append(i['quest_name'])

    # counter_stop_test += 1
    # if counter_stop_test == 34:
    #     break

# print(quest_detail_array)
with open('./tools/questDetailArr.json', 'w') as outfile:
    json.dump(quest_detail_array, outfile)

# Dump any errors found during parse
with open('./tools/errors.json', 'w') as outfile:
    json.dump(error_on, outfile)

