import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

// Woman.ts

export const Woman: Npc = {
    id: 4,
    name: 'Woman',
    examine: "She looks like she's in need of a friend.",
    combatLevel: 2,
    hitpoints: 7,
    attackable: true,
    aggressive: false,
    respawnTime: 25,
    attackStyles: ['Melee'],
    drops: [new NpcDrop('Bones', 1, 'Always')],
    locations: [
        'Lumbridge',
        'Varrock',
        'Falador',
        'Ardougne',
        'Draynor Village',
        'Edgeville',
    ],
    members: false,
    officialWikiUrl: '',
    canPoison: false,
    poisonous: false,
    canCannon: false,
    canThrall: false,
    canVenom: false,
    maxHit: 0,
    attackSpeed: 0,
    weaknesses: []
};
