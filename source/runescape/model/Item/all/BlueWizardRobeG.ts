import { Item } from '../Item';

const blueWizardRobeGData = {
    examine: "I can do magic better in this.",
    value: 15,
    highAlch: 9,
    lowAlch: 6,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_wizard_robe_(g)",
    id: 7390,
    name: "Blue wizard robe (g)",
    iconUrl: "/assets/items/7390.png"
  }

export const BlueWizardRobeG = Item.fromJson(blueWizardRobeGData);
