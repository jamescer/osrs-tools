import { Item } from '../Item';

const darkTuxedoCuffsData = {
    examine: "Linked tuxedo cuffs with a dark trim.",
    value: 3000,
    highAlch: 1800,
    lowAlch: 1200,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_tuxedo_cuffs",
    id: 19961,
    name: "Dark tuxedo cuffs",
    iconUrl: "/assets/items/19961.png"
  }

export const DarkTuxedoCuffs = Item.fromJson(darkTuxedoCuffsData);
