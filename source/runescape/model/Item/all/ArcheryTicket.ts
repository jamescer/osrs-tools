import { Item } from "../Item";

const ArcheryTicketData = {
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
    id: 1464,
    name: "Archery ticket"
  }
export const ArcheryTicket = Item.fromJson(ArcheryTicketData);
