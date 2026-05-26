import { Item } from '../Item';

const lovakengjHoodData = {
    examine: "A rare hood from Lovakengj.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Lovakengj_hood",
    id: 20119,
    name: "Lovakengj hood",
    iconUrl: "/assets/items/20119.png"
  }

export const LovakengjHood = Item.fromJson(lovakengjHoodData);
