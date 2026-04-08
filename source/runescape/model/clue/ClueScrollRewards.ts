/**
 * Clue Scroll Reward Item Mappings
 * Organizes all clue scroll rewards by tier with their correct rarity tiers
 * Based on official OSRS Wiki data
 */

import { Item } from "../Item/Item";
import { Black2hSword } from "../Item/all/Black2hSword";
import { BlackChainbody } from "../Item/all/BlackChainbody";
import { BlackKiteshield } from "../Item/all/BlackKiteshield";
import { BlackMace } from "../Item/all/BlackMace";
import { BlackMedHelm } from "../Item/all/BlackMedHelm";
import { BlackRobe } from "../Item/all/BlackRobe";
import { BlackScimitar } from "../Item/all/BlackScimitar";
import { BlackSword } from "../Item/all/BlackSword";
import { BlackWarhammer } from "../Item/all/BlackWarhammer";
import { BlueWizardHat } from "../Item/all/BlueWizardHat";
import { BlueWizardRobe } from "../Item/all/BlueWizardRobe";
import { BronzeArrow } from "../Item/all/BronzeArrow";
import { DeathRune } from "../Item/all/DeathRune";
import { DragonLongsword } from "../Item/all/DragonLongsword";
import { HardleatherBody } from "../Item/all/HardleatherBody";
import { Herring } from "../Item/all/Herring";
import { IronArrow } from "../Item/all/IronArrow";
import { IronPickaxe } from "../Item/all/IronPickaxe";
import { LeatherBody } from "../Item/all/LeatherBody";
import { LeatherCowl } from "../Item/all/LeatherCowl";
import { LeatherVambraces } from "../Item/all/LeatherVambraces";
import { Longbow } from "../Item/all/Longbow";
import { OakLongbow } from "../Item/all/OakLongbow";
import { OakShortbow } from "../Item/all/OakShortbow";
import { Sardine } from "../Item/all/Sardine";
import { Shrimps } from "../Item/all/Shrimps";
import { Shortbow } from "../Item/all/Shortbow";
import { SoulRune } from "../Item/all/SoulRune";
import { StaffOfEarth } from "../Item/all/StaffOfEarth";
import { StaffOfFire } from "../Item/all/StaffOfFire";
import { StaffOfWater } from "../Item/all/StaffOfWater";
import { SteelAxe } from "../Item/all/SteelAxe";
import { SteelDagger } from "../Item/all/SteelDagger";
import { SteelLongsword } from "../Item/all/SteelLongsword";
import { SummerPie } from "../Item/all/SummerPie";
import { TunaPotato } from "../Item/all/TunaPotato";
import { WizardHat } from "../Item/all/WizardHat";
import { AdamantPlatebody } from "../Item/all/AdamantPlatebody";
import { AdamantPlatelegs } from "../Item/all/AdamantPlatelegs";
import { AdamantShieldG } from "../Item/all/AdamantShieldG";
import { AirRune } from "../Item/all/AirRune";
import { AmuletOfMagic } from "../Item/all/AmuletOfMagic";
import { AmuletOfMagicT } from "../Item/all/AmuletOfMagicT";
import { AmuletOfPowerT } from "../Item/all/AmuletOfPowerT";
import { BlackAxe } from "../Item/all/BlackAxe";
import { BlackBattleaxe } from "../Item/all/BlackBattleaxe";
import { BlackDagger } from "../Item/all/BlackDagger";
import { BlackFullHelm } from "../Item/all/BlackFullHelm";
import { BlackFullHelmT } from "../Item/all/BlackFullHelmT";
import { BlackLongsword } from "../Item/all/BlackLongsword";
import { BlackPlatebody } from "../Item/all/BlackPlatebody";
import { BlackPlatebodyT } from "../Item/all/BlackPlatebodyT";
import { BlackPlatelegs } from "../Item/all/BlackPlatelegs";
import { BlackPlatelegsT } from "../Item/all/BlackPlatelegsT";
import { BlackPickaxe } from "../Item/all/BlackPickaxe";
import { BodyRune } from "../Item/all/BodyRune";
import { BlueDHideBody } from "../Item/all/BlueDHideBody";
import { BlueDHideChaps } from "../Item/all/BlueDHideChaps";
import { CapeOfSkulls } from "../Item/all/CapeOfSkulls";
import { ChaosRune } from "../Item/all/ChaosRune";
import { Coins } from "../Item/all/Coins";
import { Coif } from "../Item/all/Coif";
import { DragonBoots } from "../Item/all/DragonBoots";
import { DragonFullHelm } from "../Item/all/DragonFullHelm";
import { DragonMediumHelm } from "../Item/all/DragonMediumHelm";
import { DragonPlatebody } from "../Item/all/DragonPlatebody";
import { DragonPlatelegs } from "../Item/all/DragonPlatelegs";
import { EarthRune } from "../Item/all/EarthRune";
import { FireRune } from "../Item/all/FireRune";
import { FlaredTrousers } from "../Item/all/FlaredTrousersItem";
import { GildedFullHelm } from "../Item/all/GildedFullHelm";
import { GildedLegs } from "../Item/all/GildedLegs";
import { GildedPlatebody } from "../Item/all/GildedPlatebody";
import { GoldenApron } from "../Item/all/GoldenApron";
import { GoldenChefsHat } from "../Item/all/GoldenChefsHat";
import { GreenDHideBody } from "../Item/all/GreenDHideBody";
import { GreenDHideChaps } from "../Item/all/GreenDHideChaps";
import { HamJoint } from "../Item/all/HamJoint";
import { IronBoots } from "../Item/all/IronBoots";
import { IronFullHelm } from "../Item/all/IronFullHelm";
import { IronFullHelmT } from "../Item/all/IronFullHelmT";
import { IronPlatebody } from "../Item/all/IronPlatebody";
import { IronPlatebodyT } from "../Item/all/IronPlatebodyT";
import { IronPlatelegs } from "../Item/all/IronPlatelegs";
import { LawRune } from "../Item/all/LawRune";
import { MasterScrollBookEmpty } from "../Item/all/MasterScrollBookEmpty";
import { MindRune } from "../Item/all/MindRune";
import { MithrilBoots } from "../Item/all/MithrilBoots";
import { MithrilFullHelm } from "../Item/all/MithrilFullHelm";
import { MithrilPlatebody } from "../Item/all/MithrilPlatebody";
import { MithrilPlatelegs } from "../Item/all/MithrilPlatelegs";
import { MithrilShieldT } from "../Item/all/MithrilShieldT";
import { MonksRobeG } from "../Item/all/MonksRobeG";
import { MonksRobeTopG } from "../Item/all/MonksRobeTopG";
import { NatureRune } from "../Item/all/NatureRune";
import { RainBow } from "../Item/all/RainBow";
import { RangerBoots } from "../Item/all/RangerBoots";
import { RangerGloves } from "../Item/all/RangerGloves";
import { RangerLegs } from "../Item/all/RangerLegs";
import { RangerTunic } from "../Item/all/RangerTunic";
import { RedDHideBody } from "../Item/all/RedDHideBody";
import { RedDHideChaps } from "../Item/all/RedDHideChaps";
import { RedElegantShirt } from "../Item/all/RedElegantShirt";
import { RuneFullHelm } from "../Item/all/RuneFullHelm";
import { RuneFullHelmT } from "../Item/all/RuneFullHelmT";
import { RuneMediumHelm } from "../Item/all/RuneMediumHelm";
import { RunePlatebody } from "../Item/all/RunePlatebody";
import { RunePlatebodyT } from "../Item/all/RunePlatebodyT";
import { RunePlatelegs } from "../Item/all/RunePlatelegs";
import { RuniteBar } from "../Item/all/RuniteBar";
import { Salmon } from "../Item/all/Salmon";
import { StaffOfAir } from "../Item/all/StaffOfAir";
import { StaffOfBobTheCat } from "../Item/all/StaffOfBobTheCat";
import { SteelBoots } from "../Item/all/SteelBoots";
import { SteelFullHelm } from "../Item/all/SteelFullHelm";
import { SteelFullHelmT } from "../Item/all/SteelFullHelmT";
import { SteelPickaxe } from "../Item/all/SteelPickaxe";
import { SteelPlatebody } from "../Item/all/SteelPlatebody";
import { SteelPlatebodyT } from "../Item/all/SteelPlatebodyT";
import { SteelPlatelegs } from "../Item/all/SteelPlatelegs";
import { StudiedBody } from "../Item/all/StudiedBody";
import { StuddedChaps } from "../Item/all/StuddedChaps";
import { TeamCapeI } from "../Item/all/TeamCapeI";
import { TeamCapeX } from "../Item/all/TeamCapeX";
import { TeamCapeZero } from "../Item/all/TeamCapeZero";
import { ThammaronsSceptre } from "../Item/all/ThammaronsSceptre";
import { ThirdAgeLongsword } from "../Item/all/ThirdAgeLongsword";
import { ThirdAgePlatebody } from "../Item/all/ThirdAgePlatebody";
import { ThirdAgePlatelegs } from "../Item/all/ThirdAgePlatelegs";
import { Trout } from "../Item/all/Trout";
import { ThirdAgeAxe } from "../Item/all/ThirdAgeAxe";
import { ThirdAgeBow } from "../Item/all/ThirdAgeBow";
import { ThirdAgeCloak } from "../Item/all/ThirdAgeCloak";
import { ThirdAgeDruidicCloak } from "../Item/all/ThirdAgeDruidicCloak";
import { ThirdAgeDruidicRobeBottoms } from "../Item/all/ThirdAgeDruidicRobeBottoms";
import { ThirdAgeDruidicRobeTop } from "../Item/all/ThirdAgeDruidicRobeTop";
import { ThirdAgeDruidicStaff } from "../Item/all/ThirdAgeDruidicStaff";
import { ThirdAgeFullHelmet } from "../Item/all/ThirdAgeFullHelmet";
import { ThirdAgeKiteshield } from "../Item/all/ThirdAgeKiteshield";
import { ThirdAgeMageHat } from "../Item/all/ThirdAgeMageHat";
import { ThirdAgePickaxe } from "../Item/all/ThirdAgePickaxe";
import { ThirdAgeRangeCoif } from "../Item/all/ThirdAgeRangeCoif";
import { ThirdAgeRangeLegs } from "../Item/all/ThirdAgeRangeLegs";
import { ThirdAgeRangeTop } from "../Item/all/ThirdAgeRangeTop";
import { ThirdAgeRobe } from "../Item/all/ThirdAgeRobe";
import { ThirdAgeRobeTop } from "../Item/all/ThirdAgeRobeTop";
import { ThirdAgeVambraces } from "../Item/all/ThirdAgeVambraces";
import { ThirdAgeWand } from "../Item/all/ThirdAgeWand";
import { AdamantCane } from "../Item/all/AdamantCane";
import { AdamantDragonMask } from "../Item/all/AdamantDragonMask";
import { AdamantPickaxe } from "../Item/all/AdamantPickaxe";
import { Afro } from "../Item/all/Afro";
import { AleOfTheGods } from "../Item/all/AleOfTheGods";
import { AmuletOfDefenceT } from "../Item/all/AmuletOfDefenceT";
import { AncientBlessing } from "../Item/all/AncientBlessing";
import { AncientBracers } from "../Item/all/AncientBracers";
import { AncientChaps } from "../Item/all/AncientChaps";
import { AncientCloak } from "../Item/all/AncientCloak";
import { AncientCoif } from "../Item/all/AncientCoif";
import { AncientCrozier } from "../Item/all/AncientCrozier";
import { AncientKiteshield } from "../Item/all/AncientKiteshield";
import { AncientMitre } from "../Item/all/AncientMitre";
import { AncientPage1 } from "../Item/all/AncientPage1";
import { AncientPage2 } from "../Item/all/AncientPage2";
import { AncientStole } from "../Item/all/AncientStole";
import { AnguishOrnamentKit } from "../Item/all/AnguishOrnamentKit";
import { AnkouGloves } from "../Item/all/AnkouGloves";
import { AnkouMask } from "../Item/all/AnkouMask";
import { AnkouSocks } from "../Item/all/AnkouSocks";
import { AnkouTop } from "../Item/all/AnkouTop";
import { ArceuusBanner } from "../Item/all/ArceuusBanner";
import { ArceuusHood } from "../Item/all/ArceuusHood";
import { ArmadylBracers } from "../Item/all/ArmadylBracers";
import { ArmadylChaps } from "../Item/all/ArmadylChaps";
import { ArmadylCloak } from "../Item/all/ArmadylCloak";
import { ArmadylCoif } from "../Item/all/ArmadylCoif";
import { ArmadylCrozier } from "../Item/all/ArmadylCrozier";
import { ArmadylGodswordOrnamentKit } from "../Item/all/ArmadylGodswordOrnamentKit";
import { ArmadylKiteshield } from "../Item/all/ArmadylKiteshield";
import { ArmadylMitre } from "../Item/all/ArmadylMitre";
import { ArmadylPage1 } from "../Item/all/ArmadylPage1";
import { ArmadylPage2 } from "../Item/all/ArmadylPage2";
import { ArmadylPage3 } from "../Item/all/ArmadylPage3";
import { ArmadylPage4 } from "../Item/all/ArmadylPage4";
import { ArmadylStole } from "../Item/all/ArmadylStole";
import { BandosBracers } from "../Item/all/BandosBracers";
import { BandosChaps } from "../Item/all/BandosChaps";
import { BandosCloak } from "../Item/all/BandosCloak";
import { BandosCoif } from "../Item/all/BandosCoif";
import { BandosCrozier } from "../Item/all/BandosCrozier";
import { BandosGodswordOrnamentKit } from "../Item/all/BandosGodswordOrnamentKit";
import { BandosKiteshield } from "../Item/all/BandosKiteshield";
import { BandosMitre } from "../Item/all/BandosMitre";
import { BandosPage1 } from "../Item/all/BandosPage1";
import { BandosPage2 } from "../Item/all/BandosPage2";
import { BandosPage3 } from "../Item/all/BandosPage3";
import { BandosPage4 } from "../Item/all/BandosPage4";
import { BandosStole } from "../Item/all/BandosStole";
import { BearFeet } from "../Item/all/BearFeet";
import { BigPirateHat } from "../Item/all/BigPirateHat";
import { BlackBoater } from "../Item/all/BlackBoater";
import { BloodRune } from "../Item/all/BloodRune";
import { BlackCavalier } from "../Item/all/BlackCavalier";
import { BlackDemonMask } from "../Item/all/BlackDemonMask";
import { BlackDragonhide } from "../Item/all/BlackDragonhide";
import { BlackDragonMask } from "../Item/all/BlackDragonMask";
import { BlackHeadband } from "../Item/all/BlackHeadband";
import { BlackLeprechaunHat } from "../Item/all/BlackLeprechaunHat";
import { BlackUnicornMask } from "../Item/all/BlackUnicornMask";
import { BlueBoater } from "../Item/all/BlueBoater";
import { BlueDragonMask } from "../Item/all/BlueDragonMask";
import { BlueFirelighter } from "../Item/all/BlueFirelighter";
import { BlueHeadband } from "../Item/all/BlueHeadband";
import { BootsOfDarkness } from "../Item/all/BootsOfDarkness";
import { BowlWig } from "../Item/all/BowlWig";
import { Briefcase } from "../Item/all/Briefcase";
import { BronzeDragonMask } from "../Item/all/BronzeDragonMask";
import { BrownHeadband } from "../Item/all/BrownHeadband";
import { BucketHelm } from "../Item/all/BucketHelm";
import { BucketHelmG } from "../Item/all/BucketHelmG";
import { Cabbage } from "../Item/all/Cabbage";
import { CabbageRoundShield } from "../Item/all/CabbageRoundShield";
import { CatMask } from "../Item/all/CatMask";
import { CrierBell } from "../Item/all/CrierBell";
import { CrierCoat } from "../Item/all/CrierCoat";
import { CrierHat } from "../Item/all/CrierHat";
import { CrystalKey } from "../Item/all/CrystalKey";
import { DarkBowTie } from "../Item/all/DarkBowTie";
import { DarkCavalier } from "../Item/all/DarkCavalier";
import { DarkInfinityColourKit } from "../Item/all/DarkInfinityColourKit";
import { DarkTrousers } from "../Item/all/DarkTrousers";
import { DarkTuxedoCuffs } from "../Item/all/DarkTuxedoCuffs";
import { DarkTuxedoJacket } from "../Item/all/DarkTuxedoJacket";
import { DarkTuxedoShoes } from "../Item/all/DarkTuxedoShoes";
import { Deerstalker } from "../Item/all/Deerstalker";
import { DemonFeet } from "../Item/all/DemonFeet";
import { DragonBattleaxe } from "../Item/all/DragonBattleaxe";
import { DragonBootsOrnamentKit } from "../Item/all/DragonBootsOrnamentKit";
import { DragonCane } from "../Item/all/DragonCane";
import { DragonChainbodyOrnamentKit } from "../Item/all/DragonChainbodyOrnamentKit";
import { DragonDagger } from "../Item/all/DragonDagger";
import { DragonDefenderOrnamentKit } from "../Item/all/DragonDefenderOrnamentKit";
import { DragonFullHelmOrnamentKit } from "../Item/all/DragonFullHelmOrnamentKit";
import { DragonHalberd } from "../Item/all/DragonHalberd";
import { DragonKiteshieldOrnamentKit } from "../Item/all/DragonKiteshieldOrnamentKit";
import { DragonLegsSkirtOrnamentKit } from "../Item/all/DragonLegsSkirtOrnamentKit";
import { DragonMace } from "../Item/all/DragonMace";
import { DragonNecklace } from "../Item/all/DragonNecklace";
import { DragonPlatebodyOrnamentKit } from "../Item/all/DragonPlatebodyOrnamentKit";
import { DragonScimitar } from "../Item/all/DragonScimitar";
import { DragonScimitarOrnamentKit } from "../Item/all/DragonScimitarOrnamentKit";
import { DragonSqShieldOrnamentKit } from "../Item/all/DragonSqShieldOrnamentKit";
import { DragonstoneBracelet } from "../Item/all/DragonstoneBracelet";
import { DragonstoneRing } from "../Item/all/DragonstoneRing";
import { EnchantedHat } from "../Item/all/EnchantedHat";
import { EnchantedRobe } from "../Item/all/EnchantedRobe";
import { EnchantedTop } from "../Item/all/EnchantedTop";
import { FancyTiara } from "../Item/all/FancyTiara";
import { FremennikKilt } from "../Item/all/FremennikKilt";
import { FrogSlippers } from "../Item/all/FrogSlippers";
import { FuryOrnamentKit } from "../Item/all/FuryOrnamentKit";
import { GiantBoot } from "../Item/all/GiantBoot";
import { Gilded2hSword } from "../Item/all/Gilded2hSword";
import { GildedAxe } from "../Item/all/GildedAxe";
import { GildedBoots } from "../Item/all/GildedBoots";
import { GildedChainbody } from "../Item/all/GildedChainbody";
import { GildedCoif } from "../Item/all/GildedCoif";
import { GildedHasta } from "../Item/all/GildedHasta";
import { GildedKiteshield } from "../Item/all/GildedKiteshield";
import { GildedMedHelm } from "../Item/all/GildedMedHelm";
import { GildedPickaxe } from "../Item/all/GildedPickaxe";
import { GildedScimitar } from "../Item/all/GildedScimitar";
import { GildedSpade } from "../Item/all/GildedSpade";
import { GildedSpear } from "../Item/all/GildedSpear";
import { GildedSqShield } from "../Item/all/GildedSqShield";
import { GlovesOfDarkness } from "../Item/all/GlovesOfDarkness";
import { GnomishFirelighter } from "../Item/all/GnomishFirelighter";
import { GoldHeadband } from "../Item/all/GoldHeadband";
import { GreaterDemonMask } from "../Item/all/GreaterDemonMask";
import { GreenBoater } from "../Item/all/GreenBoater";
import { GreenDragonMask } from "../Item/all/GreenDragonMask";
import { GreenFirelighter } from "../Item/all/GreenFirelighter";
import { GreenHeadband } from "../Item/all/GreenHeadband";
import { GrimyRanarrWeed } from "../Item/all/GrimyRanarrWeed";
import { GrimySnapdragon } from "../Item/all/GrimySnapdragon";
import { GrimyToadflax } from "../Item/all/GrimyToadflax";
import { GuthixBracers } from "../Item/all/GuthixBracers";
import { GuthixChaps } from "../Item/all/GuthixChaps";
import { GuthixCloak } from "../Item/all/GuthixCloak";
import { GuthixCoif } from "../Item/all/GuthixCoif";
import { GuthixKiteshield } from "../Item/all/GuthixKiteshield";
import { GuthixMitre } from "../Item/all/GuthixMitre";
import { GuthixPage1 } from "../Item/all/GuthixPage1";
import { GuthixPage2 } from "../Item/all/GuthixPage2";
import { GuthixPage3 } from "../Item/all/GuthixPage3";
import { GuthixPage4 } from "../Item/all/GuthixPage4";
import { HalfMoonSpectacles } from "../Item/all/HalfMoonSpectacles";
import { HideVambraces } from "../Item/all/HideVambraces";
import { HolyBlessing } from "../Item/all/HolyBlessing";
import { HolyWraps } from "../Item/all/HolyWraps";
import { HonourableBlessing } from "../Item/all/HonourableBlessing";
import { HoodOfDarkness } from "../Item/all/HoodOfDarkness";
import { HosidiusBanner } from "../Item/all/HosidiusBanner";
import { HosidiusHood } from "../Item/all/HosidiusHood";
import { IronDragonMask } from "../Item/all/IronDragonMask";
import { JesterCape } from "../Item/all/JesterCape";
import { JungleDemonMask } from "../Item/all/JungleDemonMask";
import { Katana } from "../Item/all/Katana";
import { LavaDragonMask } from "../Item/all/LavaDragonMask";
import { LeftEyePatch } from "../Item/all/LeftEyePatch";
import { LeprechaunHat } from "../Item/all/LeprechaunHat";
import { LesserDemonMask } from "../Item/all/LesserDemonMask";
import { LightBowTie } from "../Item/all/LightBowTie";
import { LightInfinityColourKit } from "../Item/all/LightInfinityColourKit";
import { LightTrousers } from "../Item/all/LightTrousers";
import { LightTuxedoCuffs } from "../Item/all/LightTuxedoCuffs";
import { LightTuxedoJacket } from "../Item/all/LightTuxedoJacket";
import { LightTuxedoShoes } from "../Item/all/LightTuxedoShoes";
import { LimpwurtRoot } from "../Item/all/LimpwurtRoot";
import { LoopHalfOfKey } from "../Item/all/LoopHalfOfKey";
import { LovakengjBanner } from "../Item/all/LovakengjBanner";
import { LovakengjHood } from "../Item/all/LovakengjHood";
import { MagicSeed } from "../Item/all/MagicSeed";
import { MahoganyPlank } from "../Item/all/MahoganyPlank";
import { MithrilDragonMask } from "../Item/all/MithrilDragonMask";
import { MoleSlippers } from "../Item/all/MoleSlippers";
import { Monocle } from "../Item/all/Monocle";
import { MusketeerHat } from "../Item/all/MusketeerHat";
import { MusketeerPants } from "../Item/all/MusketeerPants";
import { MusketeerTabard } from "../Item/all/MusketeerTabard";
import { NavyCavalier } from "../Item/all/NavyCavalier";
import { OakPlank } from "../Item/all/OakPlank";
import { OccultOrnamentKit } from "../Item/all/OccultOrnamentKit";
import { OldDemonMask } from "../Item/all/OldDemonMask";
import { OnyxBoltsE } from "../Item/all/OnyxBoltsE";
import { OnyxBoltTips } from "../Item/all/OnyxBoltTips";
import { OrangeBoater } from "../Item/all/OrangeBoater";
import { PalmTreeSeed } from "../Item/all/PalmTreeSeed";
import { PeacefulBlessing } from "../Item/all/PeacefulBlessing";
import { PenguinMask } from "../Item/all/PenguinMask";
import { PinkBoater } from "../Item/all/PinkBoater";
import { PinkHeadband } from "../Item/all/PinkHeadband";
import { PiscariliusBanner } from "../Item/all/PiscariliusBanner";
import { PiscariliusHood } from "../Item/all/PiscariliusHood";
import { PurpleBoater } from "../Item/all/PurpleBoater";
import { PurpleFirelighter } from "../Item/all/PurpleFirelighter";
import { PurpleSweets } from "../Item/all/PurpleSweets";
import { RedBoater } from "../Item/all/RedBoater";
import { RedCavalier } from "../Item/all/RedCavalier";
import { RedDragonMask } from "../Item/all/RedDragonMask";
import { RedFirelighter } from "../Item/all/RedFirelighter";
import { RedHeadband } from "../Item/all/RedHeadband";
import { RingOfCoins } from "../Item/all/RingOfCoins";
import { RingOfNature } from "../Item/all/RingOfNature";
import { RobeBottomOfDarkness } from "../Item/all/RobeBottomOfDarkness";
import { RobeTopOfDarkness } from "../Item/all/RobeTopOfDarkness";
import { RobinHoodHat } from "../Item/all/RobinHoodHat";
import { RoyalCrown } from "../Item/all/RoyalCrown";
import { RoyalGownBottom } from "../Item/all/RoyalGownBottom";
import { RoyalGownTop } from "../Item/all/RoyalGownTop";
import { RoyalSceptre } from "../Item/all/RoyalSceptre";
import { RuneCrossbow } from "../Item/all/RuneCrossbow";
import { RuneDragonMask } from "../Item/all/RuneDragonMask";
import { RuneKiteshield } from "../Item/all/RuneKiteshield";
import { RuneKiteshieldG } from "../Item/all/RuneKiteshieldG";
import { RuneKiteshieldT } from "../Item/all/RuneKiteshieldT";
import { RunePickaxe } from "../Item/all/RunePickaxe";
import { RuneScimitarOrnamentKitGuthix } from "../Item/all/RuneScimitarOrnamentKitGuthix";
import { RuneScimitarOrnamentKitSaradomin } from "../Item/all/RuneScimitarOrnamentKitSaradomin";
import { RuneScimitarOrnamentKitZamorak } from "../Item/all/RuneScimitarOrnamentKitZamorak";
import { RuneShieldH1 } from "../Item/all/RuneShieldH1";
import { RuneShieldH2 } from "../Item/all/RuneShieldH2";
import { RuneShieldH3 } from "../Item/all/RuneShieldH3";
import { RuneShieldH4 } from "../Item/all/RuneShieldH4";
import { RuneShieldH5 } from "../Item/all/RuneShieldH5";
import { RuniteOre } from "../Item/all/RuniteOre";
import { SagaciousSpectacles } from "../Item/all/SagaciousSpectacles";
import { SamuraiBoots } from "../Item/all/SamuraiBoots";
import { SamuraiGloves } from "../Item/all/SamuraiGloves";
import { SamuraiGreaves } from "../Item/all/SamuraiGreaves";
import { SamuraiKasa } from "../Item/all/SamuraiKasa";
import { SamuraiShirt } from "../Item/all/SamuraiShirt";
import { SandwichLadyBottom } from "../Item/all/SandwichLadyBottom";
import { SandwichLadyHat } from "../Item/all/SandwichLadyHat";
import { SandwichLadyTop } from "../Item/all/SandwichLadyTop";
import { SaradominBracers } from "../Item/all/SaradominBracers";
import { SaradominChaps } from "../Item/all/SaradominChaps";
import { SaradominCloak } from "../Item/all/SaradominCloak";
import { SaradominCoif } from "../Item/all/SaradominCoif";
import { SaradominGodswordOrnamentKit } from "../Item/all/SaradominGodswordOrnamentKit";
import { SaradominKiteshield } from "../Item/all/SaradominKiteshield";
import { SaradominMitre } from "../Item/all/SaradominMitre";
import { SaradominPage1 } from "../Item/all/SaradominPage1";
import { SaradominPage2 } from "../Item/all/SaradominPage2";
import { SaradominPage3 } from "../Item/all/SaradominPage3";
import { SaradominPage4 } from "../Item/all/SaradominPage4";
import { SFeet } from "../Item/all/SFeet";
import { ShayzienBanner } from "../Item/all/ShayzienBanner";
import { ShayzienHood } from "../Item/all/ShayzienHood";
import { SHead } from "../Item/all/SHead";
import { BlacksmithsHelm } from "../Item/all/BlacksmithsHelm";
import { MummysBody } from "../Item/all/MummysBody";
import { PiratesHat } from "../Item/all/PiratesHat";
import { UrisHat } from "../Item/all/UrisHat";
import { ShoulderParrot } from "../Item/all/ShoulderParrot";
import { SLeggings } from "../Item/all/SLeggings";
import { SLegs } from "../Item/all/SLegs";
import { SteelDragonMask } from "../Item/all/SteelDragonMask";
import { TanCavalier } from "../Item/all/TanCavalier";
import { TeakPlank } from "../Item/all/TeakPlank";
import { ToothHalfOfKey } from "../Item/all/ToothHalfOfKey";
import { TopHat } from "../Item/all/TopHat";
import { TormentedOrnamentKit } from "../Item/all/TormentedOrnamentKit";
import { Torstol } from "../Item/all/Torstol";
import { TortureOrnamentKit } from "../Item/all/TortureOrnamentKit";
import { UnholyBlessing } from "../Item/all/UnholyBlessing";
import { WarBlessing } from "../Item/all/WarBlessing";
import { WhiteBoater } from "../Item/all/WhiteBoater";
import { WhiteCavalier } from "../Item/all/WhiteCavalier";
import { WhiteFirelighter } from "../Item/all/WhiteFirelighter";
import { WhiteHeadband } from "../Item/all/WhiteHeadband";
import { WhiteUnicornMask } from "../Item/all/WhiteUnicornMask";
import { WineOfZamorak } from "../Item/all/WineOfZamorak";
import { WolfCloak } from "../Item/all/WolfCloak";
import { WolfMask } from "../Item/all/WolfMask";
import { YewSeed } from "../Item/all/YewSeed";
import { ZamorakBracers } from "../Item/all/ZamorakBracers";
import { ZamorakChaps } from "../Item/all/ZamorakChaps";
import { ZamorakCloak } from "../Item/all/ZamorakCloak";
import { ZamorakCoif } from "../Item/all/ZamorakCoif";
import { ZamorakGodswordOrnamentKit } from "../Item/all/ZamorakGodswordOrnamentKit";
import { ZamorakKiteshield } from "../Item/all/ZamorakKiteshield";
import { ZamorakMitre } from "../Item/all/ZamorakMitre";
import { ZamorakPage1 } from "../Item/all/ZamorakPage1";
import { ZamorakPage2 } from "../Item/all/ZamorakPage2";
import { ZamorakPage3 } from "../Item/all/ZamorakPage3";
import { ZamorakPage4 } from "../Item/all/ZamorakPage4";
import { WaterRune } from "../Item/all/WaterRune";
import { WillowCompBow } from "../Item/all/WillowCompBow";
import { WillowLongbow } from "../Item/all/WillowLongbow";
import { WillowShortbow } from "../Item/all/WillowShortbow";
import { WoodenShieldG } from "../Item/all/WoodenShieldG";
import { AncientDHideBody } from "../Item/all/AncientDHideBody";
import { AncientDHideBoots } from "../Item/all/AncientDHideBoots";
import { AncientDHideShield } from "../Item/all/AncientDHideShield";
import { AntiVenomPlus4 } from "../Item/all/AntiVenomPlus4";
import { ArmadylDHideBody } from "../Item/all/ArmadylDHideBody";
import { ArmadylDHideBoots } from "../Item/all/ArmadylDHideBoots";
import { ArmadylDHideShield } from "../Item/all/ArmadylDHideShield";
import { BandosDHideBody } from "../Item/all/BandosDHideBody";
import { BandosDHideBoots } from "../Item/all/BandosDHideBoots";
import { BandosDHideShield } from "../Item/all/BandosDHideShield";
import { ExtendedAntifire4 } from "../Item/all/ExtendedAntifire4";
import { GildedDHideBody } from "../Item/all/GildedDHideBody";
import { GildedDHideChaps } from "../Item/all/GildedDHideChaps";
import { GuthixDHideBody } from "../Item/all/GuthixDHideBody";
import { GuthixDHideBoots } from "../Item/all/GuthixDHideBoots";
import { GuthixDHideShield } from "../Item/all/GuthixDHideShield";
import { MonksRobeT } from "../Item/all/MonksRobeT";
import { MonksRobeTopT } from "../Item/all/MonksRobeTopT";
import { MummysHands } from "../Item/all/MummysHands";
import { RangingPotion4 } from "../Item/all/RangingPotion4";
import { SaradominBrew4 } from "../Item/all/SaradominBrew4";
import { SaradominDHideBody } from "../Item/all/SaradominDHideBody";
import { SaradominDHideBoots } from "../Item/all/SaradominDHideBoots";
import { SaradominDHideShield } from "../Item/all/SaradominDHideShield";
import { SuperRestore4 } from "../Item/all/SuperRestore4";
import { ZamorakDHideBody } from "../Item/all/ZamorakDHideBody";
import { ZamorakDHideBoots } from "../Item/all/ZamorakDHideBoots";
import { ZamorakDHideShield } from "../Item/all/ZamorakDHideShield";

