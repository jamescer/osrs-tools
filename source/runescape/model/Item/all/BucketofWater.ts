import { Item } from '../Item';

const BucketOfWaterData = {
    examine: "A bucket filled with water.",
    value: 3,
    highAlch: 2,
    lowAlch: 1,
    weight: 1,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "4 January 2001",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bucket_of_water",
    id: 1929,
    name: "Bucket of water",
    iconUrl: "/assets/items/1929.png",
    meleeStrength: 0,
    prayer: 0
  }


export const BucketOfWater = Item.fromJson(BucketOfWaterData);
