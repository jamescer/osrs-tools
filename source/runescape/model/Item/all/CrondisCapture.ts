import { Item } from "../Item";

const CrondisCaptureData = {
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
    id: 27308,
    name: "Crondis' capture"
  }
export const CrondisCapture = Item.fromJson(CrondisCaptureData);
