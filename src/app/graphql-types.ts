export type Maybe<T> = T | null;

export interface MotifTokenInput {
  token?: Maybe<string>;
}

export interface InputPlayerInput {
  deck?: Maybe<(Maybe<InputCardInput>)[]>;

  name?: Maybe<string>;

  faction?: Maybe<AngFaction>;

  id?: Maybe<string>;
}

export interface InputCardInput {
  quantity: number;

  card?: Maybe<AgotCardSeed>;
}

export enum AgotRequestType {
  SelectActionToPerform = "SELECT_ACTION_TO_PERFORM",
  SelectReactionToPerform = "SELECT_REACTION_TO_PERFORM",
  SelectInterruptToPerform = "SELECT_INTERRUPT_TO_PERFORM",
  SelectCharacterToKill = "SELECT_CHARACTER_TO_KILL",
  SelectCharacterToDefend = "SELECT_CHARACTER_TO_DEFEND",
  SelectChallengeToInitiate = "SELECT_CHALLENGE_TO_INITIATE",
  SelectCharacterToAttack = "SELECT_CHARACTER_TO_ATTACK",
  SelectCharacterToBypass = "SELECT_CHARACTER_TO_BYPASS",
  SelectDefender = "SELECT_DEFENDER",
  SelectPlotToReveal = "SELECT_PLOT_TO_REVEAL",
  SelectFirstPlayer = "SELECT_FIRST_PLAYER",
  SelectCardToAttach = "SELECT_CARD_TO_ATTACH",
  SelectCardToDiscard = "SELECT_CARD_TO_DISCARD",
  ChooseCard = "CHOOSE_CARD",
  Continue = "CONTINUE"
}

export enum AgotChoiceType {
  SelectCard = "SELECT_CARD",
  SelectCardAction = "SELECT_CARD_ACTION",
  SelectPlayer = "SELECT_PLAYER",
  SelectIcon = "SELECT_ICON",
  Continue = "CONTINUE",
  Pass = "PASS"
}

export enum AngIcon {
  Military = "MILITARY",
  Power = "POWER",
  Intrigue = "INTRIGUE"
}

export enum AgotChoiceCardAction {
  Marshall = "MARSHALL",
  Play = "PLAY",
  Action = "ACTION",
  Reaction = "REACTION",
  Interrupt = "INTERRUPT"
}

export enum AngPhase {
  Challenges = "CHALLENGES",
  Dominance = "DOMINANCE",
  Draw = "DRAW",
  Marshalling = "MARSHALLING",
  Plot = "PLOT",
  Standing = "STANDING",
  Taxation = "TAXATION"
}

export enum GameLogRowType {
  Event = "EVENT",
  Round = "ROUND",
  Phase = "PHASE",
  Step = "STEP"
}

