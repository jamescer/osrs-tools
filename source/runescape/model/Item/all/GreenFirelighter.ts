import { Item } from '../Item';

const greenFirelighterData = {{
    examine: "Makes firelighting a lot easier.",
    value: 15,
    highAlch: 9,
    lowAlch: 6,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2006-02-20",
    destroy: "Drop",
    questItem: false,
    stackable: true,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_firelighter",
    id: 7330,
    name: "Green firelighter",
    iconUrl: "/assets/items/7330.png"
  }

export const GreenFirelighter = Item.fromJson(greenFirelighterData);
