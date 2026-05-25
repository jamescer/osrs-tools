import { Item } from '../Item';

const magicShortbowData = {{
    examine: "Short and magical, but still effective.",
    value: 1600,
    highAlch: 960,
    lowAlch: 640,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Magic_shortbow",
    id: 861,
    name: "Magic shortbow",
    iconUrl: "/assets/items/861.png"
  }

export const MagicShortbow = Item.fromJson(magicShortbowData);
