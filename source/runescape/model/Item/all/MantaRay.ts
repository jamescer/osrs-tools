import { Item } from '../Item';

const mantaRayData = {{
    examine: "A rare catch.",
    value: 200,
    highAlch: 120,
    lowAlch: 80,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Manta_ray",
    id: 391,
    name: "Manta ray",
    iconUrl: "/assets/items/391.png"
  }

export const MantaRay = Item.fromJson(mantaRayData);
