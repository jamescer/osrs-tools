import { Item } from '../Item';

const tormentedOrnamentKitData = {
    examine: "Use on a tormented bracelet to make it look fancier!",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2019-04-11",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Tormented_ornament_kit",
    id: 23348,
    name: "Tormented ornament kit",
    iconUrl: "/assets/items/23348.png"
  }

export const TormentedOrnamentKit = Item.fromJson(tormentedOrnamentKitData);
