import { Item, ItemJson } from '../Item';

const demonicGorillaHeartData: ItemJson = {
  destroy: 'You can get another from killing demonic gorillas during Monkey Madness II.',
  equipable: false,
  examine: 'The heart of a demonic gorilla.',
  highAlch: 0,
  id: 19622,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Demonic gorilla heart',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Demonic_gorilla_heart',
  prayer: 0,
  questItem: true,
  releaseDate: '5 May 2016',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.001,
};

export const DemonicGorillaHeart = Item.fromJson(demonicGorillaHeartData);
