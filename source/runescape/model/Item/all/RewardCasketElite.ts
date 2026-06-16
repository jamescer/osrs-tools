import { Item, ItemJson } from '../Item';

const rewardCasketEliteData: ItemJson = {
  id: 13265,
  name: 'Reward casket (elite)',
  iconUrl: '/assets/items/13265.png',
  examine: 'Cross your fingers and your toes.',
  value: 50,
  highAlch: 30,
  lowAlch: 20,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2018-04-05',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Reward_casket_(elite)',
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  meleeStrength: 0,
  rangedStrength: 0,
  magicDamage: 0,
  prayer: 0
};

export const RewardCasketElite = Item.fromJson(rewardCasketEliteData);
