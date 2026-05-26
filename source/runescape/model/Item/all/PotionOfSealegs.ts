import { Item } from "../Item";

const PotionOfSealegsData = {
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
    id: 21531,
    name: "Potion of sealegs"
  }
export const PotionOfSealegs = Item.fromJson(PotionOfSealegsData);
