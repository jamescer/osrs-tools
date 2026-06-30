/**
 * Slayer Rewards Module
 * Exports all slayer reward classes and data
 */

export { SlayerUnlock } from './SlayerUnlock';
export { SlayerExtend } from './SlayerExtend';
export { SlayerBuy } from './SlayerBuy';

export { SLAYER_UNLOCKS, getUnlockByName, getUnlocksByCostRange, calculateUnlocksCost } from './unlocks.data';
export { SLAYER_EXTENDS, getExtendByName, getExtendsForTask } from './extends.data';
export { SLAYER_BUYS, getBuyByItem, getBuysByCostRange, getBuysByRequirement, calculateBuysCost } from './buys.data';
