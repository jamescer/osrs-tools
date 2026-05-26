import { Item } from '../Item';

const deerstalkerData = {
    examine: "Elementary!",
    value: 2300,
    highAlch: 1380,
    lowAlch: 920,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Deerstalker",
    id: 12540,
    name: "Deerstalker",
    iconUrl: "/assets/items/12540.png"
  }

export const Deerstalker = Item.fromJson(deerstalkerData);
