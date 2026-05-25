import { Item } from '../Item';

const bandosPlatebodyData = {{
    examine: "Rune platebody in the colours of Bandos.",
    value: 65000,
    highAlch: 39000,
    lowAlch: 26000,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_platebody",
    id: 12480,
    name: "Bandos platebody",
    iconUrl: "/assets/items/12480.png"
  }

export const BandosPlatebody = Item.fromJson(bandosPlatebodyData);
