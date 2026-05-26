import { Item } from "../Item";

const SecateursAttachmentData = {
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
    id: 28161,
    name: "Secateurs attachment"
  }
export const SecateursAttachment = Item.fromJson(SecateursAttachmentData);
