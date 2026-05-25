import { Item } from "../Item";

const LeprechaunsVaultData = {{
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
    id: 30359,
    name: "Leprechaun's vault"
  }
export const LeprechaunsVault = Item.fromJson(LeprechaunsVaultData);