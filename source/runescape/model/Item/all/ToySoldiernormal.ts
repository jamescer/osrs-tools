import { Item } from "../Item";

const ToySoldiernormalData = {
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
    id: 7759,
    name: "Toy soldier#Normal"
  }
export const ToySoldiernormal = Item.fromJson(ToySoldiernormalData);
