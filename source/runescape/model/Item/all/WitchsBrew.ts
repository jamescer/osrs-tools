import { Item } from "../Item";

const WitchsBrewData = {
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
    id: 24991,
    name: "Witch's brew"
  }
export const WitchsBrew = Item.fromJson(WitchsBrewData);
