import { Item } from '../Item';

const zamorakBracersData = {{
    examine: "Zamorak blessed dragonhide vambraces.",
    value: 4000,
    highAlch: 2400,
    lowAlch: 1600,
    weight: 1,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_bracers",
    id: 10368,
    name: "Zamorak bracers",
    iconUrl: "/assets/items/10368.png"
  }

export const ZamorakBracers = Item.fromJson(zamorakBracersData);
