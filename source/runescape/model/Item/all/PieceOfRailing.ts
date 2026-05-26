import { Item } from "../Item";

const PieceOfRailingData = {
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
    id: 1486,
    name: "Piece of railing"
  }
export const PieceOfRailing = Item.fromJson(PieceOfRailingData);
