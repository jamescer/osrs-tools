import { Item } from '../Item';

const armadylFullHelmData = {{
    examine: "Rune full helmet in the colours of Armadyl.",
    value: 35200,
    highAlch: 21120,
    lowAlch: 14080,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_full_helm",
    id: 12476,
    name: "Armadyl full helm",
    iconUrl: "/assets/items/12476.png"
  }

export const ArmadylFullHelm = Item.fromJson(armadylFullHelmData);
