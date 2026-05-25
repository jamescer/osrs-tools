import { Item } from '../Item';

const zamorakGodswordOrnamentKitData = {{
    examine: "Use on a Zamorak godsword to make it look fancier!",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2016-07-06",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_godsword_ornament_kit",
    id: 20077,
    name: "Zamorak godsword ornament kit",
    iconUrl: "/assets/items/20077.png"
  }

export const ZamorakGodswordOrnamentKit = Item.fromJson(zamorakGodswordOrnamentKitData);
