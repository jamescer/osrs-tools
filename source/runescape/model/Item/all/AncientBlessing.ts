import { Item } from '../Item';

const ancientBlessingData = {
  id: 20235,
  name: "Ancient blessing",
  iconUrl: "/assets/items/ancient-blessing.png",
  examine: "The misery that is now upon us is but the passing of greed, the bitterness of those who fear the way of progress.",
  value: 80,
  highAlch: 48,
  lowAlch: 32,
  weight: 0.51,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Equip",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_blessing",
};

export const AncientBlessing = Item.fromJson(ancientBlessingData);
