import { Item } from "../Item";

const BucketOfSlimeData = {
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
    id: 4286,
    name: "Bucket of slime"
  }
export const BucketOfSlime = Item.fromJson(BucketOfSlimeData);
