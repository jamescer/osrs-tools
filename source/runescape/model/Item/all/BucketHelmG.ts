import { Item } from '../Item';

const bucketHelmGData = {
  id: 20059,
  name: "Bucket helm (g)",
  iconUrl: "/assets/items/bucket-helm-g.png",
  examine: "A helm made from a golden bucket.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bucket_helm_(g)",
};

export const BucketHelmG = Item.fromJson(bucketHelmGData);
