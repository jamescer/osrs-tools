import { Item } from "../Item";

const OakFeederData = {
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
    id: 12722,
    name: "Oak feeder"
  }
export const OakFeeder = Item.fromJson(OakFeederData);
