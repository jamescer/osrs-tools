import { Item } from '../Item';

const ThirdAgeDruidicStaffData = {
  id: 23342,
  name: "3rd age druidic staff",
  iconUrl: "/assets/items/3rd-age-druidic-staff.png",
  examine: "A fabulously ancient gnarled staff as used by the druids of old.",
  value: 200000,
  highAlch: 120000,
  lowAlch: 80000,
  weight: 2,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_druidic_staff",
};

export const ThirdAgeDruidicStaff = Item.fromJson(ThirdAgeDruidicStaffData);
