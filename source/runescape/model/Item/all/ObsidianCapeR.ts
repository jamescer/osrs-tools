import { Item } from '../Item';

const obsidianCapeRData = {
    examine: "A cape of woven obsidian plates.",
    value: 60000,
    highAlch: 36000,
    lowAlch: 24000,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Obsidian_cape_(r)",
    id: 20050,
    name: "Obsidian cape (r)",
    iconUrl: "/assets/items/20050.png"
  }

export const ObsidianCapeR = Item.fromJson(obsidianCapeRData);
