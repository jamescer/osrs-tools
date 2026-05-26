import { Item } from '../Item';

const zamorakFullHelmData = {
    examine: "Rune full helmet in the colours of Zamorak.",
    value: 35200,
    highAlch: 21120,
    lowAlch: 14080,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_full_helm",
    id: 2657,
    name: "Zamorak full helm",
    iconUrl: "/assets/items/2657.png"
  }

export const ZamorakFullHelm = Item.fromJson(zamorakFullHelmData);
