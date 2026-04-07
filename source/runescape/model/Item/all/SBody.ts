import { Item } from '../Item';

const sBodyData = {
  id: 0,
  name: "Morrigan's leather body (bh)",
  iconUrl: "/assets/items/morrigans-leather-body-bh.png",
  examine: "A morrigan's leather body (bh).",
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 6.803,
  members: true,
  tradeable: false,
  equipable: false,
  releaseDate: "2023-05-24",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Morrigan's_leather_body_(bh)",
};

export const SBody = Item.fromJson(sBodyData);