export enum AgotCardSeed {
  ThePowerOfWealthVds = "THE_POWER_OF_WEALTH_VDS",
  ProtectorsOfTheRealmVds = "PROTECTORS_OF_THE_REALM_VDS",
  TreatyVds = "TREATY_VDS",
  UnitingTheSevenKingdomsVds = "UNITING_THE_SEVEN_KINGDOMS_VDS",
  HouseBannermanVds = "HOUSE_BANNERMAN_VDS",
  FeastOrFamineVds = "FEAST_OR_FAMINE_VDS",
  SummonedByTheConclaveVds = "SUMMONED_BY_THE_CONCLAVE_VDS",
  ThePaleMareVds = "THE_PALE_MARE_VDS",
  CompelledByTheKingVds = "COMPELLED_BY_THE_KING_VDS",
  SupportOfSaltcliffeVds = "SUPPORT_OF_SALTCLIFFE_VDS",
  TyrionLannisterVds = "TYRION_LANNISTER_VDS",
  TheVipersRageVds = "THE_VIPERS_RAGE_VDS",
  TheNightfortVds = "THE_NIGHTFORT_VDS",
  RaventreeEliteVds = "RAVENTREE_ELITE_VDS",
  DeadlyKhalasarVds = "DEADLY_KHALASAR_VDS",
  BlackcrownKnightsVds = "BLACKCROWN_KNIGHTS_VDS",
  LynCorbrayVds = "LYN_CORBRAY_VDS",
  HollowHillVds = "HOLLOW_HILL_VDS",
  MusterVds = "MUSTER_VDS",
  HoldingTheTridentVds = "HOLDING_THE_TRIDENT_VDS",
  CommonCauseVds = "COMMON_CAUSE_VDS",
  AClashOfKingsCore = "A_CLASH_OF_KINGS_Core",
  AFeastForCrowsCore = "A_FEAST_FOR_CROWS_Core",
  AGameOfThronesCore = "A_GAME_OF_THRONES_Core",
  ANobleCauseCore = "A_NOBLE_CAUSE_Core",
  AStormOfSwordsCore = "A_STORM_OF_SWORDS_Core",
  BuildingOrdersCore = "BUILDING_ORDERS_Core",
  CallingTheBannersCore = "CALLING_THE_BANNERS_Core",
  CalmOverWesterosCore = "CALM_OVER_WESTEROS_Core",
  ConfiscationCore = "CONFISCATION_Core",
  CountingCoppersCore = "COUNTING_COPPERS_Core",
  FilthyAccusationsCore = "FILTHY_ACCUSATIONS_Core",
  FortifiedPositionCore = "FORTIFIED_POSITION_Core",
  HeadsOnSpikesCore = "HEADS_ON_SPIKES_Core",
  JoustingContestCore = "JOUSTING_CONTEST_Core",
  MarchedToTheWallCore = "MARCHED_TO_THE_WALL_Core",
  MarchingOrdersCore = "MARCHING_ORDERS_Core",
  NavalSuperiorityCore = "NAVAL_SUPERIORITY_Core",
  PowerBehindTheThroneCore = "POWER_BEHIND_THE_THRONE_Core",
  RebuildingCore = "REBUILDING_Core",
  ReinforcementsCore = "REINFORCEMENTS_Core",
  SneakAttackCore = "SNEAK_ATTACK_Core",
  SummonsCore = "SUMMONS_Core",
  SupportingTheFaithCore = "SUPPORTING_THE_FAITH_Core",
  TaxationCore = "TAXATION_Core",
  TheWindsOfWinterCore = "THE_WINDS_OF_WINTER_Core",
  WildfireAssaultCore = "WILDFIRE_ASSAULT_Core",
  FealtyCore = "FEALTY_Core",
  LittlefingerCore = "LITTLEFINGER_Core",
  VarysCore = "VARYS_Core",
  RattleshirtsRaidersCore = "RATTLESHIRTS_RAIDERS_Core",
  WildlingHordeCore = "WILDLING_HORDE_Core",
  SealOfTheHandCore = "SEAL_OF_THE_HAND_Core",
  BodyguardCore = "BODYGUARD_Core",
  LittleBirdCore = "LITTLE_BIRD_Core",
  MilkOfThePoppyCore = "MILK_OF_THE_POPPY_Core",
  NobleLineageCore = "NOBLE_LINEAGE_Core",
  SyriosTrainingCore = "SYRIOS_TRAINING_Core",
  TheIronThroneCore = "THE_IRON_THRONE_Core",
  TheKingsroadCore = "THE_KINGSROAD_Core",
  TheRoseroadCore = "THE_ROSEROAD_Core",
  PutToTheSwordCore = "PUT_TO_THE_SWORD_Core",
  PutToTheTorchCore = "PUT_TO_THE_TORCH_Core",
  SuperiorClaimCore = "SUPERIOR_CLAIM_Core",
  TearsOfLysCore = "TEARS_OF_LYS_Core",
  TheHandsJudgmentCore = "THE_HANDS_JUDGMENT_Core",
  MaesterCressenCore = "MAESTER_CRESSEN_Core",
  MelisandreCore = "MELISANDRE_Core",
  RobertBaratheonCore = "ROBERT_BARATHEON_Core",
  SelyseBaratheonCore = "SELYSE_BARATHEON_Core",
  SerDavosSeaworthCore = "SER_DAVOS_SEAWORTH_Core",
  ShireenBaratheonCore = "SHIREEN_BARATHEON_Core",
  StannisBaratheonCore = "STANNIS_BARATHEON_Core",
  BastardInHidingCore = "BASTARD_IN_HIDING_Core",
  FieryFollowersCore = "FIERY_FOLLOWERS_Core",
  KingsHuntingPartyCore = "KINGS_HUNTING_PARTY_Core",
  DragonstoneFaithfulCore = "DRAGONSTONE_FAITHFUL_Core",
  VanguardLancerCore = "VANGUARD_LANCER_Core",
  LightbringerCore = "LIGHTBRINGER_Core",
  DragonstonePortCore = "DRAGONSTONE_PORT_Core",
  ChamberOfThePaintedTableCore = "CHAMBER_OF_THE_PAINTED_TABLE_Core",
  TheRedKeepCore = "THE_RED_KEEP_Core",
  ConsolidationOfPowerCore = "CONSOLIDATION_OF_POWER_Core",
  OursIsTheFuryCore = "OURS_IS_THE_FURY_Core",
  SeenInFlamesCore = "SEEN_IN_FLAMES_Core",
  AeronDamphairCore = "AERON_DAMPHAIR_Core",
  AlannysGreyjoyCore = "ALANNYS_GREYJOY_Core",
  AshaGreyjoyCore = "ASHA_GREYJOY_Core",
  BalonGreyjoyCore = "BALON_GREYJOY_Core",
  EuronCrowsEyeCore = "EURON_CROWS_EYE_Core",
  MaesterWendamyrCore = "MAESTER_WENDAMYR_Core",
  TheonGreyjoyCore = "THEON_GREYJOY_Core",
  BlackWindsCrewCore = "BLACK_WINDS_CREW_Core",
  DrownedMenCore = "DROWNED_MEN_Core",
  IronIslandsFishmongerCore = "IRON_ISLANDS_FISHMONGER_Core",
  LordsportShipwrightCore = "LORDSPORT_SHIPWRIGHT_Core",
  SaltyNavigatorCore = "SALTY_NAVIGATOR_Core",
  ThrowingAxeCore = "THROWING_AXE_Core",
  GreatKrakenCore = "GREAT_KRAKEN_Core",
  IronFleetScoutCore = "IRON_FLEET_SCOUT_Core",
  SeaTowerCore = "SEA_TOWER_Core",
  RisenFromTheSeaCore = "RISEN_FROM_THE_SEA_Core",
  TheKrakensGraspCore = "THE_KRAKENS_GRASP_Core",
  WeDoNotSowCore = "WE_DO_NOT_SOW_Core",
  CerseiLannisterCore = "CERSEI_LANNISTER_Core",
  GrandMaesterPycelleCore = "GRAND_MAESTER_PYCELLE_Core",
  JoffreyBaratheonCore = "JOFFREY_BARATHEON_Core",
  SerJaimeLannisterCore = "SER_JAIME_LANNISTER_Core",
  TheTicklerCore = "THE_TICKLER_Core",
  TyrionLannisterCore = "TYRION_LANNISTER_Core",
  TywinLannisterCore = "TYWIN_LANNISTER_Core",
  BurnedMenCore = "BURNED_MEN_Core",
  GoldCloaksCore = "GOLD_CLOAKS_Core",
  LannisportMoneylenderCore = "LANNISPORT_MONEYLENDER_Core",
  LannisportMerchantCore = "LANNISPORT_MERCHANT_Core",
  TheQueensAssassinCore = "THE_QUEENS_ASSASSIN_Core",
  WidowsWailCore = "WIDOWS_WAIL_Core",
  CasterlyRockCore = "CASTERLY_ROCK_Core",
  LannisportCore = "LANNISPORT_Core",
  WesternFiefdomCore = "WESTERN_FIEFDOM_Core",
  HearMeRoarCore = "HEAR_ME_ROAR_Core",
  TheThingsIDoForLoveCore = "THE_THINGS_I_DO_FOR_LOVE_Core",
  TreacheryCore = "TREACHERY_Core",
  AreoHotahCore = "AREO_HOTAH_Core",
  ArianneMartellCore = "ARIANNE_MARTELL_Core",
  DoranMartellCore = "DORAN_MARTELL_Core",
  EdricDayneCore = "EDRIC_DAYNE_Core",
  MaesterCaleotteCore = "MAESTER_CALEOTTE_Core",
  ObaraSandCore = "OBARA_SAND_Core",
  TheRedViperCore = "THE_RED_VIPER_Core",
  DesertScavengerCore = "DESERT_SCAVENGER_Core",
  DornishParamourCore = "DORNISH_PARAMOUR_Core",
  GreenbloodTraderCore = "GREENBLOOD_TRADER_Core",
  HouseDayneKnightCore = "HOUSE_DAYNE_KNIGHT_Core",
  PalaceSpearmanCore = "PALACE_SPEARMAN_Core",
  DawnCore = "DAWN_Core",
  GhastonGreyCore = "GHASTON_GREY_Core",
  SunspearCore = "SUNSPEAR_Core",
  BloodOrangeGroveCore = "BLOOD_ORANGE_GROVE_Core",
  DoransGameCore = "DORANS_GAME_Core",
  UnbowedUnbentUnbrokenCore = "UNBOWED_UNBENT_UNBROKEN_Core",
  ConfinementCore = "CONFINEMENT_Core",
  BenjenStarkCore = "BENJEN_STARK_Core",
  GhostCore = "GHOST_Core",
  JonSnowCore = "JON_SNOW_Core",
  MaesterAemonCore = "MAESTER_AEMON_Core",
  OldBearMormontCore = "OLD_BEAR_MORMONT_Core",
  SamwellTarlyCore = "SAMWELL_TARLY_Core",
  SerWaymarRoyceCore = "SER_WAYMAR_ROYCE_Core",
  YorenCore = "YOREN_Core",
  MessengerRavenCore = "MESSENGER_RAVEN_Core",
  OldForestHunterCore = "OLD_FOREST_HUNTER_Core",
  RangingPartyCore = "RANGING_PARTY_Core",
  StewardAtTheWallCore = "STEWARD_AT_THE_WALL_Core",
  VeteranBuilderCore = "VETERAN_BUILDER_Core",
  LongclawCore = "LONGCLAW_Core",
  CastleBlackCore = "CASTLE_BLACK_Core",
  TheWallCore = "THE_WALL_Core",
  AMeagerContributionCore = "A_MEAGER_CONTRIBUTION_Core",
  TakeTheBlackCore = "TAKE_THE_BLACK_Core",
  TheSwordInTheDarknessCore = "THE_SWORD_IN_THE_DARKNESS_Core",
  AryaStarkCore = "ARYA_STARK_Core",
  BranStarkCore = "BRAN_STARK_Core",
  CatelynStarkCore = "CATELYN_STARK_Core",
  EddardStarkCore = "EDDARD_STARK_Core",
  GreyWindCore = "GREY_WIND_Core",
  RobbStarkCore = "ROBB_STARK_Core",
  SansaStarkCore = "SANSA_STARK_Core",
  SummerCore = "SUMMER_Core",
  DirewolfPupCore = "DIREWOLF_PUP_Core",
  TumblestoneKnightCore = "TUMBLESTONE_KNIGHT_Core",
  VanguardOfTheNorthCore = "VANGUARD_OF_THE_NORTH_Core",
  WinterfellStewardCore = "WINTERFELL_STEWARD_Core",
  IceCore = "ICE_Core",
  GatesOfWinterfellCore = "GATES_OF_WINTERFELL_Core",
  TheWolfswoodCore = "THE_WOLFSWOOD_Core",
  HeartTreeGroveCore = "HEART_TREE_GROVE_Core",
  ForTheNorthCore = "FOR_THE_NORTH_Core",
  LikeWarmRainCore = "LIKE_WARM_RAIN_Core",
  WinterIsComingCore = "WINTER_IS_COMING_Core",
  DaenerysTargaryenCore = "DAENERYS_TARGARYEN_Core",
  DrogonCore = "DROGON_Core",
  KhalDrogoCore = "KHAL_DROGO_Core",
  MagisterIllyrioCore = "MAGISTER_ILLYRIO_Core",
  RhaegalCore = "RHAEGAL_Core",
  SerJorahMormontCore = "SER_JORAH_MORMONT_Core",
  ViserionCore = "VISERION_Core",
  ViserysTargaryenCore = "VISERYS_TARGARYEN_Core",
  BraidedWarriorCore = "BRAIDED_WARRIOR_Core",
  HandmaidenCore = "HANDMAIDEN_Core",
  TargaryenLoyalistCore = "TARGARYEN_LOYALIST_Core",
  UnsulliedCore = "UNSULLIED_Core",
  DrogosArakhCore = "DROGOS_ARAKH_Core",
  PlazaOfPunishmentCore = "PLAZA_OF_PUNISHMENT_Core",
  DothrakiSeaCore = "DOTHRAKI_SEA_Core",
  IllyriosEstateCore = "ILLYRIOS_ESTATE_Core",
  DracarysCore = "DRACARYS_Core",
  FireAndBloodCore = "FIRE_AND_BLOOD_Core",
  WakingTheDragonCore = "WAKING_THE_DRAGON_Core",
  LeftCore = "LEFT_Core",
  MaesterLomysCore = "MAESTER_LOMYS_Core",
  MargaeryTyrellCore = "MARGAERY_TYRELL_Core",
  PaxterRedwyneCore = "PAXTER_REDWYNE_Core",
  RandyllTarlyCore = "RANDYLL_TARLY_Core",
  RightCore = "RIGHT_Core",
  TheKnightOfFlowersCore = "THE_KNIGHT_OF_FLOWERS_Core",
  TheQueenOfThornsCore = "THE_QUEEN_OF_THORNS_Core",
  CourtesanOfTheRoseCore = "COURTESAN_OF_THE_ROSE_Core",
  GardenCaretakerCore = "GARDEN_CARETAKER_Core",
  OlennasInformantCore = "OLENNAS_INFORMANT_Core",
  WardensOfTheReachCore = "WARDENS_OF_THE_REACH_Core",
  HeartsbaneCore = "HEARTSBANE_Core",
  HighgardenCore = "HIGHGARDEN_Core",
  TheManderCore = "THE_MANDER_Core",
  RoseGardenCore = "ROSE_GARDEN_Core",
  GrowingStrongCore = "GROWING_STRONG_Core",
  OlennasCunningCore = "OLENNAS_CUNNING_Core",
  TheBearAndTheMaidenFairCore = "THE_BEAR_AND_THE_MAIDEN_FAIR_Core",
  BannerOfTheStagCore = "BANNER_OF_THE_STAG_Core",
  BannerOfTheKrakenCore = "BANNER_OF_THE_KRAKEN_Core",
  BannerOfTheLionCore = "BANNER_OF_THE_LION_Core",
  BannerOfTheSunCore = "BANNER_OF_THE_SUN_Core",
  BannerOfTheWatchCore = "BANNER_OF_THE_WATCH_Core",
  BannerOfTheWolfCore = "BANNER_OF_THE_WOLF_Core",
  BannerOfTheDragonCore = "BANNER_OF_THE_DRAGON_Core",
  BannerOfTheRoseCore = "BANNER_OF_THE_ROSE_Core",
  MasterOfWhispersCore = "MASTER_OF_WHISPERS_Core",
  MasterOfShipsCore = "MASTER_OF_SHIPS_Core",
  HandOfTheKingCore = "HAND_OF_THE_KING_Core",
  MasterOfCoinCore = "MASTER_OF_COIN_Core",
  MasterOfLawsCore = "MASTER_OF_LAWS_Core",
  CrownRegentCore = "CROWN_REGENT_Core",
  WillTtB = "WILL_TtB",
  TheWatchHasNeedTtB = "THE_WATCH_HAS_NEED_TtB",
  MaesterLuwinTtB = "MAESTER_LUWIN_TtB",
  LadyTtB = "LADY_TtB",
  ArborKnightTtB = "ARBOR_KNIGHT_TtB",
  PleasureBargeTtB = "PLEASURE_BARGE_TtB",
  RenlyBaratheonTtB = "RENLY_BARATHEON_TtB",
  KingRobertsWarhammerTtB = "KING_ROBERTS_WARHAMMER_TtB",
  TheHoundTtB = "THE_HOUND_TtB",
  CerseisWheelhouseTtB = "CERSEIS_WHEELHOUSE_TtB",
  TheSeastoneChairTtB = "THE_SEASTONE_CHAIR_TtB",
  RiseOfTheKrakenTtB = "RISE_OF_THE_KRAKEN_TtB",
  MerchantPrinceTtB = "MERCHANT_PRINCE_TtB",
  VaesDothrakTtB = "VAES_DOTHRAK_TtB",
  BastardDaughterTtB = "BASTARD_DAUGHTER_TtB",
  TheLongPlanTtB = "THE_LONG_PLAN_TtB",
  SupportOfThePeopleTtB = "SUPPORT_OF_THE_PEOPLE_TtB",
  StreetOfTheSistersTtB = "STREET_OF_THE_SISTERS_TtB",
  MusterTheRealmTtB = "MUSTER_THE_REALM_TtB",
  HereToServeTtB = "HERE_TO_SERVE_TtB",
  WinterfellKennelMasterTRtW = "WINTERFELL_KENNEL_MASTER_TRtW",
  WinterfellCastleTRtW = "WINTERFELL_CASTLE_TRtW",
  LadyInWaitingTRtW = "LADY_IN_WAITING_TRtW",
  LadySansasRoseTRtW = "LADY_SANSAS_ROSE_TRtW",
  UnswornApprenticeTRtW = "UNSWORN_APPRENTICE_TRtW",
  BrandonsGiftTRtW = "BRANDONS_GIFT_TRtW",
  RoyalEntourageTRtW = "ROYAL_ENTOURAGE_TRtW",
  InTheNameOfYourKingTRtW = "IN_THE_NAME_OF_YOUR_KING_TRtW",
  BrothelMadameTRtW = "BROTHEL_MADAME_TRtW",
  WardensOfTheWestTRtW = "WARDENS_OF_THE_WEST_TRtW",
  TheReaderTRtW = "THE_READER_TRtW",
  RaidingLongshipTRtW = "RAIDING_LONGSHIP_TRtW",
  RakharoTRtW = "RAKHARO_TRtW",
  CrownOfGoldTRtW = "CROWN_OF_GOLD_TRtW",
  NymeriaSandTRtW = "NYMERIA_SAND_TRtW",
  InDoransNameTRtW = "IN_DORANS_NAME_TRtW",
  SyrioForelTRtW = "SYRIO_FOREL_TRtW",
  ShadowblackLaneTRtW = "SHADOWBLACK_LANE_TRtW",
  TradingWithThePentoshiTRtW = "TRADING_WITH_THE_PENTOSHI_TRtW",
  PoliticalDisasterTRtW = "POLITICAL_DISASTER_TRtW",
  SerRodrikCasselTkp = "SER_RODRIK_CASSEL_TKP",
  WolfDreamsTkp = "WOLF_DREAMS_TKP",
  SerHobberRedwyneTkp = "SER_HOBBER_REDWYNE_TKP",
  MareInHeatTkp = "MARE_IN_HEAT_TKP",
  SerAlliserThorneTkp = "SER_ALLISER_THORNE_TKP",
  PracticeBladeTkp = "PRACTICE_BLADE_TKP",
  MoonBoyTkp = "MOON_BOY_TKP",
  TheKingsPeaceTkp = "THE_KINGS_PEACE_TKP",
  SerGregorCleganeTkp = "SER_GREGOR_CLEGANE_TKP",
  INeverBetAgainstMyFamilyTkp = "I_NEVER_BET_AGAINST_MY_FAMILY_TKP",
  NewlyMadeLordTkp = "NEWLY_MADE_LORD_TKP",
  FishingNetTkp = "FISHING_NET_TKP",
  CroneOfVaesDothrakTkp = "CRONE_OF_VAES_DOTHRAK_TKP",
  TheSilverSteedTkp = "THE_SILVER_STEED_TKP",
  AttaintedTkp = "ATTAINTED_TKP",
  TheBonewayTkp = "THE_BONEWAY_TKP",
  HedgeKnightTkp = "HEDGE_KNIGHT_TKP",
  KnightedTkp = "KNIGHTED_TKP",
  ATourneyForTheKingTkp = "A_TOURNEY_FOR_THE_KING_TKP",
  TheLordOfTheCrossingTkp = "THE_LORD_OF_THE_CROSSING_TKP",
  HodorNmg = "HODOR_NMG",
  WardensOfTheNorthNmg = "WARDENS_OF_THE_NORTH_NMG",
  SerHorasRedwyneNmg = "SER_HORAS_REDWYNE_NMG",
  TheArborNmg = "THE_ARBOR_NMG",
  HalderNmg = "HALDER_NMG",
  TheWatcherOnTheWallsNmg = "THE_WATCHER_ON_THE_WALLS_NMG",
  ForTheWatchNmg = "FOR_THE_WATCH_NMG",
  GendryNmg = "GENDRY_NMG",
  TobhoMottsArmoryNmg = "TOBHO_MOTTS_ARMORY_NMG",
  RedCloaksNmg = "RED_CLOAKS_NMG",
  PaidOffNmg = "PAID_OFF_NMG",
  PriestOfTheDrownedGodNmg = "PRIEST_OF_THE_DROWNED_GOD_NMG",
  LootNmg = "LOOT_NMG",
  DothrakiOutridersNmg = "DOTHRAKI_OUTRIDERS_NMG",
  BloodOfTheDragonNmg = "BLOOD_OF_THE_DRAGON_NMG",
  MaesterOfStarfallNmg = "MAESTER_OF_STARFALL_NMG",
  CondemnedNmg = "CONDEMNED_NMG",
  WildlingScoutNmg = "WILDLING_SCOUT_NMG",
  TheFirstSnowOfWinterNmg = "THE_FIRST_SNOW_OF_WINTER_NMG",
  WraithsInTheirMidstNmg = "WRAITHS_IN_THEIR_MIDST_NMG",
  GreatjonsVanguardCoW = "GREATJONS_VANGUARD_CoW",
  WinterfellCryptCoW = "WINTERFELL_CRYPT_CoW",
  RoseroadPatrolCoW = "ROSEROAD_PATROL_CoW",
  PullingTheStringsCoW = "PULLING_THE_STRINGS_CoW",
  ChettCoW = "CHETT_CoW",
  NorthernRookeryCoW = "NORTHERN_ROOKERY_CoW",
  KingswoodCoW = "KINGSWOOD_CoW",
  StinkingDrunkCoW = "STINKING_DRUNK_CoW",
  BronnCoW = "BRONN_CoW",
  TrialByCombatCoW = "TRIAL_BY_COMBAT_CoW",
  RaiderFromPykeCoW = "RAIDER_FROM_PYKE_CoW",
  IronMinesCoW = "IRON_MINES_CoW",
  MirriMazDuurCoW = "MIRRI_MAZ_DUUR_CoW",
  BloodMagicRitualCoW = "BLOOD_MAGIC_RITUAL_CoW",
  KnightsOfTheSunCoW = "KNIGHTS_OF_THE_SUN_CoW",
  VengeanceForEliaCoW = "VENGEANCE_FOR_ELIA_CoW",
  StreetOfSteelCoW = "STREET_OF_STEEL_CoW",
  TheEyrieCoW = "THE_EYRIE_CoW",
  NightmaresCoW = "NIGHTMARES_CoW",
  FamineCoW = "FAMINE_CoW",
  SeptaMordaneTs = "SEPTA_MORDANE_TS",
  WardTs = "WARD_TS",
  ButterbumpsTs = "BUTTERBUMPS_TS",
  AGiftOfArborRedTs = "A_GIFT_OF_ARBOR_RED_TS",
  SwornBrotherTs = "SWORN_BROTHER_TS",
  OldBearsRavenTs = "OLD_BEARS_RAVEN_TS",
  SerBarristanSelmyTs = "SER_BARRISTAN_SELMY_TS",
  CityWatchTs = "CITY_WATCH_TS",
  SerIlynPayneTs = "SER_ILYN_PAYNE_TS",
  SmallCouncilChamberTs = "SMALL_COUNCIL_CHAMBER_TS",
  DagmerCleftjawTs = "DAGMER_CLEFTJAW_TS",
  DrownedGodsBlessingTs = "DROWNED_GODS_BLESSING_TS",
  JhogoTs = "JHOGO_TS",
  FuneralPyreTs = "FUNERAL_PYRE_TS",
  TyeneSandTs = "TYENE_SAND_TS",
  ImprisonedTs = "IMPRISONED_TS",
  MaestersChainTs = "MAESTERS_CHAIN_TS",
  StreetOfSilkTs = "STREET_OF_SILK_TS",
  ForgottenPlansTs = "FORGOTTEN_PLANS_TS",
  CloseCallTs = "CLOSE_CALL_TS",
  KingRobbsHostWotN = "KING_ROBBS_HOST_WotN",
  CatelynStarkWotN = "CATELYN_STARK_WotN",
  EddardStarkWotN = "EDDARD_STARK_WotN",
  TheBlackfishWotN = "THE_BLACKFISH_WotN",
  JonSnowWotN = "JON_SNOW_WotN",
  WolvesOfTheNorthWotN = "WOLVES_OF_THE_NORTH_WotN",
  AryaStarkWotN = "ARYA_STARK_WotN",
  JoryCasselWotN = "JORY_CASSEL_WotN",
  RiverrunMinstrelWotN = "RIVERRUN_MINSTREL_WotN",
  OldNanWotN = "OLD_NAN_WotN",
  OshaWotN = "OSHA_WotN",
  BearIslandLoyalistWotN = "BEAR_ISLAND_LOYALIST_WotN",
  SansaStarkWotN = "SANSA_STARK_WotN",
  ShaggydogWotN = "SHAGGYDOG_WotN",
  HouseTullySeptonWotN = "HOUSE_TULLY_SEPTON_WotN",
  RickonStarkWotN = "RICKON_STARK_WotN",
  WinterfellWotN = "WINTERFELL_WotN",
  WinterfellHeartTreeWotN = "WINTERFELL_HEART_TREE_WotN",
  NymeriaWotN = "NYMERIA_WotN",
  NeedleWotN = "NEEDLE_WotN",
  FrozenSolidWotN = "FROZEN_SOLID_WotN",
  AsHardAsWinterWotN = "AS_HARD_AS_WINTER_WotN",
  ThePackSurvivesWotN = "THE_PACK_SURVIVES_WotN",
  AryasGiftWotN = "ARYAS_GIFT_WotN",
  MotleyWotN = "MOTLEY_WotN",
  EvenHandedJusticeWotN = "EVEN_HANDED_JUSTICE_WotN",
  FishwhiskersWotN = "FISHWHISKERS_WotN",
  AheadOfTheTideWotN = "AHEAD_OF_THE_TIDE_WotN",
  CrossroadsSellswordWotN = "CROSSROADS_SELLSWORD_WotN",
  TowerOfTheHandWotN = "TOWER_OF_THE_HAND_WotN",
  QuentynMartellWotN = "QUENTYN_MARTELL_WotN",
  HisViperEyesWotN = "HIS_VIPER_EYES_WotN",
  StonesnakeWotN = "STONESNAKE_WotN",
  TheShadowTowerWotN = "THE_SHADOW_TOWER_WotN",
  AggoWotN = "AGGO_WotN",
  DragonSightWotN = "DRAGON_SIGHT_WotN",
  HouseFlorentKnightWotN = "HOUSE_FLORENT_KNIGHT_WotN",
  ToTheRoseBannerWotN = "TO_THE_ROSE_BANNER_WotN",
  ManceRayderWotN = "MANCE_RAYDER_WotN",
  YoungSpearwifeWotN = "YOUNG_SPEARWIFE_WotN",
  HouseMaesterWotN = "HOUSE_MAESTER_WotN",
  TourneyGroundsWotN = "TOURNEY_GROUNDS_WotN",
  GreenDreamsWotN = "GREEN_DREAMS_WotN",
  HealingExpertiseWotN = "HEALING_EXPERTISE_WotN",
  TitheWotN = "TITHE_WotN",
  ATimeForWolvesWotN = "A_TIME_FOR_WOLVES_WotN",
  FallenFromFavorWotN = "FALLEN_FROM_FAVOR_WotN",
  SnowedUnderWotN = "SNOWED_UNDER_WotN",
  TheLongWinterWotN = "THE_LONG_WINTER_WotN",
  ASongOfSummerWotN = "A_SONG_OF_SUMMER_WotN",
  WeaponsAtTheDoorWotN = "WEAPONS_AT_THE_DOOR_WotN",
  RangersCacheWotN = "RANGERS_CACHE_WotN",
  TheDragonsTailAtSk = "THE_DRAGONS_TAIL_AtSK",
  RobbStarkAtSk = "ROBB_STARK_AtSK",
  RiverrunAtSk = "RIVERRUN_AtSK",
  SerColenOfGreenpoolsAtSk = "SER_COLEN_OF_GREENPOOLS_AtSK",
  BitterbridgeEncampmentAtSk = "BITTERBRIDGE_ENCAMPMENT_AtSK",
  ArryAtSk = "ARRY_AtSK",
  WhiteTreeAtSk = "WHITE_TREE_AtSK",
  WhiteRavenAtSk = "WHITE_RAVEN_AtSK",
  RubyOfRhllorAtSk = "RUBY_OF_RHLLOR_AtSK",
  JanosSlyntAtSk = "JANOS_SLYNT_AtSK",
  LeviesAtTheRockAtSk = "LEVIES_AT_THE_ROCK_AtSK",
  CaptainsDaughterAtSk = "CAPTAINS_DAUGHTER_AtSK",
  PykeAtSk = "PYKE_AtSK",
  ViserysTargaryenAtSk = "VISERYS_TARGARYEN_AtSK",
  ShierakQiyaAtSk = "SHIERAK_QIYA_AtSK",
  HarmenUllerAtSk = "HARMEN_ULLER_AtSK",
  TowerOfTheSunAtSk = "TOWER_OF_THE_SUN_AtSK",
  PyromancersAtSk = "PYROMANCERS_AtSK",
  RainsOfAutumnAtSk = "RAINS_OF_AUTUMN_AtSK",
  VaryssRiddleAtSk = "VARYSS_RIDDLE_AtSK",
  DonellaHornwoodCtA = "DONELLA_HORNWOOD_CtA",
  FearCutsDeeperThanSwordsCtA = "FEAR_CUTS_DEEPER_THAN_SWORDS_CtA",
  KnightOfSummerCtA = "KNIGHT_OF_SUMMER_CtA",
  ThereIsMyClaimCtA = "THERE_IS_MY_CLAIM_CtA",
  DolorousEddCtA = "DOLOROUS_EDD_CtA",
  CravenCtA = "CRAVEN_CtA",
  MaesterPylosCtA = "MAESTER_PYLOS_CtA",
  TheStoneDrumCtA = "THE_STONE_DRUM_CtA",
  ShaeCtA = "SHAE_CtA",
  TheBoyKingCtA = "THE_BOY_KING_CtA",
  BalonGreyjoyCtA = "BALON_GREYJOY_CtA",
  OursIsTheOldWayCtA = "OURS_IS_THE_OLD_WAY_CtA",
  DoreahCtA = "DOREAH_CtA",
  BeggarKingCtA = "BEGGAR_KING_CtA",
  StarfallCavalryCtA = "STARFALL_CAVALRY_CtA",
  VenomousBladeCtA = "VENOMOUS_BLADE_CtA",
  KingsOfSummerCtA = "KINGS_OF_SUMMER_CtA",
  KingsOfWinterCtA = "KINGS_OF_WINTER_CtA",
  SummerHarvestCtA = "SUMMER_HARVEST_CtA",
  WinterFestivalCtA = "WINTER_FESTIVAL_CtA",
  SerEdmureTullyFfh = "SER_EDMURE_TULLY_FFH",
  BearIslandFfh = "BEAR_ISLAND_FFH",
  RenlyBaratheonFfh = "RENLY_BARATHEON_FFH",
  CrownOfGoldenRosesFfh = "CROWN_OF_GOLDEN_ROSES_FFH",
  ThorenSmallwoodFfh = "THOREN_SMALLWOOD_FFH",
  NightGathersFfh = "NIGHT_GATHERS_FFH",
  AsshaiPriestessFfh = "ASSHAI_PRIESTESS_FFH",
  VisitedByShadowsFfh = "VISITED_BY_SHADOWS_FFH",
  SerAmoryLorchFfh = "SER_AMORY_LORCH_FFH",
  HarrenhalFfh = "HARRENHAL_FFH",
  LordsportFishermanFfh = "LORDSPORT_FISHERMAN_FFH",
  KingOfSaltAndRockFfh = "KING_OF_SALT_AND_ROCK_FFH",
  DevotedBloodriderFfh = "DEVOTED_BLOODRIDER_FFH",
  BloodOfMyBloodFfh = "BLOOD_OF_MY_BLOOD_FFH",
  SpearmaidenFfh = "SPEARMAIDEN_FFH",
  TheScorpionsStingFfh = "THE_SCORPIONS_STING_FFH",
  HotPieFfh = "HOT_PIE_FFH",
  TheGodsEyeFfh = "THE_GODS_EYE_FFH",
  DissensionFfh = "DISSENSION_FFH",
  BattleOfOxcrossFfh = "BATTLE_OF_OXCROSS_FFH",
  JojenReedTimc = "JOJEN_REED_TIMC",
  TheWolfKingTimc = "THE_WOLF_KING_TIMC",
  KingRenlysHostTimc = "KING_RENLYS_HOST_TIMC",
  CaswellsKeepTimc = "CASWELLS_KEEP_TIMC",
  ShadowTowerMasonTimc = "SHADOW_TOWER_MASON_TIMC",
  TheHauntedForestTimc = "THE_HAUNTED_FOREST_TIMC",
  StannisBaratheonTimc = "STANNIS_BARATHEON_TIMC",
  RedGodsBlessingTimc = "RED_GODS_BLESSING_TIMC",
  TandaStokeworthTimc = "TANDA_STOKEWORTH_TIMC",
  WithoutHisBeardTimc = "WITHOUT_HIS_BEARD_TIMC",
  AeronDamphairTimc = "AERON_DAMPHAIR_TIMC",
  KingBalonsSolarTimc = "KING_BALONS_SOLAR_TIMC",
  PyatPreeTimc = "PYAT_PREE_TIMC",
  VaesTolorroTimc = "VAES_TOLORRO_TIMC",
  EliaSandTimc = "ELIA_SAND_TIMC",
  BurningOnTheSandTimc = "BURNING_ON_THE_SAND_TIMC",
  JaqenHgharTimc = "JAQEN_HGHAR_TIMC",
  IsleOfRavensTimc = "ISLE_OF_RAVENS_TIMC",
  KingBeyondTheWallTimc = "KING_BEYOND_THE_WALL_TIMC",
  ValarMorghulisTimc = "VALAR_MORGHULIS_TIMC",
  RooseBoltonGoH = "ROOSE_BOLTON_GoH",
  HarrenhalGoH = "HARRENHAL_GoH",
  BrienneOfTarthGoH = "BRIENNE_OF_TARTH_GoH",
  OfferOfAPeachGoH = "OFFER_OF_A_PEACH_GoH",
  CrasterGoH = "CRASTER_GoH",
  DragonglassDaggerGoH = "DRAGONGLASS_DAGGER_GoH",
  SerDavosSeaworthGoH = "SER_DAVOS_SEAWORTH_GoH",
  RitualOfRhllorGoH = "RITUAL_OF_RHLLOR_GoH",
  JoffreyBaratheonGoH = "JOFFREY_BARATHEON_GoH",
  ChatayasBrothelGoH = "CHATAYAS_BROTHEL_GoH",
  HelyaGoH = "HELYA_GoH",
  BlessHimWithSaltGoH = "BLESS_HIM_WITH_SALT_GoH",
  XaroXhoanDaxosGoH = "XARO_XHOAN_DAXOS_GoH",
  MotherOfDragonsGoH = "MOTHER_OF_DRAGONS_GoH",
  MyrcellaBaratheonGoH = "MYRCELLA_BARATHEON_GoH",
  ThePrincesPassGoH = "THE_PRINCES_PASS_GoH",
  SilentSistersGoH = "SILENT_SISTERS_GoH",
  TheFrostfangsGoH = "THE_FROSTFANGS_GoH",
  QuietAsAShadowGoH = "QUIET_AS_A_SHADOW_GoH",
  GhostsOfHarrenhalGoH = "GHOSTS_OF_HARRENHAL_GoH",
  HouseManderlyKnightTc = "HOUSE_MANDERLY_KNIGHT_TC",
  WolfInTheNightTc = "WOLF_IN_THE_NIGHT_TC",
  SerRobarRoyceTc = "SER_ROBAR_ROYCE_TC",
  RenlysPavilionTc = "RENLYS_PAVILION_TC",
  QhorinHalfhandTc = "QHORIN_HALFHAND_TC",
  FistOfTheFirstMenTc = "FIST_OF_THE_FIRST_MEN_TC",
  SalladhorSaanTc = "SALLADHOR_SAAN_TC",
  TheValyrianTc = "THE_VALYRIAN_TC",
  PodrickPayneTc = "PODRICK_PAYNE_TC",
  TyrionsChainTc = "TYRIONS_CHAIN_TC",
  EsgredTc = "ESGRED_TC",
  SeaBitchTc = "SEA_BITCH_TC",
  QuaitheOfTheShadowTc = "QUAITHE_OF_THE_SHADOW_TC",
  HouseOfTheUndyingTc = "HOUSE_OF_THE_UNDYING_TC",
  SerArysOakheartTc = "SER_ARYS_OAKHEART_TC",
  TheGreenbloodTc = "THE_GREENBLOOD_TC",
  NorthernRefugeeTc = "NORTHERN_REFUGEE_TC",
  RelentlessAssaultTc = "RELENTLESS_ASSAULT_TC",
  TarredHeadsTc = "TARRED_HEADS_TC",
  BattleOfTheBlackwaterTc = "BATTLE_OF_THE_BLACKWATER_TC",
  CerseiLannisterLoCr = "CERSEI_LANNISTER_LoCR",
  TyrionLannisterLoCr = "TYRION_LANNISTER_LoCR",
  SerKevanLannisterLoCr = "SER_KEVAN_LANNISTER_LoCR",
  TimettSonOfTimettLoCr = "TIMETT_SON_OF_TIMETT_LoCR",
  SerJaimeLannisterLoCr = "SER_JAIME_LANNISTER_LoCR",
  TywinLannisterLoCr = "TYWIN_LANNISTER_LoCR",
  ChellaDaughterOfCheykLoCr = "CHELLA_DAUGHTER_OF_CHEYK_LoCR",
  SerGregorsMaraudersLoCr = "SER_GREGORS_MARAUDERS_LoCR",
  ShaggaSonOfDolfLoCr = "SHAGGA_SON_OF_DOLF_LoCR",
  TaenaMerryweatherLoCr = "TAENA_MERRYWEATHER_LoCR",
  MoonBrothersLoCr = "MOON_BROTHERS_LoCR",
  RedKeepSpyLoCr = "RED_KEEP_SPY_LoCR",
  AlayayaLoCr = "ALAYAYA_LoCR",
  SerLancelLannisterLoCr = "SER_LANCEL_LANNISTER_LoCR",
  TommenBaratheonLoCr = "TOMMEN_BARATHEON_LoCR",
  LannisportGuardLoCr = "LANNISPORT_GUARD_LoCR",
  GoldenToothLoCr = "GOLDEN_TOOTH_LoCR",
  MountainsOfTheMoonLoCr = "MOUNTAINS_OF_THE_MOON_LoCR",
  LannisportTreasuryLoCr = "LANNISPORT_TREASURY_LoCR",
  ShieldOfLannisportLoCr = "SHIELD_OF_LANNISPORT_LoCR",
  ValyrianSteelDaggerLoCr = "VALYRIAN_STEEL_DAGGER_LoCR",
  ALannisterAlwaysPaysHisDebtsLoCr = "A_LANNISTER_ALWAYS_PAYS_HIS_DEBTS_LoCR",
  InsidiousSchemeLoCr = "INSIDIOUS_SCHEME_LoCR",
  DaringRescueLoCr = "DARING_RESCUE_LoCR",
  EdricStormLoCr = "EDRIC_STORM_LoCR",
  DisputedClaimLoCr = "DISPUTED_CLAIM_LoCR",
  VictarionGreyjoyLoCr = "VICTARION_GREYJOY_LoCR",
  OldWykLoCr = "OLD_WYK_LoCR",
  TrystaneMartellLoCr = "TRYSTANE_MARTELL_LoCR",
  YouMurderedHerChildrenLoCr = "YOU_MURDERED_HER_CHILDREN_LoCR",
  SweetDonnelHillLoCr = "SWEET_DONNEL_HILL_LoCR",
  BridgeOfSkullsLoCr = "BRIDGE_OF_SKULLS_LoCR",
  JeyneWesterlingLoCr = "JEYNE_WESTERLING_LoCR",
  LastHearthScoutsLoCr = "LAST_HEARTH_SCOUTS_LoCR",
  SerBarristanSelmyLoCr = "SER_BARRISTAN_SELMY_LoCR",
  DaeneryssFavorLoCr = "DAENERYSS_FAVOR_LoCR",
  AlerieTyrellLoCr = "ALERIE_TYRELL_LoCR",
  ARoseOfGoldLoCr = "A_ROSE_OF_GOLD_LoCR",
  HighSeptonLoCr = "HIGH_SEPTON_LoCR",
  DevoutFreeriderLoCr = "DEVOUT_FREERIDER_LoCR",
  WildlingBanditLoCr = "WILDLING_BANDIT_LoCR",
  OceanRoadLoCr = "OCEAN_ROAD_LoCR",
  AppointedLoCr = "APPOINTED_LoCR",
  TheCouncilConsentsLoCr = "THE_COUNCIL_CONSENTS_LoCR",
  TheRainsOfCastamereLoCr = "THE_RAINS_OF_CASTAMERE_LoCR",
  LionsOfTheRockLoCr = "LIONS_OF_THE_ROCK_LoCR",
  UnexpectedDelayLoCr = "UNEXPECTED_DELAY_LoCR",
  SummonedToCourtLoCr = "SUMMONED_TO_COURT_LoCR",
  LittlefingersMeddlingLoCr = "LITTLEFINGERS_MEDDLING_LoCR",
  GossipAndLiesLoCr = "GOSSIP_AND_LIES_LoCR",
  TimeOfPlentyLoCr = "TIME_OF_PLENTY_LoCR",
  EarlyFrostLoCr = "EARLY_FROST_LoCR",
  HosterTullyAmaf = "HOSTER_TULLY_AMAF",
  TheTumblestoneAmaf = "THE_TUMBLESTONE_AMAF",
  MargaeryTyrellAmaf = "MARGAERY_TYRELL_AMAF",
  AllMenAreFoolsAmaf = "ALL_MEN_ARE_FOOLS_AMAF",
  EastwatchCarpenterAmaf = "EASTWATCH_CARPENTER_AMAF",
  EastwatchByTheSeaAmaf = "EASTWATCH_BY_THE_SEA_AMAF",
  FickleBannermanAmaf = "FICKLE_BANNERMAN_AMAF",
  StormsEndAmaf = "STORMS_END_AMAF",
  StoneCrowsAmaf = "STONE_CROWS_AMAF",
  AttackFromTheMountainsAmaf = "ATTACK_FROM_THE_MOUNTAINS_AMAF",
  DrownedDiscipleAmaf = "DROWNED_DISCIPLE_AMAF",
  MoatCailinAmaf = "MOAT_CAILIN_AMAF",
  GhiscariEliteAmaf = "GHISCARI_ELITE_AMAF",
  SlaversBayPortAmaf = "SLAVERS_BAY_PORT_AMAF",
  RicassoAmaf = "RICASSO_AMAF",
  ThePrincesPlanAmaf = "THE_PRINCES_PLAN_AMAF",
  YgritteAmaf = "YGRITTE_AMAF",
  AllianceAmaf = "ALLIANCE_AMAF",
  BarringTheGatesAmaf = "BARRING_THE_GATES_AMAF",
  LateSummerFeastAmaf = "LATE_SUMMER_FEAST_AMAF",
  BearIslandHostGtR = "BEAR_ISLAND_HOST_GtR",
  MarriagePactGtR = "MARRIAGE_PACT_GtR",
  KnightOfTheReachGtR = "KNIGHT_OF_THE_REACH_GtR",
  LordRenlysRideGtR = "LORD_RENLYS_RIDE_GtR",
  GillyGtR = "GILLY_GtR",
  GuardingTheRealmGtR = "GUARDING_THE_REALM_GtR",
  MelisandreGtR = "MELISANDRE_GtR",
  LightOfTheLordGtR = "LIGHT_OF_THE_LORD_GtR",
  PolliverGtR = "POLLIVER_GtR",
  TheHandsSolarGtR = "THE_HANDS_SOLAR_GtR",
  WexPykeGtR = "WEX_PYKE_GtR",
  IronIslandsMarketGtR = "IRON_ISLANDS_MARKET_GtR",
  SecondSonsGtR = "SECOND_SONS_GtR",
  ADragonIsNoSlaveGtR = "A_DRAGON_IS_NO_SLAVE_GtR",
  OrphanOfTheGreenbloodGtR = "ORPHAN_OF_THE_GREENBLOOD_GtR",
  ScorchingDesertsGtR = "SCORCHING_DESERTS_GtR",
  BlackWalderGtR = "BLACK_WALDER_GtR",
  GreatHallGtR = "GREAT_HALL_GtR",
  TheDornishmansWifeGtR = "THE_DORNISHMANS_WIFE_GtR",
  TheAnnalsOfCastleBlackGtR = "THE_ANNALS_OF_CASTLE_BLACK_GtR",
  RoamingWolfpackTFoA = "ROAMING_WOLFPACK_TFoA",
  TheNorthRemembersTFoA = "THE_NORTH_REMEMBERS_TFoA",
  ElinorTyrellTFoA = "ELINOR_TYRELL_TFoA",
  SilverHairNetTFoA = "SILVER_HAIR_NET_TFoA",
  RecruiterForTheWatchTFoA = "RECRUITER_FOR_THE_WATCH_TFoA",
  UndergroundVaultTFoA = "UNDERGROUND_VAULT_TFoA",
  FleaBottomBastardTFoA = "FLEA_BOTTOM_BASTARD_TFoA",
  SpearsOfTheMerlingKingTFoA = "SPEARS_OF_THE_MERLING_KING_TFoA",
  CerseisAttendantTFoA = "CERSEIS_ATTENDANT_TFoA",
  FeverDreamsTFoA = "FEVER_DREAMS_TFoA",
  TheonGreyjoyTFoA = "THEON_GREYJOY_TFoA",
  CorsairsDirkTFoA = "CORSAIRS_DIRK_TFoA",
  GreyWormTFoA = "GREY_WORM_TFoA",
  AstaporTFoA = "ASTAPOR_TFoA",
  MaesterOfSunspearTFoA = "MAESTER_OF_SUNSPEAR_TFoA",
  DornishFiefdomTFoA = "DORNISH_FIEFDOM_TFoA",
  FreyLordlingTFoA = "FREY_LORDLING_TFoA",
  TheTwinsTFoA = "THE_TWINS_TFoA",
  LaySiegeTFoA = "LAY_SIEGE_TFoA",
  DuelTFoA = "DUEL_TFoA",
  DaceyMormontTrw = "DACEY_MORMONT_TRW",
  WinterfellArcheryRangeTrw = "WINTERFELL_ARCHERY_RANGE_TRW",
  OldtownInformerTrw = "OLDTOWN_INFORMER_TRW",
  ArborVineyardTrw = "ARBOR_VINEYARD_TRW",
  OthellYarwyckTrw = "OTHELL_YARWYCK_TRW",
  ImprovedFortificationsTrw = "IMPROVED_FORTIFICATIONS_TRW",
  SerAxellFlorentTrw = "SER_AXELL_FLORENT_TRW",
  SavingTheKingdomTrw = "SAVING_THE_KINGDOM_TRW",
  SerOsmundKettleblackTrw = "SER_OSMUND_KETTLEBLACK_TRW",
  TywinsStratagemTrw = "TYWINS_STRATAGEM_TRW",
  SilencesCrewTrw = "SILENCES_CREW_TRW",
  PlunderTrw = "PLUNDER_TRW",
  StrongBelwasTrw = "STRONG_BELWAS_TRW",
  BreakerOfChainsTrw = "BREAKER_OF_CHAINS_TRW",
  EllariaSandTrw = "ELLARIA_SAND_TRW",
  SecretSchemesTrw = "SECRET_SCHEMES_TRW",
  WalderFreyTrw = "WALDER_FREY_TRW",
  FreyBastardTrw = "FREY_BASTARD_TRW",
  FreyHospitalityTrw = "FREY_HOSPITALITY_TRW",
  TheRedWeddingTrw = "THE_RED_WEDDING_TRW",
  BranStarkOr = "BRAN_STARK_OR",
  PassingTheBlackGateOr = "PASSING_THE_BLACK_GATE_OR",
  SerGarlanTyrellOr = "SER_GARLAN_TYRELL_OR",
  OlennasMachinationsOr = "OLENNAS_MACHINATIONS_OR",
  DefenderOfTheWallOr = "DEFENDER_OF_THE_WALL_OR",
  MutinyAtCrastersKeepOr = "MUTINY_AT_CRASTERS_KEEP_OR",
  StannissCavalryOr = "STANNISS_CAVALRY_OR",
  NorthernEncampmentOr = "NORTHERN_ENCAMPMENT_OR",
  KayceMerchantOr = "KAYCE_MERCHANT_OR",
  ATaskForEveryToolOr = "A_TASK_FOR_EVERY_TOOL_OR",
  NuteTheBarberOr = "NUTE_THE_BARBER_OR",
  IronVictoryOr = "IRON_VICTORY_OR",
  IrriOr = "IRRI_OR",
  OverthrowingTheMastersOr = "OVERTHROWING_THE_MASTERS_OR",
  TheRedViperOr = "THE_RED_VIPER_OR",
  DornishRevengeOr = "DORNISH_REVENGE_OR",
  BeggingBrotherOr = "BEGGING_BROTHER_OR",
  FleaBottomOr = "FLEA_BOTTOM_OR",
  TheIronBankWillHaveItsDueOr = "THE_IRON_BANK_WILL_HAVE_ITS_DUE_OR",
  WheelsWithinWheelsOr = "WHEELS_WITHIN_WHEELS_OR",
  SansasMaidTbwb = "SANSAS_MAID_TBWB",
  NorthernKeepTbwb = "NORTHERN_KEEP_TBWB",
  HighgardenMinstrelTbwb = "HIGHGARDEN_MINSTREL_TBWB",
  HornHillTbwb = "HORN_HILL_TBWB",
  DonalNoyeTbwb = "DONAL_NOYE_TBWB",
  RangersBowTbwb = "RANGERS_BOW_TBWB",
  PatchfaceTbwb = "PATCHFACE_TBWB",
  KingsBloodTbwb = "KINGS_BLOOD_TBWB",
  GennaFreyTbwb = "GENNA_FREY_TBWB",
  TheGoldroadTbwb = "THE_GOLDROAD_TBWB",
  StonyShoreRaiderTbwb = "STONY_SHORE_RAIDER_TBWB",
  PayTheIronPriceTbwb = "PAY_THE_IRON_PRICE_TBWB",
  FreedmenTbwb = "FREEDMEN_TBWB",
  WarriorsBraidTbwb = "WARRIORS_BRAID_TBWB",
  DornishSpyTbwb = "DORNISH_SPY_TBWB",
  LockedAwayTbwb = "LOCKED_AWAY_TBWB",
  BericDondarrionTbwb = "BERIC_DONDARRION_TBWB",
  UnbridledGenerosityTbwb = "UNBRIDLED_GENEROSITY_TBWB",
  TheBrotherhoodWithoutBannersTbwb = "THE_BROTHERHOOD_WITHOUT_BANNERS_TBWB",
  FavorsFromTheCrownTbwb = "FAVORS_FROM_THE_CROWN_TBWB",
  JonSnowWotW = "JON_SNOW_WotW",
  BowenMarshWotW = "BOWEN_MARSH_WotW",
  OldBearMormontWotW = "OLD_BEAR_MORMONT_WotW",
  CotterPykeWotW = "COTTER_PYKE_WotW",
  MaesterAemonWotW = "MAESTER_AEMON_WotW",
  GrizzledMinerWotW = "GRIZZLED_MINER_WotW",
  SerDenysMallisterWotW = "SER_DENYS_MALLISTER_WotW",
  SerJaremyRykkerWotW = "SER_JAREMY_RYKKER_WotW",
  CastleBlackMasonWotW = "CASTLE_BLACK_MASON_WotW",
  GrennWotW = "GRENN_WotW",
  PypWotW = "PYP_WotW",
  SamwellTarlyWotW = "SAMWELL_TARLY_WotW",
  SatinWotW = "SATIN_WotW",
  LostRangerWotW = "LOST_RANGER_WotW",
  SeasonedWoodsmanWotW = "SEASONED_WOODSMAN_WotW",
  BuilderAtTheWallWotW = "BUILDER_AT_THE_WALL_WotW",
  TheNewGiftWotW = "THE_NEW_GIFT_WotW",
  AbandonedStrongholdWotW = "ABANDONED_STRONGHOLD_WotW",
  QueenscrownWotW = "QUEENSCROWN_WotW",
  CatapultOnTheWallWotW = "CATAPULT_ON_THE_WALL_WotW",
  GhostWotW = "GHOST_WotW",
  SwornToTheWatchWotW = "SWORN_TO_THE_WATCH_WotW",
  NowMyWatchBeginsWotW = "NOW_MY_WATCH_BEGINS_WotW",
  IShallWinNoGloryWotW = "I_SHALL_WIN_NO_GLORY_WotW",
  MaryaSeaworthWotW = "MARYA_SEAWORTH_WotW",
  BlackBethaWotW = "BLACK_BETHA_WotW",
  SaltWifeWotW = "SALT_WIFE_WotW",
  RaidingTheBayOfIceWotW = "RAIDING_THE_BAY_OF_ICE_WotW",
  UlfSonOfUmarWotW = "ULF_SON_OF_UMAR_WotW",
  ThereAreNoMenLikeMeWotW = "THERE_ARE_NO_MEN_LIKE_ME_WotW",
  SouthronMessengerWotW = "SOUTHRON_MESSENGER_WotW",
  LingeringVenomWotW = "LINGERING_VENOM_WotW",
  JeynePooleWotW = "JEYNE_POOLE_WotW",
  SummerWotW = "SUMMER_WotW",
  DothrakiHonorGuardWotW = "DOTHRAKI_HONOR_GUARD_WotW",
  PlazaOfPrideWotW = "PLAZA_OF_PRIDE_WotW",
  SerJonFossowayWotW = "SER_JON_FOSSOWAY_WotW",
  TheHoneywineWotW = "THE_HONEYWINE_WotW",
  RattleshirtWotW = "RATTLESHIRT_WotW",
  DallaWotW = "DALLA_WotW",
  CrowKillersWotW = "CROW_KILLERS_WotW",
  TheFrozenShoreWotW = "THE_FROZEN_SHORE_WotW",
  WeirwoodBowWotW = "WEIRWOOD_BOW_WotW",
  ScalingTheWallWotW = "SCALING_THE_WALL_WotW",
  TheLastOfTheGiantsWotW = "THE_LAST_OF_THE_GIANTS_WotW",
  TheFireThatBurnsWotW = "THE_FIRE_THAT_BURNS_WotW",
  RetaliationWotW = "RETALIATION_WotW",
  WhisperCampaignWotW = "WHISPER_CAMPAIGN_WotW",
  CalledIntoServiceWotW = "CALLED_INTO_SERVICE_WotW",
  TheWhiteShadowsWotW = "THE_WHITE_SHADOWS_WotW",
  NameDayTourneyWotW = "NAME_DAY_TOURNEY_WotW",
  FrozenExpanseWotW = "FROZEN_EXPANSE_WotW",
  ArchmaestersKeyTak = "ARCHMAESTERS_KEY_TAK",
  DreadfortMaesterTak = "DREADFORT_MAESTER_TAK",
  AtNightTheyHowlTak = "AT_NIGHT_THEY_HOWL_TAK",
  SeptaNystericaTak = "SEPTA_NYSTERICA_TAK",
  OathkeeperTak = "OATHKEEPER_TAK",
  YoungBuilderTak = "YOUNG_BUILDER_TAK",
  TheRatCookTak = "THE_RAT_COOK_TAK",
  QueensMenTak = "QUEENS_MEN_TAK",
  TraitorToTheCrownTak = "TRAITOR_TO_THE_CROWN_TAK",
  MaesterAtTheRockTak = "MAESTER_AT_THE_ROCK_TAK",
  AshemarkTak = "ASHEMARK_TAK",
  AcolyteOfTheWavesTak = "ACOLYTE_OF_THE_WAVES_TAK",
  NaggasRibsTak = "NAGGAS_RIBS_TAK",
  DaarioNaharisTak = "DAARIO_NAHARIS_TAK",
  BloodyArakhTak = "BLOODY_ARAKH_TAK",
  DoreaSandTak = "DOREA_SAND_TAK",
  TheWaterGardensTak = "THE_WATER_GARDENS_TAK",
  MagTheMightyTak = "MAG_THE_MIGHTY_TAK",
  TheIronBankTak = "THE_IRON_BANK_TAK",
  ValarDohaerisTak = "VALAR_DOHAERIS_TAK",
  MaegeMormontJtO = "MAEGE_MORMONT_JtO",
  TheHouseOfBlackAndWhiteJtO = "THE_HOUSE_OF_BLACK_AND_WHITE_JtO",
  BrightwaterKnightJtO = "BRIGHTWATER_KNIGHT_JtO",
  OldtownJtO = "OLDTOWN_JtO",
  DareonJtO = "DAREON_JtO",
  JourneyToOldtownJtO = "JOURNEY_TO_OLDTOWN_JtO",
  DevanSeaworthJtO = "DEVAN_SEAWORTH_JtO",
  StannissWrathJtO = "STANNISS_WRATH_JtO",
  BlackEarsJtO = "BLACK_EARS_JtO",
  KingslayerJtO = "KINGSLAYER_JtO",
  TrisBotleyJtO = "TRIS_BOTLEY_JtO",
  BlackWindJtO = "BLACK_WIND_JtO",
  StormcrowsJtO = "STORMCROWS_JtO",
  ConsumingFlamesJtO = "CONSUMING_FLAMES_JtO",
  ArianneMartellJtO = "ARIANNE_MARTELL_JtO",
  ChangeOfPlansJtO = "CHANGE_OF_PLANS_JtO",
  ThorosOfMyrJtO = "THOROS_OF_MYR_JtO",
  GatesOfTheMoonJtO = "GATES_OF_THE_MOON_JtO",
  TheHouseWithTheRedDoorJtO = "THE_HOUSE_WITH_THE_RED_DOOR_JtO",
  SailingTheSummerSeaJtO = "SAILING_THE_SUMMER_SEA_JtO",
  RamsaySnowKm = "RAMSAY_SNOW_Km",
  TheDreadfortKm = "THE_DREADFORT_Km",
  SerHyleHuntKm = "SER_HYLE_HUNT_Km",
  TheBountyOfHighgardenKm = "THE_BOUNTY_OF_HIGHGARDEN_Km",
  HauntedForestScoutKm = "HAUNTED_FOREST_SCOUT_Km",
  MolesTownKm = "MOLES_TOWN_Km",
  LyseniPirateKm = "LYSENI_PIRATE_Km",
  LaughingLordKm = "LAUGHING_LORD_Km",
  RaffTheSweetlingKm = "RAFF_THE_SWEETLING_Km",
  SparringInSecretKm = "SPARRING_IN_SECRET_Km",
  AshaGreyjoyKm = "ASHA_GREYJOY_Km",
  KingsmootKm = "KINGSMOOT_Km",
  JhiquiKm = "JHIQUI_Km",
  TheSkahazadhanKm = "THE_SKAHAZADHAN_Km",
  DarkstarKm = "DARKSTAR_Km",
  SandSteedKm = "SAND_STEED_Km",
  TomOfSevenstreamsKm = "TOM_OF_SEVENSTREAMS_Km",
  LemLemoncloakKm = "LEM_LEMONCLOAK_Km",
  ForgottenByHistoryKm = "FORGOTTEN_BY_HISTORY_Km",
  TheWitheringColdKm = "THE_WITHERING_COLD_Km",
  NymeriaFotOg = "NYMERIA_FotOG",
  FavorOfTheOldGodsFotOg = "FAVOR_OF_THE_OLD_GODS_FotOG",
  HightowerSpyFotOg = "HIGHTOWER_SPY_FotOG",
  BlessedByTheMaidenFotOg = "BLESSED_BY_THE_MAIDEN_FotOG",
  GarrisonOnTheWallFotOg = "GARRISON_ON_THE_WALL_FotOG",
  ObsidianArrowsFotOg = "OBSIDIAN_ARROWS_FotOG",
  SelyseBaratheonFotOg = "SELYSE_BARATHEON_FotOG",
  DragonstoneCastleFotOg = "DRAGONSTONE_CASTLE_FotOG",
  SerBalonSwannFotOg = "SER_BALON_SWANN_FotOG",
  SweetCerseiFotOg = "SWEET_CERSEI_FotOG",
  CoastalReaverFotOg = "COASTAL_REAVER_FotOG",
  SupportOfHarlawFotOg = "SUPPORT_OF_HARLAW_FotOG",
  WiseMasterFotOg = "WISE_MASTER_FotOG",
  YunkaiFotOg = "YUNKAI_FotOG",
  PlankyTownTraderFotOg = "PLANKY_TOWN_TRADER_FotOG",
  ShandystoneFotOg = "SHANDYSTONE_FotOG",
  WarriorsSonsFotOg = "WARRIORS_SONS_FotOG",
  SeizedByTheGuardFotOg = "SEIZED_BY_THE_GUARD_FotOG",
  GreensightFotOg = "GREENSIGHT_FotOG",
  TheKingInTheNorthFotOg = "THE_KING_IN_THE_NORTH_FotOG",
  AryaStarkTfm = "ARYA_STARK_TFM",
  IAmNoOneTfm = "I_AM_NO_ONE_TFM",
  HighgardenRefugeeTfm = "HIGHGARDEN_REFUGEE_TFM",
  ArborQueenTfm = "ARBOR_QUEEN_TFM",
  ColdhandsTfm = "COLDHANDS_TFM",
  TheBayOfSealsTfm = "THE_BAY_OF_SEALS_TFM",
  KingsMenTfm = "KINGS_MEN_TFM",
  SacrificedToTheRedGodTfm = "SACRIFICED_TO_THE_RED_GOD_TFM",
  CerseisInformerTfm = "CERSEIS_INFORMER_TFM",
  SerPounceTfm = "SER_POUNCE_TFM",
  TarleTheThriceDrownedTfm = "TARLE_THE_THRICE_DROWNED_TFM",
  GivenToTheDrownedGodTfm = "GIVEN_TO_THE_DROWNED_GOD_TFM",
  DaenerysTargaryenTfm = "DAENERYS_TARGARYEN_TFM",
  MhysaTfm = "MHYSA_TFM",
  HouseYronwoodKnightTfm = "HOUSE_YRONWOOD_KNIGHT_TFM",
  SecretPactTfm = "SECRET_PACT_TFM",
  TheHighSparrowTfm = "THE_HIGH_SPARROW_TFM",
  TheSongOfTheSevenTfm = "THE_SONG_OF_THE_SEVEN_TFM",
  TheFaithMilitantTfm = "THE_FAITH_MILITANT_TFM",
  CompelledByTheFaithTfm = "COMPELLED_BY_THE_FAITH_TFM",
  HostOfTheRiverlandsSat = "HOST_OF_THE_RIVERLANDS_SAT",
  GodswoodSat = "GODSWOOD_SAT",
  MaceTyrellSat = "MACE_TYRELL_SAT",
  ThisMustBeAnsweredFiercelySat = "THIS_MUST_BE_ANSWERED_FIERCELY_SAT",
  SeptonCelladorSat = "SEPTON_CELLADOR_SAT",
  TheCrowIsATricksyBirdSat = "THE_CROW_IS_A_TRICKSY_BIRD_SAT",
  TheBastardOfNightsongSat = "THE_BASTARD_OF_NIGHTSONG_SAT",
  KingAtTheWallSat = "KING_AT_THE_WALL_SAT",
  QyburnSat = "QYBURN_SAT",
  APlotAgainstTheQueenSat = "A_PLOT_AGAINST_THE_QUEEN_SAT",
  SaltcliffeSailorSat = "SALTCLIFFE_SAILOR_SAT",
  DriftwoodCudgelSat = "DRIFTWOOD_CUDGEL_SAT",
  RaidingKhalasarSat = "RAIDING_KHALASAR_SAT",
  ToGoForwardYouMustGoBackSat = "TO_GO_FORWARD_YOU_MUST_GO_BACK_SAT",
  HostOfTheBonewaySat = "HOST_OF_THE_BONEWAY_SAT",
  SomeoneAlwaysTellsSat = "SOMEONE_ALWAYS_TELLS_SAT",
  MyaStoneSat = "MYA_STONE_SAT",
  TheGreatSeptOfBaelorSat = "THE_GREAT_SEPT_OF_BAELOR_SAT",
  TheSevenPointedStarSat = "THE_SEVEN_POINTED_STAR_SAT",
  YouWinOrYouDieSat = "YOU_WIN_OR_YOU_DIE_SAT",
  MaceTyrellHoT = "MACE_TYRELL_HoT",
  BrienneOfTarthHoT = "BRIENNE_OF_TARTH_HoT",
  SerGarlanTyrellHoT = "SER_GARLAN_TYRELL_HoT",
  TheQueenOfThornsHoT = "THE_QUEEN_OF_THORNS_HoT",
  HighgardenHonorGuardHoT = "HIGHGARDEN_HONOR_GUARD_HoT",
  MargaeryTyrellHoT = "MARGAERY_TYRELL_HoT",
  TheKnightOfFlowersHoT = "THE_KNIGHT_OF_FLOWERS_HoT",
  WillasTyrellHoT = "WILLAS_TYRELL_HoT",
  GarthTheGrossHoT = "GARTH_THE_GROSS_HoT",
  TheBlueBardHoT = "THE_BLUE_BARD_HoT",
  EmissaryOfTheHightowerHoT = "EMISSARY_OF_THE_HIGHTOWER_HoT",
  GreenAppleKnightHoT = "GREEN_APPLE_KNIGHT_HoT",
  DesmeraRedwyneHoT = "DESMERA_REDWYNE_HoT",
  MaesterBallabarHoT = "MAESTER_BALLABAR_HoT",
  HighgardenCourtierHoT = "HIGHGARDEN_COURTIER_HoT",
  JoustingKnightHoT = "JOUSTING_KNIGHT_HoT",
  TheHightowerHoT = "THE_HIGHTOWER_HoT",
  RedwyneStraitsHoT = "REDWYNE_STRAITS_HoT",
  JoustingPavilionHoT = "JOUSTING_PAVILION_HoT",
  QueenOfTheSevenKingdomsHoT = "QUEEN_OF_THE_SEVEN_KINGDOMS_HoT",
  TourneyLanceHoT = "TOURNEY_LANCE_HoT",
  MeleeAtBitterbridgeHoT = "MELEE_AT_BITTERBRIDGE_HoT",
  SixMaidsInAPoolHoT = "SIX_MAIDS_IN_A_POOL_HoT",
  HiddenThornsHoT = "HIDDEN_THORNS_HoT",
  RiverRunnerHoT = "RIVER_RUNNER_HoT",
  BendTheKneeHoT = "BEND_THE_KNEE_HoT",
  DrownedGodsApostleHoT = "DROWNED_GODS_APOSTLE_HoT",
  CorpseLakeHoT = "CORPSE_LAKE_HoT",
  TheHoundHoT = "THE_HOUND_HoT",
  LionsToothHoT = "LIONS_TOOTH_HoT",
  TheBastardOfGodsgraceHoT = "THE_BASTARD_OF_GODSGRACE_HoT",
  HellholtHoT = "HELLHOLT_HoT",
  SmallPaulHoT = "SMALL_PAUL_HoT",
  BrokenVowsHoT = "BROKEN_VOWS_HoT",
  SerDontosHollardHoT = "SER_DONTOS_HOLLARD_HoT",
  LastHearthHoT = "LAST_HEARTH_HoT",
  QothoHoT = "QOTHO_HoT",
  TokarHoT = "TOKAR_HoT",
  ArchmaesterEbroseHoT = "ARCHMAESTER_EBROSE_HoT",
  FacelessManHoT = "FACELESS_MAN_HoT",
  CitadelNoviceHoT = "CITADEL_NOVICE_HoT",
  TheCitadelHoT = "THE_CITADEL_HoT",
  StranglerHoT = "STRANGLER_HoT",
  WordsAreWindHoT = "WORDS_ARE_WIND_HoT",
  TheConclaveHoT = "THE_CONCLAVE_HoT",
  WardensOfTheSouthHoT = "WARDENS_OF_THE_SOUTH_HoT",
  BesiegedHoT = "BESIEGED_HoT",
  YourKingCommandsItHoT = "YOUR_KING_COMMANDS_IT_HoT",
  TheSpidersWebHoT = "THE_SPIDERS_WEB_HoT",
  NowItComesToWarHoT = "NOW_IT_COMES_TO_WAR_HoT",
  TradeRoutesHoT = "TRADE_ROUTES_HoT",
  NothingBurnsLikeTheColdHoT = "NOTHING_BURNS_LIKE_THE_COLD_HoT",
  DoranMartellSoD = "DORAN_MARTELL_SoD",
  EllariaSandSoD = "ELLARIA_SAND_SoD",
  TheRedViperSoD = "THE_RED_VIPER_SoD",
  DarkstarSoD = "DARKSTAR_SoD",
  ObaraSandSoD = "OBARA_SAND_SoD",
  AreoHotahSoD = "AREO_HOTAH_SoD",
  NymeriaSandSoD = "NYMERIA_SAND_SoD",
  TyeneSandSoD = "TYENE_SAND_SoD",
  NymeriasGuardSoD = "NYMERIAS_GUARD_SoD",
  ObellaSandSoD = "OBELLA_SAND_SoD",
  QuentynMartellSoD = "QUENTYN_MARTELL_SoD",
  SerCletusYronwoodSoD = "SER_CLETUS_YRONWOOD_SoD",
  LorezaSandSoD = "LOREZA_SAND_SoD",
  MaesterKedrySoD = "MAESTER_KEDRY_SoD",
  HouseDayneEscortSoD = "HOUSE_DAYNE_ESCORT_SoD",
  ShadowCityBastardSoD = "SHADOW_CITY_BASTARD_SoD",
  DorneSoD = "DORNE_SoD",
  StarfallSoD = "STARFALL_SoD",
  HotahsAxeSoD = "HOTAHS_AXE_SoD",
  PatienceSoD = "PATIENCE_SoD",
  BeguiledSoD = "BEGUILED_SoD",
  NoUseForGriefSoD = "NO_USE_FOR_GRIEF_SoD",
  FalsePlansSoD = "FALSE_PLANS_SoD",
  ToTheSpearsSoD = "TO_THE_SPEARS_SoD",
  SerCortnayPenroseSoD = "SER_CORTNAY_PENROSE_SoD",
  SeaDragonTowerSoD = "SEA_DRAGON_TOWER_SoD",
  FleetFromPykeSoD = "FLEET_FROM_PYKE_SoD",
  PlunderedSoD = "PLUNDERED_SoD",
  MyrcellaBaratheonSoD = "MYRCELLA_BARATHEON_SoD",
  ExtortionSoD = "EXTORTION_SoD",
  SpareBootSoD = "SPARE_BOOT_SoD",
  TurncloakSoD = "TURNCLOAK_SoD",
  GreatjonUmberSoD = "GREATJON_UMBER_SoD",
  TasteForFleshSoD = "TASTE_FOR_FLESH_SoD",
  MissandeiSoD = "MISSANDEI_SoD",
  QarthSoD = "QARTH_SoD",
  LeytonHightowerSoD = "LEYTON_HIGHTOWER_SoD",
  BeaconOfTheSouthSoD = "BEACON_OF_THE_SOUTH_SoD",
  ValSoD = "VAL_SoD",
  SeptonMeribaldSoD = "SEPTON_MERIBALD_SoD",
  OldtownScholarSoD = "OLDTOWN_SCHOLAR_SoD",
  JadeSeaDromondSoD = "JADE_SEA_DROMOND_SoD",
  BrothersRobesSoD = "BROTHERS_ROBES_SoD",
  OffToGulltownSoD = "OFF_TO_GULLTOWN_SoD",
  TheWarsToComeSoD = "THE_WARS_TO_COME_SoD",
  AtPrinceDoransBehestSoD = "AT_PRINCE_DORANS_BEHEST_SoD",
  PeaceAndProsperitySoD = "PEACE_AND_PROSPERITY_SoD",
  ForcedMarchSoD = "FORCED_MARCH_SoD",
  BeyondReproachSoD = "BEYOND_REPROACH_SoD",
  BreakingTiesSoD = "BREAKING_TIES_SoD",
  GrandMeleeSoD = "GRAND_MELEE_SoD",
  FalseSpringSoD = "FALSE_SPRING_SoD",
  VaramyrSixskinsTsc = "VARAMYR_SIXSKINS_TSC",
  BoltonFlayerTsc = "BOLTON_FLAYER_TSC",
  NorthernArmoryTsc = "NORTHERN_ARMORY_TSC",
  SchemingSeptonTsc = "SCHEMING_SEPTON_TSC",
  MargaerysInfluenceTsc = "MARGAERYS_INFLUENCE_TSC",
  JanosSlyntTsc = "JANOS_SLYNT_TSC",
  FreshRecruitsTsc = "FRESH_RECRUITS_TSC",
  ShadowPriestessTsc = "SHADOW_PRIESTESS_TSC",
  StormlandsFiefdomTsc = "STORMLANDS_FIEFDOM_TSC",
  SerRobertStrongTsc = "SER_ROBERT_STRONG_TSC",
  BeneathTheBridgeOfDreamTsc = "BENEATH_THE_BRIDGE_OF_DREAM_TSC",
  NighttimeMaraudersTsc = "NIGHTTIME_MARAUDERS_TSC",
  SeizeTheInitiativeTsc = "SEIZE_THE_INITIATIVE_TSC",
  AegonTargaryenTsc = "AEGON_TARGARYEN_TSC",
  UnexpectedReturnTsc = "UNEXPECTED_RETURN_TSC",
  SerGerrisDrinkwaterTsc = "SER_GERRIS_DRINKWATER_TSC",
  TheShadowCityTsc = "THE_SHADOW_CITY_TSC",
  NefariousAcolyteTsc = "NEFARIOUS_ACOLYTE_TSC",
  BurningTheDeadTsc = "BURNING_THE_DEAD_TSC",
  ExchangeOfInformationTsc = "EXCHANGE_OF_INFORMATION_TSC",
  WymanManderlyTMoW = "WYMAN_MANDERLY_TMoW",
  HonorBoundTMoW = "HONOR_BOUND_TMoW",
  TheQueenOfThornsTMoW = "THE_QUEEN_OF_THORNS_TMoW",
  OldtownUndercityTMoW = "OLDTOWN_UNDERCITY_TMoW",
  CunningStewardTMoW = "CUNNING_STEWARD_TMoW",
  TheWallTMoW = "THE_WALL_TMoW",
  SerJustinMasseyTMoW = "SER_JUSTIN_MASSEY_TMoW",
  MarchOnWinterfellTMoW = "MARCH_ON_WINTERFELL_TMoW",
  PennyTMoW = "PENNY_TMoW",
  BowelsOfCasterlyRockTMoW = "BOWELS_OF_CASTERLY_ROCK_TMoW",
  HagensDaughterTMoW = "HAGENS_DAUGHTER_TMoW",
  SteelRainTMoW = "STEEL_RAIN_TMoW",
  HizdahrZoLoraqTMoW = "HIZDAHR_ZO_LORAQ_TMoW",
  MeereenTMoW = "MEEREEN_TMoW",
  MaidenOfPoisonsTMoW = "MAIDEN_OF_POISONS_TMoW",
  ServeObeyProtectTMoW = "SERVE_OBEY_PROTECT_TMoW",
  TychoNestorisTMoW = "TYCHO_NESTORIS_TMoW",
  CityGatesTMoW = "CITY_GATES_TMoW",
  TradingWithQohorTMoW = "TRADING_WITH_QOHOR_TMoW",
  TheBloodyFluxTMoW = "THE_BLOODY_FLUX_TMoW",
  UmberLoyalistSoKl = "UMBER_LOYALIST_SoKL",
  WhiteHarborSoKl = "WHITE_HARBOR_SoKL",
  LazyLeoSoKl = "LAZY_LEO_SoKL",
  GrowingAmbitionSoKl = "GROWING_AMBITION_SoKL",
  NaiveScoutSoKl = "NAIVE_SCOUT_SoKL",
  MinersPickSoKl = "MINERS_PICK_SoKL",
  ValyriansCrewSoKl = "VALYRIANS_CREW_SoKL",
  BlackwaterBaySoKl = "BLACKWATER_BAY_SoKL",
  CatspawSoKl = "CATSPAW_SoKL",
  GoldMineSoKl = "GOLD_MINE_SoKL",
  DrownedGodFanaticSoKl = "DROWNED_GOD_FANATIC_SoKL",
  DragonbinderSoKl = "DRAGONBINDER_SoKL",
  HiredAssassinSoKl = "HIRED_ASSASSIN_SoKL",
  QueensguardSoKl = "QUEENSGUARD_SoKL",
  SerArchibaldYronwoodSoKl = "SER_ARCHIBALD_YRONWOOD_SoKL",
  SummerSeaPortSoKl = "SUMMER_SEA_PORT_SoKL",
  PoorFellowsSoKl = "POOR_FELLOWS_SoKL",
  KingsLandingSoKl = "KINGS_LANDING_SoKL",
  GlassCandleSoKl = "GLASS_CANDLE_SoKL",
  UneasyTruceSoKl = "UNEASY_TRUCE_SoKL",
  MeeraReedMoD = "MEERA_REED_MoD",
  ShaggydogMoD = "SHAGGYDOG_MoD",
  SerMarkMullendoreMoD = "SER_MARK_MULLENDORE_MoD",
  BondsOfChivalryMoD = "BONDS_OF_CHIVALRY_MoD",
  JonSnowMoD = "JON_SNOW_MoD",
  LordCommanderMoD = "LORD_COMMANDER_MoD",
  ShireenBaratheonMoD = "SHIREEN_BARATHEON_MoD",
  PrivilegedPositionMoD = "PRIVILEGED_POSITION_MoD",
  TitheCollectorMoD = "TITHE_COLLECTOR_MoD",
  CleverFeintMoD = "CLEVER_FEINT_MoD",
  VictarionGreyjoyMoD = "VICTARION_GREYJOY_MoD",
  GreyGhostMoD = "GREY_GHOST_MoD",
  RhaegalMoD = "RHAEGAL_MoD",
  MeereeneseMarketMoD = "MEEREENESE_MARKET_MoD",
  HouseManwoodyGuardMoD = "HOUSE_MANWOODY_GUARD_MoD",
  AMissionInEssosMoD = "A_MISSION_IN_ESSOS_MoD",
  WunWunMoD = "WUN_WUN_MoD",
  PoisonedCoinMoD = "POISONED_COIN_MoD",
  TheFreeFolkMoD = "THE_FREE_FOLK_MoD",
  WinterReservesMoD = "WINTER_RESERVES_MoD",
  BearIslandScoutIdp = "BEAR_ISLAND_SCOUT_IDP",
  SkagosIdp = "SKAGOS_IDP",
  BrightwaterHostIdp = "BRIGHTWATER_HOST_IDP",
  TheMightOfTheReachIdp = "THE_MIGHT_OF_THE_REACH_IDP",
  ThreeFingerHobbIdp = "THREE_FINGER_HOBB_IDP",
  HardhomeIdp = "HARDHOME_IDP",
  StormsEndMaesterIdp = "STORMS_END_MAESTER_IDP",
  GlamorIdp = "GLAMOR_IDP",
  PaintedDogsIdp = "PAINTED_DOGS_IDP",
  WalkOfAtonementIdp = "WALK_OF_ATONEMENT_IDP",
  IronVictorysCrewIdp = "IRON_VICTORYS_CREW_IDP",
  RefurbishedHulkIdp = "REFURBISHED_HULK_IDP",
  DrogonIdp = "DROGON_IDP",
  InDaznaksPitIdp = "IN_DAZNAKS_PIT_IDP",
  MaesterMylesIdp = "MAESTER_MYLES_IDP",
  HeCallsItThinkingIdp = "HE_CALLS_IT_THINKING_IDP",
  OldBillBoneIdp = "OLD_BILL_BONE_IDP",
  TheInnAtTheCrossroadsIdp = "THE_INN_AT_THE_CROSSROADS_IDP",
  APinchOfPowderIdp = "A_PINCH_OF_POWDER_IDP",
  DoubleDealingIdp = "DOUBLE_DEALING_IDP",
  SerJasonMallisterDitD = "SER_JASON_MALLISTER_DitD",
  TheBastardsLetterDitD = "THE_BASTARDS_LETTER_DitD",
  ShrewdDiplomatDitD = "SHREWD_DIPLOMAT_DitD",
  ArborMarketplaceDitD = "ARBOR_MARKETPLACE_DitD",
  NightfortBuilderDitD = "NIGHTFORT_BUILDER_DitD",
  DaggersInTheDarkDitD = "DAGGERS_IN_THE_DARK_DitD",
  RedRonnetDitD = "RED_RONNET_DitD",
  BanishedFromTheLightDitD = "BANISHED_FROM_THE_LIGHT_DitD",
  CerseiLannisterDitD = "CERSEI_LANNISTER_DitD",
  UnderhandedMethodsDitD = "UNDERHANDED_METHODS_DitD",
  MoqorroDitD = "MOQORRO_DitD",
  RhymesWithMeekDitD = "RHYMES_WITH_MEEK_DitD",
  BrazenBeastDitD = "BRAZEN_BEAST_DitD",
  GiftsForTheWidowDitD = "GIFTS_FOR_THE_WIDOW_DitD",
  StarfallSpyDitD = "STARFALL_SPY_DitD",
  BloodOfTheViperDitD = "BLOOD_OF_THE_VIPER_DitD",
  OnAMistyMornDitD = "ON_A_MISTY_MORN_DitD",
  AssaultFromTheShadowsDitD = "ASSAULT_FROM_THE_SHADOWS_DitD",
  VarysDitD = "VARYS_DitD",
  RavagesOfWarDitD = "RAVAGES_OF_WAR_DitD",
  BalonGreyjoyKotI = "BALON_GREYJOY_KotI",
  EuronCrowsEyeKotI = "EURON_CROWS_EYE_KotI",
  AshaGreyjoyKotI = "ASHA_GREYJOY_KotI",
  TheKnightKotI = "THE_KNIGHT_KotI",
  AeronDamphairKotI = "AERON_DAMPHAIR_KotI",
  TheDrummKotI = "THE_DRUMM_KotI",
  GwynesseHarlawKotI = "GWYNESSE_HARLAW_KotI",
  AndrikTheUnsmilingKotI = "ANDRIK_THE_UNSMILING_KotI",
  QarlTheMaidKotI = "QARL_THE_MAID_KotI",
  MaesterMurenmureKotI = "MAESTER_MURENMURE_KotI",
  OldGreyGullKotI = "OLD_GREY_GULL_KotI",
  PriestOfOldWykKotI = "PRIEST_OF_OLD_WYK_KotI",
  DrownedProphetKotI = "DROWNED_PROPHET_KotI",
  EagerDeckhandKotI = "EAGER_DECKHAND_KotI",
  OrkmontReaverKotI = "ORKMONT_REAVER_KotI",
  SilenceKotI = "SILENCE_KotI",
  GreatWykKotI = "GREAT_WYK_KotI",
  GoldenStormKotI = "GOLDEN_STORM_KotI",
  MaidensBaneKotI = "MAIDENS_BANE_KotI",
  ScoutingVesselKotI = "SCOUTING_VESSEL_KotI",
  RedRainKotI = "RED_RAIN_KotI",
  FleetCaptainKotI = "FLEET_CAPTAIN_KotI",
  WhatIsDeadMayNeverDieKotI = "WHAT_IS_DEAD_MAY_NEVER_DIE_KotI",
  NighttimeRaidKotI = "NIGHTTIME_RAID_KotI",
  KhoraneSathmantesKotI = "KHORANE_SATHMANTES_KotI",
  FuryKotI = "FURY_KotI",
  GunthorSonOfGurnKotI = "GUNTHOR_SON_OF_GURN_KotI",
  MyMindIsMyWeaponKotI = "MY_MIND_IS_MY_WEAPON_KotI",
  DesertRaiderKotI = "DESERT_RAIDER_KotI",
  TheBloodroyalKotI = "THE_BLOODROYAL_KotI",
  VindictiveRangerKotI = "VINDICTIVE_RANGER_KotI",
  WestwatchByTheBridgeKotI = "WESTWATCH_BY_THE_BRIDGE_KotI",
  MaesterVymanKotI = "MAESTER_VYMAN_KotI",
  KarholdKotI = "KARHOLD_KotI",
  CoholloKotI = "COHOLLO_KotI",
  DanceOfTheDragonsKotI = "DANCE_OF_THE_DRAGONS_KotI",
  SerTalbertSerryKotI = "SER_TALBERT_SERRY_KotI",
  TheShieldIslandsKotI = "THE_SHIELD_ISLANDS_KotI",
  BronzeYohnRoyceKotI = "BRONZE_YOHN_ROYCE_KotI",
  RogueWildlingKotI = "ROGUE_WILDLING_KotI",
  CitadelArchivistKotI = "CITADEL_ARCHIVIST_KotI",
  TheStarrySeptKotI = "THE_STARRY_SEPT_KotI",
  RecklessKotI = "RECKLESS_KotI",
  WhenIWokeKotI = "WHEN_I_WOKE_KotI",
  SeaOfBloodKotI = "SEA_OF_BLOOD_KotI",
  WeTakeWesterosKotI = "WE_TAKE_WESTEROS_KotI",
  ReturnToTheFieldsKotI = "RETURN_TO_THE_FIELDS_KotI",
  HeirToTheIronThroneKotI = "HEIR_TO_THE_IRON_THRONE_KotI",
  CoordinatedAttackKotI = "COORDINATED_ATTACK_KotI",
  StolenMessageKotI = "STOLEN_MESSAGE_KotI",
  SecretsOfTheConclaveKotI = "SECRETS_OF_THE_CONCLAVE_KotI",
  VanquishTheUnbelieversKotI = "VANQUISH_THE_UNBELIEVERS_KotI",
  AlysaneMormontAtG = "ALYSANE_MORMONT_AtG",
  OldGateAtG = "OLD_GATE_AtG",
  TheKnightOfFlowersAtG = "THE_KNIGHT_OF_FLOWERS_AtG",
  GateOfTheGodsAtG = "GATE_OF_THE_GODS_AtG",
  AgedCraftsmanAtG = "AGED_CRAFTSMAN_AtG",
  FleaBottomAlleyAtG = "FLEA_BOTTOM_ALLEY_AtG",
  RhllorInfiltratorAtG = "RHLLOR_INFILTRATOR_AtG",
  KingsGateAtG = "KINGS_GATE_AtG",
  SerMandonMooreAtG = "SER_MANDON_MOORE_AtG",
  LionGateAtG = "LION_GATE_AtG",
  BaelorBlacktydeAtG = "BAELOR_BLACKTYDE_AtG",
  IronGateAtG = "IRON_GATE_AtG",
  ViserionAtG = "VISERION_AtG",
  DragonGateAtG = "DRAGON_GATE_AtG",
  SouthronEscortAtG = "SOUTHRON_ESCORT_AtG",
  RiverGateAtG = "RIVER_GATE_AtG",
  LittlefingerAtG = "LITTLEFINGER_AtG",
  WhiteSwordTowerAtG = "WHITE_SWORD_TOWER_AtG",
  CityOfSecretsAtG = "CITY_OF_SECRETS_AtG",
  AtTheGatesAtG = "AT_THE_GATES_AtG",
  SmalljonUmberCoS = "SMALLJON_UMBER_CoS",
  NoSurprisesCoS = "NO_SURPRISES_CoS",
  ArrogantContenderCoS = "ARROGANT_CONTENDER_CoS",
  ShowOfStrengthCoS = "SHOW_OF_STRENGTH_CoS",
  OwenTheOafCoS = "OWEN_THE_OAF_CoS",
  ShadowOfTheWallCoS = "SHADOW_OF_THE_WALL_CoS",
  RedKeepGaolerCoS = "RED_KEEP_GAOLER_CoS",
  TheBlackCellsCoS = "THE_BLACK_CELLS_CoS",
  TheRegentsGuardCoS = "THE_REGENTS_GUARD_CoS",
  PyromancersCacheCoS = "PYROMANCERS_CACHE_CoS",
  AlannysGreyjoyCoS = "ALANNYS_GREYJOY_CoS",
  NightflyerCoS = "NIGHTFLYER_CoS",
  BlackMarketMerchantCoS = "BLACK_MARKET_MERCHANT_CoS",
  ShadowOfTheEastCoS = "SHADOW_OF_THE_EAST_CoS",
  TheFowlerTwinsCoS = "THE_FOWLER_TWINS_CoS",
  ShadowOfTheSouthCoS = "SHADOW_OF_THE_SOUTH_CoS",
  GhostOfHighHeartCoS = "GHOST_OF_HIGH_HEART_CoS",
  ShadowPoliticsCoS = "SHADOW_POLITICS_CoS",
  KnightsOfTheHollowHillCoS = "KNIGHTS_OF_THE_HOLLOW_HILL_CoS",
  ACityBesiegedCoS = "A_CITY_BESIEGED_CoS",
  EddardStarkPoS = "EDDARD_STARK_PoS",
  MalleonsTomePoS = "MALLEONS_TOME_PoS",
  MaesterGormonPoS = "MAESTER_GORMON_PoS",
  UnexpectedGuilePoS = "UNEXPECTED_GUILE_PoS",
  MaesterMullinPoS = "MAESTER_MULLIN_PoS",
  GuardDutyPoS = "GUARD_DUTY_PoS",
  SerEldonEstermontPoS = "SER_ELDON_ESTERMONT_PoS",
  ShadowOfTheThronePoS = "SHADOW_OF_THE_THRONE_PoS",
  ChiswyckPoS = "CHISWYCK_PoS",
  HandsOfGoldPoS = "HANDS_OF_GOLD_PoS",
  KingsLandingProselytePoS = "KINGS_LANDING_PROSELYTE_PoS",
  OutfittedForWarPoS = "OUTFITTED_FOR_WAR_PoS",
  JonConningtonPoS = "JON_CONNINGTON_PoS",
  TheDragonpitPoS = "THE_DRAGONPIT_PoS",
  ArianneMartellPoS = "ARIANNE_MARTELL_PoS",
  APitOfSnakesPoS = "A_PIT_OF_SNAKES_PoS",
  TheMostDevoutPoS = "THE_MOST_DEVOUT_PoS",
  StatueOfBaelorPoS = "STATUE_OF_BAELOR_PoS",
  TheFaithsDecreePoS = "THE_FAITHS_DECREE_PoS",
  ManningTheCityWallsPoS = "MANNING_THE_CITY_WALLS_PoS",
  TowerOfTheHandBtRk = "TOWER_OF_THE_HAND_BtRK",
  TheMaidenvaultBtRk = "THE_MAIDENVAULT_BtRK",
  TunnelsOfTheRedKeepBtRk = "TUNNELS_OF_THE_RED_KEEP_BtRK",
  ShadowOfTheIslesBtRk = "SHADOW_OF_THE_ISLES_BtRK",
  KingdomOfShadowsBtRk = "KINGDOM_OF_SHADOWS_BtRK",
  ShadowOfTheNorthTb = "SHADOW_OF_THE_NORTH_TB",
  ShadowOfTheRoseTb = "SHADOW_OF_THE_ROSE_TB",
  YorenTb = "YOREN_TB",
  BlackwaterRushTb = "BLACKWATER_RUSH_TB",
  TyrionLannisterTb = "TYRION_LANNISTER_TB",
  AVeryLargeShadowTb = "A_VERY_LARGE_SHADOW_TB",
  TheMountainsSkullTb = "THE_MOUNTAINS_SKULL_TB",
  WhiteCloakTb = "WHITE_CLOAK_TB",
  AryaStarkLmhr = "ARYA_STARK_LMHR",
  BloodOfTheFirstMenLmhr = "BLOOD_OF_THE_FIRST_MEN_LMHR",
  RobertBaratheonLmhr = "ROBERT_BARATHEON_LMHR",
  LongMayHeReignLmhr = "LONG_MAY_HE_REIGN_LMHR",
  SerJorahMormontLmhr = "SER_JORAH_MORMONT_LMHR",
  MercenaryContractLmhr = "MERCENARY_CONTRACT_LMHR",
  RobertBaratheonFotS = "ROBERT_BARATHEON_FotS",
  StannisBaratheonFotS = "STANNIS_BARATHEON_FotS",
  MelisandreFotS = "MELISANDRE_FotS",
  RenlyBaratheonFotS = "RENLY_BARATHEON_FotS",
  SalladhorSaanFotS = "SALLADHOR_SAAN_FotS",
  SerDavosSeaworthFotS = "SER_DAVOS_SEAWORTH_FotS",
  AlesterFlorentFotS = "ALESTER_FLORENT_FotS",
  SelyseBaratheonFotS = "SELYSE_BARATHEON_FotS",
  GriffinsRoostKnightFotS = "GRIFFINS_ROOST_KNIGHT_FotS",
  DaleSeaworthFotS = "DALE_SEAWORTH_FotS",
  SerImryFlorentFotS = "SER_IMRY_FLORENT_FotS",
  RedPriestFotS = "RED_PRIEST_FotS",
  ShyraErrolFotS = "SHYRA_ERROL_FotS",
  AcolyteOfTheFlameFotS = "ACOLYTE_OF_THE_FLAME_FotS",
  BastardOfRobertFotS = "BASTARD_OF_ROBERT_FotS",
  WilySmugglerFotS = "WILY_SMUGGLER_FotS",
  TheStormlandsFotS = "THE_STORMLANDS_FotS",
  CapeWrathFotS = "CAPE_WRATH_FotS",
  LyseniGalleyFotS = "LYSENI_GALLEY_FotS",
  AzorAhaiRebornFotS = "AZOR_AHAI_REBORN_FotS",
  HuntingAccidentFotS = "HUNTING_ACCIDENT_FotS",
  WarhammerFotS = "WARHAMMER_FotS",
  ACaskOfAleFotS = "A_CASK_OF_ALE_FotS",
  NightfireVisionsFotS = "NIGHTFIRE_VISIONS_FotS",
  BotleyCrewFotS = "BOTLEY_CREW_FotS",
  EveryCaptainIsAKingFotS = "EVERY_CAPTAIN_IS_A_KING_FotS",
  SerGregorCleganeFotS = "SER_GREGOR_CLEGANE_FotS",
  LionstarFotS = "LIONSTAR_FotS",
  PrincesAttendantFotS = "PRINCES_ATTENDANT_FotS",
  KingsgraveFotS = "KINGSGRAVE_FotS",
  ProtectorsOfTheRealmFotS = "PROTECTORS_OF_THE_REALM_FotS",
  TheHornThatWakesTheSleepersFotS = "THE_HORN_THAT_WAKES_THE_SLEEPERS_FotS",
  SheBearFotS = "SHE_BEAR_FotS",
  BearskinCloakFotS = "BEARSKIN_CLOAK_FotS",
  HaggoFotS = "HAGGO_FotS",
  DothrakiSteedFotS = "DOTHRAKI_STEED_FotS",
  HightowerKnightFotS = "HIGHTOWER_KNIGHT_FotS",
  FieldsOfTheReachFotS = "FIELDS_OF_THE_REACH_FotS",
  LynCorbrayFotS = "LYN_CORBRAY_FotS",
  UnlikelyChampionFotS = "UNLIKELY_CHAMPION_FotS",
  AnguyTheArcherFotS = "ANGUY_THE_ARCHER_FotS",
  TheHollowHillFotS = "THE_HOLLOW_HILL_FotS",
  LadyForlornFotS = "LADY_FORLORN_FotS",
  DefianceFotS = "DEFIANCE_FotS",
  ThePrinceThatWasPromisedFotS = "THE_PRINCE_THAT_WAS_PROMISED_FotS",
  ParleyAtStormsEndFotS = "PARLEY_AT_STORMS_END_FotS",
  OutwitFotS = "OUTWIT_FotS",
  SiegePreparationsFotS = "SIEGE_PREPARATIONS_FotS",
  RationingFotS = "RATIONING_FotS",
  DesperateAttackFotS = "DESPERATE_ATTACK_FotS",
  TheHandsTourneyFotS = "THE_HANDS_TOURNEY_FotS",
  TheNewGodsFotS = "THE_NEW_GODS_FotS"
}

