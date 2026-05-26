import { Item } from '../Item';

const runeBattleaxeData = {
    examine: "A vicious looking axe.",
    value: 41600,
    highAlch: 24960,
    lowAlch: 16640,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_battleaxe",
    id: 1373,
    name: "Rune battleaxe",
    iconUrl: "/assets/items/1373.png"
  }

export const RuneBattleaxe = Item.fromJson(runeBattleaxeData);
