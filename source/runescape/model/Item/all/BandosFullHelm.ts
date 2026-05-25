import { Item } from '../Item';

const bandosFullHelmData = {{
    examine: "Rune full helmet in the colours of Bandos.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_full_helm",
    id: 12486,
    name: "Bandos full helm",
    iconUrl: "/assets/items/12486.png"
  }

export const BandosFullHelm = Item.fromJson(bandosFullHelmData);
