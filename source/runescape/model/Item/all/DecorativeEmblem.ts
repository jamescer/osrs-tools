import { Item } from "../Item";

const DecorativeEmblemData = {
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
    id: 24287,
    name: "Decorative emblem"
  }
export const DecorativeEmblem = Item.fromJson(DecorativeEmblemData);
