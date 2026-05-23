import { Item } from '../Item';

const blackWizardRobeGData = {
  id: 12449,
  name: "Black wizard robe (g)",
  iconUrl: '/assets/items/12449.png',
  examine: "I can do magic better in this.",
  value: 15,
  highAlch: 9,
  lowAlch: 6,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Black_wizard_robe_(g)',
};

export const BlackWizardRobeG = Item.fromJson(blackWizardRobeGData);
