import { Item } from '../Item';

const runePlatelegsTData = {
    examine: "Rune platelegs with trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_platelegs_(t)",
    id: 2625,
    name: "Rune platelegs (t)",
    iconUrl: "/assets/items/2625.png"
  }

export const RunePlatelegsT = Item.fromJson(runePlatelegsTData);
