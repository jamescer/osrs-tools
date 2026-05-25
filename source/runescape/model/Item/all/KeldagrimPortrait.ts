import { Item } from "../Item";

const KeldagrimPortraitData = {{
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
    id: 7997,
    name: "Keldagrim portrait"
  }
export const KeldagrimPortrait = Item.fromJson(KeldagrimPortraitData);