import { Item, ItemJson } from '../Item';

const blueWizardRobeData: ItemJson = {
  id: 577,
  name: 'Blue wizard robe',
  examine: 'A Blue wizard robe.',
  highAlch: 1,
  lowAlch: 1,
  members: false,
  noted: false,
  tradeable: true,
  stackable: false,
  questItem: false,
  value: 1,
  releaseDate: '24 September 2001',
  weight: 0,
  iconUrl: '/assets/items/blue-wizard-robe.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_wizard_robe',
};

export const BlueWizardRobe = Item.fromJson(blueWizardRobeData);