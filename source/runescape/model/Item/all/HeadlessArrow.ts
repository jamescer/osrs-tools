import { Item } from "../Item";

const HeadlessArrowData = {
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
    id: 53,
    name: "Headless arrow"
  }
export const HeadlessArrow = Item.fromJson(HeadlessArrowData);
