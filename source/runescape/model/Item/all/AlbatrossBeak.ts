import { Item } from "../Item";

const AlbatrossBeakData = {
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
    id: 32845,
    name: "Albatross beak"
  }
export const AlbatrossBeak = Item.fromJson(AlbatrossBeakData);
