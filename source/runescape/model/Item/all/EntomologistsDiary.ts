import { Item } from "../Item";

const EntomologistsDiaryData = {
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
    id: 11904,
    name: "Entomologist's diary"
  }
export const EntomologistsDiary = Item.fromJson(EntomologistsDiaryData);
