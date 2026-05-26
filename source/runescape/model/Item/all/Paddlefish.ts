import { Item } from "../Item";

const PaddlefishData = {
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
    id: 23874,
    name: "Paddlefish"
  }
export const Paddlefish = Item.fromJson(PaddlefishData);