/**
 * Reward odds mapping for Beginner clue scrolls
 * Beginner caskets have a three-tier table structure based on wiki data:
 * https://oldschool.runescape.wiki/w/Reward_casket_(beginner)
 *
 * Key mechanics:
 * - Caskets contain 1-3 items (weighted towards 2)
 * - Unique/Cabbage roll: 1/12 (41/492)
 *   - 50% Cabbage (5-9 noted) at 1/24 overall
 *   - 50% Specific unique at 1/360 overall (1/15 items)
 * - Black items table: 11/492 (18 items at 1/805.1 each, or 11/8856)
 * - Common items: 440/492 (weapons, armor, runes, misc food)
 *
 * Average loot value per roll: 1,427 gp
 * Average casket value: 2,854 gp (2 rolls average)
 * Average clues for all uniques: 597
 */

export interface RewardEntry {
  item: Item;
  rarity: number;
  quantity?: number;
  quantityMin?: number;
  quantityMax?: number;
  noted?: boolean;
}

interface RewardTable {
  [itemName: string]: RewardEntry;
}

function withDefaultQuantity(table: RewardTable, quantity = 1): RewardTable {
  return Object.fromEntries(Object.entries(table).map(([itemName, reward]) => [itemName, { ...reward, quantity: reward.quantity ?? quantity }])) as RewardTable;
}

