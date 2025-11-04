import { Item } from '../Item';

const smokeBarrageData = {
  destroy: null,
  equipable: false,
  examine: 'An Ancient Magicks spell.',
  id: 4000,
  members: true,
  name: 'Smoke barrage',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Smoke_Barrage',
  questItem: false,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0,
};

export const SmokeBarrage = Item.fromJson(smokeBarrageData);
