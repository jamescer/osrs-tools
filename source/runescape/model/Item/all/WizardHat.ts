import { Item, ItemJson } from '../Item';

const wizardHatData: ItemJson = {
  id: 1017,
  name: 'Wizard hat',
  examine: 'A Wizard hat.',
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
  iconUrl: '/assets/items/wizard-hat.png',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Wizard_hat',
};

export const WizardHat = Item.fromJson(wizardHatData);