/**
 * Unique items table - rolled 1/12 chance, then 1/15 of unique portion
 * Overall rarity per item: 1/360
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Beginner_clue_uniques
 */
const BEGINNER_UNIQUE_ITEMS: RewardTable = {
  "Mole slippers": { item: MoleSlippers, rarity: 360 }, // Placeholder - 154,996 gp
  "Frog slippers": { item: FrogSlippers, rarity: 360 }, // Placeholder - 36,505 gp
  "Bear feet": { item: BearFeet, rarity: 360 }, // Placeholder - 19,600 gp
  "Demon feet": { item: DemonFeet, rarity: 360 }, // Placeholder - 31,406 gp
  "Jester cape": { item: JesterCape, rarity: 360 }, // Placeholder - 15,561 gp
  "Shoulder parrot": { item: ShoulderParrot, rarity: 360 }, // Placeholder - 84,055 gp
  "Monk's robe top (t)": { item: MonksRobeTopT, rarity: 360 }, // Placeholder - 20,771 gp
  "Monk's robe (t)": { item: MonksRobeT, rarity: 360 }, // Placeholder - 8,358 gp
  "Amulet of defence (t)": { item: AmuletOfDefenceT, rarity: 360 }, // Placeholder - 2,468 gp
  "Sandwich lady hat": { item: SandwichLadyHat, rarity: 360 }, // Placeholder - 5,089 gp
  "Sandwich lady top": { item: SandwichLadyTop, rarity: 360 }, // Placeholder - 4,397 gp
  "Sandwich lady bottom": { item: SandwichLadyBottom, rarity: 360 }, // Placeholder - 2,435 gp
  "Rune scimitar ornament kit (guthix)": { item: RuneScimitarOrnamentKitGuthix, rarity: 360 }, // Placeholder - 3,499 gp
  "Rune scimitar ornament kit (saradomin)": { item: RuneScimitarOrnamentKitSaradomin, rarity: 360 }, // Placeholder - 3,361 gp
  "Rune scimitar ornament kit (zamorak)": { item: RuneScimitarOrnamentKitZamorak, rarity: 360 }, // Placeholder - 5,262 gp
};

/**
 * Cabbage from unique roll (50% chance when hitting 1/12 unique table)
 * Overall rarity: 1/24
 */
const BEGINNER_CABBAGE_TABLE: RewardTable = {
  Cabbage: { item: Cabbage, rarity: 24 }, // Placeholder
};

/**
 * Black items table - 11/492 chance to roll, then 1/18 for each item
 * Overall rarity per item: 1/805.1 (11/8856)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Black_items_table
 */
const BEGINNER_BLACK_ITEMS_TABLE: RewardTable = {
  "Black 2h sword": { item: Black2hSword, rarity: 805 },
  "Black axe": { item: BlackAxe, rarity: 805 },
  "Black battleaxe": { item: BlackBattleaxe, rarity: 805 },
  "Black chainbody": { item: BlackChainbody, rarity: 805 },
  "Black dagger": { item: BlackDagger, rarity: 805 },
  "Black full helm": { item: BlackFullHelm, rarity: 805 },
  "Black kiteshield": { item: BlackKiteshield, rarity: 805 },
  "Black longsword": { item: BlackLongsword, rarity: 805 },
  "Black mace": { item: BlackMace, rarity: 805 },
  "Black med helm": { item: BlackMedHelm, rarity: 805 },
  "Black pickaxe": { item: BlackPickaxe, rarity: 805 },
  "Black platebody": { item: BlackPlatebody, rarity: 805 },
  "Black plateskirt": { item: BlackPlatelegs, rarity: 805 }, // Placeholder
  "Black platelegs": { item: BlackPlatelegs, rarity: 805 },
  "Black sq shield": { item: BlackPickaxe, rarity: 805 }, // Placeholder
  "Black scimitar": { item: BlackScimitar, rarity: 805 },
  "Black sword": { item: BlackSword, rarity: 805 },
  "Black warhammer": { item: BlackWarhammer, rarity: 805 },
};

/**
 * Common items table - 440/492 of all rolls
 * Includes weapons, armor, runes, ammunition, and food
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Weapons_and_armour
 */
const BEGINNER_COMMON_ITEMS_TABLE: RewardTable = {
  // Weapons
  Shortbow: { item: Shortbow, rarity: 45 },
  Longbow: { item: Longbow, rarity: 45 },
  "Oak shortbow": { item: OakShortbow, rarity: 45 },
  "Oak longbow": { item: OakLongbow, rarity: 45 },
  "Iron pickaxe": { item: IronPickaxe, rarity: 45 },
  "Staff of air": { item: StaffOfAir, rarity: 45 },
  "Staff of water": { item: StaffOfWater, rarity: 45 },
  "Staff of earth": { item: StaffOfEarth, rarity: 45 },
  "Staff of fire": { item: StaffOfFire, rarity: 45 },

  // Steel armor
  "Steel full helm": { item: SteelFullHelm, rarity: 45 },
  "Steel platebody": { item: SteelPlatebody, rarity: 45 },
  "Steel platelegs": { item: SteelPlatelegs, rarity: 45 },
  "Steel plateskirt": { item: SteelPlatelegs, rarity: 45 }, // Placeholder
  "Steel longsword": { item: SteelLongsword, rarity: 45 },
  "Steel dagger": { item: SteelDagger, rarity: 45 },
  "Steel axe": { item: SteelAxe, rarity: 45 },
  "Steel battleaxe": { item: BlackBattleaxe, rarity: 45 },

  // Leather armor
  "Leather cowl": { item: LeatherCowl, rarity: 45 },
  "Leather body": { item: LeatherBody, rarity: 45 },
  "Leather chaps": { item: StuddedChaps, rarity: 45 }, // Placeholder
  "Leather vambraces": { item: LeatherVambraces, rarity: 45 },
  "Hardleather body": { item: HardleatherBody, rarity: 45 },

  // Wizard robes
  "Blue wizard hat": { item: BlueWizardHat, rarity: 45 },
  "Blue wizard robe": { item: BlueWizardRobe, rarity: 45 },
  "Wizard hat": { item: WizardHat, rarity: 45 },
  "Black robe": { item: BlackRobe, rarity: 45 },

  // Runes - quantities vary (15-35 or 2-9 or 2-7 noted)
  "Air rune": { item: AirRune, rarity: 45 },
  "Mind rune": { item: MindRune, rarity: 45 },
  "Water rune": { item: WaterRune, rarity: 45 },
  "Earth rune": { item: EarthRune, rarity: 45 },
  "Fire rune": { item: FireRune, rarity: 45 },
  "Body rune": { item: BodyRune, rarity: 45 },
  "Chaos rune": { item: ChaosRune, rarity: 45 },
  "Nature rune": { item: NatureRune, rarity: 45 },
  "Law rune": { item: LawRune, rarity: 45 },

  // Ammunition
  "Bronze arrow": { item: BronzeArrow, rarity: 45 },
  "Iron arrow": { item: IronArrow, rarity: 45 },

  // Food
  Shrimps: { item: Shrimps, rarity: 45 },
  Sardine: { item: Sardine, rarity: 45 },
  Herring: { item: Herring, rarity: 45 },
};

/**
 * Beginner rewards organized by table structure
 * Table weights define the probability of selecting each table per roll
 *
 * Weights represent proportions that sum to 492:
 * - Unique/Cabbage: 41 weight = 1/12 chance (41/492)
 * - Black items: 11 weight = 11/492 chance
 * - Common items: 440 weight = 440/492 chance
 */
export const BEGINNER_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 41, // 1/12 overall chance
      items: {
        ...BEGINNER_UNIQUE_ITEMS,
        ...BEGINNER_CABBAGE_TABLE,
      },
      description: "Unique items and cabbage table (1/12)",
    },
    {
      name: "black",
      weight: 11, // 11/492 chance
      items: BEGINNER_BLACK_ITEMS_TABLE,
      description: "Black items table",
    },
    {
      name: "common",
      weight: 440, // 440/492 chance
      items: BEGINNER_COMMON_ITEMS_TABLE,
      description: "Weapons, armor, runes, and food",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...BEGINNER_UNIQUE_ITEMS,
    ...BEGINNER_CABBAGE_TABLE,
    ...BEGINNER_BLACK_ITEMS_TABLE,
    ...BEGINNER_COMMON_ITEMS_TABLE,
  },
};

/**
 * Reward odds mapping for Easy clue scrolls
 * Easy caskets have a three-tier table structure based on wiki data:
 * https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 *
 * Key mechanics:
 * - Caskets contain 2-4 items (weighted distribution)
 * - Easy clue uniques: 122 items with probabilities 247/1080 (22.9%)
 * - Standard table: Weapons, armor, runes, food
 * - Shared items: Pages, blessings, firelighters, teleports
 * - Master clue scroll: 1/50 chance (adds 18,997 gp expected value)
 * - Average per roll value: 11,095 gp
 * - Average casket value (3 rolls): 33,287 gp → 52,285 gp with master clue odds
 */

/**
 * Easy clue unique items table
 * 122 unique items at various rarities
 * Overall unique probability: 247/1080 (22.9%)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(easy)#Easy_clue_uniques
 */
const EASY_UNIQUE_ITEMS: RewardTable = {
  "Willow comp bow": { item: WillowCompBow, rarity: 360 },
  "Amulet of magic (t)": { item: AmuletOfMagicT, rarity: 360 },
  // 1/1404 items (using placeholders for missing classes)
  "Wooden shield (g)": { item: WoodenShieldG, rarity: 1404 },
  "Black full helm (t)": { item: BlackFullHelmT, rarity: 1404 },
  "Black platebody (t)": { item: BlackPlatebodyT, rarity: 1404 },
  "Black platelegs (t)": { item: BlackPlatelegsT, rarity: 1404 },
  "Steel full helm (t)": { item: SteelFullHelmT, rarity: 1404 },
  "Steel platebody (t)": { item: SteelPlatebodyT, rarity: 1404 },
  "Iron full helm (t)": { item: IronFullHelmT, rarity: 1404 },
  "Iron platebody (t)": { item: IronPlatebodyT, rarity: 1404 },
  // Additional 1/1404 items (using placeholders)
  "Black full helm (g)": { item: BlackFullHelm, rarity: 1404 },
  "Black platebody (g)": { item: BlackPlatebody, rarity: 1404 },
  "Black platelegs (g)": { item: BlackPlatelegs, rarity: 1404 },
  "Black shield (h1)": { item: BlackPickaxe, rarity: 1404 },
  "Black helm (h1)": { item: BlackFullHelm, rarity: 1404 },
  "Flared trousers": { item: FlaredTrousers, rarity: 1404 },
  "Black cane": { item: BlackLongsword, rarity: 1404 },
  "Staff of bob the cat": { item: StaffOfBobTheCat, rarity: 1404 },
  "Amulet of power (t)": { item: AmuletOfPowerT, rarity: 1404 },
  "Ham joint": { item: HamJoint, rarity: 1404 },
  "Rain bow": { item: RainBow, rarity: 1404 },
  "Leather body (g)": { item: StudiedBody, rarity: 1404 },
  "Blue wizard hat (g)": { item: Coif, rarity: 1404 },
  "Blue wizard robe (g)": { item: StudiedBody, rarity: 1404 },
  "Black wizard hat (g)": { item: Coif, rarity: 1404 },
  "Black wizard robe (g)": { item: StudiedBody, rarity: 1404 },
  "Saradomin robe top": { item: StudiedBody, rarity: 1404 },
  "Guthix robe top": { item: StudiedBody, rarity: 1404 },
  "Zamorak robe top": { item: StudiedBody, rarity: 1404 },
  "Ancient robe top": { item: StudiedBody, rarity: 1404 },
  "Armadyl robe top": { item: StudiedBody, rarity: 1404 },
  "Bandos robe top": { item: StudiedBody, rarity: 1404 },
  "Bob's red shirt": { item: StudiedBody, rarity: 1404 },
  "Highwayman mask": { item: Coif, rarity: 1404 },
  "Blue beret": { item: Coif, rarity: 1404 },
  "Black beret": { item: Coif, rarity: 1404 },
  "A powdered wig": { item: Coif, rarity: 1404 },
  Beanie: { item: Coif, rarity: 1404 },
  "Imp mask": { item: Coif, rarity: 1404 },
  "Goblin mask": { item: Coif, rarity: 1404 },
  "Sleeping cap": { item: Coif, rarity: 1404 },
  // 1/2808 items
  "Golden chef's hat": { item: GoldenChefsHat, rarity: 2808 },
  "Golden apron": { item: GoldenApron, rarity: 2808 },
  "Red elegant shirt": { item: RedElegantShirt, rarity: 2808 },
  // 1/5616 items
  "Team cape zero": { item: TeamCapeZero, rarity: 5616 },
  "Team cape i": { item: TeamCapeI, rarity: 5616 },
  "Team cape x": { item: TeamCapeX, rarity: 5616 },
  "Cape of skulls": { item: CapeOfSkulls, rarity: 5616 },
  // 1/14040 items
  "Monk's robe top (g)": { item: MonksRobeTopG, rarity: 14040 },
  "Monk's robe (g)": { item: MonksRobeG, rarity: 14040 },
};

/**
 * Standard table for easy clues
 * Weapons, armor, runes, and food
 * Rarity: 1/36 (11/396)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(easy)#Standard_table
 */
const EASY_STANDARD_TABLE: RewardTable = {
  // Weapons and armor
  "Black full helm": { item: BlackFullHelm, rarity: 36 },
  "Black platebody": { item: BlackPlatebody, rarity: 36 },
  "Black platelegs": { item: BlackPlatelegs, rarity: 36 },
  "Black longsword": { item: BlackLongsword, rarity: 36 },
  "Black battleaxe": { item: BlackBattleaxe, rarity: 36 },
  "Black axe": { item: BlackAxe, rarity: 36 },
  "Black dagger": { item: BlackDagger, rarity: 36 },
  "Steel pickaxe": { item: SteelPickaxe, rarity: 36 },
  "Black pickaxe": { item: BlackPickaxe, rarity: 36 },
  Coif: { item: Coif, rarity: 36 },
  "Studded body": { item: StudiedBody, rarity: 36 },
  "Studded chaps": { item: StuddedChaps, rarity: 36 },
  "Willow shortbow": { item: WillowShortbow, rarity: 36 },
  "Staff of air": { item: StaffOfAir, rarity: 36 },
  // Higher rarity weapons
  "Willow longbow": { item: WillowLongbow, rarity: 40 },
  "Amulet of magic": { item: AmuletOfMagic, rarity: 40 },
  // Runes
  "Air rune": { item: AirRune, rarity: 36 },
  "Mind rune": { item: MindRune, rarity: 36 },
  "Water rune": { item: WaterRune, rarity: 36 },
  "Earth rune": { item: EarthRune, rarity: 36 },
  "Fire rune": { item: FireRune, rarity: 36 },
  "Body rune": { item: BodyRune, rarity: 36 },
  "Chaos rune": { item: ChaosRune, rarity: 36 },
  "Nature rune": { item: NatureRune, rarity: 36 },
  "Law rune": { item: LawRune, rarity: 36 },
  // Food
  Trout: { item: Trout, rarity: 36 },
  Salmon: { item: Salmon, rarity: 36 },
};

