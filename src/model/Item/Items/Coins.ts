import { Item } from '../Item';

export const coins2 = {
    id: 995,
    name: 'Coins',
    members: false,
    tradeable: true,
    stackable: true,
    noted: false,
    value: 1,
    examine: 'Lovely money!',
};

export const Coins =  Item.fromJson(coins2);
