import { Item } from '../Item';

const runeKiteshieldTData = {
  id: 2629,
  name: "Rune kiteshield (t)",
  iconUrl: "/assets/items/rune-kiteshield-t.png",
  examine: "Rune kiteshield with trim.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-05-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_kiteshield_(t)",
};

export const RuneKiteshieldT = Item.fromJson(runeKiteshieldTData);
