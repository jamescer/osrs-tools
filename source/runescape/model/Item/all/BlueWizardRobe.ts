import { Item, ItemJson } from '../Item';

const blueWizardRobeData: ItemJson = {
  id: 577,
  name: 'Blue wizard robe',
  examine: 'A Blue wizard robe.',
  value: 1,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: '24 September 2001',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_wizard_robe',
  iconUrl: '/assets/items/blue-wizard-robe.png',
};

export const BlueWizardRobe = Item.fromJson(blueWizardRobeData);