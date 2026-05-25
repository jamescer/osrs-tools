import { Item } from '../Item';

const blackWizardHatGData = {{
    examine: "A silly pointed hat, with colourful trim.",
    value: 2,
    highAlch: 1,
    lowAlch: 1,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_wizard_hat_(g)",
    id: 12453,
    name: "Black wizard hat (g)",
    iconUrl: "/assets/items/12453.png"
  }

export const BlackWizardHatG = Item.fromJson(blackWizardHatGData);
