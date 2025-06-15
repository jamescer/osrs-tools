export class Item {
  id: number;
  name: string;
  examine: string;
  value: number;
  highAlch: number;
  lowAlch: number;
  weight: number;
  members: boolean;
  tradeable: boolean;
  equipable: boolean;
  releaseDate: string;
  destroy: string;
  questItem: boolean;
  stackable: boolean;
  noted: boolean;
  officialWikiUrl: string;
  iconUrl?: string;

  // Combat stats
  attackStab?: number;
  attackSlash?: number;
  attackCrush?: number;
  attackMagic?: number;
  attackRanged?: number;
  defenceStab?: number;
  defenceSlash?: number;
  defenceCrush?: number;
  defenceMagic?: number;
  defenceRanged?: number;
  meleeStrength?: number;
  rangedStrength?: number;
  magicDamage?: number;
  prayer?: number;

  constructor(
    id: number,
    name: string,
    examine: string,
    value: number,
    highAlch: number,
    lowAlch: number,
    weight: number,
    members: boolean,
    tradeable: boolean,
    equipable: boolean,
    releaseDate: string,
    destroy: string,
    questItem: boolean,
    stackable: boolean,
    noted: boolean,
    officialWikiUrl: string,
    iconUrl?: string,
    // Combat stats
    attackStab?: number,
    attackSlash?: number,
    attackCrush?: number,
    attackMagic?: number,
    attackRanged?: number,
    defenceStab?: number,
    defenceSlash?: number,
    defenceCrush?: number,
    defenceMagic?: number,
    defenceRanged?: number,
    meleeStrength?: number,
    rangedStrength?: number,
    magicDamage?: number,
    prayer?: number
  ) {
    this.id = id;
    this.name = name;
    this.examine = examine;
    this.value = value;
    this.highAlch = highAlch;
    this.lowAlch = lowAlch;
    this.weight = weight;
    this.members = members;
    this.tradeable = tradeable;
    this.equipable = equipable;
    this.releaseDate = releaseDate;
    this.destroy = destroy;
    this.questItem = questItem;
    this.stackable = stackable;
    this.noted = noted;
    this.officialWikiUrl = officialWikiUrl;
    this.iconUrl = iconUrl;

    // Combat stats
    this.attackStab = attackStab;
    this.attackSlash = attackSlash;
    this.attackCrush = attackCrush;
    this.attackMagic = attackMagic;
    this.attackRanged = attackRanged;
    this.defenceStab = defenceStab;
    this.defenceSlash = defenceSlash;
    this.defenceCrush = defenceCrush;
    this.defenceMagic = defenceMagic;
    this.defenceRanged = defenceRanged;
    this.meleeStrength = meleeStrength;
    this.rangedStrength = rangedStrength;
    this.magicDamage = magicDamage;
    this.prayer = prayer;
  }

  get Id() { return this.id; }
  set Id(value: number) { this.id = value; }

  get Name() { return this.name; }
  set Name(value: string) { this.name = value; }

  get Examine() { return this.examine; }
  set Examine(value: string) { this.examine = value; }

  get Value() { return this.value; }
  set Value(value: number) { this.value = value; }

  get HighAlch() { return this.highAlch; }
  set HighAlch(value: number) { this.highAlch = value; }

  get LowAlch() { return this.lowAlch; }
  set LowAlch(value: number) { this.lowAlch = value; }

  get Weight() { return this.weight; }
  set Weight(value: number) { this.weight = value; }

  get Members() { return this.members; }
  set Members(value: boolean) { this.members = value; }

  get Tradeable() { return this.tradeable; }
  set Tradeable(value: boolean) { this.tradeable = value; }

  get Equipable() { return this.equipable; }
  set Equipable(value: boolean) { this.equipable = value; }

  get ReleaseDate() { return this.releaseDate; }
  set ReleaseDate(value: string) { this.releaseDate = value; }

  get Destroy() { return this.destroy; }
  set Destroy(value: string) { this.destroy = value; }

  get QuestItem() { return this.questItem; }
  set QuestItem(value: boolean) { this.questItem = value; }

  get Stackable() { return this.stackable; }
  set Stackable(value: boolean) { this.stackable = value; }

  get Noted() { return this.noted; }
  set Noted(value: boolean) { this.noted = value; }

  get OfficialWikiUrl() { return this.officialWikiUrl; }
  set OfficialWikiUrl(value: string) { this.officialWikiUrl = value; }

  get IconUrl() { return this.iconUrl; }
  set IconUrl(value: string | undefined) { this.iconUrl = value; }

  // Combat stats getters and setters
  get AttackStab() { return this.attackStab; }
  set AttackStab(value: number | undefined) { this.attackStab = value; }

  get AttackSlash() { return this.attackSlash; }
  set AttackSlash(value: number | undefined) { this.attackSlash = value; }

  get AttackCrush() { return this.attackCrush; }
  set AttackCrush(value: number | undefined) { this.attackCrush = value; }

  get AttackMagic() { return this.attackMagic; }
  set AttackMagic(value: number | undefined) { this.attackMagic = value; }

  get AttackRanged() { return this.attackRanged; }
  set AttackRanged(value: number | undefined) { this.attackRanged = value; }

  get DefenceStab() { return this.defenceStab; }
  set DefenceStab(value: number | undefined) { this.defenceStab = value; }

  get DefenceSlash() { return this.defenceSlash; }
  set DefenceSlash(value: number | undefined) { this.defenceSlash = value; }

  get DefenceCrush() { return this.defenceCrush; }
  set DefenceCrush(value: number | undefined) { this.defenceCrush = value; }

  get DefenceMagic() { return this.defenceMagic; }
  set DefenceMagic(value: number | undefined) { this.defenceMagic = value; }

  get DefenceRanged() { return this.defenceRanged; }
  set DefenceRanged(value: number | undefined) { this.defenceRanged = value; }

  get MeleeStrength() { return this.meleeStrength; }
  set MeleeStrength(value: number | undefined) { this.meleeStrength = value; }

  get RangedStrength() { return this.rangedStrength; }
  set RangedStrength(value: number | undefined) { this.rangedStrength = value; }

  get MagicDamage() { return this.magicDamage; }
  set MagicDamage(value: number | undefined) { this.magicDamage = value; }

  get Prayer() { return this.prayer; }
  set Prayer(value: number | undefined) { this.prayer = value; }
}
