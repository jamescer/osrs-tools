import { Item } from '../Item';

const ectophialData = {
  equipable: false,
  examine: 'A glass vial containing ectoplasm.',
  id: 4251,
  members: true,
  destroy: 'You can get another by talking to Velorina in Port Phasmatys.',
  name: 'Ectophial',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ectophial',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const Ectophial = Item.fromJson(ectophialData);
