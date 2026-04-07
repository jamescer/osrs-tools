import { Item } from '../Item';

const leftEyePatchData = {
  id: 19724,
  name: "Left eye patch",
  iconUrl: "/assets/items/left-eye-patch.png",
  examine: "A black piece of cloth on a string.",
  value: 2,
  highAlch: 1,
  lowAlch: 0,
  weight: 0.006,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Left_eye_patch",
};

export const LeftEyePatch = Item.fromJson(leftEyePatchData);
