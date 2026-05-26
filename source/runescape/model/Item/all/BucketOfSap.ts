import { Item } from "../Item";

const BucketOfSapData = {
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
    id: 4687,
    name: "Bucket of sap"
  }
export const BucketOfSap = Item.fromJson(BucketOfSapData);
