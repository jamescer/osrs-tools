import { Item } from "../Item";

const WatsonTeleportData = {
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
    id: 23387,
    name: "Watson teleport"
  }
export const WatsonTeleport = Item.fromJson(WatsonTeleportData);
