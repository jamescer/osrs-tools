import { Item } from '../Item';

const ancientFullHelmData = {{
    examine: "Rune full helmet in the colours of a long-forgotten god.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_full_helm",
    id: 12466,
    name: "Ancient full helm",
    iconUrl: "/assets/items/12466.png"
  }

export const AncientFullHelm = Item.fromJson(ancientFullHelmData);
