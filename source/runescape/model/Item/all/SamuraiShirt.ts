import { Item } from '../Item';

const samuraiShirtData = {{
    examine: "A type of shirt worn by the Samurai.",
    value: 7000,
    highAlch: 4200,
    lowAlch: 2800,
    weight: 2,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Samurai_shirt",
    id: 20038,
    name: "Samurai shirt",
    iconUrl: "/assets/items/20038.png"
  }

export const SamuraiShirt = Item.fromJson(samuraiShirtData);
