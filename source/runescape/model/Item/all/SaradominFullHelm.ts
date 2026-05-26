import { Item } from '../Item';

const saradominFullHelmData = {
    examine: "Rune full helmet in the colours of Saradomin.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_full_helm",
    id: 2665,
    name: "Saradomin full helm",
    iconUrl: "/assets/items/2665.png"
  }

export const SaradominFullHelm = Item.fromJson(saradominFullHelmData);
