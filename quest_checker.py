import sys
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
account = 0

data_file = "./quest_data.json"
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
                temp_dict.update({i['skill']: i['level'], "quest":
                                  account.quest_points})

            elif i['skill'] == 'combat':
                temp_dict.update({i['skill']: i['level'], "combat":
                                  account.quest_points})
            else:
                temp_dict.update({i['skill']: i['level']})

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


def get_cb_lvl(acc):
    x = [0.325*(acc.skills['attack'].level + acc.skills['strength'].level), 0.325 *
         (int(3 * acc.skills['ranged'].level / 2)), 0.325*(int(3 * acc.skills['magic'].level / 2))]
    x.sort()

    return int(0.25 * (acc.skills['defence'].level +
                       acc.skills['hitpoints'].level + (acc.skills['prayer'].level/2)) + x[-1])


def start(arr):
    ACCOUNT = arr[0].replace('_', ' ')
    QUEST_POINTS = 0
    if len(arr) > 1:
        QUEST_POINTS = arr[1]
    global account
    account = Hiscores(ACCOUNT)
    account.quest_points = QUEST_POINTS
    account.combat = get_cb_lvl(account)

if len(sys.argv)>1:
    start(sys.argv[1:])