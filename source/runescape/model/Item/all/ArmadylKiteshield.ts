import { Item } from '../Item';

const armadylKiteshieldData = {
    examine: "Rune kiteshield in the colours of Armadyl.",
    value: 54400,
    highAlch: 32640,
    lowAlch: 21760,
    weight: 5.443,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_kiteshield",
    id: 12478,
    name: "Armadyl kiteshield",
    iconUrl: "/assets/items/12478.png"
  }

export const ArmadylKiteshield = Item.fromJson(armadylKiteshieldData);
