import { Item } from "../Item";

const WaterloggedJournalData = {
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
    id: 32396,
    name: "Waterlogged journal"
  }
export const WaterloggedJournal = Item.fromJson(WaterloggedJournalData);
