import { Item } from "../Item";

const RichChocolateMixData = {
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
    id: 21235,
    name: "Rich chocolate mix"
  }
export const RichChocolateMix = Item.fromJson(RichChocolateMixData);
