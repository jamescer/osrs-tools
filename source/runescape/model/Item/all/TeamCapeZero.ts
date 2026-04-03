import { Item } from '../Item';

const teamCapeZeroData = {
  id: 6387,
  name: 'Team cape zero',
  iconUrl: '/assets/items/team-cape-zero.png',
  examine: 'A cape worn by team zero.',
  value: 468,
  highAlch: 280,
  lowAlch: 187,
  weight: 0.0,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2002-04-25',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Team_cape_zero',
};

export const TeamCapeZero = Item.fromJson(teamCapeZeroData);
