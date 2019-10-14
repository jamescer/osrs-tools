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
Output Key
Green = Doable
Blue = boostable
Red = unboostable and not doable
"""


class QuestChecker(object):
    account = 0
    quest_points = 0
    combat_level = 0
    quest_data = {}

    def __init__(self, *args):
        data_file = "./quest_data.json"

        with open(data_file) as json_file:
            self.quest_data = json.load(json_file)

        if len(args) > 0:
            self.account = Hiscores(args[0])
            self.combat_level = self.get_cb_lvl(self.account)
            if len(args) > 1:
                self.quest_points = args[1]
            else:
                self.quest_points = 275
        else:
            self.account = Hiscores('jimbo jango')

    def get_doable_quests(self):
        '''
        Checks each quest to see if you are able to do it.
        '''
        for i in self.quest_data:
            self.has_levels_for_quest(i)

    def get_levels_for_quest(self, quest_name):
        '''
        Returns a dictionary with skills that are required for completing the quest.
        '''

        cur_quest = self.quest_data[quest_name]
        
        has_all_level_reqs = True

        quest_incomplete_dict = {}
        if len(cur_quest['requirements']['levels']) >= 1:
            for i in cur_quest['requirements']['levels']:

                temp_dict = {}

                if i['skill'] == 'quest':
                    temp_dict.update({i['skill']: i['level'], "quest":
                                      self.quest_points})

                elif i['skill'] == 'combat':
                    temp_dict.update({i['skill']: i['level'], "combat":
                                      self.quest_points})
                else:
                    temp_dict.update({i['skill']: i['level']})

                quest_incomplete_dict.update(temp_dict)

        return quest_incomplete_dict

    def has_levels_for_quest(self, quest_name):
        '''
        Checks the requirements for the quest and if it's
        '''
        cur_quest = self.quest_data[quest_name]
       
        has_all_level_reqs = True
        boost = False
        if len(cur_quest['requirements']['levels']) >= 1:
            for i in cur_quest['requirements']['levels']:

                if i['skill'] == 'quest':
                    if self.quest_points >= i['level']:
                        pass
                    else:
                        has_all_level_reqs = False

                elif i['skill'] == 'combat':
                    if self.combat_level >= i['level']:
                        pass
                    else:
                        has_all_level_reqs = False

                elif self.account.skills[i['skill']].level >= i['level']:
                    pass
                elif (self.account.skills[i['skill']].level - i['level'] <= 5) and i['boostable'] == True:
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
            print(self.get_levels_for_quest(quest_name))
        return has_all_level_reqs

    def get_cb_lvl(self, acc):
        x = [0.325*(acc.skills['attack'].level + acc.skills['strength'].level), 0.325 *
             (int(3 * acc.skills['ranged'].level / 2)), 0.325*(int(3 * acc.skills['magic'].level / 2))]
        x.sort()

        return int(0.25 * (acc.skills['defence'].level +
                           acc.skills['hitpoints'].level + (acc.skills['prayer'].level/2)) + x[-1])
