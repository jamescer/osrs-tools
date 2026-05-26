import { Item } from "../Item";

const SoulJourneyData = {
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
    id: 19637,
    name: "Soul journey"
  }
export const SoulJourney = Item.fromJson(SoulJourneyData);
