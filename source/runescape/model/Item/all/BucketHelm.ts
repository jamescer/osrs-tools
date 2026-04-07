import { Item } from '../Item';

const bucketHelmData = {
  id: 19991,
  name: "Bucket helm",
  iconUrl: "/assets/items/bucket-helm.png",
  examine: "A helm made from a bucket.",
  value: 14000,
  highAlch: 8400,
  lowAlch: 5600,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bucket_helm",
};

export const BucketHelm = Item.fromJson(bucketHelmData);
