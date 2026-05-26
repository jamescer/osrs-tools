import { Item } from '../Item';

const runePlatelegsGData = {
    examine: "Rune platelegs with gold trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_platelegs_(g)",
    id: 2617,
    name: "Rune platelegs (g)",
    iconUrl: "/assets/items/2617.png"
  }

export const RunePlatelegsG = Item.fromJson(runePlatelegsGData);
