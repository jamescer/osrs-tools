import { Item } from "../Item";

const PetKrakenData = {{
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
    id: 12655,
    name: "Pet kraken"
  }
export const PetKraken = Item.fromJson(PetKrakenData);