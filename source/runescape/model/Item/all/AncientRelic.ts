import { Item } from "../Item";

const AncientRelicData = {{
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
    id: 22305,
    name: "Ancient relic"
  }
export const AncientRelic = Item.fromJson(AncientRelicData);