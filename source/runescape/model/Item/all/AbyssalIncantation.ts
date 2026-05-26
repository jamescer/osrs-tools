import { Item } from "../Item";

const AbyssalIncantationData = {
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
    id: 26905,
    name: "Abyssal incantation"
  }
export const AbyssalIncantation = Item.fromJson(AbyssalIncantationData);
