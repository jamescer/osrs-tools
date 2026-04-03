import { Item, ItemJson } from '../Item';

const rewardCasketMasterData: ItemJson = {
  id: 13266,
  name: 'Reward casket (master)',
  iconUrl: '/assets/items/reward-casket-master.png',
  examine: 'Cross your fingers and your toes.',
  value: 50,
  highAlch: 30,
  lowAlch: 20,
  weight: 0,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: '2019-08-01',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Reward_casket_(master)',
};

export const RewardCasketMaster = Item.fromJson(rewardCasketMasterData);
