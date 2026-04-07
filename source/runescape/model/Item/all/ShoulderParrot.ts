import { Item } from '../Item';

const shoulderParrotData = {
  id: 23300,
  name: "Shoulder parrot",
  iconUrl: "/assets/items/shoulder-parrot.png",
  examine: "Polly want a cracker?",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.453,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Shoulder_parrot",
};

export const ShoulderParrot = Item.fromJson(shoulderParrotData);
