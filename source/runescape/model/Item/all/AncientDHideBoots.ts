import { Item } from '../Item';

const ancientDHideBootsData = {{
    examine: "Ancient blessed dragonhide boots.",
    value: 9300,
    highAlch: 5580,
    lowAlch: 3720,
    weight: 1.4,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_d'hide_boots",
    id: 19921,
    name: "Ancient d'hide boots",
    iconUrl: "/assets/items/19921.png"
  }

export const AncientDHideBoots = Item.fromJson(ancientDHideBootsData);