/**
 * Shared treasure trail items
 * Items shared across multiple clue tiers
 * Various rarities from 1/36 to 1/14040
 */
const EASY_SHARED_ITEMS: RewardTable = {
  Coins: { item: Coins, rarity: 36 },
  "Purple sweets": { item: Coins, rarity: 36 }, // Placeholder for sweets
  "Master scroll book (empty)": { item: MasterScrollBookEmpty, rarity: 792 },
  // Pages (all at 1/864 when on standard table)
  "Saradomin page 1": { item: Coins, rarity: 864 }, // Placeholder
  "Zamorak page 1": { item: Coins, rarity: 864 }, // Placeholder
  "Guthix page 1": { item: Coins, rarity: 864 }, // Placeholder
  "Bandos page 1": { item: Coins, rarity: 864 }, // Placeholder
  "Armadyl page 1": { item: Coins, rarity: 864 }, // Placeholder
  "Ancient page 1": { item: Coins, rarity: 864 }, // Placeholder
};

/**
 * Master clue scroll
 * 1/50 chance per casket opening
 * Tertiary reward, not part of main loot table
 */
const EASY_MASTER_CLUE: RewardTable = {
  "Clue scroll (master)": { item: Coins, rarity: 50 }, // Placeholder for master clue
};

/**
 * Easy rewards organized by table structure
 * Table weights represent the proportion of rolls hitting each table
 *
 * Beginner uses 1080 total weight units:
 * - Unique/standard items dominate
 * - Master clue is separate 1/50 mechanic
 */
export const EASY_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 247, // ~23% of rolls hit unique items (247/1080)
      items: EASY_UNIQUE_ITEMS,
      description: "Easy clue unique items (122 items)",
    },
    {
      name: "standard",
      weight: 833, // Standard weapons, armor, runes, food (remaining weight)
      items: EASY_STANDARD_TABLE,
      description: "Standard weapons, armor, runes, food (1/36 base)",
    },
    {
      name: "shared",
      weight: 0, // Blended into other tables
      items: EASY_SHARED_ITEMS,
      description: "Shared treasure trail items (pages, blessings, etc)",
    },
    {
      name: "master",
      weight: 0, // Separate 1/50 roll
      items: EASY_MASTER_CLUE,
      description: "Master clue scroll (1/50 special roll)",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...EASY_UNIQUE_ITEMS,
    ...EASY_STANDARD_TABLE,
    ...EASY_SHARED_ITEMS,
    ...EASY_MASTER_CLUE,
  },
};

/**
 * Reward odds mapping for Medium clue scrolls
 * https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 *
 * Key mechanics:
 * - Caskets contain 3-5 items (weighted distribution)
 * - Medium clue uniques: 1/10 per reward roll (100+ items)
 * - Standard table: Weapons, armor, runes, food (1/34.1 base rarity)
 * - Shared items: Coins, purple sweets, scrolls, teleports, blessings, pages
 * - Master clue scroll: 1/30 chance (adds 31,662 gp expected value)
 * - Average loot per roll: 30,860 gp
 * - Average casket value (4 rolls): 123,443 gp → 155,106 gp with master scroll odds
 */

/**
 * Medium clue unique items table
 * 100+ unique items at various rarities
 * Overall unique probability: 1/10 per reward roll
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(medium)#Medium_clue_uniques
 */
const MEDIUM_UNIQUE_ITEMS_BASE: RewardTable = {
  "Gnomish firelighter": { item: GnomishFirelighter, rarity: 341 },
  "Yew comp bow": { item: RainBow, rarity: 341 },
  "Strength amulet (t)": { item: AmuletOfMagicT, rarity: 341 },
  "Ranger boots": { item: RangerBoots, rarity: 1133 },
  "Wizard boots": { item: IronBoots, rarity: 1133 },
  "Holy sandals": { item: IronBoots, rarity: 1133 },
  "Spiked manacles": { item: IronBoots, rarity: 1133 },
  "Climbing boots (g)": { item: IronBoots, rarity: 1133 },
  "Adamant full helm (t)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant platebody (t)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platelegs (t)": { item: AdamantPlatelegs, rarity: 1133 },
  "Adamant plateskirt (t)": { item: AdamantPlatelegs, rarity: 1133 },
  "Adamant kiteshield (t)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant full helm (g)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant platebody (g)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platelegs (g)": { item: AdamantPlatelegs, rarity: 1133 },
  "Adamant plateskirt (g)": { item: AdamantPlatelegs, rarity: 1133 },
  "Adamant kiteshield (g)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant shield (h1)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant shield (h2)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant shield (h3)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant shield (h4)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant shield (h5)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant helm (h1)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant helm (h2)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant helm (h3)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant helm (h4)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant helm (h5)": { item: AdamantShieldG, rarity: 1133 },
  "Adamant platebody (h1)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platebody (h2)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platebody (h3)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platebody (h4)": { item: AdamantPlatebody, rarity: 1133 },
  "Adamant platebody (h5)": { item: AdamantPlatebody, rarity: 1133 },
  "Mithril full helm (g)": { item: MithrilFullHelm, rarity: 1133 },
  "Mithril platebody (g)": { item: MithrilPlatebody, rarity: 1133 },
  "Mithril platelegs (g)": { item: MithrilPlatelegs, rarity: 1133 },
  "Mithril plateskirt (g)": { item: MithrilPlatelegs, rarity: 1133 },
  "Mithril kiteshield (g)": { item: MithrilShieldT, rarity: 1133 },
  "Mithril full helm (t)": { item: MithrilFullHelm, rarity: 1133 },
  "Mithril platebody (t)": { item: MithrilPlatebody, rarity: 1133 },
  "Mithril platelegs (t)": { item: MithrilPlatelegs, rarity: 1133 },
  "Mithril plateskirt (t)": { item: MithrilPlatelegs, rarity: 1133 },
  "Mithril kiteshield (t)": { item: MithrilShieldT, rarity: 1133 },
  "Green d'hide body (g)": { item: GreenDHideBody, rarity: 1133 },
  "Green d'hide body (t)": { item: GreenDHideBody, rarity: 1133 },
  "Green d'hide chaps (g)": { item: GreenDHideBody, rarity: 1133 },
  "Green d'hide chaps (t)": { item: GreenDHideBody, rarity: 1133 },
  "Saradomin mitre": { item: SaradominMitre, rarity: 1133 },
  "Saradomin cloak": { item: SaradominCloak, rarity: 1133 },
  "Guthix mitre": { item: GuthixMitre, rarity: 1133 },
  "Guthix cloak": { item: GuthixCloak, rarity: 1133 },
  "Zamorak mitre": { item: ZamorakMitre, rarity: 1133 },
  "Zamorak cloak": { item: ZamorakCloak, rarity: 1133 },
  "Ancient mitre": { item: AncientMitre, rarity: 1133 },
  "Ancient cloak": { item: AncientCloak, rarity: 1133 },
  "Ancient stole": { item: AncientStole, rarity: 1133 },
  "Ancient crozier": { item: AncientCrozier, rarity: 1133 },
  "Armadyl mitre": { item: ArmadylMitre, rarity: 1133 },
  "Armadyl cloak": { item: ArmadylCloak, rarity: 1133 },
  "Armadyl stole": { item: ArmadylStole, rarity: 1133 },
  "Armadyl crozier": { item: ArmadylCrozier, rarity: 1133 },
  "Bandos mitre": { item: BandosMitre, rarity: 1133 },
  "Bandos cloak": { item: BandosCloak, rarity: 1133 },
  "Bandos stole": { item: BandosStole, rarity: 1133 },
  "Bandos crozier": { item: BandosCrozier, rarity: 1133 },
  "Red boater": { item: RedBoater, rarity: 1133 },
  "Green boater": { item: GreenBoater, rarity: 1133 },
  "Orange boater": { item: OrangeBoater, rarity: 1133 },
  "Black boater": { item: BlackBoater, rarity: 1133 },
  "Blue boater": { item: BlueBoater, rarity: 1133 },
  "Pink boater": { item: PinkBoater, rarity: 1133 },
  "Purple boater": { item: PurpleBoater, rarity: 1133 },
  "White boater": { item: WhiteBoater, rarity: 1133 },
  "Red headband": { item: RedHeadband, rarity: 1133 },
  "Black headband": { item: BlackHeadband, rarity: 1133 },
  "Brown headband": { item: BrownHeadband, rarity: 1133 },
  "White headband": { item: WhiteHeadband, rarity: 1133 },
  "Blue headband": { item: BlueHeadband, rarity: 1133 },
  "Gold headband": { item: GoldHeadband, rarity: 1133 },
  "Pink headband": { item: PinkHeadband, rarity: 1133 },
  "Green headband": { item: GreenHeadband, rarity: 1133 },
  "Crier hat": { item: CrierHat, rarity: 1133 },
  "Crier coat": { item: CrierCoat, rarity: 1133 },
  "Crier bell": { item: CrierBell, rarity: 1133 },
  "Adamant cane": { item: AdamantCane, rarity: 1133 },
  "Arceuus banner": { item: ArceuusBanner, rarity: 1133 },
  "Piscarilius banner": { item: PiscariliusBanner, rarity: 1133 },
  "Hosidius banner": { item: HosidiusBanner, rarity: 1133 },
  "Shayzien banner": { item: ShayzienBanner, rarity: 1133 },
  "Lovakengj banner": { item: LovakengjBanner, rarity: 1133 },
  "Cabbage round shield": { item: CabbageRoundShield, rarity: 1133 },
  "Cat mask": { item: CatMask, rarity: 1133 },
  "Penguin mask": { item: PenguinMask, rarity: 1133 },
  "Leprechaun hat": { item: LeprechaunHat, rarity: 1133 },
  "Black leprechaun hat": { item: BlackLeprechaunHat, rarity: 1133 },
  "Wolf mask": { item: WolfMask, rarity: 1133 },
  "Wolf cloak": { item: WolfCloak, rarity: 1133 },
  "Black unicorn mask": { item: BlackUnicornMask, rarity: 2266 },
  "White unicorn mask": { item: WhiteUnicornMask, rarity: 2266 },
  "Purple elegant shirt": { item: RedElegantShirt, rarity: 2266 },
  "Purple elegant blouse": { item: RedElegantShirt, rarity: 2266 },
  "Purple elegant legs": { item: RedElegantShirt, rarity: 2266 },
  "Purple elegant skirt": { item: RedElegantShirt, rarity: 2266 },
  "Black elegant shirt": { item: RedElegantShirt, rarity: 2266 },
  "White elegant blouse": { item: RedElegantShirt, rarity: 2266 },
  "Black elegant legs": { item: RedElegantShirt, rarity: 2266 },
  "White elegant skirt": { item: RedElegantShirt, rarity: 2266 },
  "Pink elegant shirt": { item: RedElegantShirt, rarity: 2266 },
  "Pink elegant blouse": { item: RedElegantShirt, rarity: 2266 },
  "Pink elegant legs": { item: RedElegantShirt, rarity: 2266 },
  "Pink elegant skirt": { item: RedElegantShirt, rarity: 2266 },
  "Gold elegant shirt": { item: RedElegantShirt, rarity: 2266 },
  "Gold elegant blouse": { item: RedElegantShirt, rarity: 2266 },
  "Gold elegant legs": { item: RedElegantShirt, rarity: 2266 },
  "Gold elegant skirt": { item: RedElegantShirt, rarity: 2266 },
};

const MEDIUM_UNIQUE_ITEMS: RewardTable = withDefaultQuantity(MEDIUM_UNIQUE_ITEMS_BASE);

/**
 * Medium tier standard table
 * Weapons, armor, runes, food at 1/34.1 base rarity
 */
const MEDIUM_STANDARD_TABLE: RewardTable = {
  "Adamant full helm": { item: AdamantShieldG, rarity: 34.1, quantity: 1 },
  "Adamant platebody": { item: AdamantPlatebody, rarity: 34.1, quantity: 1 },
  "Adamant platelegs": { item: AdamantPlatelegs, rarity: 34.1, quantity: 1 },
  "Adamant longsword": { item: BlackLongsword, rarity: 34.1, quantity: 1 },
  "Adamant dagger": { item: BlackDagger, rarity: 34.1, quantity: 1 },
  "Adamant battleaxe": { item: BlackBattleaxe, rarity: 34.1, quantity: 1 },
  "Adamant axe": { item: BlackAxe, rarity: 34.1, quantity: 1 },
  "Adamant pickaxe": { item: AdamantPickaxe, rarity: 34.1, quantity: 1 },
  "Green d'hide body": { item: GreenDHideBody, rarity: 34.1, quantity: 1 },
  "Green d'hide chaps": { item: GreenDHideChaps, rarity: 34.1, quantity: 1 },
  "Yew shortbow": { item: WillowShortbow, rarity: 34.1, quantity: 1 },
  "Fire battlestaff": { item: StaffOfAir, rarity: 34.1, quantity: 1 },
  "Yew longbow": { item: WillowLongbow, rarity: 37.89, quantity: 1 },
  "Amulet of power": { item: AmuletOfMagic, rarity: 37.89, quantity: 1 },
  "Air rune": { item: AirRune, rarity: 34.1, quantityMin: 50, quantityMax: 100 },
  "Mind rune": { item: MindRune, rarity: 34.1, quantityMin: 50, quantityMax: 100 },
  "Water rune": { item: WaterRune, rarity: 34.1, quantityMin: 50, quantityMax: 100 },
  "Earth rune": { item: EarthRune, rarity: 34.1, quantityMin: 50, quantityMax: 100 },
  "Fire rune": { item: FireRune, rarity: 34.1, quantityMin: 50, quantityMax: 100 },
  "Chaos rune": { item: ChaosRune, rarity: 34.1, quantityMin: 10, quantityMax: 20 },
  "Nature rune": { item: NatureRune, rarity: 34.1, quantityMin: 10, quantityMax: 20 },
  "Law rune": { item: LawRune, rarity: 34.1, quantityMin: 10, quantityMax: 20 },
  "Death rune": { item: DeathRune, rarity: 34.1, quantityMin: 10, quantityMax: 20 },
  Lobster: { item: HamJoint, rarity: 34.1, quantityMin: 8, quantityMax: 12, noted: true },
  Swordfish: { item: Salmon, rarity: 34.1, quantityMin: 8, quantityMax: 12, noted: true },
};

/**
 * Medium tier shared treasure trail items
 * Coins, purple sweets, scrolls, teleports, blessings, pages at various rarities
 */
