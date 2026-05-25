import { Item } from "../Item";

const EmptyWineBottleData = {{
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
    id: 7921,
    name: "Empty wine bottle"
  }
export const EmptyWineBottle = Item.fromJson(EmptyWineBottleData);