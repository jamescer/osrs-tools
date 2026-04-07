import { Item } from '../Item';

const ankouMaskData = {
  id: 20095,
  name: "Ankou mask",
  iconUrl: "/assets/items/ankou-mask.png",
  examine: "This mask will make your flesh transparent.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ankou_mask",
};

export const AnkouMask = Item.fromJson(ankouMaskData);
