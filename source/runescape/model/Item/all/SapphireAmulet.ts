import { Item } from "../Item";

const SapphireAmuletData = {
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
    id: 1694,
    name: "Sapphire amulet"
  }
export const SapphireAmulet = Item.fromJson(SapphireAmuletData);
