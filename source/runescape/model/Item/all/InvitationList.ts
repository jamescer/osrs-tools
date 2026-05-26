import { Item } from "../Item";

const InvitationListData = {
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
    id: 21208,
    name: "Invitation list"
  }
export const InvitationList = Item.fromJson(InvitationListData);