const MEDIUM_SHARED_ITEMS: RewardTable = {
  "Coins (200-1000)": { item: Coins, rarity: 34.1, quantityMin: 200, quantityMax: 1000 },
  "Purple sweets (5-10)": { item: PurpleSweets, rarity: 34.1, quantityMin: 5, quantityMax: 10 },
  "Coins (10k-15k)": { item: Coins, rarity: 97.43, quantityMin: 10000, quantityMax: 15000 },
  "Purple sweets (8-12)": { item: PurpleSweets, rarity: 97.43, quantityMin: 8, quantityMax: 12 },
  "Red firelighter": { item: RedFirelighter, rarity: 189.4, quantityMin: 4, quantityMax: 10 },
  "Green firelighter": { item: GreenFirelighter, rarity: 189.4, quantityMin: 4, quantityMax: 10 },
  "Blue firelighter": { item: BlueFirelighter, rarity: 189.4, quantityMin: 4, quantityMax: 10 },
  "Purple firelighter": { item: PurpleFirelighter, rarity: 189.4, quantityMin: 4, quantityMax: 10 },
  "White firelighter": { item: WhiteFirelighter, rarity: 189.4, quantityMin: 4, quantityMax: 10 },
  "Charge dragonstone jewellery scroll": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Nardah teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Mos le'harmless teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Mort'ton teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Feldip hills teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Lunar isle teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Digsite teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Piscatoris teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Pest control teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Tai bwo wannai teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Lumberyard teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Iorwerth camp teleport": { item: MasterScrollBookEmpty, rarity: 428.7, quantityMin: 5, quantityMax: 15 },
  "Holy blessing": { item: HolyBlessing, rarity: 682, quantity: 1 },
  "Unholy blessing": { item: UnholyBlessing, rarity: 682, quantity: 1 },
  "Peaceful blessing": { item: PeacefulBlessing, rarity: 682, quantity: 1 },
  "War blessing": { item: WarBlessing, rarity: 682, quantity: 1 },
  "Honourable blessing": { item: HonourableBlessing, rarity: 682, quantity: 1 },
  "Ancient blessing": { item: AncientBlessing, rarity: 682, quantity: 1 },
  "Master scroll book (empty)": { item: MasterScrollBookEmpty, rarity: 750.2, quantity: 1 },
  "Saradomin page 1": { item: SaradominPage1, rarity: 818.4, quantity: 1 },
  "Saradomin page 2": { item: SaradominPage2, rarity: 818.4, quantity: 1 },
  "Saradomin page 3": { item: SaradominPage3, rarity: 818.4, quantity: 1 },
  "Saradomin page 4": { item: SaradominPage4, rarity: 818.4, quantity: 1 },
  "Zamorak page 1": { item: ZamorakPage1, rarity: 818.4, quantity: 1 },
  "Zamorak page 2": { item: ZamorakPage2, rarity: 818.4, quantity: 1 },
  "Zamorak page 3": { item: ZamorakPage3, rarity: 818.4, quantity: 1 },
  "Zamorak page 4": { item: ZamorakPage4, rarity: 818.4, quantity: 1 },
  "Guthix page 1": { item: GuthixPage1, rarity: 818.4, quantity: 1 },
  "Guthix page 2": { item: GuthixPage2, rarity: 818.4, quantity: 1 },
  "Guthix page 3": { item: GuthixPage3, rarity: 818.4, quantity: 1 },
  "Guthix page 4": { item: GuthixPage4, rarity: 818.4, quantity: 1 },
  "Bandos page 1": { item: BandosPage1, rarity: 818.4, quantity: 1 },
  "Bandos page 2": { item: BandosPage2, rarity: 818.4, quantity: 1 },
  "Bandos page 3": { item: BandosPage3, rarity: 818.4, quantity: 1 },
  "Bandos page 4": { item: BandosPage4, rarity: 818.4, quantity: 1 },
  "Armadyl page 1": { item: ArmadylPage1, rarity: 818.4, quantity: 1 },
  "Armadyl page 2": { item: ArmadylPage2, rarity: 818.4, quantity: 1 },
  "Armadyl page 3": { item: ArmadylPage3, rarity: 818.4, quantity: 1 },
  "Armadyl page 4": { item: ArmadylPage4, rarity: 818.4, quantity: 1 },
  "Ancient page 1": { item: AncientPage1, rarity: 818.4, quantity: 1 },
  "Ancient page 2": { item: AncientPage2, rarity: 818.4, quantity: 1 },
  "Ancient page 3": { item: AncientPage1, rarity: 818.4, quantity: 1 },
  "Ancient page 4": { item: AncientPage2, rarity: 818.4, quantity: 1 },
};

/**
 * Medium tier master clue scroll
 * 1/30 chance when opening a medium casket
 */
const MEDIUM_MASTER_CLUE: RewardTable = {
  "Clue scroll (master)": { item: Coins, rarity: 30, quantity: 1 },
};

/**
 * Medium clue rewards with table-based structure
 * Weighted table system for accurate probability distribution
 */
export const MEDIUM_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 1, // 1/10 per roll
      items: MEDIUM_UNIQUE_ITEMS,
      description: "Medium clue unique items (100+ items at 1/341 base)",
    },
    {
      name: "standard",
      weight: 9, // 9/10 per roll
      items: MEDIUM_STANDARD_TABLE,
      description: "Standard weapons, armor, runes, food (1/34.1 base)",
    },
    {
      name: "shared",
      weight: 0, // Blended into other tables
      items: MEDIUM_SHARED_ITEMS,
      description: "Shared treasure trail items (coins, scrolls, teleports, blessings, pages)",
    },
    {
      name: "master",
      weight: 0, // Separate 1/30 roll
      items: MEDIUM_MASTER_CLUE,
      description: "Master clue scroll (1/30 chance)",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...MEDIUM_UNIQUE_ITEMS,
    ...MEDIUM_STANDARD_TABLE,
    ...MEDIUM_SHARED_ITEMS,
    ...MEDIUM_MASTER_CLUE,
  },
};

/**
 * Hard tier unique items
 * Major rare table items at 1/1,625 or 1/12,765 rarity
 */
const HARD_UNIQUE_ITEMS_BASE: RewardTable = {
  "Magic comp bow": { item: RainBow, rarity: 270.8 },
  "Amulet of glory (t4)": { item: AmuletOfMagicT, rarity: 1625 },
  "Robin hood hat": { item: RobinHoodHat, rarity: 1625 },
  "Enchanted hat": { item: EnchantedHat, rarity: 1625 },
  "Enchanted top": { item: EnchantedTop, rarity: 1625 },
  "Enchanted robe": { item: EnchantedRobe, rarity: 1625 },
  "Dragon boots ornament kit": { item: DragonBootsOrnamentKit, rarity: 1625 },
  "Rune full helm (t)": { item: RuneFullHelmT, rarity: 1625 },
  "Rune platebody (t)": { item: RunePlatebodyT, rarity: 1625 },
  "Rune platelegs (t)": { item: RunePlatelegs, rarity: 1625 },
  "Rune plateskirt (t)": { item: RunePlatelegs, rarity: 1625 },
  "Rune kiteshield (t)": { item: RuneKiteshieldT, rarity: 1625 },
  "Rune full helm (g)": { item: RuneFullHelm, rarity: 1625 },
  "Rune platebody (g)": { item: RunePlatebody, rarity: 1625 },
  "Rune platelegs (g)": { item: RunePlatelegs, rarity: 1625 },
  "Rune plateskirt (g)": { item: RunePlatelegs, rarity: 1625 },
  "Rune kiteshield (g)": { item: RuneKiteshieldG, rarity: 1625 },
  "Rune shield (h1)": { item: RuneShieldH1, rarity: 1625 },
  "Rune shield (h2)": { item: RuneShieldH2, rarity: 1625 },
  "Rune shield (h3)": { item: RuneShieldH3, rarity: 1625 },
  "Rune shield (h4)": { item: RuneShieldH4, rarity: 1625 },
  "Rune shield (h5)": { item: RuneShieldH5, rarity: 1625 },
  "Rune helm (h1)": { item: RuneFullHelm, rarity: 1625 },
  "Rune helm (h2)": { item: RuneFullHelm, rarity: 1625 },
  "Rune helm (h3)": { item: RuneFullHelm, rarity: 1625 },
  "Rune helm (h4)": { item: RuneFullHelm, rarity: 1625 },
  "Rune helm (h5)": { item: RuneFullHelm, rarity: 1625 },
  "Saradomin full helm": { item: RuneFullHelm, rarity: 1625 },
  "Saradomin platebody": { item: RunePlatebody, rarity: 1625 },
  "Saradomin platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Saradomin kiteshield": { item: SaradominKiteshield, rarity: 1625 },
  "Zamorak full helm": { item: RuneFullHelm, rarity: 1625 },
  "Zamorak platebody": { item: RunePlatebody, rarity: 1625 },
  "Zamorak platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Zamorak kiteshield": { item: ZamorakKiteshield, rarity: 1625 },
  "Guthix full helm": { item: RuneFullHelm, rarity: 1625 },
  "Guthix platebody": { item: RunePlatebody, rarity: 1625 },
  "Guthix platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Guthix kiteshield": { item: GuthixKiteshield, rarity: 1625 },
  "Ancient full helm": { item: RuneFullHelm, rarity: 1625 },
  "Ancient platebody": { item: RunePlatebody, rarity: 1625 },
  "Ancient platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Ancient kiteshield": { item: AncientKiteshield, rarity: 1625 },
  "Armadyl full helm": { item: RuneFullHelm, rarity: 1625 },
  "Armadyl platebody": { item: RunePlatebody, rarity: 1625 },
  "Armadyl platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Armadyl kiteshield": { item: ArmadylKiteshield, rarity: 1625 },
  "Bandos full helm": { item: RuneFullHelm, rarity: 1625 },
  "Bandos platebody": { item: RunePlatebody, rarity: 1625 },
  "Bandos platelegs": { item: RunePlatelegs, rarity: 1625 },
  "Bandos kiteshield": { item: BandosKiteshield, rarity: 1625 },
  "Red d'hide body (g)": { item: RedDHideBody, rarity: 1625 },
  "Red d'hide body (t)": { item: RedDHideBody, rarity: 1625 },
  "Red d'hide chaps (g)": { item: RedDHideChaps, rarity: 1625 },
  "Red d'hide chaps (t)": { item: RedDHideChaps, rarity: 1625 },
  "Blue d'hide body (g)": { item: BlueDHideBody, rarity: 1625 },
  "Blue d'hide body (t)": { item: BlueDHideBody, rarity: 1625 },
  "Blue d'hide chaps (g)": { item: BlueDHideChaps, rarity: 1625 },
  "Blue d'hide chaps (t)": { item: BlueDHideChaps, rarity: 1625 },
  "Saradomin coif": { item: SaradominCoif, rarity: 1625 },
  "Saradomin d'hide body": { item: SaradominDHideBody, rarity: 1625 },
  "Saradomin chaps": { item: SaradominChaps, rarity: 1625 },
  "Saradomin bracers": { item: SaradominBracers, rarity: 1625 },
  "Saradomin d'hide boots": { item: SaradominDHideBoots, rarity: 1625 },
  "Guthix coif": { item: GuthixCoif, rarity: 1625 },
  "Guthix d'hide body": { item: GuthixDHideBody, rarity: 1625 },
  "Guthix chaps": { item: GuthixChaps, rarity: 1625 },
  "Guthix bracers": { item: GuthixBracers, rarity: 1625 },
  "Guthix d'hide boots": { item: GuthixDHideBoots, rarity: 1625 },
  "Zamorak coif": { item: ZamorakCoif, rarity: 1625 },
  "Zamorak d'hide body": { item: ZamorakDHideBody, rarity: 1625 },
  "Zamorak chaps": { item: ZamorakChaps, rarity: 1625 },
  "Zamorak bracers": { item: ZamorakBracers, rarity: 1625 },
  "Zamorak d'hide boots": { item: ZamorakDHideBoots, rarity: 1625 },
  "Bandos coif": { item: BandosCoif, rarity: 1625 },
  "Bandos d'hide body": { item: BandosDHideBody, rarity: 1625 },
  "Bandos chaps": { item: BandosChaps, rarity: 1625 },
  "Bandos bracers": { item: BandosBracers, rarity: 1625 },
  "Bandos d'hide boots": { item: BandosDHideBoots, rarity: 1625 },
  "Armadyl coif": { item: ArmadylCoif, rarity: 1625 },
  "Armadyl d'hide body": { item: ArmadylDHideBody, rarity: 1625 },
  "Armadyl chaps": { item: ArmadylChaps, rarity: 1625 },
  "Armadyl bracers": { item: ArmadylBracers, rarity: 1625 },
  "Armadyl d'hide boots": { item: ArmadylDHideBoots, rarity: 1625 },
  "Saradomin stole": { item: SaradominMitre, rarity: 1625 },
  "Saradomin crozier": { item: AncientCrozier, rarity: 1625 },
  "Guthix stole": { item: GuthixMitre, rarity: 1625 },
  "Guthix crozier": { item: AncientCrozier, rarity: 1625 },
  "Zamorak stole": { item: ZamorakMitre, rarity: 1625 },
  "Zamorak crozier": { item: AncientCrozier, rarity: 1625 },
  "Ancient coif": { item: AncientCoif, rarity: 1625 },
  "Ancient d'hide body": { item: AncientDHideBody, rarity: 1625 },
  "Ancient chaps": { item: AncientChaps, rarity: 1625 },
  "Ancient bracers": { item: AncientBracers, rarity: 1625 },
  "Ancient d'hide boots": { item: AncientDHideBoots, rarity: 1625 },
  "Zombie head (Treasure Trails)": { item: PiratesHat, rarity: 1625 },
  "Cyclops head": { item: PiratesHat, rarity: 1625 },
  "Pirate's hat": { item: PiratesHat, rarity: 1625 },
  "Red cavalier": { item: RedCavalier, rarity: 1625 },
  "White cavalier": { item: WhiteCavalier, rarity: 1625 },
  "Navy cavalier": { item: NavyCavalier, rarity: 1625 },
  "Tan cavalier": { item: TanCavalier, rarity: 1625 },
  "Dark cavalier": { item: DarkCavalier, rarity: 1625 },
  "Black cavalier": { item: BlackCavalier, rarity: 1625 },
  "Pith helmet": { item: PiratesHat, rarity: 1625 },
  "Explorer backpack": { item: Briefcase, rarity: 1625 },
  "Green dragon mask": { item: GreenDragonMask, rarity: 1625 },
  "Blue dragon mask": { item: BlueDragonMask, rarity: 1625 },
  "Red dragon mask": { item: RedDragonMask, rarity: 1625 },
  "Black dragon mask": { item: BlackDragonMask, rarity: 1625 },
  Nunchaku: { item: Katana, rarity: 1625 },
  "Rune cane": { item: AdamantCane, rarity: 1625 },
  "Dual sai": { item: Katana, rarity: 1625 },
  "Thieving bag": { item: Briefcase, rarity: 1625 },
  "Rune defender ornament kit": { item: DragonDefenderOrnamentKit, rarity: 1625 },
  "Berserker necklace ornament kit": { item: TortureOrnamentKit, rarity: 1625 },
  "Tzhaar-ket-om ornament kit": { item: TormentedOrnamentKit, rarity: 1625 },
  "Rune platebody (h1)": { item: RunePlatebody, rarity: 8125 },
  "Rune platebody (h2)": { item: RunePlatebody, rarity: 8125 },
  "Rune platebody (h3)": { item: RunePlatebody, rarity: 8125 },
  "Rune platebody (h4)": { item: RunePlatebody, rarity: 8125 },
  "Rune platebody (h5)": { item: RunePlatebody, rarity: 8125 },
  "Saradomin d'hide shield": { item: SaradominDHideShield, rarity: 9750 },
  "Guthix d'hide shield": { item: GuthixDHideShield, rarity: 9750 },
  "Zamorak d'hide shield": { item: ZamorakDHideShield, rarity: 9750 },
  "Bandos d'hide shield": { item: BandosDHideShield, rarity: 9750 },
  "Armadyl d'hide shield": { item: ArmadylDHideShield, rarity: 9750 },
  "Ancient d'hide shield": { item: AncientDHideShield, rarity: 9750 },
};

const HARD_UNIQUE_ITEMS: RewardTable = withDefaultQuantity(HARD_UNIQUE_ITEMS_BASE);

/**
 * Hard tier standard table
 * Common weapons, armor, runes, food at 1/27.1 base rarity
 */
const HARD_STANDARD_TABLE: RewardTable = {
  "Rune full helm": { item: RuneFullHelm, rarity: 27.1, quantity: 1 },
  "Rune platebody": { item: RunePlatebody, rarity: 27.1, quantity: 1 },
  "Rune platelegs": { item: RunePlatelegs, rarity: 27.1, quantity: 1 },
  "Rune plateskirt": { item: RunePlatelegs, rarity: 27.1, quantity: 1 },
  "Rune kiteshield": { item: RuneKiteshield, rarity: 27.1, quantity: 1 },
  "Rune longsword": { item: BlackLongsword, rarity: 27.1, quantity: 1 },
  "Rune dagger": { item: BlackDagger, rarity: 27.1, quantity: 1 },
  "Rune battleaxe": { item: BlackBattleaxe, rarity: 27.1, quantity: 1 },
  "Rune axe": { item: BlackAxe, rarity: 27.1, quantity: 1 },
  "Rune pickaxe": { item: RunePickaxe, rarity: 27.1, quantity: 1 },
  "Black d'hide body": { item: BlackFullHelm, rarity: 27.1, quantity: 1 },
  "Black d'hide chaps": { item: BlueDHideChaps, rarity: 27.1, quantity: 1 },
  "Magic shortbow": { item: WillowShortbow, rarity: 27.1, quantity: 1 },
  "Magic longbow": { item: WillowLongbow, rarity: 30.1, quantity: 1 },
  "Nature rune": { item: NatureRune, rarity: 27.1, quantityMin: 30, quantityMax: 50 },
  "Law rune": { item: LawRune, rarity: 27.1, quantityMin: 30, quantityMax: 50 },
  "Blood rune": { item: BloodRune, rarity: 27.1, quantityMin: 20, quantityMax: 30 },
  Lobster: { item: HamJoint, rarity: 27.1, quantityMin: 12, quantityMax: 15, noted: true },
  Shark: { item: Salmon, rarity: 27.1, quantityMin: 12, quantityMax: 15, noted: true },
};

/**
 * Hard tier shared treasure trail items
 * Coins, purple sweets, scrolls, teleports, blessings, pages
 */
