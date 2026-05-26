import { Item } from '../Item';

const strengthAmuletTData = {
    examine: "An enchanted ruby amulet.",
    value: 2025,
    highAlch: 1215,
    lowAlch: 810,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Strength_amulet_(t)",
    id: 10364,
    name: "Strength amulet (t)",
    iconUrl: "/assets/items/10364.png"
  }

export const StrengthAmuletT = Item.fromJson(strengthAmuletTData);
