import { Item } from "../Item";

const GlowingDaggerData = {
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
    id: 747,
    name: "Glowing dagger"
  }
export const GlowingDagger = Item.fromJson(GlowingDaggerData);
