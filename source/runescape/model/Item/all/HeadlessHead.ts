import { Item } from "../Item";

const HeadlessHeadData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 24975,
    name: "Headless head"
  }
export const HeadlessHead = Item.fromJson(HeadlessHeadData);
