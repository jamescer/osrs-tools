import { Item } from "../Item";

const BookAboutLighthousesData = {
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
    id: 32431,
    name: "Book about lighthouses"
  }
export const BookAboutLighthouses = Item.fromJson(BookAboutLighthousesData);
