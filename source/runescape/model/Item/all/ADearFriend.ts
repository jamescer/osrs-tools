import { Item } from "../Item";

const ADearFriendData = {
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
    id: 24051,
    name: "A dear friend"
  }
export const ADearFriend = Item.fromJson(ADearFriendData);
