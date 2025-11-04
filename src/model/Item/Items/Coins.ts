import { Item } from '../Item';

export const coins2 = {
  examine: 'Lovely money!',
  id: 995,
  members: false,
  name: 'Coins',
  noted: false,
  stackable: true,
  tradeable: true,
  value: 1,
};

export const Coins = Item.fromJson(coins2);
