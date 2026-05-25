import { Item } from "../Item";

const DossierAnimationItemData = {{
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
    id: 9590,
    name: "Dossier (animation item)"
  }
export const DossierAnimationItem = Item.fromJson(DossierAnimationItemData);