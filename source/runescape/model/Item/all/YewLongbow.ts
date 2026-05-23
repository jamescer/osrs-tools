import { Item } from '../Item';

const yewLongbowData = {
  id: 855,
  name: "Yew longbow",
  iconUrl: '/assets/items/855.png',
  examine: "A nice sturdy bow made out of yew.",
  value: 1280,
  highAlch: 768,
  lowAlch: 512,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Yew_longbow',
};

export const YewLongbow = Item.fromJson(yewLongbowData);
