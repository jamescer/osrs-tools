import { Item } from '../Item';

const ancientCloakData = {
    examine: "An Ancient cloak.",
    value: 2000,
    highAlch: 1200,
    lowAlch: 800,
    weight: 0.003,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_cloak",
    id: 12197,
    name: "Ancient cloak",
    iconUrl: "/assets/items/12197.png"
  }

export const AncientCloak = Item.fromJson(ancientCloakData);
