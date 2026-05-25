import { Item } from '../Item';

const ThirdAgeDruidicCloakData = {{
    examine: "A fabulously ancient vine cloak as worn by the druids of old.",
    value: 200000,
    highAlch: 120000,
    lowAlch: 80000,
    weight: 0.4,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2019-04-11",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_druidic_cloak",
    id: 23345,
    name: "3rd age druidic cloak",
    iconUrl: "/assets/items/23345.png"
  }

export const ThirdAgeDruidicCloak = Item.fromJson(ThirdAgeDruidicCloakData);
