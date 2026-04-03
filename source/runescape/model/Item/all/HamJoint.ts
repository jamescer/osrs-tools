import { Item } from '../Item';

const hamJointData = {
  id: 2678,
  name: 'Ham joint',
  iconUrl: '/assets/items/ham-joint.png',
  examine: 'A prime cut of meat.',
  value: 156,
  highAlch: 93,
  lowAlch: 62,
  weight: 0.1,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '2002-01-09',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ham_joint',
};

export const HamJoint = Item.fromJson(hamJointData);
