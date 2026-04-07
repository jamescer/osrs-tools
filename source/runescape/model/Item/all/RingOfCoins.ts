import { Item } from '../Item';

const ringOfCoinsData = {
  id: 20017,
  name: "Ring of coins",
  iconUrl: "/assets/items/ring-of-coins.png",
  examine: "A valuable ring.",
  value: 8000,
  highAlch: 4800,
  lowAlch: 3200,
  weight: 0.004,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ring_of_coins",
};

export const RingOfCoins = Item.fromJson(ringOfCoinsData);
