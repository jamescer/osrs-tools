import { Item } from '../Item';

const demonic_gorilla_heartsData = {
  id: 19622,
  name: 'Demonic gorilla heart',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'The heart of a demonic gorilla.',
  equipable: false,
  weight: 0.001,
  questItem: true,
  destroy: 'You can get another from killing demonic gorillas during Monkey Madness II.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Demonic_gorilla_heart',
};

export const DemonicGorillaHeart = Item.fromJson(demonic_gorilla_heartsData);
