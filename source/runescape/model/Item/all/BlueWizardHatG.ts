import { Item } from '../Item';

const blueWizardHatGData = {
  id: 7394,
  name: "Blue wizard hat (g)",
  iconUrl: '/assets/items/7394.png',
  examine: "A silly pointed hat, with colourful trim.",
  value: 2,
  highAlch: 1,
  lowAlch: 1,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blue_wizard_hat_(g)',
};

export const BlueWizardHatG = Item.fromJson(blueWizardHatGData);
