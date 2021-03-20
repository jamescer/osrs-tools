import { QuestTool } from './questTool.js';
// var assert = require('assert');
// var expect = require("chai").expect;
var testAccount = {
    "_id": "5f1af258c416362fd4e9b65a",
    "name": "not poop",
    "mode": "main",
    "dead": false,
    "deulted": false,
    "deironed": false,
    "main": {
        "skills": {
            "overall": {
                "rank": 179656,
                "level": 1893,
                "xp": 105988501
            },
            "attack": {
                "rank": 213742,
                "level": 95,
                "xp": 9385163
            },
            "defence": {
                "rank": 338725,
                "level": 86,
                "xp": 3877148
            },
            "strength": {
                "rank": 180878,
                "level": 99,
                "xp": 13476150
            },
            "hitpoints": {
                "rank": 172190,
                "level": 99,
                "xp": 16984140
            },
            "ranged": {
                "rank": 213245,
                "level": 99,
                "xp": 13367172
            },
            "prayer": {
                "rank": 252924,
                "level": 77,
                "xp": 1488169
            },
            "magic": {
                "rank": 219431,
                "level": 96,
                "xp": 9714676
            },
            "cooking": {
                "rank": 230645,
                "level": 91,
                "xp": 6143403
            },
            "woodcutting": {
                "rank": 418476,
                "level": 75,
                "xp": 1313473
            },
            "fletching": {
                "rank": 252191,
                "level": 85,
                "xp": 3562432
            },
            "fishing": {
                "rank": 430094,
                "level": 75,
                "xp": 1287756
            },
            "firemaking": {
                "rank": 499242,
                "level": 73,
                "xp": 1020429
            },
            "crafting": {
                "rank": 333195,
                "level": 75,
                "xp": 1214938
            },
            "smithing": {
                "rank": 261594,
                "level": 75,
                "xp": 1211460
            },
            "mining": {
                "rank": 370972,
                "level": 72,
                "xp": 949445
            },
            "herblore": {
                "rank": 215242,
                "level": 78,
                "xp": 1671148
            },
            "agility": {
                "rank": 355886,
                "level": 72,
                "xp": 901183
            },
            "thieving": {
                "rank": 265861,
                "level": 73,
                "xp": 993158
            },
            "slayer": {
                "rank": 65400,
                "level": 98,
                "xp": 12265203
            },
            "farming": {
                "rank": 266035,
                "level": 80,
                "xp": 2023192
            },
            "runecraft": {
                "rank": 156525,
                "level": 71,
                "xp": 826516
            },
            "hunter": {
                "rank": 255046,
                "level": 74,
                "xp": 1096949
            },
            "construction": {
                "rank": 286059,
                "level": 75,
                "xp": 1215198
            }
        },
        "leaguePoints": {
            "rank": -1,
            "score": -1
        },
        "bountyHunter": {
            "rogue": {
                "rank": -1,
                "score": -1
            },
            "hunter": {
                "rank": -1,
                "score": -1
            }
        },
        "lastManStanding": {
            "rank": 89473,
            "score": 500
        },
        "clues": {
            "all": {
                "rank": 86709,
                "score": 274
            },
            "beginner": {
                "rank": 415595,
                "score": 2
            },
            "easy": {
                "rank": 111953,
                "score": 23
            },
            "medium": {
                "rank": 204094,
                "score": 25
            },
            "hard": {
                "rank": 42299,
                "score": 207
            },
            "elite": {
                "rank": 101874,
                "score": 15
            },
            "master": {
                "rank": 120012,
                "score": 2
            }
        },
        "bosses": {
            "abyssalSire": {
                "rank": -1,
                "score": -1
            },
            "alchemicalHydra": {
                "rank": 24810,
                "score": 794
            },
            "barrows": {
                "rank": -1,
                "score": -1
            },
            "bryophyta": {
                "rank": -1,
                "score": -1
            },
            "callisto": {
                "rank": -1,
                "score": -1
            },
            "cerberus": {
                "rank": -1,
                "score": -1
            },
            "chambersOfXeric": {
                "rank": -1,
                "score": -1
            },
            "chambersOfXericChallengeMode": {
                "rank": -1,
                "score": -1
            },
            "chaosElemental": {
                "rank": -1,
                "score": -1
            },
            "chaosFanatic": {
                "rank": -1,
                "score": -1
            },
            "commanderZilyana": {
                "rank": -1,
                "score": -1
            },
            "corporealBeast": {
                "rank": -1,
                "score": -1
            },
            "crazyArchaeologist": {
                "rank": -1,
                "score": -1
            },
            "dagannothPrime": {
                "rank": -1,
                "score": -1
            },
            "dagannothRex": {
                "rank": -1,
                "score": -1
            },
            "dagannothSupreme": {
                "rank": -1,
                "score": -1
            },
            "derangedArchaeologist": {
                "rank": -1,
                "score": -1
            },
            "generalGraardor": {
                "rank": 110079,
                "score": 96
            },
            "giantMole": {
                "rank": -1,
                "score": -1
            },
            "grotesqueGuardians": {
                "rank": -1,
                "score": -1
            },
            "hespori": {
                "rank": -1,
                "score": -1
            },
            "kalphiteQueen": {
                "rank": -1,
                "score": -1
            },
            "kingBlackDragon": {
                "rank": 145649,
                "score": 107
            },
            "kraken": {
                "rank": 17387,
                "score": 3205
            },
            "kreeArra": {
                "rank": -1,
                "score": -1
            },
            "krilTsutsaroth": {
                "rank": -1,
                "score": -1
            },
            "mimic": {
                "rank": -1,
                "score": -1
            },
            "nightmare": {
                "rank": -1,
                "score": -1
            },
            "obor": {
                "rank": -1,
                "score": -1
            },
            "sarachnis": {
                "rank": -1,
                "score": -1
            },
            "scorpia": {
                "rank": -1,
                "score": -1
            },
            "skotizo": {
                "rank": 17923,
                "score": 49
            },
            "gauntlet": {
                "rank": -1,
                "score": -1
            },
            "corruptedGauntlet": {
                "rank": -1,
                "score": -1
            },
            "theatreOfBlood": {
                "rank": -1,
                "score": -1
            },
            "thermonuclearSmokeDevil": {
                "rank": 92214,
                "score": 58
            },
            "tzKalZuk": {
                "rank": -1,
                "score": -1
            },
            "tzTokJad": {
                "rank": -1,
                "score": -1
            },
            "venenatis": {
                "rank": -1,
                "score": -1
            },
            "vetion": {
                "rank": -1,
                "score": -1
            },
            "vorkath": {
                "rank": 98843,
                "score": 290
            },
            "wintertodt": {
                "rank": 395651,
                "score": 55
            },
            "zalcano": {
                "rank": -1,
                "score": -1
            },
            "zulrah": {
                "rank": 155666,
                "score": 121
            }
        }
    },
    "nameLowercase": "not poop",
    "lastUpdated": 1595602146838
}
var tool = new QuestTool();

console.log(tool.setOsrsAccount(testAccount));

console.log(tool.canCompleteQuest('Regicide'));
console.log(tool.canCompleteQuest('Recipe for Disaster'));
// console.log(tool.getOsrsAccount().toString());
// for (var index in questTool.questArray()) {

//     console.log(questTool.questArray()[index]);

//     describe('Array', function () {
//         describe('#indexOf()', function () {
//             it('should be equal', function () {
//                 assert.actual(questTool.questArray()[index], questTool.questObject[index]);
//             });
//         });
//     });
// }
// console.log(questTool.canCompleteQuest(questTool.questObject()['Regicide'], testAccount));

// describe("Quest Tool Array vs Quest Tool Object", function () {
//     describe("Search for differences", function () {
//         it("These objects have the same value, different schemas.", function () {
//             var testArr = questTool.questArray();
//             var questObj = questTool.questObject();

//             expect(1 + 1).to.equal(2)

//             for (var index in testArr) {
//                 // console.log(testArr[index],index);


//                 expect(testArr[index]).to.deep.equal(questObj[testArr[index].name]);

//             }
//         });
//     });
// });
