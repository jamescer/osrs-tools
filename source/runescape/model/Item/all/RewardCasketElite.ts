import { Item, ItemJson } from '../Item';

const rewardCasketEliteData: ItemJson = {
  id: 13265,
  name: 'Reward casket (elite)',
  iconUrl: '/assets/items/reward-casket-elite.png',
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
};

export const RewardCasketElite = Item.fromJson(rewardCasketEliteData);
