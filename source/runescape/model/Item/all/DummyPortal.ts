import { Item } from "../Item";

const DummyPortalData = {{
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
    id: 24545,
    name: "Dummy portal"
  }
export const DummyPortal = Item.fromJson(DummyPortalData);