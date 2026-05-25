import { Item } from '../Item';

const ankouSocksData = {{
    examine: "These socks will make your flesh transparent.",
    value: 1,
    highAlch: 0,
    lowAlch: 0,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ankou_socks",
    id: 20107,
    name: "Ankou socks",
    iconUrl: "/assets/items/20107.png"
  }

export const AnkouSocks = Item.fromJson(ankouSocksData);
