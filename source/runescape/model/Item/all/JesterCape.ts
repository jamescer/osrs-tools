import { Item } from '../Item';

const jesterCapeData = {
    examine: "A jester cape.",
    value: 1000,
    highAlch: 600,
    lowAlch: 400,
    weight: 0.453,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2019-04-11",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Jester_cape",
    id: 23297,
    name: "Jester cape",
    iconUrl: "/assets/items/23297.png"
  }

export const JesterCape = Item.fromJson(jesterCapeData);
