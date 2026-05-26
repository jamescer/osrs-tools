import { Item } from "../Item";

const RawJumboSquidData = {
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
    id: 31561,
    name: "Raw jumbo squid"
  }
export const RawJumboSquid = Item.fromJson(RawJumboSquidData);
