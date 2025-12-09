import { Item, ItemJson } from '../Item';

const smokeBarrageData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'An Ancient Magicks spell.',
  highAlch: 0,
  id: 4000,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Smoke barrage',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Smoke_Barrage',
  prayer: 0,
  questItem: false,
  releaseDate: '24 March 2003',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0,
};

export const SmokeBarrage = Item.fromJson(smokeBarrageData);
