import { Item } from '../Item';

const lightTuxedoCuffsData = {{
    examine: "Linked tuxedo cuffs with a gold trim.",
    value: 3000,
    highAlch: 1800,
    lowAlch: 1200,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_tuxedo_cuffs",
    id: 19976,
    name: "Light tuxedo cuffs",
    iconUrl: "/assets/items/19976.png"
  }

export const LightTuxedoCuffs = Item.fromJson(lightTuxedoCuffsData);
