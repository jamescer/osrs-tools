import { Item } from '../Item';

const paladin_credentialsData = {
  id: 8780,
  name: "Paladin's credentials",
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'Proves my acceptance into the order of paladins.',
  equipable: false,
  weight: 0.001,
  questItem: true,
  destroy: "You'll need to speak to Sir Amik Varze to get another one.",
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Paladin%27s_credentials',
};

export const PaladinCredentials = Item.fromJson(paladin_credentialsData);
