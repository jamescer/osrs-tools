import { Item } from '../Item';

const ectophialData = {
  id: 4251,
  name: 'Ectophial',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 1,
  examine: 'A glass vial containing ectoplasm.',
  equipable: false,
  weight: 0.001,
  questItem: true,
  destroy: 'You can get another by talking to Velorina in Port Phasmatys.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ectophial',
};

export const Ectophial = Item.fromJson(ectophialData);
