import { Item } from "../Item";

const CrateOfRedwoodLogsData = {
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
    id: 32744,
    name: "Crate of redwood logs"
  }
export const CrateOfRedwoodLogs = Item.fromJson(CrateOfRedwoodLogsData);
