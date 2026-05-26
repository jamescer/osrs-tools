import { Item } from '../Item';

const runePlateskirtData = {
    examine: "Designer leg protection.",
    value: 64000,
    highAlch: 38400,
    lowAlch: 25600,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_plateskirt",
    id: 1093,
    name: "Rune plateskirt",
    iconUrl: "/assets/items/1093.png"
  }

export const RunePlateskirt = Item.fromJson(runePlateskirtData);
