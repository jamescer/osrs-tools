import { Item } from '../Item';

const arceuusBannerData = {
  id: 20251,
  name: "Arceuus banner",
  iconUrl: "/assets/items/arceuus-banner.png",
  examine: "An ancient banner bearing the mark of the Arceuus Elders.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Arceuus_banner",
};

export const ArceuusBanner = Item.fromJson(arceuusBannerData);
