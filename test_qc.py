
from quest_checker import QuestChecker
from skill import Skill
from hiscores import Hiscores
import const
a = Skill('attack')
top = Hiscores('Lelalt', const.AccountType.IRONMAN)
print(str(top))


def test_qc():
    qc = QuestChecker('jimbo jango', 300)
    print(qc.meets_requirements('Regicide'))
    print(qc.get_requirements('One Small Favour'))
    doable = qc.get_doable_quests()
    print(doable)


test_qc()
