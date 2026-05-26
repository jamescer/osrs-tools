import { Item } from "../Item";

const GlowingFungusData = {
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
    id: 4075,
    name: "Glowing fungus"
  }
export const GlowingFungus = Item.fromJson(GlowingFungusData);
