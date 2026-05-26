import { Item } from "../Item";

const RaidsMegarareVoucherData = {
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
    id: 30402,
    name: "Raids megarare voucher"
  }
export const RaidsMegarareVoucher = Item.fromJson(RaidsMegarareVoucherData);
