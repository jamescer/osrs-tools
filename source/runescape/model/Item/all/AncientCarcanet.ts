import { Item } from "../Item";

const AncientCarcanetData = {
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
    id: 25694,
    name: "Ancient carcanet"
  }
export const AncientCarcanet = Item.fromJson(AncientCarcanetData);
