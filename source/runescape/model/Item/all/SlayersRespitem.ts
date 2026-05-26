import { Item } from "../Item";

const SlayersRespitemData = {
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
    id: 5761,
    name: "Slayer's respite(m)"
  }
export const SlayersRespitem = Item.fromJson(SlayersRespitemData);
