import { Item } from '../Item';

const teakPlankData = {
    examine: "A plank of fine teak.",
    value: 500,
    highAlch: 300,
    lowAlch: 200,
    weight: 0.8,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2006-05-31",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Teak_plank",
    id: 8780,
    name: "Teak plank",
    iconUrl: "/assets/items/8780.png"
  }

export const TeakPlank = Item.fromJson(teakPlankData);
