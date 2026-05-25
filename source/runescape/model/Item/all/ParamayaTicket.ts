import { Item } from "../Item";

const ParamayaTicketData = {{
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
    id: 619,
    name: "Paramaya ticket"
  }
export const ParamayaTicket = Item.fromJson(ParamayaTicketData);