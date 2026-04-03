import { Item } from '../Item';

const teamCapeXData = {
  id: 6391,
  name: 'Team cape x',
  iconUrl: '/assets/items/team-cape-x.png',
  examine: 'A cape worn by team x.',
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Team_cape_x',
};

export const TeamCapeX = Item.fromJson(teamCapeXData);
