import { Item } from "../Item";

const OakScratchingPostData = {
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
    id: 12715,
    name: "Oak scratching post"
  }
export const OakScratchingPost = Item.fromJson(OakScratchingPostData);
