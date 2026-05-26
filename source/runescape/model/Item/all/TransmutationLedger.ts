import { Item } from "../Item";

const TransmutationLedgerData = {
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
    id: 33229,
    name: "Transmutation ledger"
  }
export const TransmutationLedger = Item.fromJson(TransmutationLedgerData);
