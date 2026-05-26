import { Item } from '../Item';

const piscariliusHoodData = {
    examine: "A rare hood from Port Piscarilius.",
    value: 1,
    highAlch: 0,
    lowAlch: 0,
    weight: 0.1,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Piscarilius_hood",
    id: 20122,
    name: "Piscarilius hood",
    iconUrl: "/assets/items/20122.png"
  }

export const PiscariliusHood = Item.fromJson(piscariliusHoodData);
