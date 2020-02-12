
from QuestTool import QuestTool
from skill import Skill
from hiscores import Hiscores
import const
a = Skill('attack')
top = Hiscores('Lelalt', const.AccountType.IRONMAN)
print(str(top))


def test_qc():
    qc = QuestTool('jimbo jango', 300)
    print(qc.meetsRequirements('Regicide'))
    print(qc.getRequirements('One Small Favour'))
    doable = qc.getDoableQuests()
    print(doable)


test_qc()
