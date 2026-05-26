import { Item } from "../Item";

const HerbalTinctureData = {
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
    id: 4416,
    name: "Herbal tincture"
  }
export const HerbalTincture = Item.fromJson(HerbalTinctureData);