export enum AngFaction {
  Neutral = "NEUTRAL",
  Stark = "STARK",
  Thenightswatch = "THENIGHTSWATCH",
  Lannister = "LANNISTER",
  Tyrell = "TYRELL",
  Targaryen = "TARGARYEN",
  Greyjoy = "GREYJOY",
  Martell = "MARTELL",
  Baratheon = "BARATHEON"
}

/** Long type */
export type Long = any;

/** Built-in scalar for dynamic values */
export type ObjectScalar = any;

/** Unrepresentable type */
export type Unrepresentable = any;

// ====================================================
// Documents
// ====================================================

export namespace GetRequest {
  export type Variables = {
    token: MotifTokenInput;
  };

  export type Query = {
    __typename?: "Query";

    request: Maybe<Request>;
  };

  export type Request = RequestFragment.Fragment;
}

export namespace SubscribeRequests {
  export type Variables = {
    token: MotifTokenInput;
  };

  export type Subscription = {
    __typename?: "Subscription";

    request: Maybe<Request>;
  };

  export type Request = RequestFragment.Fragment;
}

export namespace CreateGame {
  export type Variables = {
    inputPlayers: (Maybe<InputPlayerInput>)[];
    token: MotifTokenInput;
  };

  export type Mutation = {
    __typename?: "Mutation";

    createGame: Maybe<CreateGame>;
  };