const HARD_SHARED_ITEMS: RewardTable = {
  "Coins (1k-5k)": { item: Coins, rarity: 27.1, quantityMin: 1000, quantityMax: 5000 },
  "Purple sweets (7-15)": { item: PurpleSweets, rarity: 27.1, quantityMin: 7, quantityMax: 15 },
  "Coins (10k-15k)": { item: Coins, rarity: 77.4, quantityMin: 10000, quantityMax: 15000 },
  "Purple sweets (8-12)": { item: PurpleSweets, rarity: 77.4, quantityMin: 8, quantityMax: 12 },
  "Red firelighter": { item: RedFirelighter, rarity: 135.4, quantityMin: 9, quantityMax: 15 },
  "Green firelighter": { item: GreenFirelighter, rarity: 135.4, quantityMin: 9, quantityMax: 15 },
  "Blue firelighter": { item: BlueFirelighter, rarity: 135.4, quantityMin: 9, quantityMax: 15 },
  "Purple firelighter": { item: PurpleFirelighter, rarity: 135.4, quantityMin: 9, quantityMax: 15 },
  "White firelighter": { item: WhiteFirelighter, rarity: 135.4, quantityMin: 9, quantityMax: 15 },
  "Charge dragonstone jewellery scroll": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Nardah teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Mos le'harmless teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Mort'ton teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Feldip hills teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Lunar isle teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Digsite teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Piscatoris teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Pest control teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Tai bwo wannai teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Lumberyard teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Iorwerth camp teleport": { item: MasterScrollBookEmpty, rarity: 340.5, quantityMin: 5, quantityMax: 15 },
  "Holy blessing": { item: HolyBlessing, rarity: 541.7, quantity: 1 },
  "Unholy blessing": { item: UnholyBlessing, rarity: 541.7, quantity: 1 },
  "Peaceful blessing": { item: PeacefulBlessing, rarity: 541.7, quantity: 1 },
  "War blessing": { item: WarBlessing, rarity: 541.7, quantity: 1 },
  "Honourable blessing": { item: HonourableBlessing, rarity: 541.7, quantity: 1 },
  "Ancient blessing": { item: AncientBlessing, rarity: 541.7, quantity: 1 },
  "Master scroll book (empty)": { item: MasterScrollBookEmpty, rarity: 595.8, quantity: 1 },
  "Saradomin page 1": { item: SaradominPage1, rarity: 650, quantity: 1 },
  "Saradomin page 2": { item: SaradominPage2, rarity: 650, quantity: 1 },
  "Saradomin page 3": { item: SaradominPage3, rarity: 650, quantity: 1 },
  "Saradomin page 4": { item: SaradominPage4, rarity: 650, quantity: 1 },
  "Zamorak page 1": { item: ZamorakPage1, rarity: 650, quantity: 1 },
  "Zamorak page 2": { item: ZamorakPage2, rarity: 650, quantity: 1 },
  "Zamorak page 3": { item: ZamorakPage3, rarity: 650, quantity: 1 },
  "Zamorak page 4": { item: ZamorakPage4, rarity: 650, quantity: 1 },
  "Guthix page 1": { item: GuthixPage1, rarity: 650, quantity: 1 },
  "Guthix page 2": { item: GuthixPage2, rarity: 650, quantity: 1 },
  "Guthix page 3": { item: GuthixPage3, rarity: 650, quantity: 1 },
  "Guthix page 4": { item: GuthixPage4, rarity: 650, quantity: 1 },
  "Bandos page 1": { item: BandosPage1, rarity: 650, quantity: 1 },
  "Bandos page 2": { item: BandosPage2, rarity: 650, quantity: 1 },
  "Bandos page 3": { item: BandosPage3, rarity: 650, quantity: 1 },
  "Bandos page 4": { item: BandosPage4, rarity: 650, quantity: 1 },
  "Armadyl page 1": { item: ArmadylPage1, rarity: 650, quantity: 1 },
  "Armadyl page 2": { item: ArmadylPage2, rarity: 650, quantity: 1 },
  "Armadyl page 3": { item: ArmadylPage3, rarity: 650, quantity: 1 },
  "Armadyl page 4": { item: ArmadylPage4, rarity: 650, quantity: 1 },
  "Ancient page 1": { item: AncientPage1, rarity: 650, quantity: 1 },
  "Ancient page 2": { item: AncientPage2, rarity: 650, quantity: 1 },
  "Ancient page 3": { item: AncientPage1, rarity: 650, quantity: 1 },
  "Ancient page 4": { item: AncientPage2, rarity: 650, quantity: 1 },
};

/**
 * Hard tier mega-rare items (gilded + 3rd age)
 * Gilded: 1/35,750 per roll
 * 3rd age: 1/211,250 per roll
 */
const HARD_MEGA_RARE_ITEMS: RewardTable = {
  "Super energy(4)": { item: SuperRestore4, rarity: 16250, quantity: 15, noted: true },
  "Super restore(4)": { item: SuperRestore4, rarity: 16250, quantity: 15, noted: true },
  "Antifire potion(4)": { item: ExtendedAntifire4, rarity: 16250, quantity: 15, noted: true },
  "Super attack(4)": { item: SuperRestore4, rarity: 16250, quantity: 5, noted: true },
  "Super strength(4)": { item: SuperRestore4, rarity: 16250, quantity: 5, noted: true },
  "Super defence(4)": { item: SuperRestore4, rarity: 16250, quantity: 5, noted: true },
  "Gilded full helm": { item: GildedFullHelm, rarity: 35750, quantity: 1 },
  "Gilded platebody": { item: GildedPlatebody, rarity: 35750, quantity: 1 },
  "Gilded platelegs": { item: GildedLegs, rarity: 35750, quantity: 1 },
  "Gilded plateskirt": { item: GildedLegs, rarity: 35750, quantity: 1 },
  "Gilded kiteshield": { item: GildedKiteshield, rarity: 35750, quantity: 1 },
  "Gilded med helm": { item: GildedMedHelm, rarity: 35750, quantity: 1 },
  "Gilded chainbody": { item: GildedChainbody, rarity: 35750, quantity: 1 },
  "Gilded sq shield": { item: GildedSqShield, rarity: 35750, quantity: 1 },
  "Gilded 2h sword": { item: Gilded2hSword, rarity: 35750, quantity: 1 },
  "Gilded spear": { item: GildedSpear, rarity: 35750, quantity: 1 },
  "Gilded hasta": { item: GildedHasta, rarity: 35750, quantity: 1 },
  "3rd age full helmet": { item: ThirdAgeFullHelmet, rarity: 211250, quantity: 1 },
  "3rd age platebody": { item: ThirdAgePlatebody, rarity: 211250, quantity: 1 },
  "3rd age platelegs": { item: ThirdAgePlatelegs, rarity: 211250, quantity: 1 },
  "3rd age plateskirt": { item: ThirdAgePlatelegs, rarity: 211250, quantity: 1 },
  "3rd age kiteshield": { item: ThirdAgeKiteshield, rarity: 211250, quantity: 1 },
  "3rd age range coif": { item: ThirdAgeRangeCoif, rarity: 211250, quantity: 1 },
  "3rd age range top": { item: ThirdAgeRangeTop, rarity: 211250, quantity: 1 },
  "3rd age range legs": { item: ThirdAgeRangeLegs, rarity: 211250, quantity: 1 },
  "3rd age vambraces": { item: ThirdAgeVambraces, rarity: 211250, quantity: 1 },
  "3rd age mage hat": { item: ThirdAgeMageHat, rarity: 211250, quantity: 1 },
  "3rd age robe top": { item: ThirdAgeRobeTop, rarity: 211250, quantity: 1 },
  "3rd age robe": { item: ThirdAgeRobe, rarity: 211250, quantity: 1 },
  "3rd age amulet": { item: AmuletOfMagic, rarity: 211250, quantity: 1 },
};

/**
 * Hard tier master clue scroll
 * 1/15 chance when opening a hard casket
 */
const HARD_MASTER_CLUE: RewardTable = {
  "Clue scroll (master)": { item: Coins, rarity: 15, quantity: 1 },
};

/**
 * Hard clue rewards with table-based structure
 * 4-6 items per casket, average 5
 */
export const HARD_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 1, // ~1/13 primary roll branch for unique outcomes
      items: {
        ...HARD_UNIQUE_ITEMS,
        ...HARD_MEGA_RARE_ITEMS,
      },
      description: "Hard clue unique items (100+ at various rarities)",
    },
    {
      name: "standard",
      weight: 12, // ~12/13 primary roll branch for standard/shared outcomes
      items: HARD_STANDARD_TABLE,
      description: "Standard weapons, armor, runes, food",
    },
    {
      name: "mega-rare",
      weight: 0, // Separate mega-rare table
      items: HARD_MEGA_RARE_ITEMS,
      description: "Mega-rare gilded and 3rd age items",
    },
    {
      name: "shared",
      weight: 0, // Blended into other tables
      items: HARD_SHARED_ITEMS,
      description: "Shared treasure trail items (coins, scrolls, teleports, blessings, pages)",
    },
    {
      name: "master",
      weight: 0, // Separate 1/15 roll
      items: HARD_MASTER_CLUE,
      description: "Master clue scroll (1/15 chance)",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...HARD_UNIQUE_ITEMS,
    ...HARD_STANDARD_TABLE,
    ...HARD_MEGA_RARE_ITEMS,
    ...HARD_SHARED_ITEMS,
    ...HARD_MASTER_CLUE,
  },
};

/**
 * Elite tier unique items
 * Major rare table at 1/1,275 rarity
 */
const ELITE_UNIQUE_ITEMS: RewardTable = {
  "Dragon full helm ornament kit": { item: DragonFullHelmOrnamentKit, rarity: 1275, quantity: 1 },
  "Dragon chainbody ornament kit": { item: DragonChainbodyOrnamentKit, rarity: 1275, quantity: 1 },
  "Dragon legs/skirt ornament kit": { item: DragonLegsSkirtOrnamentKit, rarity: 1275, quantity: 1 },
  "Dragon sq shield ornament kit": { item: DragonSqShieldOrnamentKit, rarity: 1275, quantity: 1 },
  "Dragon scimitar ornament kit": { item: DragonScimitarOrnamentKit, rarity: 1275, quantity: 1 },
  "Fury ornament kit": { item: FuryOrnamentKit, rarity: 1275, quantity: 1 },
  "Light infinity colour kit": { item: LightInfinityColourKit, rarity: 1275, quantity: 1 },
  "Dark infinity colour kit": { item: DarkInfinityColourKit, rarity: 1275, quantity: 1 },
  "Royal crown": { item: RoyalCrown, rarity: 1275, quantity: 1 },
  "Royal gown top": { item: RoyalGownTop, rarity: 1275, quantity: 1 },
  "Royal gown bottom": { item: RoyalGownBottom, rarity: 1275, quantity: 1 },
  "Royal sceptre": { item: RoyalSceptre, rarity: 1275, quantity: 1 },
  "Musketeer hat": { item: MusketeerHat, rarity: 1275, quantity: 1 },
  "Musketeer tabard": { item: MusketeerTabard, rarity: 1275, quantity: 1 },
  "Musketeer pants": { item: MusketeerPants, rarity: 1275, quantity: 1 },
  "Black d'hide body (g)": { item: BlackFullHelm, rarity: 1275, quantity: 1 },
  "Black d'hide body (t)": { item: BlackFullHelm, rarity: 1275, quantity: 1 },
  "Black d'hide chaps (g)": { item: BlueDHideChaps, rarity: 1275, quantity: 1 },
  "Black d'hide chaps (t)": { item: BlueDHideChaps, rarity: 1275, quantity: 1 },
  "Ranger's tunic": { item: RangerTunic, rarity: 1275, quantity: 1 },
  "Ranger gloves": { item: RangerGloves, rarity: 1275, quantity: 1 },
  "Holy wraps": { item: HolyWraps, rarity: 1275, quantity: 1 },
  "Bronze dragon mask": { item: BronzeDragonMask, rarity: 1275, quantity: 1 },
  "Iron dragon mask": { item: IronDragonMask, rarity: 1275, quantity: 1 },
  "Steel dragon mask": { item: SteelDragonMask, rarity: 1275, quantity: 1 },
  "Mithril dragon mask": { item: MithrilDragonMask, rarity: 1275, quantity: 1 },
  "Adamant dragon mask": { item: AdamantDragonMask, rarity: 1275, quantity: 1 },
  "Rune dragon mask": { item: RuneDragonMask, rarity: 1275, quantity: 1 },
  "Arceuus scarf": { item: ArceuusHood, rarity: 1275, quantity: 1 },
  "Hosidius scarf": { item: HosidiusHood, rarity: 1275, quantity: 1 },
  "Lovakengj scarf": { item: LovakengjHood, rarity: 1275, quantity: 1 },
  "Piscarilius scarf": { item: PiscariliusHood, rarity: 1275, quantity: 1 },
  "Shayzien scarf": { item: ShayzienHood, rarity: 1275, quantity: 1 },
  Katana: { item: Katana, rarity: 1275, quantity: 1 },
  "Dragon cane": { item: DragonCane, rarity: 1275, quantity: 1 },
  "Bucket helm": { item: BucketHelm, rarity: 1275, quantity: 1 },
  "Blacksmith's helm": { item: BlacksmithsHelm, rarity: 1275, quantity: 1 },
  Deerstalker: { item: Deerstalker, rarity: 1275, quantity: 1 },
  Afro: { item: Afro, rarity: 1275, quantity: 1 },
  "Big pirate hat": { item: BigPirateHat, rarity: 1275, quantity: 1 },
  "Top hat": { item: TopHat, rarity: 1275, quantity: 1 },
  Monocle: { item: Monocle, rarity: 1275, quantity: 1 },
  Briefcase: { item: Briefcase, rarity: 1275, quantity: 1 },
  "Sagacious spectacles": { item: SagaciousSpectacles, rarity: 1275, quantity: 1 },
  "Ranger's tights": { item: RangerLegs, rarity: 1275, quantity: 1 },
  "Uri's hat": { item: UrisHat, rarity: 1275, quantity: 1 },
  "Giant boot": { item: GiantBoot, rarity: 1275, quantity: 1 },
  "Fremennik kilt": { item: FremennikKilt, rarity: 1275, quantity: 1 },
  "Dark bow tie": { item: DarkBowTie, rarity: 12750, quantity: 1 },
  "Dark tuxedo jacket": { item: DarkTuxedoJacket, rarity: 12750, quantity: 1 },
  "Dark tuxedo cuffs": { item: DarkTuxedoCuffs, rarity: 12750, quantity: 1 },
  "Dark trousers": { item: DarkTrousers, rarity: 12750, quantity: 1 },
  "Dark tuxedo shoes": { item: DarkTuxedoShoes, rarity: 12750, quantity: 1 },
  "Light bow tie": { item: LightBowTie, rarity: 12750, quantity: 1 },
  "Light tuxedo jacket": { item: LightTuxedoJacket, rarity: 12750, quantity: 1 },
  "Light tuxedo cuffs": { item: LightTuxedoCuffs, rarity: 12750, quantity: 1 },
  "Light trousers": { item: LightTrousers, rarity: 12750, quantity: 1 },
  "Light tuxedo shoes": { item: LightTuxedoShoes, rarity: 12750, quantity: 1 },
};

/**
 * Elite tier standard table
 * Rune equipment, dragon weapons, runes, jewellery, food, resources at 1/32.3 base
 */
