import { Item, ItemJson } from '../Item';

const rewardCasketBeginnerData: ItemJson = {
  id: 13261,
  name: 'Reward casket (beginner)',
  iconUrl: '/assets/items/reward-casket-beginner.png',
  examine: 'Cross your fingers and your toes.',
  value: 50,
  highAlch: 30,
  lowAlch: 20,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2016-07-28',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Reward_casket_(beginner)',
};

export const RewardCasketBeginner = Item.fromJson(rewardCasketBeginnerData);
