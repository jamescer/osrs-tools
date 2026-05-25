import { Item } from "../Item";

const LeanSnailData = {{
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
    id: 3365,
    name: "Lean snail"
  }
export const LeanSnail = Item.fromJson(LeanSnailData);