import { Item } from '../Item';

const saradominMitreData = {
    examine: "A Saradomin mitre.",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.3,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_mitre",
    id: 10452,
    name: "Saradomin mitre",
    iconUrl: "/assets/items/10452.png"
  }

export const SaradominMitre = Item.fromJson(saradominMitreData);