  export type CreateGame = {
    __typename?: "AgotGame";

    phase: Maybe<AngPhase>;

    round: Maybe<string>;

    step: Maybe<string>;
  };
}

export namespace GetGame {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    game: Maybe<Game>;
  };

  export type Game = {
    __typename?: "AgotGame";

    allCards: Maybe<(Maybe<AllCards>)[]>;

    allPlayers: Maybe<(Maybe<AllPlayers>)[]>;

    round: Maybe<string>;

    phase: Maybe<AngPhase>;

    step: Maybe<string>;

    log: Maybe<(Maybe<Log>)[]>;

    started: boolean;

    firstPlayer: Maybe<FirstPlayer>;
  };

  export type AllCards = {
    __typename?: "Card";

    id: Long;

    imageSource: Maybe<string>;

    power: number;

    kneeling: boolean;

    revealed: boolean;

    attachmentIds: Maybe<(Maybe<Long>)[]>;

    duplicateIds: Maybe<(Maybe<Long>)[]>;
  };

  export type AllPlayers = {
    __typename?: "AgotPlayer";

    id: Maybe<string>;

    name: Maybe<string>;

    gold: number;

    agenda: Maybe<Agenda>;

    faction: Maybe<Faction>;

    hand: Maybe<(Maybe<Hand>)[]>;

    characters: Maybe<(Maybe<Characters>)[]>;

    locations: Maybe<(Maybe<Locations>)[]>;

    discardPile: Maybe<(Maybe<DiscardPile>)[]>;

    plotDeck: Maybe<(Maybe<PlotDeck>)[]>;

    usedPlotPile: Maybe<(Maybe<UsedPlotPile>)[]>;

    deadPile: Maybe<(Maybe<DeadPile>)[]>;

    revealedPlot: Maybe<RevealedPlot>;

    drawDeckEmpty: boolean;
  };

  export type Agenda = {
    __typename?: "AgendaCard";

    id: Long;
  };

  export type Faction = {
    __typename?: "FactionCard";

    id: Long;
  };

  export type Hand = {
    __typename?: "DrawCard_AngDrawCard";

    id: Long;
  };

  export type Characters = {
    __typename?: "CharacterCard";

    id: Long;
  };

  export type Locations = {
    __typename?: "LocationCard";

    id: Long;
  };

  export type DiscardPile = {
    __typename?: "DrawCard_AngDrawCard";

    id: Long;
  };

  export type PlotDeck = {
    __typename?: "PlotCard";

    id: Long;
  };

  export type UsedPlotPile = {
    __typename?: "PlotCard";

    id: Long;
  };

  export type DeadPile = {
    __typename?: "CharacterCard";

    id: Long;
  };

  export type RevealedPlot = {
    __typename?: "PlotCard";

    id: Long;
  };

  export type Log = {
    __typename?: "GameLogRow";

    message: Maybe<string>;

    type: Maybe<GameLogRowType>;
  };

  export type FirstPlayer = {
    __typename?: "AgotPlayer";

    id: Maybe<string>;
  };
}

