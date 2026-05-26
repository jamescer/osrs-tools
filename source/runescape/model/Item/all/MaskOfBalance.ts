import { Item } from "../Item";

const MaskOfBalanceData = {
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
    id: 13203,
    name: "Mask of balance"
  }
export const MaskOfBalance = Item.fromJson(MaskOfBalanceData);
