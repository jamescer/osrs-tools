
from quest_checker import QuestChecker


def test_qc():
    qc = QuestChecker('jimbo jango', 300)
    print(qc.meets_requirements('Regicide'))
    print(qc.get_requirements('One Small Favour'))
    doable = qc.get_doable_quests()
    print(doable)


test_qc()
