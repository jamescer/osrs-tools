import { Item } from '../Item';

const armadylPlatelegsData = {
  id: 12472,
  name: "Armadyl platelegs",
  iconUrl: '/assets/items/12472.png',
  examine: "Rune platelegs in the colours of Armadyl.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Armadyl_platelegs',
};

export const ArmadylPlatelegs = Item.fromJson(armadylPlatelegsData);
