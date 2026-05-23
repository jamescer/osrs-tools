import { Item } from '../Item';

const wizardBootsData = {
  id: 2579,
  name: "Wizard boots",
  iconUrl: '/assets/items/2579.png',
  examine: "Slightly magical boots.",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Wizard_boots',
};

export const WizardBoots = Item.fromJson(wizardBootsData);
