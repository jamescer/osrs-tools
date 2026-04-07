import { Item } from '../Item';

const arceuusHoodData = {
  id: 20113,
  name: "Arceuus hood",
  iconUrl: "/assets/items/arceuus-hood.png",
  examine: "A rare hood from Arceuus.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Arceuus_hood",
};

export const ArceuusHood = Item.fromJson(arceuusHoodData);
