import { Item, ItemJson } from '../Item';

const blueWizardHatData: ItemJson = {
  id: 579,
  name: 'Blue wizard hat',
  examine: 'A Blue wizard hat.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_wizard_hat',
  iconUrl: '/assets/items/blue-wizard-hat.png',
};

export const BlueWizardHat = Item.fromJson(blueWizardHatData);