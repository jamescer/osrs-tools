import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';
import { NpcProduct } from '../NpcProduct';
import { SkeletalBottoms } from '../../Item/Items/SkeletalBottoms';
import { SkeletalHelm } from '../../Item/Items/SkeletalHelm';
import { SkeletalTop } from '../../Item/Items/SkeletalTop';
import { Coins } from '../../Item/Items/Coins';
import { RibcagePieceItem } from '../../Item/Items/RibcagePiece';
import { DagannothHideItem } from '../../Item/Items/DagannothHide';
import { FibulaPieceItem } from '../../Item/Items/FibulaPiece';
import { SkullPieceItem } from '../../Item/Items/SkullPiece';

export const peerTheSeerDrops: NpcDrop[] = [
  // Peer the Seer is a non-combat NPC and does not drop anything
];

export const peerTheSeerLocations: string[] = [
  "Rellekka (Seers' Village area, inside his house north-east of the market)",
];

export const peerTheSeerProducts: NpcProduct[] = [
  new NpcProduct(SkeletalBottoms.name, true, [
    { item: DagannothHideItem, quantity: 2 },
    { item: FibulaPieceItem, quantity: 1 },
    { item: Coins, quantity: 7500 },
  ]),
  new NpcProduct(SkeletalHelm.name, true, [
    { item: DagannothHideItem, quantity: 1 },
    { item: SkullPieceItem, quantity: 1 },
    { item: Coins, quantity: 5000 },
  ]),
  new NpcProduct(SkeletalTop.name, true, [
    { item: DagannothHideItem, quantity: 3 },
    { item: RibcagePieceItem, quantity: 1 },
    { item: Coins, quantity: 10000 },
  ]),
];

export const Peer_the_Seer = new Npc(
  3, // id (arbitrary, unique within your system)
  'Peer the Seer',
  'A wise Fremennik who helps with the Fremennik Trials and can reset your house location.',
  false, // members
  1, // combat level (not attackable, but set to 1 for completeness)
  'https://oldschool.runescape.wiki/w/Peer_the_Seer',
  1, // hitpoints (not attackable, but set to 1 for completeness)
  false, // aggressive
  false, // attackable
  false, // canPoison
  false, // poisonous
  false, // canCannon
  false, // canThrall
  false, // canVenom
  [], // attackStyle
  0, // maxHit
  0, // attackSpeed
  0, // respawnTime
  peerTheSeerLocations,
  peerTheSeerDrops,
  [], // weaknesses
  undefined, // iconUrl
  peerTheSeerProducts,
);
