import { Item } from '../Item';

const robeBottomOfDarknessData = {{
    examine: "A dark power is woven into this robe bottom.",
    value: 80000,
    highAlch: 48000,
    lowAlch: 32000,
    weight: 1.814,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Robe_bottom_of_darkness",
    id: 20137,
    name: "Robe bottom of darkness",
    iconUrl: "/assets/items/20137.png"
  }

export const RobeBottomOfDarkness = Item.fromJson(robeBottomOfDarknessData);
