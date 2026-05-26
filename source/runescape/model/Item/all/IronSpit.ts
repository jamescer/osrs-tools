import { Item } from "../Item";

const IronSpitData = {
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
    id: 7225,
    name: "Iron spit"
  }
export const IronSpit = Item.fromJson(IronSpitData);
