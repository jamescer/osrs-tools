import { Item } from '../Item';

const unholyBlessingData = {
  id: 20223,
  name: "Unholy blessing",
  iconUrl: "/assets/items/unholy-blessing.png",
  examine: "The Dark Lord will rise again with his servant's aid, greater and more terrible than ever he was.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Unholy_blessing",
};

export const UnholyBlessing = Item.fromJson(unholyBlessingData);
