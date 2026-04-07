import { Item } from '../Item';

const robinHoodHatData = {
  id: 2581,
  name: "Robin hood hat",
  iconUrl: "/assets/items/robin-hood-hat.png",
  examine: "Endorsed by Robin Hood.",
  value: 450,
  highAlch: 270,
  lowAlch: 180,
  weight: 0.283,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-05-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Robin_hood_hat",
};

export const RobinHoodHat = Item.fromJson(robinHoodHatData);
