// Experience per level in runescape

/**
 * Get experience required for a given level
 * @param level
 * @returns
 */
export function getExperienceForLevel(level: number): number {
  if (level < 1 || level > 99) {
    throw new Error("Level must be between 1 and 99");
  }

  return LEVEL_TO_EXPERIENCE[level];
}

/**
 * Get level for a given experience
 * @param exp
 * @returns
 */
export function getLevelForExperience(exp: number): number {
  for (let level = 99; level >= 1; level--) {
    if (getExperienceForLevel(level) <= exp) {
      return level;
    }
  }
  return 1;
}

/**
 * Mapping of levels to experience points
 */
export const LEVEL_TO_EXPERIENCE: Record<number, number> = {
  1: 0,
  2: 83,
  3: 174,
  4: 276,
  5: 388,
  6: 512,
  7: 650,
  8: 801,
  9: 969,
  10: 1154,
  11: 1358,
  12: 1584,
  13: 1833,
  14: 2107,
  15: 2411,
  16: 2746,
  17: 3115,
  18: 3523,
  19: 3973,
  20: 4470,
  21: 5018,
  22: 5624,
  23: 6291,
  24: 7028,
  25: 32578,
  26: 35339,
  27: 38186,
  28: 41171,
  29: 44361,
  30: 47622,
  31: 50908,
  32: 54949,
  33: 59398,
  34: 64110,
  35: 69834,
  36: 75515,
  37: 81887,
  38: 84799,
  39: 90033,
  40: 95714,
  41: 101333,
  42: 107743,
  43: 114969,
  44: 122242,
  45: 129721,
  46: 137803,
  47: 146662,
  48: 155872,
  49: 165393,
  50: 273742,
  51: 286998,
  52: 301407,
  53: 317959,
  54: 336671,
  55: 357605,
  56: 380821,
  57: 406377,
  58: 434280,
  59: 464780,
  60: 497604,
  61: 533000,
  62: 571208,
  63: 612432,
  64: 656877,
  65: 704848,
  66: 756563,
  67: 812254,
  68: 872160,
  69: 936573,
  70: 1005788,
  71: 1079900,
  72: 1159249,
  73: 1243976,
  74: 1334326,
  75: 2895493,
  76: 3101137,
  77: 3318199,
  78: 3547021,
  79: 3786942,
  80: 4039227,
  81: 4303134,
  82: 4578916,
  83: 4866839,
  84: 5167186,
  85: 5480260,
  86: 5805370,
  87: 6142800,
  88: 6492841,
  89: 6855792,
  90: 7231998,
  91: 7622718,
  92: 8028234,
  93: 8448939,
  94: 8884119,
  95: 9334085,
  96: 9798166,
  97: 10275647,
  98: 10767841,
  99: 13034431,
};