const ELITE_STANDARD_TABLE: RewardTable = {
  "Rune platebody": { item: RunePlatebody, rarity: 32.3, quantity: 1 },
  "Rune platelegs": { item: RunePlatelegs, rarity: 32.3, quantity: 1 },
  "Rune plateskirt": { item: RunePlatelegs, rarity: 32.3, quantity: 1 },
  "Rune kiteshield": { item: RuneKiteshield, rarity: 32.3, quantity: 1 },
  "Rune crossbow": { item: RuneCrossbow, rarity: 32.3, quantity: 1 },
  "Dragon dagger": { item: DragonDagger, rarity: 32.3, quantity: 1 },
  "Dragon mace": { item: DragonMace, rarity: 32.3, quantity: 1 },
  "Dragon longsword": { item: DragonLongsword, rarity: 32.3, quantity: 1 },
  "Onyx bolt tips": { item: OnyxBoltTips, rarity: 32.3, quantityMin: 8, quantityMax: 12 },
  "Law rune": { item: LawRune, rarity: 32.3, quantityMin: 50, quantityMax: 75 },
  "Death rune": { item: DeathRune, rarity: 32.3, quantityMin: 50, quantityMax: 75 },
  "Blood rune": { item: BloodRune, rarity: 32.3, quantityMin: 50, quantityMax: 75 },
  "Soul rune": { item: SoulRune, rarity: 32.3, quantityMin: 50, quantityMax: 75 },
  "Dragonstone bracelet": { item: DragonstoneBracelet, rarity: 32.3, quantity: 1 },
  "Dragon necklace": { item: DragonNecklace, rarity: 32.3, quantity: 1 },
  "Dragonstone ring": { item: DragonstoneRing, rarity: 32.3, quantity: 1 },
  "Tuna potato": { item: TunaPotato, rarity: 32.3, quantityMin: 15, quantityMax: 20, noted: true },
  "Summer pie": { item: SummerPie, rarity: 32.3, quantityMin: 15, quantityMax: 20, noted: true },
  "Oak plank": { item: OakPlank, rarity: 32.3, quantityMin: 60, quantityMax: 80, noted: true },
  "Teak plank": { item: TeakPlank, rarity: 32.3, quantityMin: 40, quantityMax: 50, noted: true },
  "Mahogany plank": { item: MahoganyPlank, rarity: 32.3, quantityMin: 20, quantityMax: 30, noted: true },
  "Runite bar": { item: RuniteBar, rarity: 32.3, quantityMin: 1, quantityMax: 3, noted: true },
  "Tooth half of key": { item: ToothHalfOfKey, rarity: 64.6, quantity: 1 },
  "Loop half of key": { item: LoopHalfOfKey, rarity: 64.6, quantity: 1 },
  "Palm tree seed": { item: PalmTreeSeed, rarity: 96.9, quantity: 1 },
  "Yew seed": { item: YewSeed, rarity: 96.9, quantity: 1 },
  "Magic seed": { item: MagicSeed, rarity: 96.9, quantity: 1 },
};

/**
 * Elite tier mega-rare items (gilded + 3rd age + special)
 */
const ELITE_MEGA_RARE_ITEMS: RewardTable = {
  "Ring of nature": { item: RingOfNature, rarity: 14663, quantity: 1 },
  "Crystal key": { item: CrystalKey, rarity: 14663, quantity: 1 },
  "Lava dragon mask": { item: LavaDragonMask, rarity: 14663, quantity: 1 },
  Battlestaff: { item: StaffOfAir, rarity: 14663, quantity: 100, noted: true },
  "Extended antifire(4)": { item: ExtendedAntifire4, rarity: 14663, quantity: 30, noted: true },
  "Super restore(4)": { item: SuperRestore4, rarity: 14663, quantity: 30, noted: true },
  "Saradomin brew(4)": { item: SaradominBrew4, rarity: 14663, quantity: 30, noted: true },
  "Ranging potion(4)": { item: RangingPotion4, rarity: 14663, quantity: 30, noted: true },
  "Gilded scimitar": { item: GildedScimitar, rarity: 14663, quantity: 1 },
  "Gilded boots": { item: GildedBoots, rarity: 14663, quantity: 1 },
  "Gilded coif": { item: GildedCoif, rarity: 14663, quantity: 1 },
  "Gilded d'hide vambraces": { item: HideVambraces, rarity: 14663, quantity: 1 },
  "Gilded d'hide body": { item: GildedDHideBody, rarity: 14663, quantity: 1 },
  "Gilded d'hide chaps": { item: GildedDHideChaps, rarity: 14663, quantity: 1 },
  "Gilded pickaxe": { item: GildedPickaxe, rarity: 14663, quantity: 1 },
  "Gilded axe": { item: GildedAxe, rarity: 14663, quantity: 1 },
  "Gilded spade": { item: GildedSpade, rarity: 14663, quantity: 1 },
  "Gilded full helm": { item: GildedFullHelm, rarity: 32258, quantity: 1 },
  "Gilded platebody": { item: GildedPlatebody, rarity: 32258, quantity: 1 },
  "Gilded platelegs": { item: GildedLegs, rarity: 32258, quantity: 1 },
  "Gilded plateskirt": { item: GildedLegs, rarity: 32258, quantity: 1 },
  "Gilded kiteshield": { item: GildedKiteshield, rarity: 32258, quantity: 1 },
  "Gilded med helm": { item: GildedMedHelm, rarity: 32258, quantity: 1 },
  "Gilded chainbody": { item: GildedChainbody, rarity: 32258, quantity: 1 },
  "Gilded sq shield": { item: GildedSqShield, rarity: 32258, quantity: 1 },
  "Gilded 2h sword": { item: Gilded2hSword, rarity: 32258, quantity: 1 },
  "Gilded spear": { item: GildedSpear, rarity: 32258, quantity: 1 },
  "Gilded hasta": { item: GildedHasta, rarity: 32258, quantity: 1 },
  "3rd age full helmet": { item: ThirdAgeFullHelmet, rarity: 249262, quantity: 1 },
  "3rd age platebody": { item: ThirdAgePlatebody, rarity: 249262, quantity: 1 },
  "3rd age platelegs": { item: ThirdAgePlatelegs, rarity: 249262, quantity: 1 },
  "3rd age plateskirt": { item: ThirdAgePlatelegs, rarity: 249262, quantity: 1 },
  "3rd age kiteshield": { item: ThirdAgeKiteshield, rarity: 249262, quantity: 1 },
  "3rd age range coif": { item: ThirdAgeRangeCoif, rarity: 249262, quantity: 1 },
  "3rd age range top": { item: ThirdAgeRangeTop, rarity: 249262, quantity: 1 },
  "3rd age range legs": { item: ThirdAgeRangeLegs, rarity: 249262, quantity: 1 },
  "3rd age vambraces": { item: ThirdAgeVambraces, rarity: 249262, quantity: 1 },
  "3rd age mage hat": { item: ThirdAgeMageHat, rarity: 249262, quantity: 1 },
  "3rd age robe top": { item: ThirdAgeRobeTop, rarity: 249262, quantity: 1 },
  "3rd age robe": { item: ThirdAgeRobe, rarity: 249262, quantity: 1 },
  "3rd age amulet": { item: AmuletOfMagic, rarity: 249262, quantity: 1 },
  "3rd age longsword": { item: ThirdAgeLongsword, rarity: 249262, quantity: 1 },
  "3rd age wand": { item: ThirdAgeWand, rarity: 249262, quantity: 1 },
  "3rd age cloak": { item: ThirdAgeCloak, rarity: 249262, quantity: 1 },
  "3rd age bow": { item: ThirdAgeBow, rarity: 249262, quantity: 1 },
};

/**
 * Elite tier shared treasure trail items
 */
const ELITE_SHARED_ITEMS: RewardTable = {
  "Coins (20k-30k)": { item: Coins, rarity: 32.3, quantityMin: 20000, quantityMax: 30000 },
  "Purple sweets (9-23)": { item: PurpleSweets, rarity: 32.3, quantityMin: 9, quantityMax: 23 },
  "Coins (10k-15k)": { item: Coins, rarity: 92.3, quantityMin: 10000, quantityMax: 15000 },
  "Purple sweets (8-12)": { item: PurpleSweets, rarity: 92.3, quantityMin: 8, quantityMax: 12 },
  "Red firelighter": { item: RedFirelighter, rarity: 161.5, quantityMin: 9, quantityMax: 15 },
  "Green firelighter": { item: GreenFirelighter, rarity: 161.5, quantityMin: 9, quantityMax: 15 },
  "Blue firelighter": { item: BlueFirelighter, rarity: 161.5, quantityMin: 9, quantityMax: 15 },
  "Purple firelighter": { item: PurpleFirelighter, rarity: 161.5, quantityMin: 9, quantityMax: 15 },
  "White firelighter": { item: WhiteFirelighter, rarity: 161.5, quantityMin: 9, quantityMax: 15 },
  "Charge dragonstone jewellery scroll": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Nardah teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Mos le'harmless teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Mort'ton teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Feldip hills teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Lunar isle teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Digsite teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Piscatoris teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Pest control teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Tai bwo wannai teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Lumberyard teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Iorwerth camp teleport": { item: MasterScrollBookEmpty, rarity: 203, quantityMin: 5, quantityMax: 15 },
  "Master scroll book (empty)": { item: MasterScrollBookEmpty, rarity: 355.2, quantity: 1 },
  "Holy blessing": { item: HolyBlessing, rarity: 645.8, quantity: 1 },
  "Unholy blessing": { item: UnholyBlessing, rarity: 645.8, quantity: 1 },
  "Peaceful blessing": { item: PeacefulBlessing, rarity: 645.8, quantity: 1 },
  "War blessing": { item: WarBlessing, rarity: 645.8, quantity: 1 },
  "Honourable blessing": { item: HonourableBlessing, rarity: 645.8, quantity: 1 },
  "Ancient blessing": { item: AncientBlessing, rarity: 645.8, quantity: 1 },
  "Saradomin page 1": { item: SaradominPage1, rarity: 775, quantity: 1 },
  "Saradomin page 2": { item: SaradominPage2, rarity: 775, quantity: 1 },
  "Saradomin page 3": { item: SaradominPage3, rarity: 775, quantity: 1 },
  "Saradomin page 4": { item: SaradominPage4, rarity: 775, quantity: 1 },
  "Zamorak page 1": { item: ZamorakPage1, rarity: 775, quantity: 1 },
  "Zamorak page 2": { item: ZamorakPage2, rarity: 775, quantity: 1 },
  "Zamorak page 3": { item: ZamorakPage3, rarity: 775, quantity: 1 },
  "Zamorak page 4": { item: ZamorakPage4, rarity: 775, quantity: 1 },
  "Guthix page 1": { item: GuthixPage1, rarity: 775, quantity: 1 },
  "Guthix page 2": { item: GuthixPage2, rarity: 775, quantity: 1 },
  "Guthix page 3": { item: GuthixPage3, rarity: 775, quantity: 1 },
  "Guthix page 4": { item: GuthixPage4, rarity: 775, quantity: 1 },
  "Bandos page 1": { item: BandosPage1, rarity: 775, quantity: 1 },
  "Bandos page 2": { item: BandosPage2, rarity: 775, quantity: 1 },
  "Bandos page 3": { item: BandosPage3, rarity: 775, quantity: 1 },
  "Bandos page 4": { item: BandosPage4, rarity: 775, quantity: 1 },
  "Armadyl page 1": { item: ArmadylPage1, rarity: 775, quantity: 1 },
  "Armadyl page 2": { item: ArmadylPage2, rarity: 775, quantity: 1 },
  "Armadyl page 3": { item: ArmadylPage3, rarity: 775, quantity: 1 },
  "Armadyl page 4": { item: ArmadylPage4, rarity: 775, quantity: 1 },
  "Ancient page 1": { item: AncientPage1, rarity: 775, quantity: 1 },
  "Ancient page 2": { item: AncientPage2, rarity: 775, quantity: 1 },
  "Ancient page 3": { item: AncientPage1, rarity: 775, quantity: 1 },
  "Ancient page 4": { item: AncientPage2, rarity: 775, quantity: 1 },
};

/**
 * Elite tier master clue scroll
 * 1/5 chance when opening an elite casket (doesn't take up a reward slot)
 */
const ELITE_MASTER_CLUE: RewardTable = {
  "Clue scroll (master)": { item: Coins, rarity: 5, quantity: 1 },
};

/**
 * Elite clue rewards with table-based structure
 * 4-6 items per casket, average 5
 */
export const ELITE_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 1, // ~1/25 primary roll branch for unique outcomes
      items: {
        ...ELITE_UNIQUE_ITEMS,
        ...ELITE_MEGA_RARE_ITEMS,
      },
      description: "Elite clue unique items (50+ at various rarities)",
    },
    {
      name: "standard",
      weight: 24, // ~24/25 primary roll branch for standard/shared outcomes
      items: ELITE_STANDARD_TABLE,
      description: "Standard rune equipment, dragon weapons, runes, jewellery, food, resources",
    },
    {
      name: "mega-rare",
      weight: 0, // Separate mega-rare table
      items: ELITE_MEGA_RARE_ITEMS,
      description: "Mega-rare gilded, 3rd age, and special items",
    },
    {
      name: "shared",
      weight: 0, // Blended into other tables
      items: ELITE_SHARED_ITEMS,
      description: "Shared treasure trail items",
    },
    {
      name: "master",
      weight: 0, // Separate 1/5 roll (doesn't take a slot)
      items: ELITE_MASTER_CLUE,
      description: "Master clue scroll (1/5 chance, bonus drop)",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...ELITE_UNIQUE_ITEMS,
    ...ELITE_STANDARD_TABLE,
    ...ELITE_MEGA_RARE_ITEMS,
    ...ELITE_SHARED_ITEMS,
    ...ELITE_MASTER_CLUE,
  },
};

/**
 * Master tier unique items
 * Major rare table at various rarities (1/851 to 1/25,530)
 */
export const MASTER_UNIQUE_ITEMS: RewardTable = {
  "Occult ornament kit": { item: OccultOrnamentKit, rarity: 851, quantity: 1 },
  "Torture ornament kit": { item: TortureOrnamentKit, rarity: 851, quantity: 1 },
  "Anguish ornament kit": { item: AnguishOrnamentKit, rarity: 851, quantity: 1 },
  "Tormented ornament kit": { item: TormentedOrnamentKit, rarity: 851, quantity: 1 },
  "Dragon defender ornament kit": { item: DragonDefenderOrnamentKit, rarity: 851, quantity: 1 },
  "Hood of darkness": { item: HoodOfDarkness, rarity: 851, quantity: 1 },
  "Robe top of darkness": { item: RobeTopOfDarkness, rarity: 851, quantity: 1 },
  "Gloves of darkness": { item: GlovesOfDarkness, rarity: 851, quantity: 1 },
  "Robe bottom of darkness": { item: RobeBottomOfDarkness, rarity: 851, quantity: 1 },
  "Boots of darkness": { item: BootsOfDarkness, rarity: 851, quantity: 1 },
  "Samurai kasa": { item: SamuraiKasa, rarity: 851, quantity: 1 },
  "Samurai shirt": { item: SamuraiShirt, rarity: 851, quantity: 1 },
  "Samurai gloves": { item: SamuraiGloves, rarity: 851, quantity: 1 },
  "Samurai greaves": { item: SamuraiGreaves, rarity: 851, quantity: 1 },
  "Samurai boots": { item: SamuraiBoots, rarity: 851, quantity: 1 },
  "Arceuus hood": { item: ArceuusHood, rarity: 851, quantity: 1 },
  "Hosidius hood": { item: HosidiusHood, rarity: 851, quantity: 1 },
  "Lovakengj hood": { item: LovakengjHood, rarity: 851, quantity: 1 },
  "Piscarilius hood": { item: PiscariliusHood, rarity: 851, quantity: 1 },
  "Shayzien hood": { item: ShayzienHood, rarity: 851, quantity: 1 },
  "Old demon mask": { item: OldDemonMask, rarity: 851, quantity: 1 },
  "Lesser demon mask": { item: LesserDemonMask, rarity: 851, quantity: 1 },
  "Greater demon mask": { item: GreaterDemonMask, rarity: 851, quantity: 1 },
  "Black demon mask": { item: BlackDemonMask, rarity: 851, quantity: 1 },
  "Jungle demon mask": { item: JungleDemonMask, rarity: 851, quantity: 1 },
  "Left eye patch": { item: LeftEyePatch, rarity: 851, quantity: 1 },
  "Bowl wig": { item: BowlWig, rarity: 851, quantity: 1 },
  "Ale of the gods": { item: AleOfTheGods, rarity: 851, quantity: 1 },
  "Obsidian cape (r)": { item: CapeOfSkulls, rarity: 851, quantity: 1 },
  "Fancy tiara": { item: FancyTiara, rarity: 851, quantity: 1 },
  "Half moon spectacles": { item: HalfMoonSpectacles, rarity: 851, quantity: 1 },
  "Armadyl godsword ornament kit": { item: ArmadylGodswordOrnamentKit, rarity: 3404, quantity: 1 },
  "Bandos godsword ornament kit": { item: BandosGodswordOrnamentKit, rarity: 3404, quantity: 1 },
  "Saradomin godsword ornament kit": { item: SaradominGodswordOrnamentKit, rarity: 3404, quantity: 1 },
  "Zamorak godsword ornament kit": { item: ZamorakGodswordOrnamentKit, rarity: 3404, quantity: 1 },
  "Dragon platebody ornament kit": { item: DragonPlatebodyOrnamentKit, rarity: 12765, quantity: 1 },
  "Ankou mask": { item: AnkouMask, rarity: 12765, quantity: 1 },
  "Ankou top": { item: AnkouTop, rarity: 12765, quantity: 1 },
  "Ankou gloves": { item: AnkouGloves, rarity: 12765, quantity: 1 },
  "Ankou's leggings": { item: SLeggings, rarity: 12765, quantity: 1 },
  "Ankou socks": { item: AnkouSocks, rarity: 12765, quantity: 1 },
  "Mummy's head": { item: SHead, rarity: 12765, quantity: 1 },
  "Mummy's body": { item: MummysBody, rarity: 12765, quantity: 1 },
  "Mummy's hands": { item: MummysHands, rarity: 12765, quantity: 1 },
  "Mummy's legs": { item: SLegs, rarity: 12765, quantity: 1 },
  "Mummy's feet": { item: SFeet, rarity: 12765, quantity: 1 },
  "Dragon kiteshield ornament kit": { item: DragonKiteshieldOrnamentKit, rarity: 25530, quantity: 1 },
};

