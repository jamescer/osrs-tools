import { Item } from "../Item";

const OrcaBlubberData = {
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
    id: 32814,
    name: "Orca blubber"
  }
export const OrcaBlubber = Item.fromJson(OrcaBlubberData);
