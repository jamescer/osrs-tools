import { Item } from '../Item';

const smokeBarrageData = {
  id: 4000,
  name: 'Smoke barrage',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'An Ancient Magicks spell.',
  equipable: false,
  weight: 0,
  questItem: false,
  destroy: null,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Smoke_Barrage',
};

export const SmokeBarrage = Item.fromJson(smokeBarrageData);
