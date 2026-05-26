import { Item } from "../Item";

const SmoulderingHeartData = {
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
    id: 29583,
    name: "Smouldering heart"
  }
export const SmoulderingHeart = Item.fromJson(SmoulderingHeartData);
