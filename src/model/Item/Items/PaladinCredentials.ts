import { Item } from '../Item';

const paladin_credentialsData = {
  equipable: false,
  examine: 'Proves my acceptance into the order of paladins.',
  id: 8780,
  members: true,
  destroy: "You'll need to speak to Sir Amik Varze to get another one.",
  name: "Paladin's credentials",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Paladin%27s_credentials',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.001,
};

export const PaladinCredentials = Item.fromJson(paladin_credentialsData);
