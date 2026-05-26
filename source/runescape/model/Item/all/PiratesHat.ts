import { Item } from '../Item';

const piratesHatData = {
    examine: "Shiver me timbers!",
    value: 180,
    highAlch: 108,
    lowAlch: 72,
    weight: 0.001,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-05-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Pirate%27s_hat",
    id: 2651,
    name: "Pirate's hat",
    iconUrl: "/assets/items/2651.png"
  }

export const PiratesHat = Item.fromJson(piratesHatData);
