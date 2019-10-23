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

        self.account = Hiscores(args[0]) if len(
            args) > 0 else Hiscores('jimbo jango')
        self.quest_points = args[1] if len(args) > 1 else 325
        self.combat_level = self.get_cb_lvl(self.account)

    def get_doable_quests(self):
        '''
        Checks each quest to see if you are able to do it.
        '''
        doable = {}
        for i in self.quest_data:
            if self.meets_requirements(i):
                doable.update({i: True})
        return doable

    def get_requirements(self, quest_name):
        '''
        Returns a dictionary with skills and quests with their respective requirements that are required for completing the quest passed in the argument.
        Returns a dictionary object relating to the quest.
        Recursively calls itself.
        '''

        cur_quest = self.quest_data[quest_name]

        has_all_level_reqs = True

        quest_incomplete_dict = {'skills': {},
                                 'quests': {}}
        if 'levels' in cur_quest['requirements']:
            for i in cur_quest['requirements']['levels']:

                temp_dict = {}

                if i['skill'] == 'quest':
                    temp_dict.update({i['skill']: i['level'], "quest":
                                      self.quest_points})

                elif i['skill'] == 'combat':
                    temp_dict.update({i['skill']: i['level'], "combat":
                                      self.combat_level})
                else:
                    temp_dict.update({i['skill']: i['level']})

                quest_incomplete_dict['skills'].update(temp_dict)

        if 'quests' in cur_quest['requirements']:
            for i in cur_quest['requirements']['quests']:

                temp_dict = {}
                other_quest = self.get_requirements(i)
                temp_dict.update({i: other_quest})
                quest_incomplete_dict['quests'].update(temp_dict)
        return quest_incomplete_dict

    def meets_requirements(self, quest_name):
        '''
        Checks the requirements for the quest and if it's
        '''
        cur_quest = self.quest_data[quest_name]

        has_all_level_reqs = True
        boost = False
        if "levels" in cur_quest['requirements']:
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

        if "quests" in cur_quest['requirements']:
            for i in cur_quest['requirements']['quests']:
                if self.meets_requirements(i) == False:
                    has_all_level_reqs = False

        # if has_all_level_reqs == True and boost == True:
        #     print(Fore.BLUE + quest_name)
        # elif has_all_level_reqs == True:
        #     print(Fore.GREEN + quest_name)
        # elif has_all_level_reqs == False:
        #     print(Fore.RED + quest_name)
        #     print(self.get_requirements(quest_name))
        return has_all_level_reqs

    def get_cb_lvl(self, acc):
        x = [0.325*(acc.skills['attack'].level + acc.skills['strength'].level), 0.325 *
             (int(3 * acc.skills['ranged'].level / 2)), 0.325*(int(3 * acc.skills['magic'].level / 2))]
        x.sort()

        return int(0.25 * (acc.skills['defence'].level +
                           acc.skills['hitpoints'].level + (acc.skills['prayer'].level/2)) + x[-1])

    def __str__(self):
        return 'from quest_checker import QuestChecker \n qc = QuestChecker(\'jimbo jango\', 300) \n qc.meets_requirements(\'Regicide\')'

    def __repr__(self):
        return super().__str__()
