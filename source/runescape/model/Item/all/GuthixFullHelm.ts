import { Item } from '../Item';

const guthixFullHelmData = {
    examine: "A rune full face helmet in the colours of Guthix.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_full_helm",
    id: 2673,
    name: "Guthix full helm",
    iconUrl: "/assets/items/2673.png"
  }

export const GuthixFullHelm = Item.fromJson(guthixFullHelmData);
