import { Item } from "../Item";

const FiscalStatementData = {
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
    id: 3708,
    name: "Fiscal statement"
  }
export const FiscalStatement = Item.fromJson(FiscalStatementData);
