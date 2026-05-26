import { Item } from "../Item";

const CombatPathVoucherData = {
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
    id: 24131,
    name: "Combat path voucher"
  }
export const CombatPathVoucher = Item.fromJson(CombatPathVoucherData);
