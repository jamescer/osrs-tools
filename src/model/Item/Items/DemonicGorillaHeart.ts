import { Item } from '../Item';

const demonic_gorilla_heartsData = {
  destroy: 'You can get another from killing demonic gorillas during Monkey Madness II.',
  equipable: false,
  examine: 'The heart of a demonic gorilla.',
  id: 19622,
  members: true,
  name: 'Demonic gorilla heart',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Demonic_gorilla_heart',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.001,
};

export const DemonicGorillaHeart = Item.fromJson(demonic_gorilla_heartsData);
