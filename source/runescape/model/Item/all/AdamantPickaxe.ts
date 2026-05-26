import { Item } from '../Item';

const adamantPickaxeData = {
    examine: "Used for mining.",
    value: 3200,
    highAlch: 1920,
    lowAlch: 1280,
    weight: 2.721,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2003-05-27",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_pickaxe",
    id: 1271,
    name: "Adamant pickaxe",
    iconUrl: "/assets/items/1271.png"
  }

export const AdamantPickaxe = Item.fromJson(adamantPickaxeData);
