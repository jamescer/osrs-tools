import { Item } from "../Item";

const EmptyTaxBagData = {
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
    id: 10831,
    name: "Empty tax bag"
  }
export const EmptyTaxBag = Item.fromJson(EmptyTaxBagData);
