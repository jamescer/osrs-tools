import { Item } from '../Item';

const royalGownBottomData = {
  id: 12395,
  name: "Royal gown bottom",
  iconUrl: "/assets/items/royal-gown-bottom.png",
  examine: "Feeling distinctly ornate.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 1.36,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Royal_gown_bottom",
};

export const RoyalGownBottom = Item.fromJson(royalGownBottomData);
