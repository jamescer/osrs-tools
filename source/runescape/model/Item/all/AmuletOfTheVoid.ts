import { Item } from '../Item';

const amuletOfTheVoidData = {{
    examine: "A carefully woven amulet that draws power from the void.",
    value: 2500,
    highAlch: 1500,
    lowAlch: 1000,
    weight: 0.05,
    members: true,
    tradeable: false,
    equipable: true,
    releaseDate: "2004-12-15",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Amulet_of_the_void",
    id: 12202,
    name: "Amulet of the void",
    iconUrl: "/assets/items/12202.png",
    magicDamage: 15
  }

export const AmuletOfTheVoid = Item.fromJson(amuletOfTheVoidData);
