import { Item } from "../Item";

const ComfyMattressData = {
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
    id: 4426,
    name: "Comfy mattress"
  }
export const ComfyMattress = Item.fromJson(ComfyMattressData);