export namespace RequestFragment {
  export type Fragment = {
    __typename?: "AAgotRequest";

    repeated: boolean;

    instruction: Maybe<string>;

    type: Maybe<AgotRequestType>;

    player: Maybe<Player>;

    choices: Maybe<(Maybe<Choices>)[]>;
  };

  export type Player = {
    __typename?: "AgotPlayer";

    id: Maybe<string>;
  };

  export type Choices = {
    __typename?: "AgotChoice";

    requestType: Maybe<AgotRequestType>;

    choiceType: Maybe<AgotChoiceType>;

    cardId: Maybe<Long>;

    icon: Maybe<AngIcon>;

    cardAction: Maybe<AgotChoiceCardAction>;

    player: Maybe<string>;
  };
}

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

/** Query root */
export interface Query {
  request?: Maybe<AAgotRequest>;

  game?: Maybe<AgotGame>;
}

export interface AAgotRequest {
  type?: Maybe<AgotRequestType>;

  choices?: Maybe<(Maybe<AgotChoice>)[]>;

  repeated: boolean;

  instruction?: Maybe<string>;

  player?: Maybe<AgotPlayer>;
}

export interface AgotChoice {
  choiceType?: Maybe<AgotChoiceType>;

  requestType?: Maybe<AgotRequestType>;

