import { Item } from '../Item';

const runeScimitarOrnamentKitSaradominData = {{
    examine: "Use on a rune scimitar to make it look fancier!",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "2019-04-11",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_scimitar_ornament_kit_(saradomin)",
    id: 23324,
    name: "Rune scimitar ornament kit (saradomin)",
    iconUrl: "/assets/items/23324.png"
  }

export const RuneScimitarOrnamentKitSaradomin = Item.fromJson(runeScimitarOrnamentKitSaradominData);
