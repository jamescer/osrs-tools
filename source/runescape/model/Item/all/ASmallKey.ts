import { Item } from "../Item";

const ASmallKeyData = {
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
    id: 1507,
    name: "A small key"
  }
export const ASmallKey = Item.fromJson(ASmallKeyData);
