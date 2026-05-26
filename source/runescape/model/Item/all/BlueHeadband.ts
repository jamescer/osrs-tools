import { Item } from '../Item';

const blueHeadbandData = {
    examine: "A minimalist's hat.",
    value: 40,
    highAlch: 24,
    lowAlch: 16,
    weight: 0.04,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_headband",
    id: 12301,
    name: "Blue headband",
    iconUrl: "/assets/items/12301.png"
  }

export const BlueHeadband = Item.fromJson(blueHeadbandData);
