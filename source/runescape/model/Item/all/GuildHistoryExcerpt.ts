import { Item } from "../Item";

const GuildHistoryExcerptData = {
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
    id: 29319,
    name: "Guild history excerpt"
  }
export const GuildHistoryExcerpt = Item.fromJson(GuildHistoryExcerptData);
