
import sys
import json
data_file = "./quest_data.json"

with open(data_file) as json_file:
    qd = json.load(json_file)

ag = [{"Name": "Recruitment Drive", "Amount": 1000}	,
      {"Name": "The Depths of Despair", "Amount": 1500	}	,
      {"Name": "The Fremennik Trials", "Amount": 2812	}	,
      {"Name": "Underground Pass", "Amount": 3000	}	,
      {"Name": "Icthlarin's Little Helper", "Amount":	4000}	,
      {"Name": "Cold War", "Amount": 5000	 	}	,
      {"Name": "Royal Trouble", "Amount": 5000	 	}	,
      {"Name": "Grim Tales", "Amount": 6000	 	}	,
      {"Name": "Cabin Fever", "Amount": 7000	 	}	,
      {"Name": "Darkness of Hallowvale", "Amount":	7000	 	}	,
      {"Name": "The Grand Tree", "Amount": 7900	 	}	,
      {"Name": "Troll Romance", "Amount": 8000	 	}	,
      {"Name": "Making Friends with My Arm", "Amount": 10000}	,
      #   {"Name": "Recipe for Disaster(Awowogei subquest)", "Amount": 10000	}	,
      {"Name": "Regicide", "Amount": 13750		}	,
      {"Name": "Dragon Slayer II", "Amount": 15000		}	,
      {"Name": "Mourning's End Part II", "Amount": 20000		}	,
      {"Name": "Monkey Madness II", "Amount": 20000}	,
      {"Name": "Song of the Elves", "Amount": 20000}]


attk = [
    {"Name": "Death Plateau", "Amount": 3000	},
    {"Name": "Fairytale I - Growing Pains", "Amount": 	2000	},
    {"Name": "Fight Arena", "Amount": 12175	},
    {"Name": "Heroes' Quest", "Amount": 3075	},
    {"Name": "In Aid of the Myreque", "Amount": 2000	},
    {"Name": "In Search of the Myreque", "Amount": 	600	},
    {"Name": "Mountain Daughter", "Amount": 	1000	},
    {"Name": "Tai Bwo Wannai Trio", "Amount": 2500	},
    {"Name": "The Fremennik Trials", "Amount": 2812	},
    {"Name": "The Grand Tree", "Amount": 18400},
    {"Name": "Tree Gnome Village", "Amount": 11450	},
    {"Name": "Underground Pass", "Amount": 	3000},
    {"Name": "Vampire Slayer", "Amount": 4825	},
    {"Name": "Waterfall Quest", "Amount": 13750},
]

for i in attk:

    temp = qd[i['Name']]
    print(temp)
    print(i)
    # temp.update({'Rewards': {'QuestPoints': temp['Rewards']['QuestPoints'], }})
    qd[i['Name']]['Rewards']['Experience'].append(
        {'attack': i['Amount']})


with open('quest_data2.json', 'w') as outfile:
    json.dump(qd, outfile)
