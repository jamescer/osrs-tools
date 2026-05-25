import { Item } from '../Item';

const blackWizardRobeGData = {{
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_wizard_robe_(g)",
    id: 12449,
    name: "Black wizard robe (g)",
    iconUrl: "/assets/items/12449.png"
  }

export const BlackWizardRobeG = Item.fromJson(blackWizardRobeGData);
