import { Item } from '../Item';

const zamorakPlatelegsData = {
  id: 2655,
  name: "Zamorak platelegs",
  iconUrl: '/assets/items/2655.png',
  examine: "Rune platelegs in the colours of Zamorak.",
  value: 64000,
  highAlch: 38400,
  lowAlch: 25600,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Zamorak_platelegs',
};

export const ZamorakPlatelegs = Item.fromJson(zamorakPlatelegsData);
