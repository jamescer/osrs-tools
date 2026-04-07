import { Item } from '../Item';

const bandosMitreData = {
  id: 12271,
  name: "Bandos mitre",
  iconUrl: "/assets/items/bandos-mitre.png",
  examine: "A Bandos mitre.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_mitre",
};

export const BandosMitre = Item.fromJson(bandosMitreData);
