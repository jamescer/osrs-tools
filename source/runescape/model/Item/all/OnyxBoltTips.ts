import { Item } from '../Item';

const onyxBoltTipsData = {{
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
    id: 9194,
    name: "Onyx bolt tips",
    iconUrl: "/assets/items/9194.png"
  }

export const OnyxBoltTips = Item.fromJson(onyxBoltTipsData);
