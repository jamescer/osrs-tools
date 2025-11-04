import { OsrsAccount } from '../../../src/model/account/OsrsAccount';
import { account as accountData } from '../../resources/A_Squeezer_Main_Data';

describe('OsrsAccount', () => {
  let account: OsrsAccount;
  beforeEach(() => {
    account = OsrsAccount.fromJson(accountData);
  });

  it('should initialize with default values', () => {
    expect(account.name).toBe('A Squeezer');
    expect(account.skills).toBeDefined();
    expect(account.questPoints).toBeDefined();
    expect(account.combatLevel).toBeDefined();
    expect(account.skillsDetail).toBeDefined();
    expect(account.bosses).toBeDefined();
    expect(account.clues).toBeDefined();
    expect(account.bountyHunter).toBeDefined();
    expect(account.lastManStanding).toBeDefined();
    expect(account.pvpArena).toBeDefined();
    expect(account.soulWarsZeal).toBeDefined();
    expect(account.riftsClosed).toBeDefined();
    expect(account.colosseumGlory).toBeDefined();
    expect(account.collectionsLogged).toBeDefined();
    expect(account.leaguePoints).toBeDefined();
    expect(account.deadmanPoints).toBeDefined();
  });

  it('should get skill by name', () => {
    const skill = account.getSkill('attack');
    expect(skill).toBeDefined();
    expect(skill?.level).toBeDefined();
    expect(skill?.level).toBe(99);
  });

  it('should get skill detail by name', () => {
    const skillDetail = account.getSkillDetail('attack');
    expect(skillDetail).toBeDefined();
    expect(skillDetail?.rank).toBeDefined();
    expect(skillDetail?.level).toBeDefined();
    expect(skillDetail?.xp).toBeDefined();
  });

  it('should get boss score by name', () => {
    const bossScore = account.getBossScore('zulrah');
    expect(bossScore).toBeDefined();
    expect(bossScore?.rank).toBeDefined();
    expect(bossScore?.score).toBeDefined();
  });

  it('should get clue score by type', () => {
    const clueScore = account.getClueScore('beginner');
    expect(clueScore).toBeDefined();
    expect(clueScore?.rank).toBeDefined();
    expect(clueScore?.score).toBeDefined();
  });

  it('should return correct string from toString()', () => {
    const str = account.toString();
    expect(str).toContain(account.name);
    expect(str).toContain(account.combatLevel.toString());
    expect(str).toContain(account.questPoints.toString());
  });

  it('should return correct data from toJson()', () => {
    const json = account.toJson();
    expect(json.name).toBe(account.name);
    expect(json.combatLevel).toBe(account.combatLevel);
    expect(json.questPoints).toBe(account.questPoints);
    expect(json.skills).toEqual(account.skills);
    expect(json.skillsDetail).toEqual(account.skillsDetail);
    expect(json.bosses).toEqual(account.bosses);
    expect(json.clues).toEqual(account.clues);
    expect(json.bountyHunter).toEqual(account.bountyHunter);
    expect(json.lastManStanding).toEqual(account.lastManStanding);
    expect(json.pvpArena).toEqual(account.pvpArena);
    expect(json.soulWarsZeal).toEqual(account.soulWarsZeal);
    expect(json.riftsClosed).toEqual(account.riftsClosed);
    expect(json.colosseumGlory).toEqual(account.colosseumGlory);
    expect(json.collectionsLogged).toEqual(account.collectionsLogged);
    expect(json.leaguePoints).toEqual(account.leaguePoints);
    expect(json.deadmanPoints).toEqual(account.deadmanPoints);
  });
});
