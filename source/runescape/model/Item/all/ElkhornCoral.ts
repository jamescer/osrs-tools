import { Item } from "../Item";

const ElkhornCoralData = {
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
    id: 31481,
    name: "Elkhorn coral"
  }
export const ElkhornCoral = Item.fromJson(ElkhornCoralData);
