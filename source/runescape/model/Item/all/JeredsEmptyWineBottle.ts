import { Item } from "../Item";

const JeredsEmptyWineBottleData = {
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
    id: 26250,
    name: "Jered's empty wine bottle"
  }
export const JeredsEmptyWineBottle = Item.fromJson(JeredsEmptyWineBottleData);
