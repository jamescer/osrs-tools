import { Item } from '../Item';

const steelPlateskirtData = {
    examine: "Designer leg protection.",
    value: 1000,
    highAlch: 600,
    lowAlch: 400,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Steel_plateskirt",
    id: 1083,
    name: "Steel plateskirt",
    iconUrl: "/assets/items/1083.png"
  }

export const SteelPlateskirt = Item.fromJson(steelPlateskirtData);
