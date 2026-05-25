import { Item } from '../Item';

const chargeDragonstoneJewelleryScrollData = {{
    examine: "A scroll for charging dragonstone jewellery.",
    value: 1,
    highAlch: 1,
    lowAlch: 1,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Charge_dragonstone_jewellery_scroll",
    id: 20238,
    name: "Charge dragonstone jewellery scroll",
    iconUrl: "/assets/items/20238.png"
  }

export const ChargeDragonstoneJewelleryScroll = Item.fromJson(chargeDragonstoneJewelleryScrollData);
