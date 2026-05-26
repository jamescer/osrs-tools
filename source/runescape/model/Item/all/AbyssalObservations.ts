import { Item } from "../Item";

const AbyssalObservationsData = {
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
    id: 28461,
    name: "Abyssal observations"
  }
export const AbyssalObservations = Item.fromJson(AbyssalObservationsData);
