import { Item } from "../Item";

const BucketOfWesterSandData = {
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
    id: 21243,
    name: "Bucket of wester sand"
  }
export const BucketOfWesterSand = Item.fromJson(BucketOfWesterSandData);
