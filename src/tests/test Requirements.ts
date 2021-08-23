import { SkillRequirement, QuestRequirement } from '../utils/Requirement';
function test() {
  var reqs = {
    quests: ['Big Chompy Bird Hunting', 'Jungle Potion'],
    skills: [
      {
        skill: 'smithing',
        level: 4,
        boostable: false,
      },
      {
        skill: 'herblore',
        level: 8,
        boostable: false,
      },
      {
        skill: 'ranged',
        level: 30,
        boostable: false,
      },
      {
        skill: 'fletching',
        level: 30,
        boostable: false,
      },
      {
        skill: 'strength',
        level: 10,
        boostable: false,
      },
      {
        skill: 'prayer',
        level: 43,
        boostable: false,
      },
    ],
  };

  var reqArr = [];

  if (reqs.skills) {
    console.log(2);
    for (var z = 0; z < reqs.skills.length; z++) {
      console.log(reqs.skills[z]);
      reqArr.push(new SkillRequirement(reqs.skills[z]));
    }
  }
  if (reqs.quests) {
    for (var uu = 0; uu < reqs.skills.length; uu++) {
      reqArr.push(new QuestRequirement(reqs.quests[uu]));
    }
  }
  console.log(reqArr);
}

test();
