import { Item } from '../Item';

const onyxBoltTipsData = {
  id: 9194,
  name: "Onyx bolt tips",
  iconUrl: "/assets/items/onyx-bolt-tips.png",
  examine: "Onyx bolt tips.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-07-31",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Onyx_bolt_tips",
};

export const OnyxBoltTips = Item.fromJson(onyxBoltTipsData);
