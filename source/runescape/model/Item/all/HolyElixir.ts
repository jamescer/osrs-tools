import { Item } from "../Item";

const HolyElixirData = {{
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
    id: 12833,
    name: "Holy elixir"
  }
export const HolyElixir = Item.fromJson(HolyElixirData);