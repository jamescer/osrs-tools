import { Item } from '../Item';

const amuletOfTheVoidData = {
  id: 12202,
  name: 'Amulet of the void',
  iconUrl: '/assets/items/amulet-of-the-void.png',
  examine: 'A carefully woven amulet that draws power from the void.',
  value: 2500,
  highAlch: 1500,
  lowAlch: 1000,
  weight: 0.05,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2004-12-15',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Amulet_of_the_void',
  magicDamage: 15,
};

export const AmuletOfTheVoid = Item.fromJson(amuletOfTheVoidData);
