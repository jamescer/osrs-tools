import { Item } from '../Item';

const zamorakRobeTopData = {
    examine: "Zamorak Vestments.",
    value: 7000,
    highAlch: 4200,
    lowAlch: 2800,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_robe_top",
    id: 10460,
    name: "Zamorak robe top",
    iconUrl: "/assets/items/10460.png"
  }

export const ZamorakRobeTop = Item.fromJson(zamorakRobeTopData);
