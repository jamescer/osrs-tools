import { Item } from "../Item";

const MysticalRobesData = {
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
    id: 4247,
    name: "Mystical robes"
  }
export const MysticalRobes = Item.fromJson(MysticalRobesData);
