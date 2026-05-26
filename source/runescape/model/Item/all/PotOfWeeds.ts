import { Item } from "../Item";

const PotOfWeedsData = {
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
    id: 6771,
    name: "Pot of weeds"
  }
export const PotOfWeeds = Item.fromJson(PotOfWeedsData);
