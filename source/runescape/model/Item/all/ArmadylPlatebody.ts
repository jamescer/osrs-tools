import { Item } from '../Item';

const armadylPlatebodyData = {
    examine: "Rune platebody in the colours of Armadyl.",
    value: 65000,
    highAlch: 39000,
    lowAlch: 26000,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_platebody",
    id: 12470,
    name: "Armadyl platebody",
    iconUrl: "/assets/items/12470.png"
  }

export const ArmadylPlatebody = Item.fromJson(armadylPlatebodyData);
