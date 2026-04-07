import { Item } from '../Item';

const shayzienBannerData = {
  id: 20263,
  name: "Shayzien banner",
  iconUrl: "/assets/items/shayzien-banner.png",
  examine: "A war torn banner bearing the Shayzien sigil.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Shayzien_banner",
};

export const ShayzienBanner = Item.fromJson(shayzienBannerData);
