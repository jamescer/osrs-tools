import { Item } from '../Item';

const runePlateskirtGData = {
    examine: "Rune plateskirt with gold trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_plateskirt_(g)",
    id: 3476,
    name: "Rune plateskirt (g)",
    iconUrl: "/assets/items/3476.png"
  }

export const RunePlateskirtG = Item.fromJson(runePlateskirtGData);
