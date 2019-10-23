
from quest_checker import QuestChecker
qc = QuestChecker('jimbo jango', 300)

qc.meets_requirements('Regicide')
qc.get_requirements('One Small Favour')
doable = qc.get_doable_quests()
