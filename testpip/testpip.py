

from osrsquesttool import QuestTool

qc = QuestTool('jimbo jango', 300)
print(qc.meetsRequirements('Regicide'))
print(qc.getRequirements('One Small Favour'))
doable = qc.getDoableQuests()
print(doable)
