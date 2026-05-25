import { Item } from "../Item";

const SandwormsPackData = {{
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
    id: 13432,
    name: "Sandworms pack"
  }
export const SandwormsPack = Item.fromJson(SandwormsPackData);