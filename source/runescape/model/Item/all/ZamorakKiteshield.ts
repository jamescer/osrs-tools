import { Item } from '../Item';

const zamorakKiteshieldData = {
    examine: "Rune kiteshield in the colours of Zamorak.",
    value: 54400,
    highAlch: 32640,
    lowAlch: 21760,
    weight: 5.443,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-05-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_kiteshield",
    id: 2659,
    name: "Zamorak kiteshield",
    iconUrl: "/assets/items/2659.png"
  }

export const ZamorakKiteshield = Item.fromJson(zamorakKiteshieldData);
