import { Item, ItemJson } from '../Item';

const wizardHatData: ItemJson = {
  id: 1017,
  name: 'Wizard hat',
  examine: 'A Wizard hat.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Wizard_hat',
  iconUrl: '/assets/items/wizard-hat.png',
};

export const WizardHat = Item.fromJson(wizardHatData);
