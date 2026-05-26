import { Item } from "../Item";

const NormalTaxBagData = {
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
    id: 10833,
    name: "Normal tax bag"
  }
export const NormalTaxBag = Item.fromJson(NormalTaxBagData);
