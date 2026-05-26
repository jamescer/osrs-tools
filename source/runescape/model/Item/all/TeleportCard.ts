import { Item } from "../Item";

const TeleportCardData = {
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
    id: 13658,
    name: "Teleport card"
  }
export const TeleportCard = Item.fromJson(TeleportCardData);
