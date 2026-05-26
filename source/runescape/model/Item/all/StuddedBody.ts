import { Item } from '../Item';

const studdedBodyData = {
    examine: "Those studs should provide a bit more protection.",
    value: 850,
    highAlch: 510,
    lowAlch: 340,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Studded_body",
    id: 1133,
    name: "Studded body",
    iconUrl: "/assets/items/1133.png"
  }

export const StuddedBody = Item.fromJson(studdedBodyData);
