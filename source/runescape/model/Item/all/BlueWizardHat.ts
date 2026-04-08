import { Item, ItemJson } from '../Item';

const blueWizardHatData: ItemJson = {
  id: 579,
  name: 'Blue wizard hat',
  examine: 'A Blue wizard hat.',
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
  iconUrl: '/assets/items/blue-wizard-hat.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_wizard_hat',
};

export const BlueWizardHat = Item.fromJson(blueWizardHatData);