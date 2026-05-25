import { Item } from '../Item';

const anguishOrnamentKitData = {{
    examine: "Use on a necklace of anguish to make it look fancier!",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2018-01-25",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Anguish_ornament_kit",
    id: 22246,
    name: "Anguish ornament kit",
    iconUrl: "/assets/items/22246.png"
  }

export const AnguishOrnamentKit = Item.fromJson(anguishOrnamentKitData);
