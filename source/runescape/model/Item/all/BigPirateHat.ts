import { Item } from '../Item';

const bigPirateHatData = {
    examine: "Yarrr!",
    value: 1500,
    highAlch: 900,
    lowAlch: 600,
    weight: 0.001,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Big_pirate_hat",
    id: 12355,
    name: "Big pirate hat",
    iconUrl: "/assets/items/12355.png"
  }

export const BigPirateHat = Item.fromJson(bigPirateHatData);