  cardId?: Maybe<Long>;

  icon?: Maybe<AngIcon>;

  cardAction?: Maybe<AgotChoiceCardAction>;

  player?: Maybe<string>;
}

export interface AgotPlayer {
  usedPlotPile?: Maybe<(Maybe<PlotCard>)[]>;

  discardPile?: Maybe<(Maybe<DrawCardAngDrawCard>)[]>;

  agenda?: Maybe<AgendaCard>;

  revealedPlot?: Maybe<PlotCard>;

  deadPile?: Maybe<(Maybe<CharacterCard>)[]>;

  gold: number;

  characters?: Maybe<(Maybe<CharacterCard>)[]>;

  faction?: Maybe<FactionCard>;

  drawDeckEmpty: boolean;

  name?: Maybe<string>;

  locations?: Maybe<(Maybe<LocationCard>)[]>;

  plotDeck?: Maybe<(Maybe<PlotCard>)[]>;

  id?: Maybe<string>;

  hand?: Maybe<(Maybe<DrawCardAngDrawCard>)[]>;
}

export interface PlotCard {
  imageSource?: Maybe<string>;

  revealed: boolean;

  attachmentIds?: Maybe<(Maybe<Long>)[]>;

  duplicateIds?: Maybe<(Maybe<Long>)[]>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface DrawCardAngDrawCard {
  imageSource?: Maybe<string>;

  revealed: boolean;

  attachmentIds?: Maybe<(Maybe<Long>)[]>;

  duplicateIds?: Maybe<(Maybe<Long>)[]>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface AgendaCard {
  imageSource?: Maybe<string>;

  revealed: boolean;

  attachmentIds?: Maybe<(Maybe<Long>)[]>;

  duplicateIds?: Maybe<(Maybe<Long>)[]>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface CharacterCard {
  revealed: boolean;

  imageSource?: Maybe<string>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface FactionCard {
  imageSource?: Maybe<string>;

  revealed: boolean;

  attachmentIds?: Maybe<(Maybe<Long>)[]>;

  duplicateIds?: Maybe<(Maybe<Long>)[]>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface LocationCard {
  revealed: boolean;

  imageSource?: Maybe<string>;

  power: number;

  id: Long;

  kneeling: boolean;
}

export interface AgotGame {
  phase?: Maybe<AngPhase>;

  firstPlayer?: Maybe<AgotPlayer>;

  round?: Maybe<string>;

  log?: Maybe<(Maybe<GameLogRow>)[]>;

  step?: Maybe<string>;

  started: boolean;

  allCards?: Maybe<(Maybe<Card>)[]>;

  allPlayers?: Maybe<(Maybe<AgotPlayer>)[]>;
}

export interface GameLogRow {
  message?: Maybe<string>;

  type?: Maybe<GameLogRowType>;
}

export interface Card {
  imageSource?: Maybe<string>;

  revealed: boolean;

  attachmentIds?: Maybe<(Maybe<Long>)[]>;

  power: number;

  duplicateIds?: Maybe<(Maybe<Long>)[]>;

  id: Long;

  kneeling: boolean;
}

/** Mutation root */
export interface Mutation {
  createGame?: Maybe<AgotGame>;
}

/** Subscription root */
export interface Subscription {
  request?: Maybe<AAgotRequest>;

  changes?: Maybe<AgotReduxActionList>;
}

export interface AgotReduxActionList {
  actions?: Maybe<(Maybe<AgotReduxActionAgotReduxActionData>)[]>;
}

export interface AgotReduxActionAgotReduxActionData {
  type?: Maybe<string>;

  payload?: Maybe<ObjectScalar>;
}

// ====================================================
// Arguments
// ====================================================

export interface RequestQueryArgs {
  token?: Maybe<MotifTokenInput>;
}
export interface CreateGameMutationArgs {
  inputPlayers?: Maybe<(Maybe<InputPlayerInput>)[]>;

  token?: Maybe<MotifTokenInput>;
}
export interface RequestSubscriptionArgs {
  token?: Maybe<MotifTokenInput>;
}
export interface ChangesSubscriptionArgs {
  token?: Maybe<MotifTokenInput>;
}
