import { Item } from '../Item';

const adamantPlatebodyGData = {
    examine: "Adamant platebody with gold trim.",
    value: 16640,
    highAlch: 9984,
    lowAlch: 6656,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_platebody_(g)",
    id: 2607,
    name: "Adamant platebody (g)",
    iconUrl: "/assets/items/2607.png"
  }

export const AdamantPlatebodyG = Item.fromJson(adamantPlatebodyGData);
