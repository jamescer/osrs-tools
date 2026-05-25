import { Item } from '../Item';

const adamantPlatebodyTData = {{
    examine: "Adamant platebody with trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_platebody_(t)",
    id: 2599,
    name: "Adamant platebody (t)",
    iconUrl: "/assets/items/2599.png"
  }

export const AdamantPlatebodyT = Item.fromJson(adamantPlatebodyTData);
