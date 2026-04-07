import { Item } from '../Item';

const lovakengjBannerData = {
  id: 20257,
  name: "Lovakengj banner",
  iconUrl: "/assets/items/lovakengj-banner.png",
  examine: "A lovakite banner bearing the Lovakengj sigil.",
  value: 70,
  highAlch: 42,
  lowAlch: 28,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Lovakengj_banner",
};

export const LovakengjBanner = Item.fromJson(lovakengjBannerData);
