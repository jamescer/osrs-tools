import { Item } from '../Item';

const dragonBattleaxeData = {{
    examine: "A vicious looking axe.",
    value: 200000,
    highAlch: 120000,
    lowAlch: 80000,
    weight: 2.721,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2002-02-27",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_battleaxe",
    id: 1377,
    name: "Dragon battleaxe",
    iconUrl: "/assets/items/1377.png"
  }

export const DragonBattleaxe = Item.fromJson(dragonBattleaxeData);
