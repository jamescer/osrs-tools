import { Item } from '../Item';

const loopHalfOfKeyData = {
    examine: "The loop end of the mysterious Crystal Key. Can you find the other half?",
    value: 100,
    highAlch: 60,
    lowAlch: 40,
    weight: 0.005,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2002-02-27",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Loop_half_of_key",
    id: 987,
    name: "Loop half of key",
    iconUrl: "/assets/items/987.png"
  }

export const LoopHalfOfKey = Item.fromJson(loopHalfOfKeyData);
