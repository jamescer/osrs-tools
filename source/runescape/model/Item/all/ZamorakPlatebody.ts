import { Item } from '../Item';

const zamorakPlatebodyData = {
    examine: "Rune platebody in the colours of Zamorak.",
    value: 65000,
    highAlch: 39000,
    lowAlch: 26000,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_platebody",
    id: 2653,
    name: "Zamorak platebody",
    iconUrl: "/assets/items/2653.png"
  }

export const ZamorakPlatebody = Item.fromJson(zamorakPlatebodyData);
