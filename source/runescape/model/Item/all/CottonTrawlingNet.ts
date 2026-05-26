import { Item } from "../Item";

const CottonTrawlingNetData = {
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
    id: 32223,
    name: "Cotton trawling net"
  }
export const CottonTrawlingNet = Item.fromJson(CottonTrawlingNetData);
