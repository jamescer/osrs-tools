import { Item } from '../Item';

const ringOfNatureData = {{
    examine: "A ring shaped like the nature rune symbol.",
    value: 8000,
    highAlch: 4800,
    lowAlch: 3200,
    weight: 0.004,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ring_of_nature",
    id: 20005,
    name: "Ring of nature",
    iconUrl: "/assets/items/20005.png"
  }

export const RingOfNature = Item.fromJson(ringOfNatureData);