/**
 * Master tier standard table
 * Dragon weapons, runes, food, resources at 1/30.3 base
 */
export const MASTER_STANDARD_TABLE: RewardTable = {
  "Dragon dagger": { item: DragonDagger, rarity: 30.3, quantity: 1 },
  "Dragon mace": { item: DragonMace, rarity: 30.3, quantity: 1 },
  "Dragon longsword": { item: DragonLongsword, rarity: 30.3, quantity: 1 },
  "Dragon scimitar": { item: DragonScimitar, rarity: 30.3, quantity: 1 },
  "Dragon battleaxe": { item: DragonBattleaxe, rarity: 30.3, quantity: 1 },
  "Dragon halberd": { item: DragonHalberd, rarity: 30.3, quantity: 1 },
  "Nature rune": { item: NatureRune, rarity: 30.3, quantityMin: 100, quantityMax: 200 },
  "Death rune": { item: DeathRune, rarity: 30.3, quantityMin: 100, quantityMax: 200 },
  "Blood rune": { item: BloodRune, rarity: 30.3, quantityMin: 100, quantityMax: 200 },
  "Soul rune": { item: SoulRune, rarity: 30.3, quantityMin: 100, quantityMax: 200 },
  "Onyx bolts (e)": { item: OnyxBoltsE, rarity: 30.3, quantityMin: 15, quantityMax: 25 },
  "Manta ray": { item: Salmon, rarity: 30.3, quantityMin: 15, quantityMax: 25, noted: true },
  "Wine of zamorak": { item: WineOfZamorak, rarity: 30.3, quantityMin: 35, quantityMax: 50, noted: true },
  "Limpwurt root": { item: LimpwurtRoot, rarity: 30.3, quantityMin: 40, quantityMax: 60, noted: true },
  "Grimy ranarr weed": { item: GrimyRanarrWeed, rarity: 30.3, quantityMin: 5, quantityMax: 10, noted: true },
  "Grimy toadflax": { item: GrimyToadflax, rarity: 30.3, quantityMin: 25, quantityMax: 35, noted: true },
  "Grimy snapdragon": { item: GrimySnapdragon, rarity: 30.3, quantityMin: 5, quantityMax: 10, noted: true },
  "Runite ore": { item: RuniteOre, rarity: 30.3, quantityMin: 5, quantityMax: 8, noted: true },
  "Runite bar": { item: RuniteBar, rarity: 30.3, quantityMin: 5, quantityMax: 7, noted: true },
  "Black dragonhide": { item: BlackDragonhide, rarity: 30.3, quantityMin: 5, quantityMax: 25, noted: true },
  "Tooth half of key": { item: ToothHalfOfKey, rarity: 60.6, quantity: 1 },
  "Loop half of key": { item: LoopHalfOfKey, rarity: 60.6, quantity: 1 },
  "Palm tree seed": { item: PalmTreeSeed, rarity: 91, quantityMin: 1, quantityMax: 2 },
  "Yew seed": { item: YewSeed, rarity: 91, quantityMin: 1, quantityMax: 2 },
  "Magic seed": { item: MagicSeed, rarity: 91, quantityMin: 1, quantityMax: 2 },
};

/**
 * Master tier mega-rare items (gilded + 3rd age + special)
 */
export const MASTER_MEGA_RARE_ITEMS: RewardTable = {
  "Bucket helm (g)": { item: BucketHelmG, rarity: 13616, quantity: 1 },
  "Ring of coins": { item: RingOfCoins, rarity: 13616, quantity: 1 },
  Cabbage: { item: Cabbage, rarity: 13616, quantity: 3 },
  "Anti-venom+(4)": { item: AntiVenomPlus4, rarity: 13616, quantity: 15, noted: true },
  Torstol: { item: Torstol, rarity: 13616, quantity: 50, noted: true },
  "Gilded scimitar": { item: GildedScimitar, rarity: 13616, quantity: 1 },
  "Gilded boots": { item: GildedBoots, rarity: 13616, quantity: 1 },
  "Gilded coif": { item: GildedCoif, rarity: 13616, quantity: 1 },
  "Gilded d'hide vambraces": { item: HideVambraces, rarity: 13616, quantity: 1 },
  "Gilded d'hide body": { item: GildedDHideBody, rarity: 13616, quantity: 1 },
  "Gilded d'hide chaps": { item: GildedDHideChaps, rarity: 13616, quantity: 1 },
  "Gilded pickaxe": { item: GildedPickaxe, rarity: 13616, quantity: 1 },
  "Gilded axe": { item: GildedAxe, rarity: 13616, quantity: 1 },
  "Gilded spade": { item: GildedSpade, rarity: 13616, quantity: 1 },
  "Gilded full helm": { item: GildedFullHelm, rarity: 149776, quantity: 1 },
  "Gilded platebody": { item: GildedPlatebody, rarity: 149776, quantity: 1 },
  "Gilded platelegs": { item: GildedLegs, rarity: 149776, quantity: 1 },
  "Gilded plateskirt": { item: GildedLegs, rarity: 149776, quantity: 1 },
  "Gilded kiteshield": { item: GildedKiteshield, rarity: 149776, quantity: 1 },
  "Gilded med helm": { item: GildedMedHelm, rarity: 149776, quantity: 1 },
  "Gilded chainbody": { item: GildedChainbody, rarity: 149776, quantity: 1 },
  "Gilded sq shield": { item: GildedSqShield, rarity: 149776, quantity: 1 },
  "Gilded 2h sword": { item: Gilded2hSword, rarity: 149776, quantity: 1 },
  "Gilded spear": { item: GildedSpear, rarity: 149776, quantity: 1 },
  "Gilded hasta": { item: GildedHasta, rarity: 149776, quantity: 1 },
  "3rd age full helmet": { item: ThirdAgeFullHelmet, rarity: 313168, quantity: 1 },
  "3rd age platebody": { item: ThirdAgePlatebody, rarity: 313168, quantity: 1 },
  "3rd age platelegs": { item: ThirdAgePlatelegs, rarity: 313168, quantity: 1 },
  "3rd age plateskirt": { item: ThirdAgePlatelegs, rarity: 313168, quantity: 1 },
  "3rd age kiteshield": { item: ThirdAgeKiteshield, rarity: 313168, quantity: 1 },
  "3rd age range coif": { item: ThirdAgeRangeCoif, rarity: 313168, quantity: 1 },
  "3rd age range top": { item: ThirdAgeRangeTop, rarity: 313168, quantity: 1 },
  "3rd age range legs": { item: ThirdAgeRangeLegs, rarity: 313168, quantity: 1 },
  "3rd age vambraces": { item: ThirdAgeVambraces, rarity: 313168, quantity: 1 },
  "3rd age mage hat": { item: ThirdAgeMageHat, rarity: 313168, quantity: 1 },
  "3rd age robe top": { item: ThirdAgeRobeTop, rarity: 313168, quantity: 1 },
  "3rd age robe": { item: ThirdAgeRobe, rarity: 313168, quantity: 1 },
  "3rd age amulet": { item: AmuletOfMagic, rarity: 313168, quantity: 1 },
  "3rd age druidic robe top": { item: ThirdAgeDruidicRobeTop, rarity: 313168, quantity: 1 },
  "3rd age druidic robe bottoms": { item: ThirdAgeDruidicRobeBottoms, rarity: 313168, quantity: 1 },
  "3rd age druidic cloak": { item: ThirdAgeDruidicCloak, rarity: 313168, quantity: 1 },
  "3rd age longsword": { item: ThirdAgeLongsword, rarity: 313168, quantity: 1 },
  "3rd age bow": { item: ThirdAgeBow, rarity: 313168, quantity: 1 },
  "3rd age wand": { item: ThirdAgeWand, rarity: 313168, quantity: 1 },
  "3rd age druidic staff": { item: ThirdAgeDruidicStaff, rarity: 313168, quantity: 1 },
  "3rd age cloak": { item: ThirdAgeCloak, rarity: 313168, quantity: 1 },
  "3rd age pickaxe": { item: ThirdAgePickaxe, rarity: 313168, quantity: 1 },
  "3rd age axe": { item: ThirdAgeAxe, rarity: 313168, quantity: 1 },
};

/**
 * Master tier shared treasure trail items
 */
const MASTER_SHARED_ITEMS: RewardTable = {
  "Coins (20k-35k)": { item: Coins, rarity: 30.3, quantityMin: 20000, quantityMax: 35000 },
  "Purple sweets (14-33)": { item: PurpleSweets, rarity: 30.3, quantityMin: 14, quantityMax: 33 },
  "Coins (10k-15k)": { item: Coins, rarity: 86.6, quantityMin: 10000, quantityMax: 15000 },
  "Purple sweets (8-12)": { item: PurpleSweets, rarity: 86.6, quantityMin: 8, quantityMax: 12 },
  "Red firelighter": { item: RedFirelighter, rarity: 151.6, quantityMin: 20, quantityMax: 38 },
  "Green firelighter": { item: GreenFirelighter, rarity: 151.6, quantityMin: 20, quantityMax: 38 },
  "Blue firelighter": { item: BlueFirelighter, rarity: 151.6, quantityMin: 20, quantityMax: 38 },
  "Purple firelighter": { item: PurpleFirelighter, rarity: 151.6, quantityMin: 20, quantityMax: 38 },
  "White firelighter": { item: WhiteFirelighter, rarity: 151.6, quantityMin: 20, quantityMax: 38 },
  "Charge dragonstone jewellery scroll": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Nardah teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Mos le'harmless teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Mort'ton teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Feldip hills teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Lunar isle teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Digsite teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Piscatoris teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Pest control teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Tai bwo wannai teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Lumberyard teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Iorwerth camp teleport": { item: MasterScrollBookEmpty, rarity: 190.6, quantityMin: 5, quantityMax: 15 },
  "Master scroll book (empty)": { item: MasterScrollBookEmpty, rarity: 333.5, quantity: 1 },
  "Coins (15k-30k)": { item: Coins, rarity: 381, quantityMin: 15000, quantityMax: 30000 },
  "Holy blessing": { item: HolyBlessing, rarity: 606.4, quantity: 1 },
  "Unholy blessing": { item: UnholyBlessing, rarity: 606.4, quantity: 1 },
  "Peaceful blessing": { item: PeacefulBlessing, rarity: 606.4, quantity: 1 },
  "War blessing": { item: WarBlessing, rarity: 606.4, quantity: 1 },
  "Honourable blessing": { item: HonourableBlessing, rarity: 606.4, quantity: 1 },
  "Ancient blessing": { item: AncientBlessing, rarity: 606.4, quantity: 1 },
  "Saradomin page 1": { item: SaradominPage1, rarity: 702.6, quantity: 1 },
  "Saradomin page 2": { item: SaradominPage2, rarity: 702.6, quantity: 1 },
  "Saradomin page 3": { item: SaradominPage3, rarity: 702.6, quantity: 1 },
  "Saradomin page 4": { item: SaradominPage4, rarity: 702.6, quantity: 1 },
  "Zamorak page 1": { item: ZamorakPage1, rarity: 702.6, quantity: 1 },
  "Zamorak page 2": { item: ZamorakPage2, rarity: 702.6, quantity: 1 },
  "Zamorak page 3": { item: ZamorakPage3, rarity: 702.6, quantity: 1 },
  "Zamorak page 4": { item: ZamorakPage4, rarity: 702.6, quantity: 1 },
  "Guthix page 1": { item: GuthixPage1, rarity: 702.6, quantity: 1 },
  "Guthix page 2": { item: GuthixPage2, rarity: 702.6, quantity: 1 },
  "Guthix page 3": { item: GuthixPage3, rarity: 702.6, quantity: 1 },
  "Guthix page 4": { item: GuthixPage4, rarity: 702.6, quantity: 1 },
  "Bandos page 1": { item: BandosPage1, rarity: 702.6, quantity: 1 },
  "Bandos page 2": { item: BandosPage2, rarity: 702.6, quantity: 1 },
  "Bandos page 3": { item: BandosPage3, rarity: 702.6, quantity: 1 },
  "Bandos page 4": { item: BandosPage4, rarity: 702.6, quantity: 1 },
  "Armadyl page 1": { item: ArmadylPage1, rarity: 702.6, quantity: 1 },
  "Armadyl page 2": { item: ArmadylPage2, rarity: 702.6, quantity: 1 },
  "Armadyl page 3": { item: ArmadylPage3, rarity: 702.6, quantity: 1 },
  "Armadyl page 4": { item: ArmadylPage4, rarity: 702.6, quantity: 1 },
  "Ancient page 1": { item: AncientPage1, rarity: 702.6, quantity: 1 },
  "Ancient page 2": { item: AncientPage2, rarity: 702.6, quantity: 1 },
  "Ancient page 3": { item: AncientPage1, rarity: 702.6, quantity: 1 },
  "Ancient page 4": { item: AncientPage2, rarity: 702.6, quantity: 1 },
};

/**
 * Master tier master clue scroll
 * Note: Master clues can also come from other tiers
 */
const MASTER_MASTER_CLUE: RewardTable = {
  "Clue scroll (master)": { item: Coins, rarity: 30 }, // Placeholder for mimic/rare drops
};

/**
 * Master clue rewards with table-based structure
 * 5-7 items per casket, average 6
 */
export const MASTER_REWARDS = {
  tables: [
    {
      name: "unique",
      weight: 1, // ~1/23 primary roll branch for unique outcomes
      items: {
        ...MASTER_UNIQUE_ITEMS,
        ...MASTER_MEGA_RARE_ITEMS,
      },
      description: "Master clue unique items (40+ at various rarities)",
    },
    {
      name: "standard",
      weight: 22, // ~22/23 primary roll branch for standard/shared outcomes
      items: MASTER_STANDARD_TABLE,
      description: "Dragon weapons, runes, food, resources",
    },
    {
      name: "mega-rare",
      weight: 0, // Separate mega-rare table
      items: MASTER_MEGA_RARE_ITEMS,
      description: "Mega-rare gilded, 3rd age, and unique items (Ring of coins, Bucket helm (g), etc.)",
    },
    {
      name: "shared",
      weight: 0, // Minimal shared items
      items: MASTER_SHARED_ITEMS,
      description: "Shared treasure trail items (coins)",
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...MASTER_UNIQUE_ITEMS,
    ...MASTER_STANDARD_TABLE,
    ...MASTER_MEGA_RARE_ITEMS,
    ...MASTER_SHARED_ITEMS,
  },
};

/**
 * Gets all reward odds for a specific clue tier
 */
export function getClueRewardsByTier(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): RewardTable {
  switch (tier.toLowerCase()) {
    case "beginner":
      return BEGINNER_REWARDS.flattened;
    case "easy":
      return EASY_REWARDS.flattened;
    case "medium":
      return MEDIUM_REWARDS.flattened;
    case "hard":
      return HARD_REWARDS.flattened;
    case "elite":
      return ELITE_REWARDS.flattened;
    case "master":
      return MASTER_REWARDS.flattened;
    default:
      throw new Error(`Unknown clue tier: ${tier}`);
  }
}

/**
 * Gets the table structure for a specific clue tier (if available)
 * Returns null for tiers that don't have table-based rewards
 */
export function getClueRewardTables(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): Array<{ name: string; weight: number; items: RewardTable }> | null {
  switch (tier.toLowerCase()) {
    case "beginner":
      return BEGINNER_REWARDS.tables;
    case "easy":
      return EASY_REWARDS.tables;
    case "medium":
      return MEDIUM_REWARDS.tables;
    case "hard":
      return HARD_REWARDS.tables;
    case "elite":
      return ELITE_REWARDS.tables;
    case "master":
      return MASTER_REWARDS.tables;
    default:
      return null;
  }
}

/**
 * Gets all items for a specific tier as an array
 */
export function getClueItemsList(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): Item[] {
  const rewards = getClueRewardsByTier(tier);
  return Object.values(rewards).map((r) => r.item);
}
