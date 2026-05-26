import { Item } from '../Item';

const guthixCloakData = {
    examine: "A Guthix cloak.",
    value: 2000,
    highAlch: 1200,
    lowAlch: 800,
    weight: 0.4,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_cloak",
    id: 10448,
    name: "Guthix cloak",
    iconUrl: "/assets/items/10448.png"
  }

export const GuthixCloak = Item.fromJson(guthixCloakData);
