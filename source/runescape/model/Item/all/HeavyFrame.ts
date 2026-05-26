import { Item } from "../Item";

const HeavyFrameData = {
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
    id: 19589,
    name: "Heavy frame"
  }
export const HeavyFrame = Item.fromJson(HeavyFrameData);
