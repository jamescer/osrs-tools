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

# Update the quest data based on the row of details we are in

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
            start_area_text += tag.text
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
       
        levels_and_quests = quest_details.find_all('ul')
        if len(levels_and_quests) > 0:
            levels_and_quests = levels_and_quests[0]
            levels_list = levels_and_quests.find_all("li", {"class": "scp"})
            for lev in levels_list:
                parse_req_str(lev.text)
                reqs.append(item.text)
        quest_data['requirements'] = reqs

    elif section_name in ['items required', 'itemsrequired', 'items_required', 'items required']:
        items_required = []

        items = quest_details.find_all("ul")
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
            enemies_to_defeat.append(quest_details.text)
        quest_data['enemies_to_defeat'] = enemies_to_defeat
    elif section_name in ['recommended', 'reco', 'reccommended']:
        quest_data['recommended'] = section_name
        recommended_list = []
        recommended_items = quest_details.find_all("ul")
        for item in recommended_items:
            recommended_list.append(item.text)
        quest_data['recommended'] = recommended_list

    elif section_name in ['ironman concerns', 'ironmanconcerns', 'ironman_concerns']:
        concerns = []
        quest_concerns = quest_details.find_all('ul')
        if len(quest_concerns) > 0:
            concern_list = quest_concerns[0].find_all('li');
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


quest_data_url = 'https://oldschool.runescape.wiki/w/Quests/List'
URL = quest_data_url
page = requests.get(URL)

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
for i in all_quests:
    # for each quests we determine we need to look at,
    # scrape its page for the data for the quest
    name = urllib.parse.urlencode({'': i['quest_name']}).replace('+', '_')[1:]

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
            'quest_name': i['quest_name'], 'url': cur_quest_url}

        # new quest to add
        new_quest_details = {'url': cur_quest_url}
        for row in quest_details_rows:
            updateQuestDataByRow(new_quest_details, row)
        quest_detail_array.append(new_quest_details)
        
        # catch *all* exceptions
    # except:
    #     e = sys.exc_info()
    #     print("<p>Error: %s</p>" % e[0])
    #     print(i['quest_name'])
    #     error_on.append(i['quest_name'])

    # counter_stop_test += 1
    # if counter_stop_test == 34:
    #     break

# print(quest_detail_array)
with open('./tools/questDetailArr.json', 'w') as outfile:
    json.dump(quest_detail_array, outfile)
with open('./tools/errors.json', 'w') as outfile:
    json.dump(error_on, outfile)













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
        # for i in range(len(quest_details)):

        #     # first th is always the label of what data is coming

        #     section = quest_details[i].text.lower()
        #     print(section)
        #     detail_row = quest_details[i].parent.find_all(
        #         "td", class_="questdetails-info")

        #     # Start point
        #     if section == 'start point' or section == 'startpoint' \
        #             or section == 'start_point' or section in 'start point':

        #         start_area_text = ''
        #         for tag in detail_row:
        #             start_area_text += tag.text

        #         quest_to_add['startArea'] = start_area_text

        #     # Official difficulty
        #     if section == 'official difficulty' or section == 'officialdifficulty' or section == 'difficulty' \
        #             or section == 'official_difficulty' \
        #             or section in 'official difficulty':

        #         difficulty_text = ''
        #         for tag in detail_row:
        #             difficulty_text += tag.text

        #         quest_to_add['difficulty'] = difficulty_text
        #     if section == 'description' or section == 'descri' or section in 'description':

        #         description_text = ''
        #         for tag in detail_row:
        #             description_text += tag.text

        #         quest_to_add['description'] = description_text

        #         # official length
        #     if section == 'official length' or section == 'officiallength' or section == 'official_length' or section in 'official length':
        #         length_text = ''
        #         for tag in detail_row:
        #             length_text += tag.text

        #         quest_to_add['length'] = length_text

        #     #   Requirements
        #     if section == 'requirements' or section == 'requirements' or section == 'req' or section in 'requirements':
        #         reqs = []
        #         for tag in detail_row:
        #             tag = tag.find_all('ul')
        #             for x in tag:
        #                 for item in x.find_all('li'):
        #                     parse_req_str(item.text)
        #                     reqs.append(item.text)

        #         quest_to_add['requirements'] = reqs

        #         # Items required
        #     if section == 'items required' or section == 'itemsrequired'\
        #             or section == 'items_required' or section in 'items required':
        #         items_required = []
        #         for tag in detail_row:
        #             tag = tag.find_all('ul')
        #             for x in tag:
        #                 for item in x.find_all('li'):
        #                     items_required.append(item.text)

        #         quest_to_add['itemsRequired'] = items_required

        #         # Recommended
        #     if section == 'recommended' or section == 'recommended' \
        #             or section == 'reco' or section in 'recommended':
        #         recommended_list = []
        #         for monster in detail_row:
        #             ul_els = monster.find_all('ul')
        #             if len(ul_els) > 0:
        #                 for x in ul_els:
        #                     for item in x.find_all('li'):
        #                         recommended_list.append(item.text)
        #             else:
        #                 recommended_list.append(monster.text)

        #         quest_to_add['recommended'] = recommended_list

        #         # Enemies to defeat
        #     if section == 'enemies to defeat' or section == 'enemiestodefeat'\
        #             or section == 'enemies' or section in 'enemies to defeat':
        #         enemies_to_defeat = []
        #         for monster in detail_row:
        #             monster = monster.find_all('ul')
        #             for x in monster:
        #                 for item in x.find_all('li'):
        #                     enemies_to_defeat.append(item.text)

        #         quest_to_add['enemiesToDefeat'] = enemies_to_defeat
        #     if section == 'ironman concerns' or section == 'ironmanconcerns' \
        #         or section == 'ironman_concerns' \
        #             or section == 'ironman ' or section in 'ironman concerns':
        #         enemies_to_defeat = []
        #         for monster in detail_row:
        #             monster = monster.find_all('ul')
        #             for x in monster:
        #                 for item in x.find_all('li'):
        #                     enemies_to_defeat.append(item.text)

        #         quest_to_add['enemiesToDefeat'] = enemies_to_defeat

        #     index += 1
        # quest_detail_array.append(quest_to_add)
