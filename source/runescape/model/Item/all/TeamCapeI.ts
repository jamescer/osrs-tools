import { Item } from '../Item';

const teamCapeIData = {
  id: 6389,
  name: 'Team cape i',
  iconUrl: '/assets/items/team-cape-i.png',
  examine: 'A cape worn by team i.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Team_cape_i',
};

export const TeamCapeI = Item.fromJson(teamCapeIData);
