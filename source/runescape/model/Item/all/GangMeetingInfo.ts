import { Item } from "../Item";

const GangMeetingInfoData = {
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
    id: 13394,
    name: "Gang meeting info"
  }
export const GangMeetingInfo = Item.fromJson(GangMeetingInfoData);
