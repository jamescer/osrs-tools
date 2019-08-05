import json
import priceinfo
import pricetrend
from item import Item
from hiscores import Hiscores
import grandexchange
from colorama import init, Fore, Back, Style
init(autoreset=True)

"""
CONSTANTS
"""
ACCOUNT = 'jimbo jango'
QUEST_POINTS = 80
COMBAT_LEVEL = 47
account = Hiscores(ACCOUNT)
account.quest_points = QUEST_POINTS
account.combat = COMBAT_LEVEL
data_file = "quest_data.json"

quest_data = {}
with open(data_file) as json_file:
    quest_data = json.load(json_file)


def get_doable_quests():

    for i in quest_data:
        has_levels_for_quest(i['name'])


def get_levels_for_quest(quest_name):
    cur_quest = next(
        (item for item in quest_data if item['name'] == quest_name), None)
    # print(cur_quest)
    has_all_level_reqs = True

    quest_incomplete_dict = {}
    if len(cur_quest['requirements']['levels']) >= 1:
        for i in cur_quest['requirements']['levels']:

            temp_dict = {}

            if i['skill'] == 'quest':
                if account.quest_points < i['level']:
                    temp_dict.update({i['skill']: i['level'], "Current QPC:":
                                      account.quest_points})
                    has_all_level_reqs == False

            elif i['skill'] == 'combat':
                if account.combat < i['level']:
                    temp_dict.update(
                        {i['skill']: i['level'], "Current combat level:": account.combat})
                    has_all_level_reqs == False

            elif(account.skills[i['skill']].level < i['level']):
                temp_dict.update(
                    {i['skill']: i['level'], "Current level:": account.skills[i['skill']].level})
                has_all_level_reqs == False

            quest_incomplete_dict.update(temp_dict)

    return quest_incomplete_dict


def has_levels_for_quest(quest_name):

    cur_quest = next(
        (item for item in quest_data if item['name'] == quest_name), None)
    # print(cur_quest)
    has_all_level_reqs = True
    boost = False
    if len(cur_quest['requirements']['levels']) >= 1:
        for i in cur_quest['requirements']['levels']:

            if i['skill'] == 'quest':
                if account.quest_points >= i['level']:
                    pass
                else:
                    has_all_level_reqs = False

            elif i['skill'] == 'combat':
                if account.combat >= i['level']:
                    pass
                else:
                    has_all_level_reqs = False

            elif account.skills[i['skill']].level >= i['level']:
                pass
            elif (account.skills[i['skill']].level - i['level'] <= 5) and i['boostable'] == True:
                boost = True
                pass
            else:
                # print(account.skills[i['skill']].level, " < ", i['level'])
                has_all_level_reqs = False

    if has_all_level_reqs == True and boost == True:
        print(Fore.BLUE + quest_name)
    elif has_all_level_reqs == True:
        print(Fore.GREEN + quest_name)
    elif has_all_level_reqs == False:
        print(Fore.RED + quest_name)
        print(get_levels_for_quest(quest_name))
    return has_all_level_reqs



# for i in quest_data:
#     print(i['requirements'])

# n = input()

# Custom quest approved for strings of quest names
# has_levels_for_quest('Biohazard')
# has_levels_for_quest('Underground Pass')
has_levels_for_quest('Regicide')

# has_levels_for_quest(quest_data[0][n])

# Gets all doable quests based on the account data that was input
# get_doable_quests(account)


# print(account.skills['attack'].level)


# print(account)/
# for i in account.skills:
#     print(i, account.skills[i])

whip_id = Item.get_ids('abyssal whip')
# print(whip_id.description)
# print(whip_id)
