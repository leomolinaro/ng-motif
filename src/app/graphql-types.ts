export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Long type */
  Long: any;
  /** Unrepresentable type */
  UNREPRESENTABLE: any;
};

export type AAgotRequest = {
  __typename?: "AAgotRequest";
  type?: Maybe<AgotRequestType>;
  choices?: Maybe<Array<Maybe<AgotChoice>>>;
  instruction?: Maybe<Scalars["String"]>;
  player?: Maybe<AgotPlayer>;
};

export type AddAttachmentData = {
  __typename?: "AddAttachmentData";
  toCard: Scalars["Long"];
  cardId: Scalars["Long"];
};

export type AddCardData = {
  __typename?: "AddCardData";
  index: Scalars["Int"];
  toPlayer?: Maybe<Scalars["String"]>;
  toArea?: Maybe<Scalars["String"]>;
  cardId: Scalars["Long"];
};

export type AddDuplicateData = {
  __typename?: "AddDuplicateData";
  toCard: Scalars["Long"];
  cardId: Scalars["Long"];
};

export type AddLogData = {
  __typename?: "AddLogData";
  log?: Maybe<GameLogRow>;
};

export type AgendaCard = {
  __typename?: "AgendaCard";
  imageSource?: Maybe<Scalars["String"]>;
  revealed: Scalars["Boolean"];
  attachmentIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  duplicateIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export enum AgotCardSeed {
  /**
   * <h5>The Power of Wealth</h5>Neutral.<br>When you announce The Power of Wealth
   * as your agenda, name 1 faction. You may include cards from that faction in
   * your draw deck and plot deck.Reduce the cost of the first in-faction card you
   * marshal or play each round by 1.<b>Draft format only.</b>.<br><i>Valyrian
   * Draft Set.</i><br>
   **/
  ThePowerOfWealthVds = "THE_POWER_OF_WEALTH_VDS",
  /**
   * <h5>Protectors of the Realm (VDS)</h5>Neutral.<br>You may include
   * <i>Knight</i> and <i>Army</i> characters from any faction in your
   * deck.<b>Action:</b> Kneel your faction card to choose a <i>Knight</i> or
   * <i>Army</i> character. Until the end of the phase, that character gains
   * renown.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  ProtectorsOfTheRealmVds = "PROTECTORS_OF_THE_REALM_VDS",
  /**
   * <h5>Treaty</h5>Neutral.<br>When you announce Treaty as your agenda, name 2
   * factions. You may include cards from those factions in your draw deck and plot
   * deck.<b>Action:</b> Kneel your faction card to draw 1 card. Then, choose and
   * discard 1 card from your hand.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  TreatyVds = "TREATY_VDS",
  /**
   * <h5>Uniting the Seven Kingdoms</h5>Neutral.<br>You may include cards from any
   * faction in your draw deck.Increase the cost of each out-of-faction card you
   * marshal or play by 1.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  UnitingTheSevenKingdomsVds = "UNITING_THE_SEVEN_KINGDOMS_VDS",
  /**
   * <h5>House Bannerman</h5>Neutral.<br><b><i>Ally.</i></b><br><b>Marshaling
   * Action:</b> Kneel House Bannerman to reduce the cost of the next in-faction
   * character you marshal this phase by 1.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  HouseBannermanVds = "HOUSE_BANNERMAN_VDS",
  /**
   * <h5>Feast or Famine</h5>Neutral.<br><b><i>Summer. Winter.</i></b><br><b>When
   * Revealed:</b> You may increase the gold value on Feast or Famine by 5. If you
   * do, reduce the claim value on Feast of Famine by 2.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  FeastOrFamineVds = "FEAST_OR_FAMINE_VDS",
  /**
   * <h5>Summoned by the Conclave</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Search the top 10 cards of your deck for an in-faction card,
   * reveal it, and add it to your hand. Shuffle your deck.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  SummonedByTheConclaveVds = "SUMMONED_BY_THE_CONCLAVE_VDS",
  /**
   * <h5>The Pale Mare</h5>Neutral.<br><b><i>Omen.</i></b><br><b>When Revealed:</b>
   * Each player chooses any number of characters he or she controls with total
   * printed cost 10 or lower. Kill each character not chosen (cannot be
   * saved).<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  ThePaleMareVds = "THE_PALE_MARE_VDS",
  /**
   * <h5>Compelled by the King</h5>House Baratheon.<br><b>Reaction:</b> After the
   * dominance phase begins, choose and stand a character you control. If you win
   * dominance this phase, that character gains 1 power.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  CompelledByTheKingVds = "COMPELLED_BY_THE_KING_VDS",
  /**
   * <h5>Support of Saltcliffe</h5>House
   * Greyjoy.<br><b><i>Condition.</i></b><br>[greyjoy] character only.Attached
   * character gains stealth.<b>Reaction:</b> After you win an unopposed challenge
   * in which attached character is attacking, stand attached character.<b>Draft
   * format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  SupportOfSaltcliffeVds = "SUPPORT_OF_SALTCLIFFE_VDS",
  /**
   * <h5>Tyrion Lannister (VDS)</h5>House
   * Lannister.<br><b><i>Lord.</i></b><br>Stealth.<b>Reaction:</b> After you win an
   * [intrigue] challenge or a challenge in which Tyrion Lannister is
   * participating, pay 1 gold to draw 1 card.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  TyrionLannisterVds = "TYRION_LANNISTER_VDS",
  /**
   * <h5>The Viper's Rage</h5>House Martell.<br><b>Reaction:</b> After you lose a
   * challenge by 5 or more STR as the defending player, each character controlled
   * by the attacking player loses a [military], an [intrigue], and a [power] icon
   * until the end of the phase.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  TheVipersRageVds = "THE_VIPERS_RAGE_VDS",
  /**
   * <h5>The Nightfort</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Challenges Action:</b> Kneel The Nightfort to choose a
   * defending [thenightswatch] character. Until the end of the challenge, that
   * character gets +1 STR for each attacking character.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  TheNightfortVds = "THE_NIGHTFORT_VDS",
  /**
   * <h5>Raventree Elite</h5>House Stark.<br><b><i>Army. House Tully.</i></b><br>No
   * attachments. Stealth.Each <i>House Tully</i> you control gains "immune to
   * opponents' triggered effects" while it is participating in a
   * challenge.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  RaventreeEliteVds = "RAVENTREE_ELITE_VDS",
  /**
   * <h5>Deadly Khalasar</h5>House Targaryen.<br><b>Challenges Action:</b> Choose
   * an attacking [targaryen] character you control. Until the end of the
   * challenge, that character gets +1 STR for each <i>Dothraki</i> character you
   * control and gains intimidate.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  DeadlyKhalasarVds = "DEADLY_KHALASAR_VDS",
  /**
   * <h5>Blackcrown Knights</h5>House Tyrell.<br><b><i>Army. Knight.</i></b><br>No
   * attachments.<b>Reaction:</b> After you win a [power] challenge in which
   * Blackcrown Knights is participating, discard 1 card from your hand to have
   * Blackcrown Knights gain 2 power.<b>Draft format only.</b>.<br><i>Valyrian
   * Draft Set.</i><br>
   **/
  BlackcrownKnightsVds = "BLACKCROWN_KNIGHTS_VDS",
  /**
   * <h5>Lyn Corbray (VDS)</h5>Neutral.<br><b><i>House Arryn.
   * Knight.</i></b><br>Stealth.Each non-<i>Army</i> character you control with
   * printed cost 6 or higher gets +2 STR.<b>Draft format only.</b>.<br><i>Valyrian
   * Draft Set.</i><br>
   **/
  LynCorbrayVds = "LYN_CORBRAY_VDS",
  /**
   * <h5>Hollow Hill</h5>Neutral.<br><b><i>Westeros.</i></b><br><b>Reaction:</b>
   * After you marshal a character with a faction affiliation that does not match
   * any other card you control, draw 1 card.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  HollowHillVds = "HOLLOW_HILL_VDS",
  /**
   * <h5>Muster</h5>Neutral.<br><b>Marshaling Action:</b> Kneel a <i>Knight</i>
   * character to search your deck for a <i>Knight</i> character, reveal it, and
   * add it to your hand. Shuffle your deck.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  MusterVds = "MUSTER_VDS",
  /**
   * <h5>Holding the Trident</h5>Neutral.<br><b><i>War.</i></b><br>While you
   * control fewer characters than each opponent, each character you control gets
   * +2 STR.<b>Draft format only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  HoldingTheTridentVds = "HOLDING_THE_TRIDENT_VDS",
  /**
   * <h5>Common Cause</h5>Neutral.<br><b><i>Edict.</i></b><br>X is the number of
   * different faction affiliations among characters you control.<b>Draft format
   * only.</b>.<br><i>Valyrian Draft Set.</i><br>
   **/
  CommonCauseVds = "COMMON_CAUSE_VDS",
  /**
   * <h5>A Clash of Kings</h5>Neutral.<br><b><i>Noble.</i></b><br><b>Reaction:</b>
   * After you win a [power] challenge, move 1 power from the losing opponent's
   * faction card to your own..<br><i>Core Set.</i><br>
   **/
  AClashOfKingsCore = "A_CLASH_OF_KINGS_Core",
  /**
   * <h5>A Feast for Crows</h5>Neutral.<br><b><i>Edict.</i></b><br><b>Reaction:</b>
   * After you win dominance, gain 2 power for your faction..<br><i>Core Set.</i><br>
   **/
  AFeastForCrowsCore = "A_FEAST_FOR_CROWS_Core",
  /**
   * <h5>A Game of Thrones</h5>Neutral.<br><b><i>Scheme.</i></b><br>A player cannot
   * initiate a [military] or [power] challenge unless he or she has won an
   * [intrigue] challenge that phase..<br><i>Core Set.</i><br>
   **/
  AGameOfThronesCore = "A_GAME_OF_THRONES_Core",
  /**
   * <h5>A Noble Cause</h5>Neutral.<br><b><i>Kingdom. Noble.</i></b><br>Reduce the
   * cost of the first <i>Lord</i> or <i>Lady</i> character you marshal this round
   * by 2..<br><i>Core Set.</i><br>
   **/
  ANobleCauseCore = "A_NOBLE_CAUSE_Core",
  /**
   * <h5>A Storm of Swords</h5>Neutral.<br><b><i>War.</i></b><br>You may initiate
   * an additional [military] challenge during the challenges phase..<br><i>Core Set.</i><br>
   **/
  AStormOfSwordsCore = "A_STORM_OF_SWORDS_Core",
  /**
   * <h5>Building Orders</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Search the top 10 cards of your deck for an attachment or a
   * location, reveal it, and add it to your hand. Shuffle your deck..<br><i>Core Set.</i><br>
   **/
  BuildingOrdersCore = "BUILDING_ORDERS_Core",
  /**
   * <h5>Calling the Banners</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Choose an opponent. Gain 1 gold for each character that player
   * controls..<br><i>Core Set.</i><br>
   **/
  CallingTheBannersCore = "CALLING_THE_BANNERS_Core",
  /**
   * <h5>Calm Over Westeros</h5>Neutral.<br><b><i>Summer.</i></b><br><b>When
   * Revealed:</b> Name a challenge type. Until you reveal a new plot card, reduce
   * the claim value on the attacking player's revealed plot card by 1 during
   * challenges of that type in which you are the defending player..<br><i>Core Set.</i><br>
   **/
  CalmOverWesterosCore = "CALM_OVER_WESTEROS_Core",
  /**
   * <h5>Confiscation</h5>Neutral.<br><b><i>Edict.</i></b><br><b>When Revealed:</b>
   * Choose an attachment, and discard it from play..<br><i>Core Set.</i><br>
   **/
  ConfiscationCore = "CONFISCATION_Core",
  /**
   * <h5>Counting Coppers</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Draw 3 cards..<br><i>Core Set.</i><br>
   **/
  CountingCoppersCore = "COUNTING_COPPERS_Core",
  /**
   * <h5>Filthy Accusations</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>When
   * Revealed:</b> Choose and kneel a character..<br><i>Core Set.</i><br>
   **/
  FilthyAccusationsCore = "FILTHY_ACCUSATIONS_Core",
  /**
   * <h5>Fortified Position</h5>Neutral.<br><b><i>Siege. War.</i></b><br>Treat each
   * character as if its printed text box were blank (except for
   * <i>Traits</i>)..<br><i>Core Set.</i><br>
   **/
  FortifiedPositionCore = "FORTIFIED_POSITION_Core",
  /**
   * <h5>Heads on Spikes</h5>Neutral.<br><b><i>Edict. War.</i></b><br><b>When
   * Revealed:</b> Choose an opponent. Discard 1 card at random from that player's
   * hand. If that card is a character, gain 2 power for your faction and place the
   * discarded character in its owner's dead pile..<br><i>Core Set.</i><br>
   **/
  HeadsOnSpikesCore = "HEADS_ON_SPIKES_Core",
  /**
   * <h5>Jousting Contest</h5>Neutral.<br><b><i>War.</i></b><br>Each player cannot
   * declare more than 1 character as an attacker or defender in each
   * challenge..<br><i>Core Set.</i><br>
   **/
  JoustingContestCore = "JOUSTING_CONTEST_Core",
  /**
   * <h5>Marched to the Wall</h5>Neutral.<br><b><i>Edict.</i></b><br><b>When
   * Revealed:</b> Each player chooses a character he or she controls (if able),
   * and discards it from play (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  MarchedToTheWallCore = "MARCHED_TO_THE_WALL_Core",
  /**
   * <h5>Marching Orders</h5>Neutral.<br><b><i>Edict. War.</i></b><br>You cannot
   * marshal locations or attachments, or play events..<br><i>Core Set.</i><br>
   **/
  MarchingOrdersCore = "MARCHING_ORDERS_Core",
  /**
   * <h5>Naval Superiority</h5>Neutral.<br><b><i>Siege. War.</i></b><br>Treat the
   * base gold value on each revealed <i>Kingdom</i> and each revealed <i>Edict</i>
   * plot card as if it were 0..<br><i>Core Set.</i><br>
   **/
  NavalSuperiorityCore = "NAVAL_SUPERIORITY_Core",
  /**
   * <h5>Power Behind the Throne</h5>Neutral.<br><b><i>Noble.
   * Scheme.</i></b><br><b>When Revealed:</b> Place 1 stand token on Power Behind
   * the Throne.<b>Action:</b> Discard 1 stand token from Power Behind the Throne
   * to choose and stand a character..<br><i>Core Set.</i><br>
   **/
  PowerBehindTheThroneCore = "POWER_BEHIND_THE_THRONE_Core",
  /**
   * <h5>Rebuilding</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When Revealed:</b>
   * Choose up to 3 cards in your discard pile, and shuffle them into your
   * deck..<br><i>Core Set.</i><br>
   **/
  RebuildingCore = "REBUILDING_Core",
  /**
   * <h5>Reinforcements</h5>Neutral.<br><b><i>Kingdom. War.</i></b><br><b>When
   * Revealed:</b> Choose a character with printed cost 5 or lower in your hand or
   * discard pile, and put it into play..<br><i>Core Set.</i><br>
   **/
  ReinforcementsCore = "REINFORCEMENTS_Core",
  /**
   * <h5>Sneak Attack</h5>Neutral.<br><b><i>Scheme.</i></b><br>You cannot initiate
   * more than 1 challenge during the challenges phase..<br><i>Core Set.</i><br>
   **/
  SneakAttackCore = "SNEAK_ATTACK_Core",
  /**
   * <h5>Summons</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When Revealed:</b>
   * Search the top 10 cards of your deck for a character, reveal it, and add it to
   * your hand. Shuffle your deck..<br><i>Core Set.</i><br>
   **/
  SummonsCore = "SUMMONS_Core",
  /**
   * <h5>Supporting the Faith</h5>Neutral.<br><b><i>Edict. The
   * Seven.</i></b><br><b>Forced Reaction:</b> After the challenges phase begins,
   * each player returns all gold in his or her gold pool to the
   * treasury..<br><i>Core Set.</i><br>
   **/
  SupportingTheFaithCore = "SUPPORTING_THE_FAITH_Core",
  /**
   * <h5>Taxation</h5>Neutral.<br><b><i>Edict. Kingdom.</i></b><br>You may marshal
   * or play 1 additional limited card this round..<br><i>Core Set.</i><br>
   **/
  TaxationCore = "TAXATION_Core",
  /** <h5>The Winds of Winter</h5>Neutral.<br><b><i>Winter.</i></b><br>.<br><i>Core Set.</i><br> */
  TheWindsOfWinterCore = "THE_WINDS_OF_WINTER_Core",
  /**
   * <h5>Wildfire Assault</h5>Neutral.<br><b><i>Scheme. War.</i></b><br><b>When
   * Revealed:</b> Each player chooses up to 3 characters he or she controls. Kill
   * each character not chosen (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  WildfireAssaultCore = "WILDFIRE_ASSAULT_Core",
  /**
   * <h5>Fealty</h5>Neutral.<br>You cannot include more than 15 neutral cards in
   * your deck.<b>Action:</b> Kneel your faction card to reduce the cost of the
   * next loyal card you marshal or play this phase by 1..<br><i>Core Set.</i><br>
   **/
  FealtyCore = "FEALTY_Core",
  /**
   * <h5>Littlefinger (Core)</h5>Neutral.<br><b><i>Ally. Lord. Small
   * Council.</i></b><br><b>Reaction:</b> After you marshal Littlefinger, draw 2
   * cards.+1 Income..<br><i>Core Set.</i><br>
   **/
  LittlefingerCore = "LITTLEFINGER_Core",
  /**
   * <h5>Varys (Core)</h5>Neutral.<br><b><i>Lord. Small Council.
   * Spy.</i></b><br>Stealth.<b>Interrupt:</b> When the dominance phase ends,
   * remove Varys from the game to discard each character from play..<br><i>Core Set.</i><br>
   **/
  VarysCore = "VARYS_Core",
  /**
   * <h5>Rattleshirt's Raiders</h5>Neutral.<br><b><i>Raider.
   * Wildling.</i></b><br>No attachments.<b>Reaction:</b> After you win a challenge
   * in which Rattleshirt's Raiders is participating as an attacker, choose an
   * attachment controlled by the losing opponent, and discard it from
   * play..<br><i>Core Set.</i><br>
   **/
  RattleshirtsRaidersCore = "RATTLESHIRTS_RAIDERS_Core",
  /**
   * <h5>Wildling Horde</h5>Neutral.<br><b><i>Army. Wildling.</i></b><br>No
   * attachments. Pillage.<b>Challenges Action:</b> Kneel your faction card to
   * choose a participating Wildling character you control. Until the end of the
   * challenge, that character gets +2 STR..<br><i>Core Set.</i><br>
   **/
  WildlingHordeCore = "WILDLING_HORDE_Core",
  /**
   * <h5>Seal of the Hand</h5>Neutral.<br><b><i>Item.</i></b><br><i>Lord</i> or
   * <i>Lady</i> character only.<b>Action:</b> Kneel Seal of the Hand to stand
   * attached character..<br><i>Core Set.</i><br>
   **/
  SealOfTheHandCore = "SEAL_OF_THE_HAND_Core",
  /**
   * <h5>Bodyguard</h5>Neutral.<br><b><i>Condition.</i></b><br><i>Lord</i> or
   * <i>Lady</i> character only.<b>Interrupt:</b> When attached character would be
   * killed or discarded from play, sacrifice Bodyguard to save that
   * character..<br><i>Core Set.</i><br>
   **/
  BodyguardCore = "BODYGUARD_Core",
  /**
   * <h5>Little Bird</h5>Neutral.<br><b><i>Condition.</i></b><br>Attached character
   * gains an [intrigue] icon..<br><i>Core Set.</i><br>
   **/
  LittleBirdCore = "LITTLE_BIRD_Core",
  /**
   * <h5>Milk of the
   * Poppy</h5>Neutral.<br><b><i>Condition.</i></b><br>Terminal.Treat attached
   * character's printed text box as if it were blank (except for
   * <i>Traits</i>)..<br><i>Core Set.</i><br>
   **/
  MilkOfThePoppyCore = "MILK_OF_THE_POPPY_Core",
  /**
   * <h5>Noble Lineage</h5>Neutral.<br><b><i>Condition.</i></b><br>Attached
   * character gains a [power] icon..<br><i>Core Set.</i><br>
   **/
  NobleLineageCore = "NOBLE_LINEAGE_Core",
  /**
   * <h5>Syrio's Training</h5>Neutral.<br><b><i>Condition.
   * Skill.</i></b><br>Attached character gains a [military] icon..<br><i>Core Set.</i><br>
   **/
  SyriosTrainingCore = "SYRIOS_TRAINING_Core",
  /**
   * <h5>The Iron Throne</h5>Neutral.<br><b><i>King's Landing.</i></b><br>The Iron
   * Throne contributes 8 STR to your total for dominance.+1 Reserve..<br><i>Core Set.</i><br>
   **/
  TheIronThroneCore = "THE_IRON_THRONE_Core",
  /**
   * <h5>The Kingsroad</h5>Neutral.<br><b><i>Westeros.</i></b><br>Limited.<b>Marshaling
   * Action:</b> Kneel and sacrifice The Kingsroad to reduce the cost of the next
   * character you marshal this phase by 3.+1 Initiative..<br><i>Core Set.</i><br>
   **/
  TheKingsroadCore = "THE_KINGSROAD_Core",
  /** <h5>The Roseroad</h5>Neutral.<br><b><i>Westeros.</i></b><br>Limited.+1 Income..<br><i>Core Set.</i><br> */
  TheRoseroadCore = "THE_ROSEROAD_Core",
  /**
   * <h5>Put to the Sword</h5>Neutral.<br><b>Reaction:</b> After you win a
   * [military] challenge by 5 or more STR as the attacking player, choose and kill
   * a character controlled by the losing opponent. (Max 1 per
   * challenge.).<br><i>Core Set.</i><br>
   **/
  PutToTheSwordCore = "PUT_TO_THE_SWORD_Core",
  /**
   * <h5>Put to the Torch</h5>Neutral.<br><b>Reaction:</b> After you win a
   * [military] challenge by 5 or more STR as the attacking player, choose a
   * location controlled by the losing opponent, and discard it from play. (Max 1
   * per challenge.).<br><i>Core Set.</i><br>
   **/
  PutToTheTorchCore = "PUT_TO_THE_TORCH_Core",
  /**
   * <h5>Superior Claim</h5>Neutral.<br><b>Reaction:</b> After you win a [power]
   * challenge by 5 or more STR, gain 2 power for your faction. (Max 1 per
   * challenge.).<br><i>Core Set.</i><br>
   **/
  SuperiorClaimCore = "SUPERIOR_CLAIM_Core",
  /**
   * <h5>Tears of Lys</h5>Neutral.<br><b><i>Poison.</i></b><br><b>Reaction:</b>
   * After you win an [intrigue] challenge as the attacking player, place a poison
   * token on a character without an [intrigue] icon controlled by the losing
   * opponent. At the end of the phase, if that character still has the poison
   * token, remove it and kill that character. (Max 1 per challenge.).<br><i>Core Set.</i><br>
   **/
  TearsOfLysCore = "TEARS_OF_LYS_Core",
  /**
   * <h5>The Hand's Judgment</h5>Neutral.<br><b>Interrupt:</b> When the effects of
   * an opponent's event would initiate, cancel those effects. X is that event's
   * printed cost..<br><i>Core Set.</i><br>
   **/
  TheHandsJudgmentCore = "THE_HANDS_JUDGMENT_Core",
  /**
   * <h5>Maester Cressen</h5>House
   * Baratheon.<br><b><i>Maester.</i></b><br><b>Marshaling Action:</b> Kneel
   * Maester Cressen to choose a <i>Condition</i> attachment, and discard it from
   * play..<br><i>Core Set.</i><br>
   **/
  MaesterCressenCore = "MAESTER_CRESSEN_Core",
  /**
   * <h5>Melisandre (Core)</h5>House Baratheon.<br><b><i>Lady.
   * R'hllor.</i></b><br><b>Reaction:</b> After you marshal or play a
   * <i>R'hllor</i> card, choose and kneel a character. (Limit once per
   * round.).<br><i>Core Set.</i><br>
   **/
  MelisandreCore = "MELISANDRE_Core",
  /**
   * <h5>Robert Baratheon (Core)</h5>House Baratheon.<br><b><i>King.
   * Lord.</i></b><br>Intimidate. Renown.Robert Baratheon gets +1 STR for each
   * other kneeling character in play..<br><i>Core Set.</i><br>
   **/
  RobertBaratheonCore = "ROBERT_BARATHEON_Core",
  /**
   * <h5>Selyse Baratheon (Core)</h5>House Baratheon.<br><b><i>House Florent. Lady.
   * R'hllor.</i></b><br><b>Challenges Action:</b> Pay 1 gold to choose a
   * [baratheon] character. Until the end of the phase, that character gains an
   * [intrigue] icon..<br><i>Core Set.</i><br>
   **/
  SelyseBaratheonCore = "SELYSE_BARATHEON_Core",
  /**
   * <h5>Ser Davos Seaworth (Core)</h5>House Baratheon.<br><b><i>Knight.
   * Smuggler.</i></b><br>Stealth.<b>Interrupt:</b> When Ser Davos Seaworth is
   * killed, return him to your hand instead of placing him in your dead
   * pile..<br><i>Core Set.</i><br>
   **/
  SerDavosSeaworthCore = "SER_DAVOS_SEAWORTH_Core",
  /**
   * <h5>Shireen Baratheon (Core)</h5>House
   * Baratheon.<br><b><i>Lady.</i></b><br><b>Interrupt:</b> When Shireen Baratheon
   * is killed, choose and kneel a character..<br><i>Core Set.</i><br>
   **/
  ShireenBaratheonCore = "SHIREEN_BARATHEON_Core",
  /**
   * <h5>Stannis Baratheon (Core)</h5>House Baratheon.<br><b><i>Lord. Small
   * Council.</i></b><br>Each player cannot stand more than 2 characters during the
   * standing phase..<br><i>Core Set.</i><br>
   **/
  StannisBaratheonCore = "STANNIS_BARATHEON_Core",
  /** <h5>Bastard in Hiding</h5>House Baratheon.<br><b><i>Bastard.</i></b><br>.<br><i>Core Set.</i><br> */
  BastardInHidingCore = "BASTARD_IN_HIDING_Core",
  /**
   * <h5>Fiery Followers</h5>House
   * Baratheon.<br><b><i>R'hllor.</i></b><br><b>Reaction:</b> After the dominance
   * phase begins, stand Fiery Followers..<br><i>Core Set.</i><br>
   **/
  FieryFollowersCore = "FIERY_FOLLOWERS_Core",
  /**
   * <h5>King's Hunting Party</h5>House Baratheon.<br><b><i>Army.</i></b><br>No
   * attachments.While an opponent controls a <i>King</i> character, King's Hunting
   * Party gains an [intrigue] icon ..<br><i>Core Set.</i><br>
   **/
  KingsHuntingPartyCore = "KINGS_HUNTING_PARTY_Core",
  /**
   * <h5>Dragonstone Faithful</h5>House
   * Baratheon.<br><b><i>Ally.</i></b><br><b>Marshaling Action:</b> Kneel
   * Dragonstone Faithful to reduce the cost of the next [baratheon] character you
   * marshal this phase by 1..<br><i>Core Set.</i><br>
   **/
  DragonstoneFaithfulCore = "DRAGONSTONE_FAITHFUL_Core",
  /**
   * <h5>Vanguard Lancer</h5>House Baratheon.<br><b><i>House Florent.
   * Knight.</i></b><br><b>Reaction:</b> After Vanguard Lancer enters play, choose
   * an opponent's character or faction card, and discard 1 power from that
   * card..<br><i>Core Set.</i><br>
   **/
  VanguardLancerCore = "VANGUARD_LANCER_Core",
  /**
   * <h5>Lightbringer</h5>House Baratheon.<br><b><i>R'hllor.
   * Weapon.</i></b><br>[baratheon] character only.If attached character is Stannis
   * Baratheon, he gains renown.<b>Reaction:</b> After attached character gains 1
   * or more power, stand it. (Limit once per phase.).<br><i>Core Set.</i><br>
   **/
  LightbringerCore = "LIGHTBRINGER_Core",
  /**
   * <h5>Dragonstone Port</h5>House
   * Baratheon.<br><b><i>Dragonstone.</i></b><br>Limited.<b>Marshaling Action:</b>
   * Kneel Dragonstone Port to reduce the cost of the next [baratheon] card you
   * marshal this phase by 1..<br><i>Core Set.</i><br>
   **/
  DragonstonePortCore = "DRAGONSTONE_PORT_Core",
  /**
   * <h5>Chamber of the Painted Table</h5>House
   * Baratheon.<br><b><i>Dragonstone.</i></b><br><b>Reaction:</b> After you win
   * dominance, kneel Chamber of the Painted Table to move 1 power from an
   * opponent's faction card to your own..<br><i>Core Set.</i><br>
   **/
  ChamberOfThePaintedTableCore = "CHAMBER_OF_THE_PAINTED_TABLE_Core",
  /**
   * <h5>The Red Keep</h5>House Baratheon.<br><b><i>King's Landing.</i></b><br>The
   * Red Keep contributes 2 STR to your side during any [power] challenge in which
   * you control a participating character.<b>Interrupt:</b> When the challenges
   * phase ends, if you have not lost a [power] challenge this round, kneel The Red
   * Keep to draw 2 cards..<br><i>Core Set.</i><br>
   **/
  TheRedKeepCore = "THE_RED_KEEP_Core",
  /**
   * <h5>Consolidation of Power</h5>House Baratheon.<br><b>Marshaling Action:</b>
   * Choose and kneel up to 4 total STR worth of characters controlled by the same
   * player. Then, choose one of those characters, and have it gain 1
   * power..<br><i>Core Set.</i><br>
   **/
  ConsolidationOfPowerCore = "CONSOLIDATION_OF_POWER_Core",
  /**
   * <h5>Ours is the Fury</h5>House Baratheon.<br>Play only during a challenge in
   * which you are the defending player.<b>Action:</b> Choose a kneeling
   * [baratheon] character you control. That character is now participating as a
   * defender. If you win this challenge, stand that character..<br><i>Core Set.</i><br>
   **/
  OursIsTheFuryCore = "OURS_IS_THE_FURY_Core",
  /**
   * <h5>Seen In Flames</h5>House Baratheon.<br><b><i>R'hllor.</i></b><br>Play only
   * if you control a <i>R'hllor</i> character.<b>Challenges Action:</b> Choose an
   * opponent, and look at his or her hand. Then, choose and discard 1 card from
   * that hand..<br><i>Core Set.</i><br>
   **/
  SeenInFlamesCore = "SEEN_IN_FLAMES_Core",
  /**
   * <h5>Aeron Damphair (Core)</h5>House Greyjoy.<br><b><i>Drowned God. Ironborn.
   * Lord.</i></b><br><b>Reaction:</b> After you win dominance, put an
   * <i>Ironborn</i> character into play from your dead pile..<br><i>Core Set.</i><br>
   **/
  AeronDamphairCore = "AERON_DAMPHAIR_Core",
  /**
   * <h5>Alannys Greyjoy (Core)</h5>House Greyjoy.<br><b><i>House Harlaw.
   * Lady.</i></b><br>While you are the first player, reduce the reserve value on
   * each opponent's revealed plot card by 1..<br><i>Core Set.</i><br>
   **/
  AlannysGreyjoyCore = "ALANNYS_GREYJOY_Core",
  /**
   * <h5>Asha Greyjoy (Core)</h5>House Greyjoy.<br><b><i>Ironborn.
   * Lady.</i></b><br>Stealth.<b>Reaction:</b> After you win an unopposed challenge
   * in which Asha Greyjoy is participating, stand her..<br><i>Core Set.</i><br>
   **/
  AshaGreyjoyCore = "ASHA_GREYJOY_Core",
  /**
   * <h5>Balon Greyjoy (Core)</h5>House Greyjoy.<br><b><i>Ironborn.
   * Lord.</i></b><br>Renown.While Balon Greyjoy is attacking, each defending
   * character with a lower STR than his does not contribute its STR to that
   * challenge..<br><i>Core Set.</i><br>
   **/
  BalonGreyjoyCore = "BALON_GREYJOY_Core",
  /**
   * <h5>Euron Crow's Eye (Core)</h5>House Greyjoy.<br><b><i>Ironborn. Lord.
   * Raider.</i></b><br>Pillage. Renown.<b>Reaction:</b> After Euron Crow's Eye
   * discards a card using pillage, put a location from the losing opponent's
   * discard pile into play under your control..<br><i>Core Set.</i><br>
   **/
  EuronCrowsEyeCore = "EURON_CROWS_EYE_Core",
  /** <h5>Maester Wendamyr</h5>House Greyjoy.<br><b><i>Maester.</i></b><br>Stealth..<br><i>Core Set.</i><br> */
  MaesterWendamyrCore = "MAESTER_WENDAMYR_Core",
  /**
   * <h5>Theon Greyjoy (Core)</h5>House Greyjoy.<br><b><i>Ally. Ironborn.
   * Lord.</i></b><br>Stealth.<b>Reaction:</b> After you win an unopposed challenge
   * in which Theon Greyjoy is participating, he gains 1 power..<br><i>Core Set.</i><br>
   **/
  TheonGreyjoyCore = "THEON_GREYJOY_Core",
  /** <h5>Black Wind's Crew</h5>House Greyjoy.<br><b><i>Ironborn. Raider.</i></b><br>Pillage..<br><i>Core Set.</i><br> */
  BlackWindsCrewCore = "BLACK_WINDS_CREW_Core",
  /**
   * <h5>Drowned Men</h5>House Greyjoy.<br><b><i>Army. Drowned God.</i></b><br>No
   * attachments.Drowned Men gets +1 STR for each <i>Warship</i> location you
   * control..<br><i>Core Set.</i><br>
   **/
  DrownedMenCore = "DROWNED_MEN_Core",
  /**
   * <h5>Iron Islands Fishmonger</h5>House Greyjoy.<br><b><i>Ally.
   * Merchant.</i></b><br><b>Marshaling Action:</b> Kneel Iron Islands Fishmonger
   * to reduce the cost of the next [greyjoy] character you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  IronIslandsFishmongerCore = "IRON_ISLANDS_FISHMONGER_Core",
  /**
   * <h5>Lordsport Shipwright</h5>House Greyjoy.<br><b><i>Ally.
   * Ironborn.</i></b><br><b>Marshaling Action:</b> Kneel Lordsport Shipwright to
   * choose and kneel a location with printed cost 2 or lower. (Printed cost 3 or
   * lower instead if you are the first player.).<br><i>Core Set.</i><br>
   **/
  LordsportShipwrightCore = "LORDSPORT_SHIPWRIGHT_Core",
  /** <h5>Salty Navigator</h5>House Greyjoy.<br><b><i>Ironborn.</i></b><br>+1 Initiative..<br><i>Core Set.</i><br> */
  SaltyNavigatorCore = "SALTY_NAVIGATOR_Core",
  /**
   * <h5>Throwing Axe</h5>House
   * Greyjoy.<br><b><i>Weapon.</i></b><br><i>Ironborn</i> character
   * only.<b>Reaction:</b> After you win a challenge in which attached character is
   * participating as an attacker, sacrifice Throwing Axe to choose and kill a
   * defending character..<br><i>Core Set.</i><br>
   **/
  ThrowingAxeCore = "THROWING_AXE_Core",
  /**
   * <h5>Great Kraken</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>While you
   * control Balon Greyjoy, he gains stealth.<b>Reaction:</b> After you win an
   * unopposed challenge, either: draw 1 card, or gain 1 power for your faction.
   * (Limit twice per round.).<br><i>Core Set.</i><br>
   **/
  GreatKrakenCore = "GREAT_KRAKEN_Core",
  /**
   * <h5>Iron Fleet Scout</h5>House
   * Greyjoy.<br><b><i>Warship.</i></b><br><b>Challenges Action:</b> Kneel Iron
   * Fleet Scout to choose a participating [greyjoy] character. Until the end of
   * the challenge, that character gets +1 STR. (+2 STR instead if you are the
   * first player.).<br><i>Core Set.</i><br>
   **/
  IronFleetScoutCore = "IRON_FLEET_SCOUT_Core",
  /**
   * <h5>Sea Tower</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Sea Tower to
   * reduce the cost of the next [greyjoy] card you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  SeaTowerCore = "SEA_TOWER_Core",
  /**
   * <h5>Risen from the Sea</h5>House Greyjoy.<br><b>Interrupt:</b> When a
   * [greyjoy] character would be killed, save it. Then, attach Risen from the Sea
   * to that character as a <i>Condition</i> attachment with the text: "Terminal.
   * Attached character gets +1 STR.".<br><i>Core Set.</i><br>
   **/
  RisenFromTheSeaCore = "RISEN_FROM_THE_SEA_Core",
  /**
   * <h5>The Kraken's Grasp</h5>House Greyjoy.<br>Play only if you are the first
   * player.<b>Challenges Action:</b> Choose a defending character with STR 5 or
   * lower. That character does not contribute is STR to this
   * challenge..<br><i>Core Set.</i><br>
   **/
  TheKrakensGraspCore = "THE_KRAKENS_GRASP_Core",
  /**
   * <h5>We Do Not Sow</h5>House Greyjoy.<br><b>Reaction:</b> After you win an
   * unopposed challenge, choose an attachment or location controlled by the losing
   * opponent, and discard it from play. (Max 1 per challenge.).<br><i>Core Set.</i><br>
   **/
  WeDoNotSowCore = "WE_DO_NOT_SOW_Core",
  /**
   * <h5>Cersei Lannister (Core)</h5>House Lannister.<br><b><i>Lady.
   * Queen.</i></b><br>While Cersei Lannister is attacking during an [intrigue]
   * challenge, raise the claim value on your revealed plot card by 1..<br><i>Core Set.</i><br>
   **/
  CerseiLannisterCore = "CERSEI_LANNISTER_Core",
  /**
   * <h5>Grand Maester Pycelle</h5>House Lannister.<br><b><i>Maester. Small
   * Council.</i></b><br>Insight..<br><i>Core Set.</i><br>
   **/
  GrandMaesterPycelleCore = "GRAND_MAESTER_PYCELLE_Core",
  /**
   * <h5>Joffrey Baratheon (Core)</h5>House
   * Lannister.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After a <i>Lord</i> or
   * <i>Lady</i> character is killed, Joffrey Baratheon gains 1 power. (Limit 3
   * times per round.).<br><i>Core Set.</i><br>
   **/
  JoffreyBaratheonCore = "JOFFREY_BARATHEON_Core",
  /**
   * <h5>Ser Jaime Lannister (Core)</h5>House Lannister.<br><b><i>Knight.
   * Lord.</i></b><br>Ser Jaime Lannister does not kneel when declared as an
   * attacker in a [military] challenge, and gains renown while participating in a
   * [military] challenge..<br><i>Core Set.</i><br>
   **/
  SerJaimeLannisterCore = "SER_JAIME_LANNISTER_Core",
  /**
   * <h5>The Tickler</h5>House Lannister.<br><b><i>Ally.</i></b><br><b>Dominance
   * Action:</b> Kneel The Tickler to discard the top card of an opponent's deck.
   * Then, you may choose 1 copy of that card, and discard it from
   * play..<br><i>Core Set.</i><br>
   **/
  TheTicklerCore = "THE_TICKLER_Core",
  /**
   * <h5>Tyrion Lannister (Core)</h5>House
   * Lannister.<br><b><i>Lord.</i></b><br>Stealth.<b>Reaction:</b> After an
   * [intrigue] challenge is initiated, gain 2 gold. (Limit twice per
   * round.).<br><i>Core Set.</i><br>
   **/
  TyrionLannisterCore = "TYRION_LANNISTER_Core",
  /**
   * <h5>Tywin Lannister (Core)</h5>House
   * Lannister.<br><b><i>Lord.</i></b><br>Renown.Tywin Lannister gets +1 STR for
   * each gold in your gold pool.+2 Income..<br><i>Core Set.</i><br>
   **/
  TywinLannisterCore = "TYWIN_LANNISTER_Core",
  /** <h5>Burned Men</h5>House Lannister.<br><b><i>Clansman.</i></b><br>Ambush (2)..<br><i>Core Set.</i><br> */
  BurnedMenCore = "BURNED_MEN_Core",
  /**
   * <h5>Gold Cloaks</h5>House Lannister.<br><b><i>Ally. Army.</i></b><br>Ambush
   * (2).<b>Forced Interrupt:</b> When a phase ends in which Gold Cloaks entered
   * play using ambush, discard it from play (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  GoldCloaksCore = "GOLD_CLOAKS_Core",
  /** <h5>Lannisport Moneylender</h5>House Lannister.<br><b><i>Merchant.</i></b><br>Limited.+1 Income..<br><i>Core Set.</i><br> */
  LannisportMoneylenderCore = "LANNISPORT_MONEYLENDER_Core",
  /**
   * <h5>Lannisport Merchant</h5>House Lannister.<br><b><i>Ally.
   * Steward.</i></b><br><b>Marshaling Action:</b> Kneel Lannisport Merchant to
   * reduce the cost of the next [lannister] character you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  LannisportMerchantCore = "LANNISPORT_MERCHANT_Core",
  /**
   * <h5>The Queen's Assassin</h5>House Lannister.<br><b><i>Spy.</i></b><br>Ambush
   * (4).<b>Reaction:</b> After The Queen's Assassin enters play using ambush,
   * choose an opponent. If you have more cards in hand than that player, he or she
   * must choose and kill a character he or she controls..<br><i>Core Set.</i><br>
   **/
  TheQueensAssassinCore = "THE_QUEENS_ASSASSIN_Core",
  /**
   * <h5>Widow's Wail</h5>House Lannister.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>Ambush (1).Attached character gets +2 STR.If attached
   * character is Joffrey Baratheon, he gains a [military] icon..<br><i>Core Set.</i><br>
   **/
  WidowsWailCore = "WIDOWS_WAIL_Core",
  /**
   * <h5>Casterly Rock</h5>House Lannister.<br><b><i>Stronghold. The
   * Westerlands.</i></b><br>You may initiate an additional [intrigue] challenge
   * during the challenges phase..<br><i>Core Set.</i><br>
   **/
  CasterlyRockCore = "CASTERLY_ROCK_Core",
  /**
   * <h5>Lannisport</h5>House Lannister.<br><b><i>The
   * Westerlands.</i></b><br><b>Reaction:</b> After you win an [intrigue]
   * challenge, draw 1 card..<br><i>Core Set.</i><br>
   **/
  LannisportCore = "LANNISPORT_Core",
  /**
   * <h5>Western Fiefdom</h5>House Lannister.<br><b><i>The
   * Westerlands.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Western
   * Fiefdom to reduce the cost of the next [lannister] card you marshal this phase
   * by 1..<br><i>Core Set.</i><br>
   **/
  WesternFiefdomCore = "WESTERN_FIEFDOM_Core",
  /**
   * <h5>Hear Me Roar!</h5>House Lannister.<br><b>Action:</b> Put a [lannister]
   * character into play from your hand. At the end of the phase, if that card is
   * still in play, discard it from play (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  HearMeRoarCore = "HEAR_ME_ROAR_Core",
  /**
   * <h5>The Things I Do For Love</h5>House Lannister.<br>Play only if you control
   * a [lannister] <i>Lord</i> or <i>Lady</i> character.<b>Challenges Action:</b>
   * Kneel your faction card to choose a character with printed cost X or lower
   * controlled by an opponent, and return it to its owner's hand..<br><i>Core Set.</i><br>
   **/
  TheThingsIDoForLoveCore = "THE_THINGS_I_DO_FOR_LOVE_Core",
  /**
   * <h5>Treachery</h5>House Lannister.<br>Play only if you control a unique
   * [lannister] character.<b>Interrupt:</b> When the effects of a triggered
   * character, location, or attachment ability would initiate, cancel those
   * effects..<br><i>Core Set.</i><br>
   **/
  TreacheryCore = "TREACHERY_Core",
  /**
   * <h5>Areo Hotah (Core)</h5>House Martell.<br><b><i>Guard.</i></b><br>Ambush
   * (5).<b>Reaction:</b> After Areo Hotah enters play during a challenge, choose a
   * participating character, and remove it from the challenge..<br><i>Core Set.</i><br>
   **/
  AreoHotahCore = "AREO_HOTAH_Core",
  /**
   * <h5>Arianne Martell (Core)</h5>House
   * Martell.<br><b><i>Lady.</i></b><br><b>Action:</b> Put a character with printed
   * cost 5 or lower into play from your hand. Then, return Arianne Martell to your
   * hand (cannot be saved). (Limit once per phase.).<br><i>Core Set.</i><br>
   **/
  ArianneMartellCore = "ARIANNE_MARTELL_Core",
  /**
   * <h5>Doran Martell (Core)</h5>House
   * Martell.<br><b><i>Lord.</i></b><br>Insight.Each other [martell] <i>Lord</i>
   * and <i>Lady</i> character you control gets +1 STR for each plot card in your
   * used pile..<br><i>Core Set.</i><br>
   **/
  DoranMartellCore = "DORAN_MARTELL_Core",
  /**
   * <h5>Edric Dayne</h5>House Martell.<br><b><i>Brotherhood. House Dayne.
   * Lord.</i></b><br>Stealth.<b>Action:</b> Pay 1 gold to give Edric Dayne a
   * challenge icon of your choice until the end of the phase..<br><i>Core Set.</i><br>
   **/
  EdricDayneCore = "EDRIC_DAYNE_Core",
  /**
   * <h5>Maester Caleotte</h5>House
   * Martell.<br><b><i>Maester.</i></b><br><b>Reaction:</b> After you lose a
   * challenge in which Maester Caleotte is participating, choose a character. That
   * character loses a challenge icon of your choice until the end of the
   * phase..<br><i>Core Set.</i><br>
   **/
  MaesterCaleotteCore = "MAESTER_CALEOTTE_Core",
  /**
   * <h5>Obara Sand (Core)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br>Obara Sand may be declared as a defender during [power]
   * challenges in which you are the defending player, even while
   * kneeling..<br><i>Core Set.</i><br>
   **/
  ObaraSandCore = "OBARA_SAND_Core",
  /**
   * <h5>The Red Viper (Core)</h5>House
   * Martell.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After you win a challenge
   * in which The Red Viper is participating as an attacker, he gains 1 power for
   * every 5 STR by which you won the challenge..<br><i>Core Set.</i><br>
   **/
  TheRedViperCore = "THE_RED_VIPER_Core",
  /**
   * <h5>Desert Scavenger</h5>House
   * Martell.<br><b><i>Ally.</i></b><br><b>Marshaling Action:</b> Kneel Desert
   * Scavenger to reduce the cost of the next [martell] character you marshal this
   * phase by 1..<br><i>Core Set.</i><br>
   **/
  DesertScavengerCore = "DESERT_SCAVENGER_Core",
  /**
   * <h5>Dornish Paramour</h5>House
   * Martell.<br><b><i>Companion.</i></b><br><b>Reaction:</b> After Dornish
   * Paramour is declared as an attacker, choose a character controlled by the
   * defending player. That character must be declared as a defender for this
   * challenge, if able..<br><i>Core Set.</i><br>
   **/
  DornishParamourCore = "DORNISH_PARAMOUR_Core",
  /**
   * <h5>Greenblood Trader</h5>House
   * Martell.<br><b><i>Ally.</i></b><br><b>Reaction:</b> After Greenblood Trader
   * enters play, look at the top 2 cards of your deck. Add up to 1 of those cards
   * to your hand, and place the others on the bottom of your deck in any
   * order..<br><i>Core Set.</i><br>
   **/
  GreenbloodTraderCore = "GREENBLOOD_TRADER_Core",
  /** <h5>House Dayne Knight</h5>House Martell.<br><b><i>House Dayne. Knight.</i></b><br>.<br><i>Core Set.</i><br> */
  HouseDayneKnightCore = "HOUSE_DAYNE_KNIGHT_Core",
  /**
   * <h5>Palace Spearman</h5>House Martell.<br><b><i>Guard.</i></b><br>No
   * attachments.While you are not the first player, Palace Spearman gains an
   * [intrigue] icon..<br><i>Core Set.</i><br>
   **/
  PalaceSpearmanCore = "PALACE_SPEARMAN_Core",
  /**
   * <h5>Dawn</h5>House Martell.<br><b><i>Weapon.</i></b><br>Attached character
   * gets +1 STR for each plot card in your used pile.While attached character has
   * the <i>House Dayne</i> trait, it gains intimidate..<br><i>Core Set.</i><br>
   **/
  DawnCore = "DAWN_Core",
  /**
   * <h5>Ghaston Grey</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b> After you lose a
   * challenge as the defending player, kneel and sacrifice Ghaston Grey to return
   * an attacking character to its owner's hand (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  GhastonGreyCore = "GHASTON_GREY_Core",
  /**
   * <h5>Sunspear</h5>House Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b>
   * After you lose a challenge as the defending player, kneel Sunspear to raise
   * the claim value on your revealed plot card by 1 during challenges of this same
   * type until the end of the phase..<br><i>Core Set.</i><br>
   **/
  SunspearCore = "SUNSPEAR_Core",
  /**
   * <h5>Blood Orange Grove</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel
   * Blood Orange Grove to reduce the cost of the next [martell] card you marshal
   * this phase by 1..<br><i>Core Set.</i><br>
   **/
  BloodOrangeGroveCore = "BLOOD_ORANGE_GROVE_Core",
  /**
   * <h5>Doran's Game</h5>House Martell.<br><b>Reaction:</b> After you win an
   * [intrigue] challenge by 5 or more STR, gain X power for your faction. X is the
   * number of plot cards in your used pile. (Max 1 per challenge.).<br><i>Core Set.</i><br>
   **/
  DoransGameCore = "DORANS_GAME_Core",
  /**
   * <h5>Unbowed, Unbent, Unbroken</h5>House Martell.<br>Play only if you are not
   * the first player.<b>Reaction:</b> After you lose a challenge as the defending
   * player, name a challenge type. Until the end of the phase, the winner of the
   * challenge cannot initiate challenges of that type. (Max 1 per
   * challenge.).<br><i>Core Set.</i><br>
   **/
  UnbowedUnbentUnbrokenCore = "UNBOWED_UNBENT_UNBROKEN_Core",
  /**
   * <h5>Confinement</h5>House Martell.<br><b>Action:</b> Choose a character with
   * STR 4 or lower. Until the end of the phase, that character loses a [military],
   * an [intrigue], and a [power] icon..<br><i>Core Set.</i><br>
   **/
  ConfinementCore = "CONFINEMENT_Core",
  /**
   * <h5>Benjen Stark</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>Each
   * <i>Ranger</i> character you control cannot be bypassed by
   * stealth.<b>Interrupt:</b> When Benjen Stark is killed, gain 2 power for your
   * faction. Then, shuffle him back into your deck instead of placing him in your
   * dead pile..<br><i>Core Set.</i><br>
   **/
  BenjenStarkCore = "BENJEN_STARK_Core",
  /**
   * <h5>Ghost (Core)</h5>The Night's Watch.<br><b><i>Direwolf.</i></b><br>No
   * attachments. Stealth.<b>Reaction:</b> After Ghost bypasses a character using
   * stealth, that character cannot be declared as a defender for any challenges
   * until the end of the phase..<br><i>Core Set.</i><br>
   **/
  GhostCore = "GHOST_Core",
  /**
   * <h5>Jon Snow (Core)</h5>The Night's Watch.<br><b><i>Bastard.
   * Steward.</i></b><br>No attachments except <i>Weapon</i>.While Jon Snow is
   * standing, he is considered to be participating in each challenge in which you
   * control another attacking [thenightswatch] character..<br><i>Core Set.</i><br>
   **/
  JonSnowCore = "JON_SNOW_Core",
  /**
   * <h5>Maester Aemon (Core)</h5>The Night's Watch.<br><b><i>Maester.
   * Steward.</i></b><br>No attachments.<b>Interrupt:</b> When a [thenightswatch]
   * character would be killed, kneel Master Aemon to save it..<br><i>Core Set.</i><br>
   **/
  MaesterAemonCore = "MAESTER_AEMON_Core",
  /**
   * <h5>Old Bear Mormont (Core)</h5>The Night's Watch.<br><b><i>Commander.
   * Lord.</i></b><br>While you control The Wall, Old Bear Mormont does not kneel
   * when declared as a defender.<b>Interrupt:</b> When the challenges phase ends,
   * if you have not lost a challenge as the defending player this phase, put a
   * [thenightswatch] card into play from your hand..<br><i>Core Set.</i><br>
   **/
  OldBearMormontCore = "OLD_BEAR_MORMONT_Core",
  /** <h5>Samwell Tarly (Core)</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>Insight.+1 Reserve..<br><i>Core Set.</i><br> */
  SamwellTarlyCore = "SAMWELL_TARLY_Core",
  /**
   * <h5>Ser Waymar Royce</h5>The Night's Watch.<br><b><i>Knight.
   * Ranger.</i></b><br>No attachments except <i>Weapon</i>.<b>Interrupt:</b> When
   * Ser Waymar Royce is killed, discard 1 card at random from each opponent's
   * hand..<br><i>Core Set.</i><br>
   **/
  SerWaymarRoyceCore = "SER_WAYMAR_ROYCE_Core",
  /**
   * <h5>Yoren (Core)</h5>The Night's Watch.<br><b><i>Wandering
   * Crow.</i></b><br><b>Reaction:</b> After you marshal Yoren, choose a character
   * with printed cost 3 or lower in an opponent's discard pile, and put it into
   * play under your control..<br><i>Core Set.</i><br>
   **/
  YorenCore = "YOREN_Core",
  /**
   * <h5>Messenger Raven</h5>The Night's Watch.<br><b><i>Raven.</i></b><br>No
   * attachments.<b>Dominance Action:</b> Return Messenger Raven to your hand to
   * draw 1 card..<br><i>Core Set.</i><br>
   **/
  MessengerRavenCore = "MESSENGER_RAVEN_Core",
  /**
   * <h5>Old Forest Hunter</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Action:</b> Discard 1 card from your hand
   * to gain 1 gold. (Limit once per phase.).<br><i>Core Set.</i><br>
   **/
  OldForestHunterCore = "OLD_FOREST_HUNTER_Core",
  /**
   * <h5>Ranging Party</h5>The Night's Watch.<br><b><i>Army. Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>..<br><i>Core Set.</i><br>
   **/
  RangingPartyCore = "RANGING_PARTY_Core",
  /**
   * <h5>Steward at the Wall</h5>The Night's Watch.<br><b><i>Ally.
   * Steward.</i></b><br><b>Marshaling Action:</b> Kneel Steward at the Wall to
   * reduce the cost of the next [thenightswatch] character you marshal this phase
   * by 1..<br><i>Core Set.</i><br>
   **/
  StewardAtTheWallCore = "STEWARD_AT_THE_WALL_Core",
  /**
   * <h5>Veteran Builder</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Action:</b> Sacrifice Veteran Builder to
   * choose and stand a location..<br><i>Core Set.</i><br>
   **/
  VeteranBuilderCore = "VETERAN_BUILDER_Core",
  /**
   * <h5>Longclaw</h5>The Night's Watch.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>[thenightswatch] character only.Attached character gets +1
   * STR and gains renown..<br><i>Core Set.</i><br>
   **/
  LongclawCore = "LONGCLAW_Core",
  /**
   * <h5>Castle Black</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Action:</b> Kneel Castle Black to choose and stand a
   * defending [thenightswatch] character. Until the end of the challenge, that
   * character gets +2 STR..<br><i>Core Set.</i><br>
   **/
  CastleBlackCore = "CASTLE_BLACK_Core",
  /**
   * <h5>The Wall (Core)</h5>The Night's Watch.<br><b><i>Stronghold. The
   * North.</i></b><br>Each [thenightswatch] character you control gets +1
   * STR.<b>Forced Reaction:</b> After you lose an unopposed challenge, kneel The
   * Wall.<b>Interrupt:</b> When the challenges phase ends, kneel The Wall to gain
   * 2 power for your faction..<br><i>Core Set.</i><br>
   **/
  TheWallCore = "THE_WALL_Core",
  /**
   * <h5>A Meager Contribution</h5>The Night's Watch.<br><b>Reaction:</b> After an
   * opponent collects income, move 1 gold from that player's gold pool to your
   * own. (Max 1 per round.).<br><i>Core Set.</i><br>
   **/
  AMeagerContributionCore = "A_MEAGER_CONTRIBUTION_Core",
  /**
   * <h5>Take the Black</h5>The Night's Watch.<br><b>Dominance Action:</b> Choose a
   * non-unique character with printed cost 6 or lower. Take control of that
   * character. (Max 1 per round.).<br><i>Core Set.</i><br>
   **/
  TakeTheBlackCore = "TAKE_THE_BLACK_Core",
  /**
   * <h5>The Sword in the Darkness</h5>The Night's Watch.<br>Play only during a
   * challenge in which you control a participating [thenightswatch]
   * character.<b>Reaction:</b> After you win a challenge by 5 or more STR as the
   * defending player, the losing opponent cannot initiate challenges against you
   * this round..<br><i>Core Set.</i><br>
   **/
  TheSwordInTheDarknessCore = "THE_SWORD_IN_THE_DARKNESS_Core",
  /**
   * <h5>Arya Stark (Core)</h5>House Stark.<br><b><i>Lady.</i></b><br>Stealth.While
   * Arya Stark has a duplicate, she gains a [military] icon.<b>Reaction:</b> After
   * Arya Stark enters play, place the top card of your deck on her facedown as a
   * duplicate..<br><i>Core Set.</i><br>
   **/
  AryaStarkCore = "ARYA_STARK_Core",
  /**
   * <h5>Bran Stark (Core)</h5>House
   * Stark.<br><b><i>Lord.</i></b><br><b>Interrupt:</b> When the effects of an
   * opponent's event would initiate, sacrifice Bran Stark to cancel those
   * effects..<br><i>Core Set.</i><br>
   **/
  BranStarkCore = "BRAN_STARK_Core",
  /**
   * <h5>Catelyn Stark (Core)</h5>House Stark.<br><b><i>House Tully. Lady. The
   * Seven.</i></b><br>While Catelyn Stark is participating in a challenge, your
   * opponents cannot trigger card abilities..<br><i>Core Set.</i><br>
   **/
  CatelynStarkCore = "CATELYN_STARK_Core",
  /**
   * <h5>Eddard Stark (Core)</h5>House Stark.<br><b><i>Lord. Small
   * Council.</i></b><br>Renown.<b>Reaction:</b> After a challenge is initiated
   * against you, stand Eddard Stark..<br><i>Core Set.</i><br>
   **/
  EddardStarkCore = "EDDARD_STARK_Core",
  /**
   * <h5>Grey Wind</h5>House Stark.<br><b><i>Direwolf.</i></b><br>Intimidate. No
   * attachments.<b>Challenges Action:</b> Kneel Grey Wind to choose and kill a
   * character with STR 1 or lower. (STR 2 or lower instead if you control Robb
   * Stark)..<br><i>Core Set.</i><br>
   **/
  GreyWindCore = "GREY_WIND_Core",
  /**
   * <h5>Robb Stark (Core)</h5>House
   * Stark.<br><b><i>Lord.</i></b><br>Renown.<b>Reaction:</b> After a [stark]
   * character you control is sacrificed or killed, stand each character you
   * control. (Limit once per round.).<br><i>Core Set.</i><br>
   **/
  RobbStarkCore = "ROBB_STARK_Core",
  /**
   * <h5>Sansa Stark (Core)</h5>House Stark.<br><b><i>Lady.</i></b><br>Sansa Stark
   * enters play knelt.<b>Reaction:</b> After Sansa Stark stands, gain 1 power for
   * your faction. (Limit once per round.).<br><i>Core Set.</i><br>
   **/
  SansaStarkCore = "SANSA_STARK_Core",
  /**
   * <h5>Summer (Core)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>No
   * attachments.While you control Bran Stark, he gains insight.<b>Reaction:</b>
   * After Summer enters play, return a [stark] character with printed STR 2 or
   * lower from your discard or dead pile to your hand..<br><i>Core Set.</i><br>
   **/
  SummerCore = "SUMMER_Core",
  /**
   * <h5>Direwolf Pup</h5>House Stark.<br><b><i>Direwolf.</i></b><br>No
   * attachments.Direwolf Pup gets +1 STR for each other <i>Direwolf</i> card you
   * control..<br><i>Core Set.</i><br>
   **/
  DirewolfPupCore = "DIREWOLF_PUP_Core",
  /** <h5>Tumblestone Knight</h5>House Stark.<br><b><i>House Tully. Knight.</i></b><br>.<br><i>Core Set.</i><br> */
  TumblestoneKnightCore = "TUMBLESTONE_KNIGHT_Core",
  /**
   * <h5>Vanguard of the North</h5>House Stark.<br><b><i>Army.</i></b><br>No
   * attachments.While a player has a <i>War</i> plot revealed, Vanguard of the
   * North does not kneel when declared as an attacker in a [military]
   * challenge..<br><i>Core Set.</i><br>
   **/
  VanguardOfTheNorthCore = "VANGUARD_OF_THE_NORTH_Core",
  /**
   * <h5>Winterfell Steward</h5>House Stark.<br><b><i>Ally.
   * Steward.</i></b><br><b>Marshaling Action:</b> Kneel Winterfell Steward to
   * reduce the cost of the next [stark] character you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  WinterfellStewardCore = "WINTERFELL_STEWARD_Core",
  /**
   * <h5>Ice</h5>House Stark.<br><b><i>Valyrian Steel. Weapon.</i></b><br>[stark]
   * character only. Attached character gets +2 STR.<b>Reaction:</b> After you win
   * a [military] challenge in which attached character is participating, sacrifice
   * Ice to choose and kill a character controlled by the losing
   * opponent..<br><i>Core Set.</i><br>
   **/
  IceCore = "ICE_Core",
  /**
   * <h5>Gates of Winterfell</h5>House Stark.<br><b><i>The North.
   * Winterfell.</i></b><br><b>Challenges Action:</b> Kneel Gates of Winterfell to
   * reveal the top card of your deck. If it is a [stark] card, draw
   * it..<br><i>Core Set.</i><br>
   **/
  GatesOfWinterfellCore = "GATES_OF_WINTERFELL_Core",
  /**
   * <h5>The Wolfswood</h5>House Stark.<br><b><i>The North.</i></b><br>Each
   * <i>Direwolf</i> card in your hand gains ambush (X). X is that card's printed
   * cost..<br><i>Core Set.</i><br>
   **/
  TheWolfswoodCore = "THE_WOLFSWOOD_Core",
  /**
   * <h5>Heart Tree Grove</h5>House Stark.<br><b><i>Old Gods.
   * Winterfell.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Heart Tree
   * Grove to reduce the cost of the next [stark] card you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  HeartTreeGroveCore = "HEART_TREE_GROVE_Core",
  /**
   * <h5>For the North!</h5>House Stark.<br>Play only during a [military]
   * challenge.<b>Action:</b> Choose a participating [stark] character. Until the
   * end of the challenge, that character gets +2 STR. If you win the challenge,
   * draw 1 card..<br><i>Core Set.</i><br>
   **/
  ForTheNorthCore = "FOR_THE_NORTH_Core",
  /**
   * <h5>Like Warm Rain</h5>House Stark.<br><b>Reaction:</b> After you lose an
   * [intrigue] challenge as the defending player, kneel a <i>Direwolf</i>
   * character to choose and kill an attacking character. (Max 1 per
   * challenge.).<br><i>Core Set.</i><br>
   **/
  LikeWarmRainCore = "LIKE_WARM_RAIN_Core",
  /**
   * <h5>Winter Is Coming</h5>House Stark.<br>Play only during a
   * challenge.<b>Action:</b> Until the end of the challenge, raise the claim value
   * on your revealed plot card by 1. (Max 1 per challenge.).<br><i>Core Set.</i><br>
   **/
  WinterIsComingCore = "WINTER_IS_COMING_Core",
  /**
   * <h5>Daenerys Targaryen (Core)</h5>House Targaryen.<br><b><i>Lady.
   * Stormborn.</i></b><br>Insight.While Daenerys Targaryen is standing, each
   * character participating on an opponent's side in a challenge against you gets
   * -1 STR..<br><i>Core Set.</i><br>
   **/
  DaenerysTargaryenCore = "DAENERYS_TARGARYEN_Core",
  /**
   * <h5>Drogon (Core)</h5>House Targaryen.<br><b><i>Dragon.
   * Hatchling.</i></b><br>No attachments.Each <i>Stormborn</i> character you
   * control gains renown..<br><i>Core Set.</i><br>
   **/
  DrogonCore = "DROGON_Core",
  /**
   * <h5>Khal Drogo</h5>House Targaryen.<br><b><i>Dothraki.
   * Lord.</i></b><br>Renown.You may initiate an additional [military] challenge
   * during the challenges phase..<br><i>Core Set.</i><br>
   **/
  KhalDrogoCore = "KHAL_DROGO_Core",
  /**
   * <h5>Magister Illyrio</h5>House Targaryen.<br><b><i>Lord.
   * Merchant.</i></b><br><b>Action:</b> Pay 2 gold to choose and stand a
   * character. (Limit once per phase.).<br><i>Core Set.</i><br>
   **/
  MagisterIllyrioCore = "MAGISTER_ILLYRIO_Core",
  /**
   * <h5>Rhaegal (Core)</h5>House Targaryen.<br><b><i>Dragon.
   * Hatchling.</i></b><br>No attachments.<b>Reaction:</b> After you win a
   * challenge in which a <i>Stormborn</i> character you control is participating,
   * choose and stand a <i>Stormborn</i> character. (Limit once per
   * phase.).<br><i>Core Set.</i><br>
   **/
  RhaegalCore = "RHAEGAL_Core",
  /**
   * <h5>Ser Jorah Mormont (Core)</h5>House Targaryen.<br><b><i>Companion.
   * Knight.</i></b><br>Renown.If Ser Jorah Mormont has 3 or more betrayal tokens
   * on him, sacrifice him.<b>Forced Reaction:</b> After you win a challenge in
   * which Ser Jorah Mormont is participating, place 1 betrayal token on
   * him..<br><i>Core Set.</i><br>
   **/
  SerJorahMormontCore = "SER_JORAH_MORMONT_Core",
  /**
   * <h5>Viserion (Core)</h5>House Targaryen.<br><b><i>Dragon.
   * Hatchling.</i></b><br>No attachments.Each <i>Stormborn</i> character you
   * control gains stealth..<br><i>Core Set.</i><br>
   **/
  ViserionCore = "VISERION_Core",
  /**
   * <h5>Viserys Targaryen (Core)</h5>House
   * Targaryen.<br><b><i>Lord.</i></b><br><b>Interrupt:</b> When Viserys Targaryen
   * leaves play, choose an attachment, and discard it from play..<br><i>Core Set.</i><br>
   **/
  ViserysTargaryenCore = "VISERYS_TARGARYEN_Core",
  /**
   * <h5>Braided Warrior</h5>House Targaryen.<br><b><i>Dothraki.</i></b><br>No
   * attachments except <i>Weapon</i>..<br><i>Core Set.</i><br>
   **/
  BraidedWarriorCore = "BRAIDED_WARRIOR_Core",
  /**
   * <h5>Handmaiden</h5>House Targaryen.<br><b><i>Ally.
   * Companion.</i></b><br><b>Action:</b> Sacrifice Handmaiden to choose and stand
   * a <i>Lady</i> character..<br><i>Core Set.</i><br>
   **/
  HandmaidenCore = "HANDMAIDEN_Core",
  /**
   * <h5>Targaryen Loyalist</h5>House
   * Targaryen.<br><b><i>Ally.</i></b><br><b>Marshaling Action:</b> Kneel Targaryen
   * Loyalist to reduce the cost of the next [targaryen] character you marshal this
   * phase by 1..<br><i>Core Set.</i><br>
   **/
  TargaryenLoyalistCore = "TARGARYEN_LOYALIST_Core",
  /**
   * <h5>Unsullied</h5>House Targaryen.<br><b><i>Army.</i></b><br>No attachments
   * except <i>Weapon</i>.While Unsullied is attacking, each defending character
   * gets -1 STR..<br><i>Core Set.</i><br>
   **/
  UnsulliedCore = "UNSULLIED_Core",
  /**
   * <h5>Drogo's Arakh</h5>House
   * Targaryen.<br><b><i>Weapon.</i></b><br><i>Dothraki</i> character only.Attached
   * character gets +2 STR.If attached character is Khal Drogo, he does not kneel
   * when declared as an attacker in the first [military] challenge you initiate
   * each round..<br><i>Core Set.</i><br>
   **/
  DrogosArakhCore = "DROGOS_ARAKH_Core",
  /**
   * <h5>Plaza of Punishment</h5>House
   * Targaryen.<br><b><i>Astapor.</i></b><br><b>Reaction:</b> After you win a
   * [power] challenge, kneel Plaza of Punishment to choose a character without
   * attachments. Until the end of the phase, that character gets -2 STR and is
   * killed if its STR is 0..<br><i>Core Set.</i><br>
   **/
  PlazaOfPunishmentCore = "PLAZA_OF_PUNISHMENT_Core",
  /**
   * <h5>Dothraki Sea</h5>House
   * Targaryen.<br><b><i>Essos.</i></b><br><b>Reaction:</b> After you win a [power]
   * challenge, sacrifice Dothraki Sea to put a <i>Dothraki</i> character into play
   * from your hand. At the end of the phase, if that card is still in play, return
   * it to your hand (cannot be saved)..<br><i>Core Set.</i><br>
   **/
  DothrakiSeaCore = "DOTHRAKI_SEA_Core",
  /**
   * <h5>Illyrio's Estate</h5>House
   * Targaryen.<br><b><i>Pentos.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel
   * Illyrio's Estate to reduce the cost of the next [targaryen] card you marshal
   * this phase by 1..<br><i>Core Set.</i><br>
   **/
  IllyriosEstateCore = "ILLYRIOS_ESTATE_Core",
  /**
   * <h5>Dracarys!</h5>House Targaryen.<br><b>Action:</b> Kneel a <i>Dragon</i>
   * character or Daenerys Targaryen to choose a participating character. Until the
   * end of the phase, that character gets -4 STR and is killed if its STR is
   * 0..<br><i>Core Set.</i><br>
   **/
  DracarysCore = "DRACARYS_Core",
  /**
   * <h5>Fire and Blood</h5>House Targaryen.<br><b>Challenges Action:</b> Choose a
   * unique [targaryen] character in your dead pile, and shuffle it back into your
   * deck. If that character is a <i>Hatchling</i>, you may put it into play
   * instead..<br><i>Core Set.</i><br>
   **/
  FireAndBloodCore = "FIRE_AND_BLOOD_Core",
  /**
   * <h5>Waking the Dragon</h5>House Targaryen.<br><b>Action:</b> Choose and stand
   * a unique [targaryen] character you control. At the end of the phase, if that
   * character is still in play, return it to your hand..<br><i>Core Set.</i><br>
   **/
  WakingTheDragonCore = "WAKING_THE_DRAGON_Core",
  /**
   * <h5>Left</h5>House Tyrell.<br><b><i>Guard.</i></b><br>No attachments except
   * <i>Weapon</i>.While you control Right, Left gets +1 STR, gains a [power] icon,
   * and does not kneel when declared as a defender..<br><i>Core Set.</i><br>
   **/
  LeftCore = "LEFT_Core",
  /**
   * <h5>Maester Lomys</h5>House
   * Tyrell.<br><b><i>Maester.</i></b><br><b>Reaction:</b> After you win an
   * [intrigue] challenge as the defending player, discard 1 card at random from
   * the attacking player's hand..<br><i>Core Set.</i><br>
   **/
  MaesterLomysCore = "MAESTER_LOMYS_Core",
  /**
   * <h5>Margaery Tyrell (Core)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br><b>Challenges Action:</b> Kneel Margaery
   * Tyrell to choose a character. Until the end of the phase, that character gets
   * +3 STR..<br><i>Core Set.</i><br>
   **/
  MargaeryTyrellCore = "MARGAERY_TYRELL_Core",
  /**
   * <h5>Paxter Redwyne</h5>House Tyrell.<br><b><i>House Redwyne.
   * Lord.</i></b><br>Reduce the cost of the first event you play each round by
   * 1.+1 Income..<br><i>Core Set.</i><br>
   **/
  PaxterRedwyneCore = "PAXTER_REDWYNE_Core",
  /**
   * <h5>Randyll Tarly</h5>House Tyrell.<br><b><i>House Tarly.
   * Lord.</i></b><br>Renown.<b>Reaction:</b> After Randyll Tarly's STR is
   * increased by a card effect, stand him. (Limit twice per phase.).<br><i>Core Set.</i><br>
   **/
  RandyllTarlyCore = "RANDYLL_TARLY_Core",
  /**
   * <h5>Right</h5>House Tyrell.<br><b><i>Guard.</i></b><br>No attachments except
   * <i>Weapon</i>.While you control Left, Right gets +1 STR, gains an [intrigue]
   * icon, and does not kneel when declared as a defender..<br><i>Core Set.</i><br>
   **/
  RightCore = "RIGHT_Core",
  /**
   * <h5>The Knight of Flowers (Core)</h5>House Tyrell.<br><b><i>Knight.
   * Lord.</i></b><br>Renown.While The Knight of Flowers is attacking alone, the
   * defending player cannot declare more than 1 character as a
   * defender..<br><i>Core Set.</i><br>
   **/
  TheKnightOfFlowersCore = "THE_KNIGHT_OF_FLOWERS_Core",
  /**
   * <h5>The Queen of Thorns (Core)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br><b>Reaction:</b> After you win an [intrigue]
   * challenge in which The Queen of Thorns is participating, put a [tyrell]
   * character with printed cost 6 or lower into play from your hand..<br><i>Core Set.</i><br>
   **/
  TheQueenOfThornsCore = "THE_QUEEN_OF_THORNS_Core",
  /** <h5>Courtesan of the Rose</h5>House Tyrell.<br><b><i>Companion. Spy.</i></b><br>.<br><i>Core Set.</i><br> */
  CourtesanOfTheRoseCore = "COURTESAN_OF_THE_ROSE_Core",
  /**
   * <h5>Garden Caretaker</h5>House Tyrell.<br><b><i>Ally.</i></b><br><b>Marshaling
   * Action:</b> Kneel Garden Caretaker to reduce the cost of the next [tyrell]
   * character you marshal this phase by 1..<br><i>Core Set.</i><br>
   **/
  GardenCaretakerCore = "GARDEN_CARETAKER_Core",
  /**
   * <h5>Olenna's Informant</h5>House Tyrell.<br><b><i>Ally. Spy.</i></b><br>Ambush
   * (4).<b>Reaction:</b> After Olenna's Informant enters play during the
   * challenges phase, name a challenge type. You may initiate an additional
   * challenge of that type this phase..<br><i>Core Set.</i><br>
   **/
  OlennasInformantCore = "OLENNAS_INFORMANT_Core",
  /**
   * <h5>Wardens of the Reach</h5>House Tyrell.<br><b><i>Army.</i></b><br>No
   * attachments.Wardens of the Reach gets +1 STR for each <i>The Reach</i>
   * location you control..<br><i>Core Set.</i><br>
   **/
  WardensOfTheReachCore = "WARDENS_OF_THE_REACH_Core",
  /**
   * <h5>Heartsbane</h5>House Tyrell.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>[tyrell] character only.<b>Action:</b> While attached
   * character is participating in a challenge, kneel Heartsbane to give that
   * character +3 STR until the end of the challenge..<br><i>Core Set.</i><br>
   **/
  HeartsbaneCore = "HEARTSBANE_Core",
  /**
   * <h5>Highgarden</h5>House Tyrell.<br><b><i>Stronghold. The
   * Reach.</i></b><br><b>Challenges Action:</b> Kneel Highgarden and pay 1 gold to
   * choose an attacking character. Stand that character and remove it from the
   * challenge..<br><i>Core Set.</i><br>
   **/
  HighgardenCore = "HIGHGARDEN_Core",
  /**
   * <h5>The Mander</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br><b>Reaction:</b> After you win a challenge by 5 or more STR,
   * kneel The Mander to draw 2 cards..<br><i>Core Set.</i><br>
   **/
  TheManderCore = "THE_MANDER_Core",
  /**
   * <h5>Rose Garden</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Rose Garden to
   * reduce the cost of the next [tyrell] card you marshal this phase by
   * 1..<br><i>Core Set.</i><br>
   **/
  RoseGardenCore = "ROSE_GARDEN_Core",
  /**
   * <h5>Growing Strong</h5>House Tyrell.<br><b>Challenges Action:</b> Choose up to
   * three [tyrell] characters. Until the end of the phase, each of the chosen
   * characters gets +2 STR..<br><i>Core Set.</i><br>
   **/
  GrowingStrongCore = "GROWING_STRONG_Core",
  /**
   * <h5>Olenna's Cunning</h5>House Tyrell.<br><b>Reaction:</b> After you win an
   * [intrigue] or [power] challenge, the losing opponent names a cardtype
   * (character, location, attachment, or event). Search your deck for a card with
   * a different cardtype, reveal it, and add it to your hand. Shuffle your
   * deck..<br><i>Core Set.</i><br>
   **/
  OlennasCunningCore = "OLENNAS_CUNNING_Core",
  /**
   * <h5>"The Bear and the Maiden Fair"</h5>House
   * Tyrell.<br><b><i>Song.</i></b><br><b>Action:</b> Choose a player. Look at the
   * top 5 cards of that player's deck. Place up to 3 of those cards on the bottom
   * of that deck, and the others on top, in any order..<br><i>Core Set.</i><br>
   **/
  TheBearAndTheMaidenFairCore = "THE_BEAR_AND_THE_MAIDEN_FAIR_Core",
  /**
   * <h5>Banner of the Stag</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [baratheon] cards in your deck.You must include at least 12
   * [baratheon] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheStagCore = "BANNER_OF_THE_STAG_Core",
  /**
   * <h5>Banner of the Kraken</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [greyjoy] cards in your deck.You must include at least 12
   * [greyjoy] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheKrakenCore = "BANNER_OF_THE_KRAKEN_Core",
  /**
   * <h5>Banner of the Lion</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [lannister] cards in your deck.You must include at least 12
   * [lannister] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheLionCore = "BANNER_OF_THE_LION_Core",
  /**
   * <h5>Banner of the Sun</h5>Neutral.<br><b><i>Banner.</i></b><br>You may include
   * non-loyal [martell] cards in your deck.You must include at least 12 [martell]
   * cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheSunCore = "BANNER_OF_THE_SUN_Core",
  /**
   * <h5>Banner of the Watch</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [thenightswatch] cards in your deck.You must include at
   * least 12 [thenightswatch] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheWatchCore = "BANNER_OF_THE_WATCH_Core",
  /**
   * <h5>Banner of the Wolf</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [stark] cards in your deck.You must include at least 12
   * [stark] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheWolfCore = "BANNER_OF_THE_WOLF_Core",
  /**
   * <h5>Banner of the Dragon</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [targaryen] cards in your deck.You must include at least 12
   * [targaryen] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheDragonCore = "BANNER_OF_THE_DRAGON_Core",
  /**
   * <h5>Banner of the Rose</h5>Neutral.<br><b><i>Banner.</i></b><br>You may
   * include non-loyal [tyrell] cards in your deck.You must include at least 12
   * [tyrell] cards in your deck..<br><i>Core Set.</i><br>
   **/
  BannerOfTheRoseCore = "BANNER_OF_THE_ROSE_Core",
  /**
   * <h5>Master of Whispers</h5>Neutral.<br>Supported by Master of ShipsSupports:
   * Hand of the KingRivals: Master of Laws, Master of CoinYou may resolve your
   * [intrigue] claim against any number of opponents of your choice.+1 STR
   * [intrigue].<br><i>Core Set.</i><br>
   **/
  MasterOfWhispersCore = "MASTER_OF_WHISPERS_Core",
  /**
   * <h5>Master of Ships</h5>Neutral.<br>Supported by Master of CoinSupports:
   * Master of WhispersRivals: Master of Laws, Hand of the KingRaise the claim
   * value on your revealed plot card by 1 during [military] challenges in which
   * you are attacking a rival.+1 STR [military].<br><i>Core Set.</i><br>
   **/
  MasterOfShipsCore = "MASTER_OF_SHIPS_Core",
  /**
   * <h5>Hand of the King</h5>Neutral.<br>Supported by Master of Whispers.Supports:
   * Master of Laws.Rivals: Master of Coin, Master of Ships.You may initiate an
   * additional [power] challenge during the challenges phase, against a different
   * opponent.+1 STR [power].<br><i>Core Set.</i><br>
   **/
  HandOfTheKingCore = "HAND_OF_THE_KING_Core",
  /**
   * <h5>Master of Coin</h5>Neutral.<br>Supported by Master of Laws.Supports:
   * Master of ShipsRivals: Hand of the King, Master of Whispers+2
   * Income..<br><i>Core Set.</i><br>
   **/
  MasterOfCoinCore = "MASTER_OF_COIN_Core",
  /**
   * <h5>Master of Laws</h5>Neutral.<br>Supported by Hand of the KingSupports:
   * Master of CoinRivals: Master of Whispers, Master of ShipsIncrease the number
   * of cards you draw in the draw phase by 1.+1 Reserve..<br><i>Core Set.</i><br>
   **/
  MasterOfLawsCore = "MASTER_OF_LAWS_Core",
  /**
   * <h5>Crown Regent</h5>Neutral.<br>Supported by NoneSupports: NoneRivals:
   * NoneYou may redirect 1 challenge this round.+2 STR for Dominance.<br><i>Core Set.</i><br>
   **/
  CrownRegentCore = "CROWN_REGENT_Core",
  /**
   * <h5>Will</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>Stealth.
   * Insight.<b>Forced Reaction:</b> After you lose an unopposed challenge,
   * sacrifice a <i>Ranger</i> character you control..<br><i>Taking the Black.</i><br>
   **/
  WillTtB = "WILL_TtB",
  /**
   * <h5>The Watch Has Need</h5>The Night's Watch.<br><b>Action:</b> Name a trait:
   * <i>Builder</i>, <i>Ranger</i>, or <i>Steward</i>. Search the top X cards of
   * your deck for any number of characters with that trait, reveal them, and add
   * them to your hand. Shuffle the other cards back into your deck. X is your
   * reserve value..<br><i>Taking the Black.</i><br>
   **/
  TheWatchHasNeedTtB = "THE_WATCH_HAS_NEED_TtB",
  /**
   * <h5>Maester Luwin</h5>House Stark.<br><b><i>Maester.</i></b><br>While you
   * control:- Robb Stark, he gains insight.- Jon Snow, he gains stealth.- Bran
   * Stark, he gains: "immune to opponents' plot effects."- Rickon Stark, he gains
   * pillage..<br><i>Taking the Black.</i><br>
   **/
  MaesterLuwinTtB = "MAESTER_LUWIN_TtB",
  /**
   * <h5>Lady</h5>House Stark.<br><b><i>Direwolf.</i></b><br>[stark] character
   * only. Terminal.Attached character gets +2 STR.<b>Action:</b> Pay 1 gold to
   * attach Lady to a different character. Then, if attached character is Sansa
   * Stark, stand her. (Limit once per phase.).<br><i>Taking the Black.</i><br>
   **/
  LadyTtB = "LADY_TtB",
  /**
   * <h5>Arbor Knight</h5>House Tyrell.<br><b><i>House Redwyne.
   * Knight.</i></b><br><b>Challenges Action:</b> Pay 1 gold to choose a
   * participating <i>House Redwyne</i> character. Until the end of the challenge,
   * that character gets +1 STR. (Limit 3 times per phase.).<br><i>Taking the Black.</i><br>
   **/
  ArborKnightTtB = "ARBOR_KNIGHT_TtB",
  /**
   * <h5>Pleasure Barge</h5>House Tyrell.<br><b><i>Barge.</i></b><br>Immune to card
   * effects.<b>Reaction:</b> After you marshal Pleasure Barge, if you have not yet
   * drawn any cards this phase, draw 3 cards.-1 Income..<br><i>Taking the Black.</i><br>
   **/
  PleasureBargeTtB = "PLEASURE_BARGE_TtB",
  /**
   * <h5>Renly Baratheon (TtB)</h5>House Baratheon.<br><b><i>Lord. Small
   * Council.</i></b><br>Reduce the cost of the first non-[baratheon] character you
   * marshal each round by 1..<br><i>Taking the Black.</i><br>
   **/
  RenlyBaratheonTtB = "RENLY_BARATHEON_TtB",
  /**
   * <h5>King Robert's Warhammer</h5>House
   * Baratheon.<br><b><i>Weapon.</i></b><br>Attached character gets +1
   * STR.<b>Reaction:</b> After you win a challenge in which attached character is
   * participating as an attacker, choose and kneel up to X total STR worth of
   * characters, where X is attached character's STR. Then, sacrifice King Robert's
   * Warhammer..<br><i>Taking the Black.</i><br>
   **/
  KingRobertsWarhammerTtB = "KING_ROBERTS_WARHAMMER_TtB",
  /**
   * <h5>The Hound (TtB)</h5>House Lannister.<br><b><i>House
   * Clegane.</i></b><br>Ambush (4).<b>Forced Reaction:</b> After you win a
   * challenge in which The Hound is participating, you may discard 1 card at
   * random from your hand. If you do not, return The Hound to your
   * hand..<br><i>Taking the Black.</i><br>
   **/
  TheHoundTtB = "THE_HOUND_TtB",
  /**
   * <h5>Cersei's Wheelhouse</h5>House
   * Lannister.<br><b><i>Vehicle.</i></b><br><b>Reaction:</b> After you become the
   * first player, either: gain 1 gold, or draw 1 card.-1 Initiative..<br><i>Taking
   * the Black.</i><br>
   **/
  CerseisWheelhouseTtB = "CERSEIS_WHEELHOUSE_TtB",
  /**
   * <h5>The Seastone Chair</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br><b>Interrupt:</b> When claim is applied for an unopposed
   * [military] challenge in which you are the attacking player, kneel your faction
   * card to choose a character without attachments, controlled by the losing
   * opponent. Instead of the normal claim effects, kill that
   * character..<br><i>Taking the Black.</i><br>
   **/
  TheSeastoneChairTtB = "THE_SEASTONE_CHAIR_TtB",
  /**
   * <h5>Rise of the Kraken</h5>House
   * Greyjoy.<br><b><i>War.</i></b><br><b>Interrupt:</b> When you gain power for
   * winning an unopposed challenge, gain 2 power instead..<br><i>Taking the Black.</i><br>
   **/
  RiseOfTheKrakenTtB = "RISE_OF_THE_KRAKEN_TtB",
  /**
   * <h5>Merchant Prince</h5>House Targaryen.<br><b><i>Companion.</i></b><br>While
   * Merchant Prince has an attachment, he gets +1 STR and gains a [military]
   * icon..<br><i>Taking the Black.</i><br>
   **/
  MerchantPrinceTtB = "MERCHANT_PRINCE_TtB",
  /**
   * <h5>Vaes Dothrak</h5>House
   * Targaryen.<br><b><i>Essos.</i></b><br><b>Reaction:</b> After you reveal a plot
   * card, discard an attachment from your hand to choose an attachment with equal
   * or lower printed cost, and discard it from play..<br><i>Taking the Black.</i><br>
   **/
  VaesDothrakTtB = "VAES_DOTHRAK_TtB",
  /**
   * <h5>Bastard Daughter</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Interrupt:</b> When Bastard Daughter or The Red Viper is
   * killed, discard 1 card at random from each opponent's hand..<br><i>Taking the Black.</i><br>
   **/
  BastardDaughterTtB = "BASTARD_DAUGHTER_TtB",
  /**
   * <h5>The Long Plan</h5>House Martell.<br><b><i>Scheme.</i></b><br>You do not
   * return unspent gold to the treasury during the taxation phase.<b>Reaction:</b>
   * After you lose a challenge, gain 1 gold..<br><i>Taking the Black.</i><br>
   **/
  TheLongPlanTtB = "THE_LONG_PLAN_TtB",
  /**
   * <h5>Support of the People</h5>Neutral.<br><b>Reaction:</b> After you win a
   * [power] challenge by 5 or more STR, search your deck for a location with
   * printed cost 3 or lower, and put it into play. Shuffle your deck. (Max 1 per
   * challenge.).<br><i>Taking the Black.</i><br>
   **/
  SupportOfThePeopleTtB = "SUPPORT_OF_THE_PEOPLE_TtB",
  /**
   * <h5>Street of the Sisters</h5>Neutral.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win a [power] challenge by 5 or
   * more STR, kneel your faction card to gain 1 power for your
   * faction..<br><i>Taking the Black.</i><br>
   **/
  StreetOfTheSistersTtB = "STREET_OF_THE_SISTERS_TtB",
  /**
   * <h5>Muster the Realm</h5>Neutral.<br><b><i>Edict.</i></b><br>During a
   * challenge in which you control an attacking <i>Army</i> character, raise the
   * claim value on Muster the Realm by 1..<br><i>Taking the Black.</i><br>
   **/
  MusterTheRealmTtB = "MUSTER_THE_REALM_TtB",
  /**
   * <h5>Here to Serve</h5>Neutral.<br><b><i>Conclave. Kingdom.</i></b><br><b>When
   * Revealed:</b> Search your deck for a <i>Maester</i> character with printed
   * cost 3 or lower, and put it into play. Shuffle your deck..<br><i>Taking the Black.</i><br>
   **/
  HereToServeTtB = "HERE_TO_SERVE_TtB",
  /**
   * <h5>Winterfell Kennel Master</h5>House
   * Stark.<br><b><i>Ally.</i></b><br><b>Challenges Action:</b> If you control a
   * participating [stark] character, kneel a <i>Direwolf</i> character or a
   * character with a <i>Direwolf</i> attachment to have it participate in the
   * current challenge on your side. (Limit once per phase.).<br><i>The Road to
   * Winterfell.</i><br>
   **/
  WinterfellKennelMasterTRtW = "WINTERFELL_KENNEL_MASTER_TRtW",
  /**
   * <h5>Winterfell Castle</h5>House Stark.<br><b><i>Stronghold.
   * Winterfell.</i></b><br>During a [military] or [power] challenge in which you
   * control 2 or more unique participating [stark] characters, each of those
   * characters gets +2 STR..<br><i>The Road to Winterfell.</i><br>
   **/
  WinterfellCastleTRtW = "WINTERFELL_CASTLE_TRtW",
  /**
   * <h5>Lady-in-Waiting</h5>House
   * Tyrell.<br><b><i>Companion.</i></b><br>Lady-in-Waiting may be marshaled as a
   * duplicate <em>(at no cost)</em> on a <i>Lady</i> character you own and
   * control..<br><i>The Road to Winterfell.</i><br>
   **/
  LadyInWaitingTRtW = "LADY_IN_WAITING_TRtW",
  /**
   * <h5>Lady Sansa's Rose</h5>House Tyrell.<br><b>Reaction:</b> After you win a
   * challenge in which you control a <i>Knight</i> character that is attacking or
   * defending alone, that character gains 1 power. (3 power instead if you control
   * a <i>Lady</i> character.) (Max 1 per challenge.).<br><i>The Road to
   * Winterfell.</i><br>
   **/
  LadySansasRoseTRtW = "LADY_SANSAS_ROSE_TRtW",
  /**
   * <h5>Unsworn Apprentice</h5>The Night's
   * Watch.<br><b><i>Companion.</i></b><br>No attachments except
   * <i>Weapon</i>.<b>Challenges Action:</b> Unsworn Apprentice gains a challenge
   * icon of your choice until the end of the phase. (Limit once per
   * phase.).<br><i>The Road to Winterfell.</i><br>
   **/
  UnswornApprenticeTRtW = "UNSWORN_APPRENTICE_TRtW",
  /**
   * <h5>Brandon's Gift</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After you marshal a <i>Builder</i>
   * character, reduce the cost of the next [thenightswatch] card you marshal this
   * phase by 1. (Limit 3 times per phase.).<br><i>The Road to Winterfell.</i><br>
   **/
  BrandonsGiftTRtW = "BRANDONS_GIFT_TRtW",
  /**
   * <h5>Royal Entourage</h5>House Baratheon.<br><b><i>Ally.</i></b><br><b>Forced
   * Reaction:</b> After you lose an [intrigue] challenge, kneel Royal
   * Entourage..<br><i>The Road to Winterfell.</i><br>
   **/
  RoyalEntourageTRtW = "ROYAL_ENTOURAGE_TRtW",
  /**
   * <h5>In the Name of Your King!</h5>House Baratheon.<br>Play only during a
   * [military] challenge in which you are the defending player.<b>Action:</b>
   * Kneel your faction card to end this challenge with no winner or loser. Until
   * the end of the phase, you cannot initiate [military] challenges..<br><i>The
   * Road to Winterfell.</i><br>
   **/
  InTheNameOfYourKingTRtW = "IN_THE_NAME_OF_YOUR_KING_TRtW",
  /**
   * <h5>Brothel Madame</h5>House
   * Lannister.<br><b><i>Companion.</i></b><br><b>Reaction:</b> After the
   * challenges phase begins, choose a player. That player may give you 1 gold from
   * his or her gold pool. Until the end of the phase, if that player has not given
   * you gold this phase, he or she cannot initiate [military] challenges against
   * you..<br><i>The Road to Winterfell.</i><br>
   **/
  BrothelMadameTRtW = "BROTHEL_MADAME_TRtW",
  /**
   * <h5>Wardens of the West</h5>House
   * Lannister.<br><b><i>Scheme.</i></b><br><b>Reaction:</b> After you win an
   * [intrigue] challenge, pay 2 gold to have the losing opponent choose and
   * discard 2 cards from his or her hand..<br><i>The Road to Winterfell.</i><br>
   **/
  WardensOfTheWestTRtW = "WARDENS_OF_THE_WEST_TRtW",
  /**
   * <h5>The Reader</h5>House Greyjoy.<br><b><i>House Harlaw.
   * Lord.</i></b><br><b>Reaction:</b> After you win an unopposed challenge in
   * which a unique [greyjoy] character is participating, either: draw 1 card, or
   * discard the top 3 cards from each opponent's deck. (Limit once per
   * phase.).<br><i>The Road to Winterfell.</i><br>
   **/
  TheReaderTRtW = "THE_READER_TRtW",
  /**
   * <h5>Raiding Longship</h5>House
   * Greyjoy.<br><b><i>Warship.</i></b><br><b>Challenges Action:</b> If you are the
   * first player, kneel Raiding Longship to choose a defending character without
   * attachments. That character does not contribute its STR to this
   * challenge..<br><i>The Road to Winterfell.</i><br>
   **/
  RaidingLongshipTRtW = "RAIDING_LONGSHIP_TRtW",
  /**
   * <h5>Rakharo</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br>While you control another <i>Bloodrider</i> character,
   * Rakharo gains intimidate.<b>Reaction:</b> After a character is killed to
   * satisfy claim during a challenge you initiated, Rakharo gains 1
   * power..<br><i>The Road to Winterfell.</i><br>
   **/
  RakharoTRtW = "RAKHARO_TRtW",
  /**
   * <h5>Crown of Gold</h5>House
   * Targaryen.<br><b><i>Item.</i></b><br>Terminal.Attached character gains the
   * <i>King</i> trait.Attached character gets -4 STR and is killed if its STR is
   * 0..<br><i>The Road to Winterfell.</i><br>
   **/
  CrownOfGoldTRtW = "CROWN_OF_GOLD_TRtW",
  /**
   * <h5>Nymeria Sand (TRtW)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Challenges Action:</b> Choose an opponent's character.
   * Until the end of the phase, that character loses a challenge icon of your
   * choice, and each <i>Sand Snake</i> character you control gains that challenge
   * icon. (Limit once per phase.).<br><i>The Road to Winterfell.</i><br>
   **/
  NymeriaSandTRtW = "NYMERIA_SAND_TRtW",
  /**
   * <h5>In Doran's Name</h5>House Martell.<br><b>Action:</b> Kneel your faction
   * card to gain X gold. X is the number of plot cards in your used
   * pile..<br><i>The Road to Winterfell.</i><br>
   **/
  InDoransNameTRtW = "IN_DORANS_NAME_TRtW",
  /**
   * <h5>Syrio Forel</h5>Neutral.<br><b><i>Companion.</i></b><br>Stealth.<b>Challenges
   * Action:</b> Choose a character. Until the end of the phase, that character
   * gains a [military] icon and stealth. (Limit once per phase.).<br><i>The Road
   * to Winterfell.</i><br>
   **/
  SyrioForelTRtW = "SYRIO_FOREL_TRtW",
  /**
   * <h5>Shadowblack Lane</h5>Neutral.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win an [intrigue] challenge,
   * kneel your faction card to search the top 10 cards of your deck for an
   * in-faction event, reveal it, and add it to your hand. Shuffle your
   * deck..<br><i>The Road to Winterfell.</i><br>
   **/
  ShadowblackLaneTRtW = "SHADOWBLACK_LANE_TRtW",
  /**
   * <h5>Trading with the
   * Pentoshi</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When Revealed:</b> Each
   * opponent gains 3 gold. (Cannot be canceled.).<br><i>The Road to
   * Winterfell.</i><br>
   **/
  TradingWithThePentoshiTRtW = "TRADING_WITH_THE_PENTOSHI_TRtW",
  /**
   * <h5>Political Disaster</h5>Neutral.<br><b><i>Edict.</i></b><br><b>When
   * Revealed:</b> Each player chooses up to 2 locations he or she controls. Each
   * location not chosen is discarded from play..<br><i>The Road to
   * Winterfell.</i><br>
   **/
  PoliticalDisasterTRtW = "POLITICAL_DISASTER_TRtW",
  /**
   * <h5>Ser Rodrik Cassel</h5>House Stark.<br><b><i>Knight.</i></b><br>No
   * attachments except <i>Weapon</i>.While Ser Rodrik Cassel is attacking in a
   * [military] challenge, each unique [stark] character you control gains
   * insight..<br><i>The King's Peace.</i><br>
   **/
  SerRodrikCasselTkp = "SER_RODRIK_CASSEL_TKP",
  /**
   * <h5>Wolf Dreams</h5>House Stark.<br><b><i>Dream.</i></b><br><b>Action:</b>
   * Kneel your faction card to search your deck for a <i>Direwolf</i> card, reveal
   * it, and add it to your hand. Shuffle your deck..<br><i>The King's Peace.</i><br>
   **/
  WolfDreamsTkp = "WOLF_DREAMS_TKP",
  /**
   * <h5>Ser Hobber Redwyne</h5>House Tyrell.<br><b><i>House Redwyne.
   * Knight.</i></b><br><b>Reaction:</b> After you marshal Ser Hobber Redwyne,
   * search your deck for a <i>Lady</i> character, reveal it, and add it to your
   * hand. Shuffle your deck..<br><i>The King's Peace.</i><br>
   **/
  SerHobberRedwyneTkp = "SER_HOBBER_REDWYNE_TKP",
  /**
   * <h5>Mare in Heat</h5>House Tyrell.<br><b><i>Warhorse.</i></b><br><i>Knight</i>
   * character only.While attached character is attacking or defending alone, Mare
   * in Heat gains: "<b>Action:</b> Kneel Mare in Heat to choose a participating
   * character with STR higher than that of attached character, and remove that
   * character from the challenge.".<br><i>The King's Peace.</i><br>
   **/
  MareInHeatTkp = "MARE_IN_HEAT_TKP",
  /**
   * <h5>Ser Alliser Thorne</h5>The Night's Watch.<br><b><i>Knight.
   * Ranger.</i></b><br>While you are the defending player, each [thenightswatch]
   * character you control gains a [military] icon.<b>Reaction:</b> After a
   * [military] challenge is initiated against you, kneel your faction card and pay
   * 4 gold to put Ser Alliser Thorne into play from your hand..<br><i>The King's Peace.</i><br>
   **/
  SerAlliserThorneTkp = "SER_ALLISER_THORNE_TKP",
  /**
   * <h5>Practice Blade</h5>The Night's
   * Watch.<br><b><i>Weapon.</i></b><br>[thenightswatch] character only. Ambush
   * (2).Attached character gets +1 STR and gains a [military] icon..<br><i>The
   * King's Peace.</i><br>
   **/
  PracticeBladeTkp = "PRACTICE_BLADE_TKP",
  /**
   * <h5>Moon Boy</h5>House Baratheon.<br><b><i>Fool.</i></b><br>Insight.<b>Forced
   * Reaction:</b> After you lose a challenge in which Moon Boy is participating,
   * discard 1 card at random from your hand..<br><i>The King's Peace.</i><br>
   **/
  MoonBoyTkp = "MOON_BOY_TKP",
  /**
   * <h5>The King's Peace</h5>House Baratheon.<br><b><i>Edict.
   * Scheme.</i></b><br><b>Reaction:</b> After a [military] or [power] challenge is
   * initiated against you, the attacking player may either: kneel his or her
   * faction card, or move 1 power from that faction card to yours. If that player
   * does not, the challenge immediately ends with no winner or loser..<br><i>The
   * King's Peace.</i><br>
   **/
  TheKingsPeaceTkp = "THE_KINGS_PEACE_TKP",
  /**
   * <h5>Ser Gregor Clegane (TKP)</h5>House Lannister.<br><b><i>House Clegane.
   * Knight. Lord.</i></b><br>Pillage. Renown.<b>Reaction:</b> After Ser Gregor
   * Clegane discards a character using pillage, place that card in its owner's
   * dead pile. Then, you may choose and kill a character with printed cost equal
   * to that card's printed cost..<br><i>The King's Peace.</i><br>
   **/
  SerGregorCleganeTkp = "SER_GREGOR_CLEGANE_TKP",
  /**
   * <h5>I Never Bet Against My Family</h5>House Lannister.<br><b>Challenges
   * Action:</b> Kneel your faction card to reveal the bottom 5 cards of your deck.
   * You may put 1 unique [lannister] character revealed by this effect into play;
   * return the other cards to the bottom of your deck in any order. At the end of
   * the phase, if that card is still in play, discard it from play (cannot be
   * saved)..<br><i>The King's Peace.</i><br>
   **/
  INeverBetAgainstMyFamilyTkp = "I_NEVER_BET_AGAINST_MY_FAMILY_TKP",
  /**
   * <h5>Newly-Made Lord</h5>House
   * Greyjoy.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After you marshal
   * Newly-Made Lord, choose a non-limited location with printed cost 3 or lower,
   * and discard it from play..<br><i>The King's Peace.</i><br>
   **/
  NewlyMadeLordTkp = "NEWLY_MADE_LORD_TKP",
  /**
   * <h5>Fishing Net</h5>House Greyjoy.<br><b><i>Condition. Item.
   * Weapon.</i></b><br>Opponent's character only.Attached character cannot be
   * declared as a defender..<br><i>The King's Peace.</i><br>
   **/
  FishingNetTkp = "FISHING_NET_TKP",
  /**
   * <h5>Crone of Vaes Dothrak</h5>House
   * Targaryen.<br><b><i>Dothraki.</i></b><br><b>Reaction:</b> After a character is
   * discarded from an opponent's hand or deck, kneel a <i>Dothraki</i> character
   * to place that card in its owner's dead pile..<br><i>The King's Peace.</i><br>
   **/
  CroneOfVaesDothrakTkp = "CRONE_OF_VAES_DOTHRAK_TKP",
  /**
   * <h5>The Silver Steed</h5>House
   * Targaryen.<br><b><i>Warhorse.</i></b><br><i>Dothraki</i> character or Daenerys
   * Targaryen only.While attached character is participating in a [power]
   * challenge, it gains renown.<b>Reaction:</b> After attached character gains
   * power using renown, sacrifice The Silver Steed. You may initiate an additional
   * [power] challenge this phase..<br><i>The King's Peace.</i><br>
   **/
  TheSilverSteedTkp = "THE_SILVER_STEED_TKP",
  /**
   * <h5>Attainted</h5>House Martell.<br><b><i>Condition.</i></b><br>Opponent's
   * character only.Attached character loses an [intrigue] icon..<br><i>The King's Peace.</i><br>
   **/
  AttaintedTkp = "ATTAINTED_TKP",
  /**
   * <h5>The Boneway</h5>House Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b>
   * After you lose a challenge, place 1 vengeance token on The
   * Boneway.<b>Dominance Action:</b> Kneel The Boneway and discard 6 vengeance
   * tokens from it to gain 3 power for your faction..<br><i>The King's Peace.</i><br>
   **/
  TheBonewayTkp = "THE_BONEWAY_TKP",
  /**
   * <h5>Hedge Knight</h5>Neutral.<br><b><i>Knight.</i></b><br>While you control
   * another <i>Knight</i> character, Hedge Knight gets +1 STR and gains a [power]
   * icon..<br><i>The King's Peace.</i><br>
   **/
  HedgeKnightTkp = "HEDGE_KNIGHT_TKP",
  /**
   * <h5>Knighted</h5>Neutral.<br><b><i>Title.</i></b><br>Attached character gets
   * +1 STR and gains the <i>Knight</i> trait..<br><i>The King's Peace.</i><br>
   **/
  KnightedTkp = "KNIGHTED_TKP",
  /**
   * <h5>A Tourney for the King</h5>Neutral.<br><b><i>Summer.</i></b><br>Each<i>
   * Knight</i> character you control gains renown and "immune to opponents'
   * events.".<br><i>The King's Peace.</i><br>
   **/
  ATourneyForTheKingTkp = "A_TOURNEY_FOR_THE_KING_TKP",
  /**
   * <h5>The Lord of the Crossing</h5>Neutral.<br><b><i>House
   * Frey.</i></b><br>During the first challenge you initiate each phase, each of
   * your participating characters gets -1 STR.During the third challenge you
   * initiate each phase, each of your participating characters gets +2 STR. If you
   * win this challenge, gain 1 power for your faction..<br><i>The King's Peace.</i><br>
   **/
  TheLordOfTheCrossingTkp = "THE_LORD_OF_THE_CROSSING_TKP",
  /**
   * <h5>Hodor</h5>House Stark.<br><b><i>Companion.</i></b><br>No attachments.Hodor
   * cannot be declared as an attacker unless you control Bran Stark.Hodor does not
   * contribute his STR to your total for dominance..<br><i>No Middle
   * Ground.</i><br>
   **/
  HodorNmg = "HODOR_NMG",
  /**
   * <h5>Wardens of the North</h5>House
   * Stark.<br><b><i>War.</i></b><br><b>Challenges Action:</b> During a challenge
   * in which you control a participating [stark] character, kneel another [stark]
   * character to have it participate in that challenge on your side. (Limit twice
   * per round.).<br><i>No Middle Ground.</i><br>
   **/
  WardensOfTheNorthNmg = "WARDENS_OF_THE_NORTH_NMG",
  /**
   * <h5>Ser Horas Redwyne</h5>House Tyrell.<br><b><i>House Redwyne.
   * Knight.</i></b><br><b>Reaction:</b> After Ser Horas Redwyne is knelt, choose
   * and stand a <i>Lady</i> character..<br><i>No Middle Ground.</i><br>
   **/
  SerHorasRedwyneNmg = "SER_HORAS_REDWYNE_NMG",
  /** <h5>The Arbor</h5>House Tyrell.<br><b><i>House Redwyne.</i></b><br>Limited.+3 Income..<br><i>No Middle Ground.</i><br> */
  TheArborNmg = "THE_ARBOR_NMG",
  /**
   * <h5>Halder</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Action:</b> Kneel a [thenightswatch] location or
   * attachment to choose a [thenightswatch] character. Until the end of the phase,
   * that character gets +1 STR..<br><i>No Middle Ground.</i><br>
   **/
  HalderNmg = "HALDER_NMG",
  /**
   * <h5>The Watcher on the Walls</h5>The Night's
   * Watch.<br><b><i>Ranger.</i></b><br>Play only during a [military]
   * challenge.<b>Challenges Action:</b> Kneel 2 <i>Ranger</i> characters to kill
   * each attacking character..<br><i>No Middle Ground.</i><br>
   **/
  TheWatcherOnTheWallsNmg = "THE_WATCHER_ON_THE_WALLS_NMG",
  /**
   * <h5>For the Watch!</h5>The Night's Watch.<br><b><i>Siege.</i></b><br>You
   * cannot lose <em>(and your opponent cannot win)</em> the first challenge
   * initiated against you each phase..<br><i>No Middle Ground.</i><br>
   **/
  ForTheWatchNmg = "FOR_THE_WATCH_NMG",
  /**
   * <h5>Gendry</h5>House Baratheon.<br><b><i>Bastard.</i></b><br><b>Reaction:</b>
   * After you win dominance, Gendry gains 1 power.<b>Forced Reaction:</b> After an
   * opponent wins dominance, you may discard 1 power from Gendry. If you do not,
   * sacrifice a <i>Bastard</i> character..<br><i>No Middle Ground.</i><br>
   **/
  GendryNmg = "GENDRY_NMG",
  /**
   * <h5>Tobho Mott's Armory</h5>House Baratheon.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win dominance, kneel Tobho
   * Mott's Armory to draw 1 card..<br><i>No Middle Ground.</i><br>
   **/
  TobhoMottsArmoryNmg = "TOBHO_MOTTS_ARMORY_NMG",
  /**
   * <h5>Red Cloaks</h5>House Lannister.<br><b><i>Army.
   * Mercenary.</i></b><br>During [intrigue] challenges, Red Cloaks gets +1 STR for
   * each gold on it.<b>Action:</b> Move 1 gold from your gold pool to Red Cloaks.
   * (Limit once per phase.).<br><i>No Middle Ground.</i><br>
   **/
  RedCloaksNmg = "RED_CLOAKS_NMG",
  /**
   * <h5>Paid Off</h5>House Lannister.<br><b><i>Condition.</i></b><br>Opponent's
   * character only. Ambush (1). <b>Reaction:</b> After you win an [intrigue]
   * challenge, kneel attached character. Then, that character's controller may
   * give you 1 gold from his or her gold pool to stand that character..<br><i>No
   * Middle Ground.</i><br>
   **/
  PaidOffNmg = "PAID_OFF_NMG",
  /**
   * <h5>Priest of the Drowned God</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br>Each <i>Drowned God</i> character you control gets +1
   * STR..<br><i>No Middle Ground.</i><br>
   **/
  PriestOfTheDrownedGodNmg = "PRIEST_OF_THE_DROWNED_GOD_NMG",
  /**
   * <h5>Loot</h5>House Greyjoy.<br>You may only use gold from the losing
   * opponent's gold pool to pay for Loot.<b>Reaction:</b> After you win an
   * unopposed challenge, discard the top X cards from the losing opponent's
   * deck..<br><i>No Middle Ground.</i><br>
   **/
  LootNmg = "LOOT_NMG",
  /**
   * <h5>Dothraki Outriders</h5>House Targaryen.<br><b><i>Army.
   * Dothraki.</i></b><br>No attachments. Pillage.Reduce the cost to marshal
   * Dothraki Outriders by 1 for each <i>Dothraki</i> character you
   * control..<br><i>No Middle Ground.</i><br>
   **/
  DothrakiOutridersNmg = "DOTHRAKI_OUTRIDERS_NMG",
  /**
   * <h5>Blood of the Dragon</h5>House Targaryen.<br><b><i>Legacy.</i></b><br>Each
   * non-<i>Dragon</i> character gets -1 STR and is killed if its STR is
   * 0..<br><i>No Middle Ground.</i><br>
   **/
  BloodOfTheDragonNmg = "BLOOD_OF_THE_DRAGON_NMG",
  /**
   * <h5>Maester of Starfall</h5>House Martell.<br><b><i>House Dayne.
   * Maester.</i></b><br><b>Challenges Action:</b> Kneel Maester of Starfall to
   * choose a character. Until the end of the phase, that character loses (choose
   * one): insight, intimidate, pillage, or renown..<br><i>No Middle
   * Ground.</i><br>
   **/
  MaesterOfStarfallNmg = "MAESTER_OF_STARFALL_NMG",
  /**
   * <h5>Condemned</h5>House Martell.<br><b><i>Condition.</i></b><br>Opponent's
   * character only.Attached character loses a [power] icon..<br><i>No Middle
   * Ground.</i><br>
   **/
  CondemnedNmg = "CONDEMNED_NMG",
  /**
   * <h5>Wildling Scout</h5>Neutral.<br><b><i>Wildling.</i></b><br><b>Action:</b>
   * Sacrifice Wildling Scout to choose a character. Until the end of the phase,
   * that character gains stealth..<br><i>No Middle Ground.</i><br>
   **/
  WildlingScoutNmg = "WILDLING_SCOUT_NMG",
  /**
   * <h5>The First Snow of Winter</h5>Neutral.<br><b><i>Omen.
   * Winter.</i></b><br><b>Forced Reaction:</b> After the challenges phase begins,
   * return each character with printed cost 3 or lower to its owner's
   * hand..<br><i>No Middle Ground.</i><br>
   **/
  TheFirstSnowOfWinterNmg = "THE_FIRST_SNOW_OF_WINTER_NMG",
  /**
   * <h5>Wraiths in Their Midst</h5>Neutral.<br><b><i>Winter.</i></b><br>Reduce the
   * reserve value on each opponent's revealed plot card by 2 (to a minimum of
   * 2)..<br><i>No Middle Ground.</i><br>
   **/
  WraithsInTheirMidstNmg = "WRAITHS_IN_THEIR_MIDST_NMG",
  /**
   * <h5>Greatjon's Vanguard</h5>House Stark.<br><b><i>Army. House
   * Umber.</i></b><br>No attachments.While there are fewer than 3 plots in your
   * used pile, Greatjon's Vanguard gets +2 STR and gains renown..<br><i>Calm over
   * Westeros.</i><br>
   **/
  GreatjonsVanguardCoW = "GREATJONS_VANGUARD_CoW",
  /**
   * <h5>Winterfell Crypt</h5>House
   * Stark.<br><b><i>Winterfell.</i></b><br><b>Reaction:</b> After a unique [stark]
   * character you control is killed or sacrificed during the challenges phase,
   * sacrifice Winterfell Crypt to choose a character with equal or lower printed
   * STR. At the end of the phase, if that character is still in play, shuffle it
   * back into its owner's deck..<br><i>Calm over Westeros.</i><br>
   **/
  WinterfellCryptCoW = "WINTERFELL_CRYPT_CoW",
  /**
   * <h5>Roseroad Patrol</h5>House Tyrell.<br><b><i>Army.</i></b><br>No
   * attachments.While you control a character with the highest STR in play,
   * Roseroad Patrol gains stealth..<br><i>Calm over Westeros.</i><br>
   **/
  RoseroadPatrolCoW = "ROSEROAD_PATROL_CoW",
  /**
   * <h5>Pulling the Strings</h5>House Tyrell.<br><b><i>Scheme.</i></b><br><b>When
   * Revealed:</b> Choose an <i>Edict</i>, <i>Kingdom</i>, or <i>Scheme</i> plot
   * card in an opponent's used pile. Initiate the when revealed ability on that
   * card as if you had just revealed it..<br><i>Calm over Westeros.</i><br>
   **/
  PullingTheStringsCoW = "PULLING_THE_STRINGS_CoW",
  /**
   * <h5>Chett</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Dominance Action:</b> Kneel a <i>Steward</i> character
   * to return a <i>Direwolf</i> or <i>Raven</i> card from your discard pile to
   * your hand. (Limit once per phase.).<br><i>Calm over Westeros.</i><br>
   **/
  ChettCoW = "CHETT_CoW",
  /**
   * <h5>Northern Rookery</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After you marshal Northern Rookery, draw 1
   * card.+1 Reserve..<br><i>Calm over Westeros.</i><br>
   **/
  NorthernRookeryCoW = "NORTHERN_ROOKERY_CoW",
  /**
   * <h5>Kingswood</h5>House Baratheon.<br><b><i>Westeros.</i></b><br>During
   * [power] challenges in which you are the defending player, each attacking
   * character gets -1 STR.<b>Forced Reaction:</b> After you lose a [power]
   * challenge, sacrifice Kingswood..<br><i>Calm over Westeros.</i><br>
   **/
  KingswoodCoW = "KINGSWOOD_CoW",
  /**
   * <h5>Stinking Drunk</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br>Opponent's character
   * only.<b>Reaction:</b> After attached character stands, sacrifice Stinking
   * Drunk to kneel that character..<br><i>Calm over Westeros.</i><br>
   **/
  StinkingDrunkCoW = "STINKING_DRUNK_CoW",
  /**
   * <h5>Bronn</h5>House Lannister.<br><b><i>Mercenary.</i></b><br>During a
   * challenge in which you are the defending player, Bronn gains a [military], an
   * [intrigue], and a [power] icon.<b>Marshaling Action:</b> Pay 1 gold to take
   * control of Bronn. (Any player may initiate this ability.).<br><i>Calm over
   * Westeros.</i><br>
   **/
  BronnCoW = "BRONN_CoW",
  /**
   * <h5>Trial by Combat</h5>House Lannister.<br><b>Interrupt:</b> When claim is
   * applied for an [intrigue] challenge, apply [military] claim
   * instead..<br><i>Calm over Westeros.</i><br>
   **/
  TrialByCombatCoW = "TRIAL_BY_COMBAT_CoW",
  /**
   * <h5>Raider from Pyke</h5>House Greyjoy.<br><b><i>Raider.</i></b><br>Each<i>
   * Weapon</i> card in your hand gains ambush (X). X is that card's printed
   * cost..<br><i>Calm over Westeros.</i><br>
   **/
  RaiderFromPykeCoW = "RAIDER_FROM_PYKE_CoW",
  /**
   * <h5>Iron Mines</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br><b>Interrupt:</b> When a character would be killed,
   * sacrifice Iron Mines to save that character..<br><i>Calm over
   * Westeros.</i><br>
   **/
  IronMinesCoW = "IRON_MINES_CoW",
  /**
   * <h5>Mirri Maz Duur</h5>House Targaryen.<br><b><i>Lhazareen.
   * Maegi.</i></b><br><b>Interrupt:</b> When claim is applied for a challenge in
   * which Mirri Maz Duur is attacking alone, choose a character controlled by the
   * losing opponent. Instead of the normal claim effects, kill that
   * character..<br><i>Calm over Westeros.</i><br>
   **/
  MirriMazDuurCoW = "MIRRI_MAZ_DUUR_CoW",
  /**
   * <h5>Blood Magic Ritual</h5>House Targaryen.<br><b>Interrupt:</b> When a
   * non-<i>Army</i> character would be killed, save it. Then, attach Blood Magic
   * Ritual to that character as a <i>Condition</i> attachment with the text:
   * "Terminal. Treat attached character's printed text box as if it were blank
   * (except for <i>Traits</i>).".<br><i>Calm over Westeros.</i><br>
   **/
  BloodMagicRitualCoW = "BLOOD_MAGIC_RITUAL_CoW",
  /**
   * <h5>Knights of the Sun</h5>House Martell.<br><b><i>Army. Knight.</i></b><br>No
   * attachments except <i>Weapon</i>.While there are 3 or more plot cards in your
   * used pile, Knights of the Sun gains renown..<br><i>Calm over Westeros.</i><br>
   **/
  KnightsOfTheSunCoW = "KNIGHTS_OF_THE_SUN_CoW",
  /**
   * <h5>Vengeance for Elia</h5>House Martell.<br><b>Interrupt:</b> When claim is
   * applied for a challenge in which you are the defending player, choose an
   * opponent. That player must satisfy the normal claim effect instead of you as
   * if he or she were the defending player..<br><i>Calm over Westeros.</i><br>
   **/
  VengeanceForEliaCoW = "VENGEANCE_FOR_ELIA_CoW",
  /**
   * <h5>Street of Steel</h5>Neutral.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win a [military] challenge,
   * kneel your faction card to search the top 10 cards of your deck for a
   * <i>Weapon</i> or <i>Item</i> attachment, reveal it, and add it to your hand.
   * Shuffle your deck..<br><i>Calm over Westeros.</i><br>
   **/
  StreetOfSteelCoW = "STREET_OF_STEEL_CoW",
  /**
   * <h5>The Eyrie</h5>Neutral.<br><b><i>House Arryn.
   * Stronghold.</i></b><br><b>Reaction:</b> After a phase begins, kneel The Eyrie
   * to choose a character. Until the end of the phase, that character cannot be
   * killed..<br><i>Calm over Westeros.</i><br>
   **/
  TheEyrieCoW = "THE_EYRIE_CoW",
  /**
   * <h5>Nightmares</h5>Neutral.<br><b><i>Dream.</i></b><br><b>Action: </b>Choose a
   * character or location. Until the end of the phase, treat that card's printed
   * text box as if it were blank (except for <i>Traits</i>)..<br><i>Calm over
   * Westeros.</i><br>
   **/
  NightmaresCoW = "NIGHTMARES_CoW",
  /**
   * <h5>Famine</h5>Neutral.<br><b><i>Winter.</i></b><br>Increase the cost for each
   * opponent to marshal each of his or her characters by 1..<br><i>Calm over
   * Westeros.</i><br>
   **/
  FamineCoW = "FAMINE_CoW",
  /**
   * <h5>Septa Mordane</h5>House Stark.<br><b><i>The Seven.</i></b><br>While you
   * control:- Sansa Stark, she gets +2 STR and gains renown.- Arya Stark, she
   * gains an [intrigue] icon and "immune to opponents' plot effects.".<br><i>True Steel.</i><br>
   **/
  SeptaMordaneTs = "SEPTA_MORDANE_TS",
  /**
   * <h5>Ward</h5>House Stark.<br><b><i>Condition.</i></b><br>Character with
   * printed cost 4 or lower only. Terminal.Take control of attached
   * character.Attached character gains the [stark] affiliation..<br><i>True Steel.</i><br>
   **/
  WardTs = "WARD_TS",
  /**
   * <h5>Butterbumps</h5>House Tyrell.<br><b><i>Fool.</i></b><br>Insight.<b>Forced
   * Reaction:</b> After you lose a challenge in which Butterbumps is
   * participating, discard 1 card at random from your hand..<br><i>True Steel.</i><br>
   **/
  ButterbumpsTs = "BUTTERBUMPS_TS",
  /**
   * <h5>A Gift of Arbor Red</h5>House Tyrell.<br><b><i>House
   * Redwyne.</i></b><br><b>Action:</b> Kneel your faction card to have each player
   * reveal the top 4 cards of his or her deck. Choose 1 card revealed by each
   * player, and add it to that player's hand. Shuffle the other cards back into
   * their owners' decks..<br><i>True Steel.</i><br>
   **/
  AGiftOfArborRedTs = "A_GIFT_OF_ARBOR_RED_TS",
  /**
   * <h5>Sworn Brother</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.Reduce the cost of the first location you
   * marshal each round by 1..<br><i>True Steel.</i><br>
   **/
  SwornBrotherTs = "SWORN_BROTHER_TS",
  /**
   * <h5>Old Bear's Raven</h5>The Night's Watch.<br><b><i>Raven.
   * Companion.</i></b><br>Attached character gains stealth.If attached character
   * is Old Bear Mormont, he gains an [intrigue] icon..<br><i>True Steel.</i><br>
   **/
  OldBearsRavenTs = "OLD_BEARS_RAVEN_TS",
  /**
   * <h5>Ser Barristan Selmy (TS)</h5>House Baratheon.<br><b><i>Kingsguard. Knight.
   * Small Council.</i></b><br>Renown.<b>Interrupt:</b> When a <i>Lord</i> or
   * <i>Lady</i> character you control would be killed, stand Ser Barristan Selmy
   * to save that character..<br><i>True Steel.</i><br>
   **/
  SerBarristanSelmyTs = "SER_BARRISTAN_SELMY_TS",
  /**
   * <h5>City Watch</h5>House Baratheon.<br><b><i>Army.</i></b><br>Ambush (6). No
   * attachments except <i>Weapon</i>.While you have more power on your faction
   * card than an opponent, reduce the cost to ambush City Watch by 2..<br><i>True Steel.</i><br>
   **/
  CityWatchTs = "CITY_WATCH_TS",
  /**
   * <h5>Ser Ilyn Payne</h5>House
   * Lannister.<br><b><i>Knight.</i></b><br><b>Marshaling Action:</b> Kneel Ser
   * Ilyn Payne to choose and kill a character with printed cost 3 or
   * lower..<br><i>True Steel.</i><br>
   **/
  SerIlynPayneTs = "SER_ILYN_PAYNE_TS",
  /**
   * <h5>Small Council Chamber</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br>Immune to events.<b>Reaction:</b> After you win an
   * [intrigue] challenge, Small Council Chamber gains 1 power..<br><i>True Steel.</i><br>
   **/
  SmallCouncilChamberTs = "SMALL_COUNCIL_CHAMBER_TS",
  /**
   * <h5>Dagmer Cleftjaw</h5>House Greyjoy.<br><b><i>Captain.
   * Ironborn.</i></b><br>Renown.<b>Interrupt:</b> When claim is applied for a
   * challenge in which Dagmer Cleftjaw is attacking alone, choose a non-limited
   * location with printed cost 3 or lower controlled by the losing opponent.
   * Instead of the normal claim effects, take control of that
   * location..<br><i>True Steel.</i><br>
   **/
  DagmerCleftjawTs = "DAGMER_CLEFTJAW_TS",
  /**
   * <h5>Drowned God's Blessing</h5>House
   * Greyjoy.<br><b><i>Blessing.</i></b><br>[greyjoy] character only.Attached
   * character gains the <i>Drowned God</i> trait and cannot be chosen as the only
   * target of opponents' events.+1 Initiative..<br><i>True Steel.</i><br>
   **/
  DrownedGodsBlessingTs = "DROWNED_GODS_BLESSING_TS",
  /**
   * <h5>Jhogo</h5>House Targaryen.<br><b><i>Bloodrider. Dothraki.</i></b><br>While
   * you control another <i>Bloodrider</i> character, Jhogo gains stealth.While
   * Jhogo is attacking, he gets +X STR, where X is the number of characters in the
   * defending player's dead pile..<br><i>True Steel.</i><br>
   **/
  JhogoTs = "JHOGO_TS",
  /**
   * <h5>Funeral Pyre</h5>House Targaryen.<br><b>Reaction:</b> After a <i>Lord</i>
   * or <i>Lady</i> character is killed, kneel your faction card to draw 3
   * cards..<br><i>True Steel.</i><br>
   **/
  FuneralPyreTs = "FUNERAL_PYRE_TS",
  /**
   * <h5>Tyene Sand (TS)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Reaction:</b> After you win an [intrigue] challenge in
   * which Tyene Sand is participating as an attacker, place a poison token on a
   * character without an [intrigue] icon. At the end of the phase, if that
   * character still has the poison token, remove it and kill that
   * character..<br><i>True Steel.</i><br>
   **/
  TyeneSandTs = "TYENE_SAND_TS",
  /**
   * <h5>Imprisoned</h5>House Martell.<br><b><i>Condition.</i></b><br>Opponent's
   * character only.Attached character loses a [military] icon..<br><i>True Steel.</i><br>
   **/
  ImprisonedTs = "IMPRISONED_TS",
  /**
   * <h5>Maester's Chain</h5>Neutral.<br><b><i>Item.</i></b><br><i>Maester</i>
   * character only.<b>Dominance Action:</b> Kneel Maester's Chain to choose a
   * <i>Condition</i> attachment, and discard it from play..<br><i>True Steel.</i><br>
   **/
  MaestersChainTs = "MAESTERS_CHAIN_TS",
  /**
   * <h5>Street of Silk</h5>Neutral.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win a challenge in which you
   * control a participating <i>Lord</i> or <i>Lady</i> character, kneel your
   * faction card to search the top 5 cards of your deck for an <i>Ally</i> or
   * <i>Companion</i> card, reveal it, and add it to your hand. Shuffle your
   * deck..<br><i>True Steel.</i><br>
   **/
  StreetOfSilkTs = "STREET_OF_SILK_TS",
  /**
   * <h5>Forgotten Plans</h5>Neutral.<br><b><i>Scheme.</i></b><br>While it is not
   * the plot phase, treat the text box of each revealed non-<i>Scheme</i> plot
   * card as if it were blank (except for <i>Traits</i>)..<br><i>True Steel.</i><br>
   **/
  ForgottenPlansTs = "FORGOTTEN_PLANS_TS",
  /**
   * <h5>Close Call</h5>Neutral.<br><b><i>Summer.</i></b><br><b>When Revealed:</b>
   * Move a character from your dead pile to your discard pile. Then, if there are
   * no <i>Winter</i> plot cards in play, draw 1 card..<br><i>True Steel.</i><br>
   **/
  CloseCallTs = "CLOSE_CALL_TS",
  /**
   * <h5>King Robb's Host</h5>House Stark.<br><b><i>Army.</i></b><br>No
   * attachments.<b>Reaction:</b> After you win a [military] challenge in which
   * King Robb's Host is participating, move 1 power from the losing opponent's
   * faction card to an attacking character. (2 power instead if there is a
   * <i>War</i> plot card revealed.).<br><i>Wolves of the North.</i><br>
   **/
  KingRobbsHostWotN = "KING_ROBBS_HOST_WotN",
  /**
   * <h5>Catelyn Stark (WotN)</h5>House Stark.<br><b><i>House Tully. Lady. The
   * Seven.</i></b><br>Catelyn Stark gets +1 STR for each power she
   * has.<b>Reaction:</b> After a [stark] character you control is sacrificed or
   * killed, Catelyn Stark gains 1 power. (Limit twice per round.).<br><i>Wolves of
   * the North.</i><br>
   **/
  CatelynStarkWotN = "CATELYN_STARK_WotN",
  /**
   * <h5>Eddard Stark (WotN)</h5>House Stark.<br><b><i>Lord. Small
   * Council.</i></b><br>Renown.<b>Reaction: </b>After Eddard Stark gains power
   * using renown, choose another participating character you control. That
   * character gains 1 power..<br><i>Wolves of the North.</i><br>
   **/
  EddardStarkWotN = "EDDARD_STARK_WotN",
  /**
   * <h5>The Blackfish</h5>House Stark.<br><b><i>House Tully. Knight.
   * Lord.</i></b><br>Renown.While The Blackfish has 4 or more power, each <i>House
   * Tully </i>character you control does not kneel when declared as an
   * attacker.<b>Reaction:</b> After you win a [military] challenge as the
   * attacking player, draw 1 card. (Limit once per phase.).<br><i>Wolves of the North.</i><br>
   **/
  TheBlackfishWotN = "THE_BLACKFISH_WotN",
  /**
   * <h5>Jon Snow (WotN)</h5>House
   * Stark.<br><b><i>Bastard.</i></b><br><b>Action:</b> Sacrifice a [stark]
   * character to choose and stand a unique [stark] character. (Limit once per
   * round.).<br><i>Wolves of the North.</i><br>
   **/
  JonSnowWotN = "JON_SNOW_WotN",
  /**
   * <h5>Wolves of the North</h5>House Stark.<br><b><i>Direwolf.</i></b><br>No
   * attachments. Stealth.<b>Reaction:</b> After Wolves of the North bypasses a
   * character using stealth, that character gets -X STR until the end of the
   * phase. X is the number of <i>Direwolf</i> cards you control..<br><i>Wolves of
   * the North.</i><br>
   **/
  WolvesOfTheNorthWotN = "WOLVES_OF_THE_NORTH_WotN",
  /**
   * <h5>Arya Stark (WotN)</h5>House
   * Stark.<br><b><i>Lady.</i></b><br><b>Reaction:</b> After a [stark] character
   * you control is killed, sacrifice Arya Stark to choose and kill a character
   * with STR 3 or lower..<br><i>Wolves of the North.</i><br>
   **/
  AryaStarkWotN = "ARYA_STARK_WotN",
  /**
   * <h5>Jory Cassel</h5>House Stark.<br><b><i>Guard.</i></b><br><b>Interrupt:</b>
   * When a unique [stark] character you control would be killed, sacrifice Jory
   * Cassel to save it. Then, if there is a <i>Winter</i> plot card revealed, that
   * character gains 1 power..<br><i>Wolves of the North.</i><br>
   **/
  JoryCasselWotN = "JORY_CASSEL_WotN",
  /**
   * <h5>Riverrun Minstrel</h5>House Stark.<br><b><i>House Tully.
   * Minstrel.</i></b><br><b>Reaction:</b> After Riverrun Minstrel enters play,
   * choose a <i>House Tully</i> character. That character gains 1
   * power..<br><i>Wolves of the North.</i><br>
   **/
  RiverrunMinstrelWotN = "RIVERRUN_MINSTREL_WotN",
  /**
   * <h5>Old Nan</h5>House
   * Stark.<br><b><i>Storyteller.</i></b><br><b>Interrupt:</b> When a plot card is
   * revealed, kneel Old Nan to have that plot card gain the <i>Summer </i>or
   * <i>Winter</i> trait until the end of the round..<br><i>Wolves of the North.</i><br>
   **/
  OldNanWotN = "OLD_NAN_WotN",
  /**
   * <h5>Osha</h5>House Stark.<br><b><i>Wildling.</i></b><br><b>Challenges
   * Action:</b> Remove Osha from the challenge. Then, stand her. (Limit once per
   * phase.).<br><i>Wolves of the North.</i><br>
   **/
  OshaWotN = "OSHA_WotN",
  /**
   * <h5>Bear Island Loyalist</h5>House Stark.<br><b><i>House
   * Mormont.</i></b><br>While Bear Island Loyalist is participating in a
   * challenge, each other participating [stark] character you control gains
   * "immune to opponents' events.".<br><i>Wolves of the North.</i><br>
   **/
  BearIslandLoyalistWotN = "BEAR_ISLAND_LOYALIST_WotN",
  /**
   * <h5>Sansa Stark (WotN)</h5>House Stark.<br><b><i>Lady.</i></b><br>Sansa Stark
   * gets -1 STR for each [stark] character in your dead pile.While Sansa Stark's
   * STR is 0, she gains insight..<br><i>Wolves of the North.</i><br>
   **/
  SansaStarkWotN = "SANSA_STARK_WotN",
  /**
   * <h5>Shaggydog (WotN)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>No
   * attachments.While you control Rickon Stark, he gets +2 STR and gains a
   * [military] icon..<br><i>Wolves of the North.</i><br>
   **/
  ShaggydogWotN = "SHAGGYDOG_WotN",
  /**
   * <h5>House Tully Septon</h5>House Stark.<br><b><i>Ally. House Tully. The
   * Seven.</i></b><br><b>Marshaling Action:</b> Discard 1 power from a character
   * you control to reduce the cost of the next <i>House Tully</i> or <i>The
   * Seven</i> character you marshal this phase by 2. (Limit once per
   * phase.).<br><i>Wolves of the North.</i><br>
   **/
  HouseTullySeptonWotN = "HOUSE_TULLY_SEPTON_WotN",
  /**
   * <h5>Rickon Stark</h5>House Stark.<br><b><i>Lord.</i></b><br><b>Interrupt:</b>
   * When the effects of a triggered ability with the word "search" in it would
   * initiate, sacrifice Rickon Stark to cancel those effects..<br><i>Wolves of the North.</i><br>
   **/
  RickonStarkWotN = "RICKON_STARK_WotN",
  /**
   * <h5>Winterfell</h5>House Stark.<br><b><i>The North.
   * Winterfell.</i></b><br>Each [stark] character you control gets +1
   * STR.<b>Reaction:</b> After a challenge is initiated, kneel Winterfell. Then,
   * each player with a non-<i>Winter</i> plot card revealed cannot trigger card
   * abilities until the end of the challenge..<br><i>Wolves of the North.</i><br>
   **/
  WinterfellWotN = "WINTERFELL_WotN",
  /**
   * <h5>Winterfell Heart Tree</h5>House Stark.<br><b><i>Old Gods.
   * Winterfell.</i></b><br><b>Reaction:</b> After a phase begins, sacrifice
   * Winterfell Heart Tree to choose a [stark] card you control. Until the end of
   * the phase, that card gains "immune to opponents' plot effects.".<br><i>Wolves
   * of the North.</i><br>
   **/
  WinterfellHeartTreeWotN = "WINTERFELL_HEART_TREE_WotN",
  /**
   * <h5>Nymeria (WotN)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>Unique
   * [stark] character only.Attached character gains intimidate.<b>Action:</b> Pay
   * 1 gold to attach Nymeria to a different character. (Limit once per
   * phase.).<br><i>Wolves of the North.</i><br>
   **/
  NymeriaWotN = "NYMERIA_WotN",
  /**
   * <h5>Needle</h5>House Stark.<br><b><i>Weapon.</i></b><br>[stark] character
   * only.Attached character gets +2 STR.<b>Interrupt:</b> When attached character
   * is sacrificed, sacrifice Needle to return that character to your hand instead
   * of placing it in your discard pile..<br><i>Wolves of the North.</i><br>
   **/
  NeedleWotN = "NEEDLE_WotN",
  /**
   * <h5>Frozen Solid</h5>House Stark.<br><b><i>Condition.</i></b><br>Non-limited
   * location with printed cost 3 or lower only. Terminal.Treat attached location's
   * printed text box as if it were blank (except for <i>Traits</i>)..<br><i>Wolves
   * of the North.</i><br>
   **/
  FrozenSolidWotN = "FROZEN_SOLID_WotN",
  /**
   * <h5>As Hard as Winter</h5>House Stark.<br>Play only if there is a
   * <i>Winter</i> plot card in your used pile.<b>Reaction:</b> After a [stark]
   * character you control is sacrificed or killed, put a [stark] character with
   * equal or lower printed cost into play from your hand..<br><i>Wolves of the North.</i><br>
   **/
  AsHardAsWinterWotN = "AS_HARD_AS_WINTER_WotN",
  /**
   * <h5>The Pack Survives</h5>House Stark.<br><b>Interrupt:</b> When the effects
   * of an opponent's event would initiate, sacrifice a <i>Direwolf</i> card or
   * kneel 2 [stark] characters to cancel those effects..<br><i>Wolves of the North.</i><br>
   **/
  ThePackSurvivesWotN = "THE_PACK_SURVIVES_WotN",
  /**
   * <h5>Arya's Gift</h5>House Stark.<br><b>Action:</b> Move an attachment from a
   * [stark] character you control to another eligible character you
   * control..<br><i>Wolves of the North.</i><br>
   **/
  AryasGiftWotN = "ARYAS_GIFT_WotN",
  /**
   * <h5>Motley</h5>House Baratheon.<br><b><i>Condition.</i></b><br>Opponent's
   * character only.Attached character gains the <i>Fool</i> trait.<b>Reaction:</b>
   * After attached character is declared as an attacker or defender, discard 1
   * card at random from its controller's hand..<br><i>Wolves of the North.</i><br>
   **/
  MotleyWotN = "MOTLEY_WotN",
  /**
   * <h5>Even Handed Justice</h5>House Baratheon.<br><b>Action:</b> Choose a
   * standing character controlled by each player. Kneel each of those
   * characters..<br><i>Wolves of the North.</i><br>
   **/
  EvenHandedJusticeWotN = "EVEN_HANDED_JUSTICE_WotN",
  /**
   * <h5>Fishwhiskers</h5>House Greyjoy.<br><b><i>House Botley.
   * Ironborn.</i></b><br>While Fishwhiskers is attacking, if there are more
   * <i>Winter</i> plot cards than <i>Summer</i> plot cards revealed, each
   * defending character does not contribute its STR to that
   * challenge..<br><i>Wolves of the North.</i><br>
   **/
  FishwhiskersWotN = "FISHWHISKERS_WotN",
  /**
   * <h5>Ahead of the Tide</h5>House Greyjoy.<br><b>Interrupt:</b> When you compare
   * initiative, your revealed plot card gets +3 initiative until the end of the
   * phase. If you win initiative this phase, draw 1 card..<br><i>Wolves of the North.</i><br>
   **/
  AheadOfTheTideWotN = "AHEAD_OF_THE_TIDE_WotN",
  /**
   * <h5>Crossroads Sellsword</h5>House
   * Lannister.<br><b><i>Mercenary.</i></b><br><b>Interrupt:</b> When Crossroads
   * Sellsword is killed during the challenges phase, gain 2 gold..<br><i>Wolves of
   * the North.</i><br>
   **/
  CrossroadsSellswordWotN = "CROSSROADS_SELLSWORD_WotN",
  /**
   * <h5>Tower of the Hand (WotN)</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After you win an [intrigue] challenge,
   * kneel Tower of the Hand and return a participating [lannister] character to
   * your hand to choose a character with lower printed cost controlled by the
   * losing opponent. Return that character to its owner's hand..<br><i>Wolves of
   * the North.</i><br>
   **/
  TowerOfTheHandWotN = "TOWER_OF_THE_HAND_WotN",
  /**
   * <h5>Quentyn Martell (WotN)</h5>House Martell.<br><b><i>Knight.
   * Lord.</i></b><br>While you are not the first player, Quentyn Martell gets +1
   * STR and gains stealth.<b>Interrupt:</b> When Quentyn Martell is killed, choose
   * and kill a character with a lower STR than his..<br><i>Wolves of the North.</i><br>
   **/
  QuentynMartellWotN = "QUENTYN_MARTELL_WotN",
  /**
   * <h5>His Viper Eyes</h5>House Martell.<br><b>Reaction:</b> After you lose a
   * [military] or [power] challenge as the defending player, look at the winning
   * opponent's hand. Then, choose and discard 1 card from that hand..<br><i>Wolves
   * of the North.</i><br>
   **/
  HisViperEyesWotN = "HIS_VIPER_EYES_WotN",
  /**
   * <h5>Stonesnake</h5>The Night's
   * Watch.<br><b><i>Ranger.</i></b><br>Stealth.<b>Reaction:</b> After Stonesnake
   * bypasses a character using stealth, choose one of that character's keywords.
   * Stonesnake gains that keyword until the end of the phase..<br><i>Wolves of the North.</i><br>
   **/
  StonesnakeWotN = "STONESNAKE_WotN",
  /**
   * <h5>The Shadow Tower</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After you win a challenge as the defending
   * player, kneel The Shadow Tower to choose a character controlled by the losing
   * opponent. That character cannot be declared as an attacker this
   * phase..<br><i>Wolves of the North.</i><br>
   **/
  TheShadowTowerWotN = "THE_SHADOW_TOWER_WotN",
  /**
   * <h5>Aggo</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br><b>Action:</b> If there is a <i>Summer</i> plot card
   * revealed, choose and stand a <i>Bloodrider</i> character. (Limit once per
   * round.).<br><i>Wolves of the North.</i><br>
   **/
  AggoWotN = "AGGO_WotN",
  /**
   * <h5>Dragon Sight</h5>House Targaryen.<br><b>Action:</b> Each participating
   * non-<i>Dragon</i> character gets -1 STR until the end of the
   * challenge..<br><i>Wolves of the North.</i><br>
   **/
  DragonSightWotN = "DRAGON_SIGHT_WotN",
  /**
   * <h5>House Florent Knight</h5>House Tyrell.<br><b><i>House Florent.
   * Knight.</i></b><br><b>Forced Reaction:</b> After House Florent Knight enters
   * play, choose a character with the lowest STR in play, and discard it from
   * play..<br><i>Wolves of the North.</i><br>
   **/
  HouseFlorentKnightWotN = "HOUSE_FLORENT_KNIGHT_WotN",
  /**
   * <h5>To the Rose Banner!</h5>House Tyrell.<br><b>Marshaling Action:</b> Choose
   * a [tyrell] character you control. Gain X gold, where X is that character's
   * STR. Then, sacrifice that character..<br><i>Wolves of the North.</i><br>
   **/
  ToTheRoseBannerWotN = "TO_THE_ROSE_BANNER_WotN",
  /**
   * <h5>Mance Rayder</h5>Neutral.<br><b><i>King. Wildling.</i></b><br>Renown.Each
   * <i>Wildling</i> character in your hand gains ambush (X). X is that card's
   * printed cost.While there is a <i>Winter</i> plot card revealed, reduce the
   * cost to ambush each of your <i>Wildling</i> characters by 1..<br><i>Wolves of
   * the North.</i><br>
   **/
  ManceRayderWotN = "MANCE_RAYDER_WotN",
  /**
   * <h5>Young Spearwife</h5>Neutral.<br><b><i>Wildling.</i></b><br>While you have
   * less power on your faction card than an opponent, Young Spearwife gains
   * stealth..<br><i>Wolves of the North.</i><br>
   **/
  YoungSpearwifeWotN = "YOUNG_SPEARWIFE_WotN",
  /** <h5>House Maester</h5>Neutral.<br><b><i>Maester.</i></b><br>.<br><i>Wolves of the North.</i><br> */
  HouseMaesterWotN = "HOUSE_MAESTER_WotN",
  /**
   * <h5>Tourney Grounds</h5>Neutral.<br><b><i>Contested.
   * Westeros.</i></b><br><b>Action:</b> Kneel Tourney Grounds to reduce the cost
   * of the next event you play this phase by 1..<br><i>Wolves of the North.</i><br>
   **/
  TourneyGroundsWotN = "TOURNEY_GROUNDS_WotN",
  /**
   * <h5>Green Dreams</h5>Neutral.<br><b><i>Dream.</i></b><br>Terminal.<b>Reaction:</b> After
   * attached character is knelt, look at the top card of your deck. You may put
   * that card on the bottom of your deck..<br><i>Wolves of the North.</i><br>
   **/
  GreenDreamsWotN = "GREEN_DREAMS_WotN",
  /**
   * <h5>Healing Expertise</h5>Neutral.<br><b><i>Citadel.</i></b><br><b>Interrupt:</b> When a
   * non-<i>Army </i>character you control would be killed, kneel a <i>Maester</i>
   * character to save it..<br><i>Wolves of the North.</i><br>
   **/
  HealingExpertiseWotN = "HEALING_EXPERTISE_WotN",
  /** <h5>Tithe</h5>Neutral.<br><b>Action:</b> Kneel a neutral character to gain 2 gold..<br><i>Wolves of the North.</i><br> */
  TitheWotN = "TITHE_WotN",
  /**
   * <h5>A Time For Wolves</h5>House Stark.<br><b><i>Winter.</i></b><br><b>When
   * Revealed:</b> Search your deck for a <i>Direwolf</i> card, reveal it, and add
   * it to your hand. If that card's printed cost is 3 or lower, you may put it
   * into play instead. Shuffle your deck..<br><i>Wolves of the North.</i><br>
   **/
  ATimeForWolvesWotN = "A_TIME_FOR_WOLVES_WotN",
  /**
   * <h5>Fallen from Favor</h5>Neutral.<br><b><i>Edict.</i></b><br><b>When
   * Revealed:</b> Sacrifice a character you control..<br><i>Wolves of the North.</i><br>
   **/
  FallenFromFavorWotN = "FALLEN_FROM_FAVOR_WotN",
  /**
   * <h5>Snowed Under</h5>Neutral.<br><b><i>Winter.</i></b><br>Treat the base
   * initiative value on each revealed plot card as if it were 0..<br><i>Wolves of
   * the North.</i><br>
   **/
  SnowedUnderWotN = "SNOWED_UNDER_WotN",
  /**
   * <h5>The Long Winter</h5>Neutral.<br><b><i>Winter.</i></b><br><b>When
   * Revealed:</b> Each player without a <i>Summer</i> plot revealed discards 1
   * power from a card he or she controls..<br><i>Wolves of the North.</i><br>
   **/
  TheLongWinterWotN = "THE_LONG_WINTER_WotN",
  /**
   * <h5>A Song of Summer</h5>Neutral.<br><b><i>Summer.</i></b><br>While there are
   * no <i>Winter</i> plot cards revealed, each character you control gets +1
   * STR..<br><i>Wolves of the North.</i><br>
   **/
  ASongOfSummerWotN = "A_SONG_OF_SUMMER_WotN",
  /**
   * <h5>Weapons at the Door</h5>Neutral.<br><b><i>Edict.</i></b><br><b>Forced
   * Reaction:</b> After the challenges phase begins, return each card with the
   * printed attachment cardtype to its owner's hand..<br><i>Wolves of the North.</i><br>
   **/
  WeaponsAtTheDoorWotN = "WEAPONS_AT_THE_DOOR_WotN",
  /**
   * <h5>Ranger's Cache</h5>Neutral.<br><b><i>Kingdom.
   * Winter.</i></b><br><b>Interrupt:</b> When the taxation phase ends, either:
   * draw 2 cards or gain 3 gold..<br><i>Wolves of the North.</i><br>
   **/
  RangersCacheWotN = "RANGERS_CACHE_WotN",
  /**
   * <h5>The Dragon's Tail</h5>Neutral.<br><b><i>Omen.</i></b><br><b>Action:</b>
   * Choose an opponent. You and that player each draw 2 cards..<br><i>Across the
   * Seven Kingdoms.</i><br>
   **/
  TheDragonsTailAtSk = "THE_DRAGONS_TAIL_AtSK",
  /**
   * <h5>Robb Stark (AtSK)</h5>House Stark.<br><b><i>King.
   * Lord.</i></b><br>Renown.During [military] challenges, Robb Stark gets +1 STR
   * for each loyal character you control.<b>Action:</b> While Robb Stark is
   * participating in a [military] challenge, choose a participating
   * non-<i>King</i> character. Stand and remove that character from the challenge.
   * (Limit once per challenge.).<br><i>Across the Seven Kingdoms.</i><br>
   **/
  RobbStarkAtSk = "ROBB_STARK_AtSK",
  /**
   * <h5>Riverrun</h5>House Stark.<br><b><i>House Tully. The
   * Riverlands.</i></b><br><b>Reaction:</b> After power is gained by or moved to a
   * <i>House Tully</i> character, kneel Riverrun to have that character gain 1
   * power..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  RiverrunAtSk = "RIVERRUN_AtSK",
  /**
   * <h5>Ser Colen of Greenpools</h5>House
   * Tyrell.<br><b><i>Knight.</i></b><br>During [power] challenges, Ser Colen of
   * Greenpools gets +3 STR..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  SerColenOfGreenpoolsAtSk = "SER_COLEN_OF_GREENPOOLS_AtSK",
  /**
   * <h5>Bitterbridge Encampment</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br><b>Reaction:</b> After a <i>Summer</i> plot card is
   * revealed, kneel Bitterbridge Encampment. Then, each player may put a character
   * into play from his or her hand..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  BitterbridgeEncampmentAtSk = "BITTERBRIDGE_ENCAMPMENT_AtSK",
  /**
   * <h5>Arry</h5>The Night's Watch.<br><b><i>Recruit.</i></b><br>Ambush (4).If you
   * control Arya Stark, sacrifice Arry.<b>Action:</b> Return Arry to your hand to
   * draw 1 card..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  ArryAtSk = "ARRY_AtSK",
  /**
   * <h5>White Tree</h5>The Night's Watch.<br><b><i>Contested. The
   * North.</i></b><br><b>Reaction:</b> After an opponent collects income, kneel
   * White Tree to move 1 gold from that player's gold pool to your
   * own..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  WhiteTreeAtSk = "WHITE_TREE_AtSK",
  /**
   * <h5>White Raven</h5>House Baratheon.<br><b><i>Raven.</i></b><br><b>Forced
   * Reaction:</b> After you lose a [power] challenge, sacrifice White
   * Raven.<b>Reaction:</b> After you win dominance, if there is a <i>Summer</i> or
   * <i>Winter</i> plot card revealed, gain 1 power for your faction..<br><i>Across
   * the Seven Kingdoms.</i><br>
   **/
  WhiteRavenAtSk = "WHITE_RAVEN_AtSK",
  /**
   * <h5>Ruby of R'hllor</h5>House Baratheon.<br><b><i>Item.
   * R'hllor.</i></b><br><i>R'hllor</i> character only.<b>Reaction:</b> After you
   * win an [intrigue] challenge in which attached character is attacking, name a
   * card. The losing opponent reveals his or her hand and discards each card with
   * that name..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  RubyOfRhllorAtSk = "RUBY_OF_RHLLOR_AtSK",
  /**
   * <h5>Janos Slynt (AtSK)</h5>House
   * Lannister.<br><b><i>Mercenary.</i></b><br>Intimidate.<b>Action:</b> Pay 1 gold
   * to give Janos Slynt +2 STR until the end of the phase..<br><i>Across the Seven
   * Kingdoms.</i><br>
   **/
  JanosSlyntAtSk = "JANOS_SLYNT_AtSK",
  /**
   * <h5>Levies at the Rock</h5>House Lannister.<br><b>Reaction:</b> After a player
   * initiates a challenge against you, move up to X gold from that player's gold
   * pool to your own. X is the number of attacking characters..<br><i>Across the
   * Seven Kingdoms.</i><br>
   **/
  LeviesAtTheRockAtSk = "LEVIES_AT_THE_ROCK_AtSK",
  /**
   * <h5>Captain's Daughter</h5>House
   * Greyjoy.<br><b><i>Ally.</i></b><br><b>Reaction:</b> After a non-loyal
   * character enters play, kneel your faction card and sacrifice Captain's
   * Daughter to put that character onto the top of it's owner's
   * deck..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  CaptainsDaughterAtSk = "CAPTAINS_DAUGHTER_AtSK",
  /**
   * <h5>Pyke</h5>House Greyjoy.<br><b><i>Iron Islands.</i></b><br><b>Action:</b>
   * Kneel Pyke to choose a character. Until the end of the phase, that character
   * gains stealth..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  PykeAtSk = "PYKE_AtSK",
  /**
   * <h5>Viserys Targaryen (AtSK)</h5>House Targaryen.<br><b><i>King.
   * Lord.</i></b><br>While Viserys Targaryen is attacking, each <i>King</i>
   * character must be declared as a defender, if able.<b>Interrupt:</b> When the
   * dominance phase ends, if no opponent controls a <i>King</i> character, Viserys
   * Targaryen gains 1 power..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  ViserysTargaryenAtSk = "VISERYS_TARGARYEN_AtSK",
  /**
   * <h5>Shierak Qiya</h5>House
   * Targaryen.<br><b><i>Omen.</i></b><br><b>Reaction:</b> After you win a [power]
   * challenge by 5 or more STR, kneel your faction card to choose and stand a
   * participating character..<br><i>Across the Seven Kingdoms.</i><br>
   **/
  ShierakQiyaAtSk = "SHIERAK_QIYA_AtSK",
  /**
   * <h5>Harmen Uller</h5>House Martell.<br><b><i>House Uller.
   * Lord.</i></b><br>Renown.Each <i>Sand Snake</i> character in your hand gains
   * ambush (X). X is 1 less than that card's printed cost..<br><i>Across the Seven
   * Kingdoms.</i><br>
   **/
  HarmenUllerAtSk = "HARMEN_ULLER_AtSK",
  /**
   * <h5>Tower of the Sun</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b> After an event is played,
   * gain 1 gold. (Limit once per phase.).<br><i>Across the Seven Kingdoms.</i><br>
   **/
  TowerOfTheSunAtSk = "TOWER_OF_THE_SUN_AtSK",
  /**
   * <h5>Pyromancers</h5>Neutral.<br><b><i>Ally.</i></b><br><b>Dominance
   * Action:</b> Kneel Pyromancers and discard 1 power from your faction card to
   * choose a non-limited location, and discard it from play..<br><i>Across the
   * Seven Kingdoms.</i><br>
   **/
  PyromancersAtSk = "PYROMANCERS_AtSK",
  /**
   * <h5>Rains of Autumn</h5>Neutral.<br><b><i>Omen.</i></b><br>Characters and
   * locations do not provide positive gold modifiers..<br><i>Across the Seven
   * Kingdoms.</i><br>
   **/
  RainsOfAutumnAtSk = "RAINS_OF_AUTUMN_AtSK",
  /**
   * <h5>Varys's Riddle</h5>Neutral.<br><b><i>Riddle. Scheme.</i></b><br><b>When
   * Revealed:</b> Initiate the when revealed ability on a revealed
   * non-<i>Riddle</i> plot card as if you had just revealed it..<br><i>Across the
   * Seven Kingdoms.</i><br>
   **/
  VaryssRiddleAtSk = "VARYSS_RIDDLE_AtSK",
  /**
   * <h5>Donella Hornwood</h5>House Stark.<br><b><i>House Hornwood.
   * Lady.</i></b><br>Reduce the cost of the first loyal card you marshal or play
   * each round by 1..<br><i>Called to Arms.</i><br>
   **/
  DonellaHornwoodCtA = "DONELLA_HORNWOOD_CtA",
  /**
   * <h5>Fear Cuts Deeper Than Swords</h5>House Stark.<br><b>Interrupt:</b> When
   * the effects of an ability that chooses a [stark] character you control as its
   * only target would initiate, cancel those effects and stand that
   * character..<br><i>Called to Arms.</i><br>
   **/
  FearCutsDeeperThanSwordsCtA = "FEAR_CUTS_DEEPER_THAN_SWORDS_CtA",
  /**
   * <h5>Knight of Summer</h5>House Tyrell.<br><b><i>Knight.</i></b><br>While there
   * are more <i>Summer</i> plot cards than <i>Winter</i> plot cards revealed,
   * Knight of Summer gets +2 STR and gains renown..<br><i>Called to Arms.</i><br>
   **/
  KnightOfSummerCtA = "KNIGHT_OF_SUMMER_CtA",
  /**
   * <h5>There Is My Claim</h5>House Tyrell.<br>Play only during a
   * challenge.<b>Challenges Action:</b> Reveal 4 [tyrell] characters from your
   * hand to raise the claim value on your revealed plot card by 1 until the end of
   * the challenge. (Max 1 per challenge.).<br><i>Called to Arms.</i><br>
   **/
  ThereIsMyClaimCtA = "THERE_IS_MY_CLAIM_CtA",
  /**
   * <h5>Dolorous Edd</h5>The Night's
   * Watch.<br><b><i>Steward.</i></b><br><b>Action:</b> During an [intrigue]
   * challenge in which you are the defending player, kneel your faction card to
   * put Dolorous Edd into play from your hand knelt, participating as a defender.
   * If you win the challenge, you may return him to your hand..<br><i>Called to Arms.</i><br>
   **/
  DolorousEddCtA = "DOLOROUS_EDD_CtA",
  /**
   * <h5>Craven</h5>The Night's
   * Watch.<br><b><i>Condition.</i></b><br>Terminal.Attached character cannot be
   * declared as an attacker..<br><i>Called to Arms.</i><br>
   **/
  CravenCtA = "CRAVEN_CtA",
  /** <h5>Maester Pylos</h5>House Baratheon.<br><b><i>Maester.</i></b><br>Stealth..<br><i>Called to Arms.</i><br> */
  MaesterPylosCtA = "MAESTER_PYLOS_CtA",
  /**
   * <h5>The Stone Drum</h5>House Baratheon.<br><b><i>Dragonstone.</i></b><br>While
   * there is a <i>Kingdom</i> plot card revealed, increase the gold value on your
   * revealed plot card by 1..<br><i>Called to Arms.</i><br>
   **/
  TheStoneDrumCtA = "THE_STONE_DRUM_CtA",
  /**
   * <h5>Shae</h5>House Lannister.<br><b><i>Ally.
   * Companion.</i></b><br><b>Challenges Action:</b> Pay 1 gold to stand Shae.
   * (Limit twice per phase.).<br><i>Called to Arms.</i><br>
   **/
  ShaeCtA = "SHAE_CtA",
  /**
   * <h5>The Boy King</h5>House Lannister.<br><b><i>Title.</i></b><br><i>Lord</i>
   * character only.Attached character gains the <i>King</i> trait.<b>Reaction:</b>
   * After a character with printed cost 3 or lower is killed, kneel The Boy King
   * to have attached character gain 1 power..<br><i>Called to Arms.</i><br>
   **/
  TheBoyKingCtA = "THE_BOY_KING_CtA",
  /**
   * <h5>Balon Greyjoy (CtA)</h5>House Greyjoy.<br><b><i>Ironborn. King.
   * Lord.</i></b><br>Renown.Balon Greyjoy does not kneel when declared as an
   * attacker in a [military] challenge against an opponent who does not control a
   * <i>King</i> character.<b>Action:</b> Kneel a [greyjoy] location to give each
   * loyal character you control +1 STR until the end of the challenge. (Limit once
   * per challenge.).<br><i>Called to Arms.</i><br>
   **/
  BalonGreyjoyCtA = "BALON_GREYJOY_CtA",
  /**
   * <h5>Ours is the Old Way</h5>House Greyjoy.<br><b>Challenges Action:</b> Until
   * the end of the phase, either: each [greyjoy] character you control gains
   * stealth, or each non-[greyjoy] character loses stealth..<br><i>Called to Arms.</i><br>
   **/
  OursIsTheOldWayCtA = "OURS_IS_THE_OLD_WAY_CtA",
  /**
   * <h5>Doreah</h5>House Targaryen.<br><b><i>Companion.</i></b><br>During a
   * challenge in which you control a participating <i>Lord</i> or <i>Lady</i>
   * character, Doreah gains insight..<br><i>Called to Arms.</i><br>
   **/
  DoreahCtA = "DOREAH_CtA",
  /**
   * <h5>Beggar King</h5>House Targaryen.<br><b><i>Title.</i></b><br>[targaryen]
   * character only.Attached character gains the <i>King</i> trait.<b>Reaction:</b>
   * After an opponent reveals a plot card with a higher printed gold value than
   * yours, kneel Beggar King to gain 1 gold. (2 gold instead if no opponent
   * controls a <i>King</i> character.).<br><i>Called to Arms.</i><br>
   **/
  BeggarKingCtA = "BEGGAR_KING_CtA",
  /**
   * <h5>Starfall Cavalry</h5>House Martell.<br><b><i>Army. House
   * Dayne.</i></b><br>No attachments except <i>Weapon</i>.<b>Reaction:</b> After
   * Starfall Cavalry enters play, draw 1 card. (3 cards instead if there are 3 or
   * more plot cards in your used pile.).<br><i>Called to Arms.</i><br>
   **/
  StarfallCavalryCtA = "STARFALL_CAVALRY_CtA",
  /**
   * <h5>Venomous Blade</h5>House Martell.<br><b><i>Weapon.</i></b><br>[martell]
   * character you control only. Ambush (3).Attached character gets +1
   * STR.<b>Reaction:</b> After Venomous Blade enters play, place a poison token on
   * a character with printed STR 2 or lower. At the end of the phase, if that
   * character still has that poison token, remove it and kill that
   * character..<br><i>Called to Arms.</i><br>
   **/
  VenomousBladeCtA = "VENOMOUS_BLADE_CtA",
  /**
   * <h5>Kings of Summer</h5>Neutral.<br><b><i>Summer.</i></b><br>You cannot
   * include <i>Winter</i> plot cards in your plot deck.Increase the reserve value
   * on each player's revealed plot card by 1. While there are no <i>Winter</i>
   * plot cards revealed, increase the gold value on your revealed <i>Summer</i>
   * plot card by 1..<br><i>Called to Arms.</i><br>
   **/
  KingsOfSummerCtA = "KINGS_OF_SUMMER_CtA",
  /**
   * <h5>Kings of Winter</h5>Neutral.<br><b><i>Winter.</i></b><br>You cannot
   * include <i>Summer</i> plot cards in your plot deck.Reduce the reserve value on
   * each player's revealed plot card by 1. While you have a <i>Winter</i> plot
   * card revealed, reduce the gold value on each opponent's non-<i>Summer</i> plot
   * card by 1..<br><i>Called to Arms.</i><br>
   **/
  KingsOfWinterCtA = "KINGS_OF_WINTER_CtA",
  /**
   * <h5>Summer Harvest</h5>Neutral.<br><b><i>Summer.</i></b><br><b>When
   * Revealed:</b> Choose an opponent. X is 2 higher than the printed gold value on
   * that player's revealed plot card..<br><i>Called to Arms.</i><br>
   **/
  SummerHarvestCtA = "SUMMER_HARVEST_CtA",
  /**
   * <h5>Winter Festival</h5>Neutral.<br><b><i>Winter.</i></b><br><b>Interrupt:</b>
   * When the challenges phase ends, if there are no <i>Summer</i> plot cards
   * revealed, gain 2 power for your faction..<br><i>Called to Arms.</i><br>
   **/
  WinterFestivalCtA = "WINTER_FESTIVAL_CtA",
  /**
   * <h5>Ser Edmure Tully</h5>House Stark.<br><b><i>House Tully.
   * Knight.</i></b><br><b>Reaction:</b> After a character gains power, move 1
   * power from that character to a <i>House Tully</i> character. (Limit once per
   * round.).<br><i>For Family Honor.</i><br>
   **/
  SerEdmureTullyFfh = "SER_EDMURE_TULLY_FFH",
  /**
   * <h5>Bear Island</h5>House Stark.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After you marshal a loyal card, gain 1
   * gold. (Limit twice per phase.).<br><i>For Family Honor.</i><br>
   **/
  BearIslandFfh = "BEAR_ISLAND_FFH",
  /**
   * <h5>Renly Baratheon (FFH)</h5>House Tyrell.<br><b><i>King.
   * Lord.</i></b><br>Insight. Renown.While an opponent controls a <i>King</i>
   * character, Renly Baratheon cannot be saved.<b>Reaction:</b> After you draw a
   * loyal card using insight, reveal it to draw 1 card..<br><i>For Family Honor.</i><br>
   **/
  RenlyBaratheonFfh = "RENLY_BARATHEON_FFH",
  /**
   * <h5>Crown of Golden Roses</h5>House Tyrell.<br><b><i>Crown.
   * Item.</i></b><br><i>Lord</i> character only.Attached character gains the
   * <i>King</i> trait.<b>Action:</b> Discard 1 card from your hand to give
   * attached character +X STR until the end of the phase. X is the number of
   * challenge icons attached character has. (Limit twice per round.).<br><i>For
   * Family Honor.</i><br>
   **/
  CrownOfGoldenRosesFfh = "CROWN_OF_GOLDEN_ROSES_FFH",
  /**
   * <h5>Thoren Smallwood</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Reaction:</b> After you win a challenge as
   * the defending player, gain 1 power for your faction..<br><i>For Family Honor.</i><br>
   **/
  ThorenSmallwoodFfh = "THOREN_SMALLWOOD_FFH",
  /**
   * <h5>Night Gathers...</h5>The Night's Watch.<br><b>Marshaling Action:</b>
   * Choose an opponent whose reserve value is lower than yours. Until the end of
   * the phase, you may marshal characters from that player's discard pile as if
   * they were in your hand..<br><i>For Family Honor.</i><br>
   **/
  NightGathersFfh = "NIGHT_GATHERS_FFH",
  /**
   * <h5>Asshai Priestess</h5>House Baratheon.<br><b><i>Ally.
   * R'hllor.</i></b><br><b>Reaction:</b> After you marshal Asshai Priestess,
   * choose and kneel a character with STR 2 or lower..<br><i>For Family Honor.</i><br>
   **/
  AsshaiPriestessFfh = "ASSHAI_PRIESTESS_FFH",
  /**
   * <h5>Visited by Shadows</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br>Opponent's character only.Attached
   * character gets -1 STR..<br><i>For Family Honor.</i><br>
   **/
  VisitedByShadowsFfh = "VISITED_BY_SHADOWS_FFH",
  /**
   * <h5>Ser Amory Lorch</h5>House Lannister.<br><b><i>Knight.</i></b><br>While an
   * opponent controls 3 or fewer characters, Ser Amory Lorch gains
   * renown..<br><i>For Family Honor.</i><br>
   **/
  SerAmoryLorchFfh = "SER_AMORY_LORCH_FFH",
  /**
   * <h5>Harrenhal (FFH)</h5>House Lannister.<br><b><i>Contested.
   * Stronghold.</i></b><br><b>Challenges Action:</b> Kneel Harrenhal to put a
   * [lannister] or <i>House Bolton</i> character into play from your hand. At the
   * end of the phase, if that character is still in play, kill it (cannot be
   * saved)..<br><i>For Family Honor.</i><br>
   **/
  HarrenhalFfh = "HARRENHAL_FFH",
  /**
   * <h5>Lordsport Fisherman</h5>House Greyjoy.<br><b><i>Ally.
   * Merchant.</i></b><br><b>Reaction:</b> After you marshal Lordsport Fisherman,
   * add the bottom card of your deck to your hand..<br><i>For Family Honor.</i><br>
   **/
  LordsportFishermanFfh = "LORDSPORT_FISHERMAN_FFH",
  /**
   * <h5>King of Salt and Rock</h5>House
   * Greyjoy.<br><b><i>Title.</i></b><br><i>Ironborn</i> character only.Attached
   * character gains the <i>King</i> trait and pillage.<b>Reaction:</b> After an
   * attachment or location is discarded using pillage, attached character gains 1
   * power..<br><i>For Family Honor.</i><br>
   **/
  KingOfSaltAndRockFfh = "KING_OF_SALT_AND_ROCK_FFH",
  /**
   * <h5>Devoted Bloodrider</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br>Each <i>Bloodrider</i> character you control gets +1
   * STR..<br><i>For Family Honor.</i><br>
   **/
  DevotedBloodriderFfh = "DEVOTED_BLOODRIDER_FFH",
  /**
   * <h5>Blood of My Blood</h5>House Targaryen.<br><b>Challenges Action:</b> Search
   * your deck for a <i>Bloodrider</i> character and put it into play. Shuffle your
   * deck. At the end of the phase, if that card is still in play, return it to
   * your hand..<br><i>For Family Honor.</i><br>
   **/
  BloodOfMyBloodFfh = "BLOOD_OF_MY_BLOOD_FFH",
  /**
   * <h5>Spearmaiden</h5>House Martell.<br><b><i>Ally.</i></b><br><b>Reaction:</b>
   * After Spearmaiden is declared as an attacker in a [military] challenge, choose
   * a character controlled by the defending player. If you win the challenge by 5
   * or more STR, that character must be chosen for claim during this challenge, if
   * able..<br><i>For Family Honor.</i><br>
   **/
  SpearmaidenFfh = "SPEARMAIDEN_FFH",
  /**
   * <h5>The Scorpion's Sting</h5>House Martell.<br><b>Reaction:</b> After you lose
   * a challenge, choose up to X [martell] characters. Each of those characters
   * gains renown until the end of the phase. X is the number of plot cards in your
   * used pile..<br><i>For Family Honor.</i><br>
   **/
  TheScorpionsStingFfh = "THE_SCORPIONS_STING_FFH",
  /**
   * <h5>Hot Pie</h5>Neutral.<br><b><i>Companion.</i></b><br><b>Marshaling
   * Action:</b> Kneel a <i>Companion</i> character to reduce the cost of the next
   * unique character you marshal this phase by 1..<br><i>For Family Honor.</i><br>
   **/
  HotPieFfh = "HOT_PIE_FFH",
  /**
   * <h5>The God's Eye</h5>Neutral.<br><b><i>Westeros.</i></b><br>The God's Eye
   * cannot be discarded from play.+1 Income.+1 Reserve..<br><i>For Family Honor.</i><br>
   **/
  TheGodsEyeFfh = "THE_GODS_EYE_FFH",
  /**
   * <h5>Dissension</h5>Neutral.<br><b>Marshaling Action:</b> Choose an <i>Ally</i>
   * character, and discard it from play..<br><i>For Family Honor.</i><br>
   **/
  DissensionFfh = "DISSENSION_FFH",
  /**
   * <h5>Battle of Oxcross</h5>Neutral.<br><b><i>War.</i></b><br>Each character
   * with printed cost 4 or higher cannot be declared as a defender during the
   * first challenge you initiate this round..<br><i>For Family Honor.</i><br>
   **/
  BattleOfOxcrossFfh = "BATTLE_OF_OXCROSS_FFH",
  /**
   * <h5>Jojen Reed</h5>House Stark.<br><b><i>House
   * Reed.</i></b><br>Stealth.<b>Reaction:</b> After Jojen Reed stands, reveal the
   * top card of each player's deck. You may either: discard each of those cards,
   * or have each player draw 1 card..<br><i>There Is My Claim.</i><br>
   **/
  JojenReedTimc = "JOJEN_REED_TIMC",
  /**
   * <h5>The Wolf King</h5>House Stark.<br><b><i>Title.</i></b><br>[stark]
   * character only.Attached character gains the <i>King</i> trait and does not
   * kneel when declared as an attacker in a [military] challenge..<br><i>There Is
   * My Claim.</i><br>
   **/
  TheWolfKingTimc = "THE_WOLF_KING_TIMC",
  /**
   * <h5>King Renly's Host</h5>House Tyrell.<br><b><i>Army.</i></b><br>Intimidate.
   * No attachments.While there is a <i>Summer</i> plot card revealed, King Renly's
   * Host gets +4 STR.While there is a <i>Winter</i> plot card revealed, King
   * Renly's Host cannot be declared as an attacker..<br><i>There Is My Claim.</i><br>
   **/
  KingRenlysHostTimc = "KING_RENLYS_HOST_TIMC",
  /**
   * <h5>Caswell's Keep</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br><b>Reaction:</b> After you reveal a plot card, choose a
   * player. Look at the top 2 cards of that player's deck. Place 1 of those cards
   * on the bottom of that deck, and the other on top..<br><i>There Is My Claim.</i><br>
   **/
  CaswellsKeepTimc = "CASWELLS_KEEP_TIMC",
  /**
   * <h5>Shadow Tower Mason</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.While you control 3 or more [thenightswatch]
   * locations and/or attachments, Shadow Tower Mason gains a [military] and an
   * [intrigue] icon..<br><i>There Is My Claim.</i><br>
   **/
  ShadowTowerMasonTimc = "SHADOW_TOWER_MASON_TIMC",
  /**
   * <h5>The Haunted Forest</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br>While The Haunted Forest is standing, it contributes 1 STR
   * to your side during any challenge in which you are the defending
   * player.<b>Forced Reaction:</b> After you lose a challenge, kneel The Haunted
   * Forest..<br><i>There Is My Claim.</i><br>
   **/
  TheHauntedForestTimc = "THE_HAUNTED_FOREST_TIMC",
  /**
   * <h5>Stannis Baratheon (TIMC)</h5>House Baratheon.<br><b><i>King.
   * Lord.</i></b><br>During [power] challenges, each participating non-<i>King</i>
   * character gets -1 STR.<b>Reaction:</b> After you win dominance, choose a
   * non-loyal character. That character cannot stand during the standing phase
   * this round..<br><i>There Is My Claim.</i><br>
   **/
  StannisBaratheonTimc = "STANNIS_BARATHEON_TIMC",
  /**
   * <h5>Red God's Blessing</h5>House Baratheon.<br><b><i>Blessing.
   * R'hllor.</i></b><br>Attached character gains the <i>R'hllor</i> trait and gets
   * +1 STR for each <i>R'hllor</i> character you control..<br><i>There Is My Claim.</i><br>
   **/
  RedGodsBlessingTimc = "RED_GODS_BLESSING_TIMC",
  /**
   * <h5>Tanda Stokeworth</h5>House
   * Lannister.<br><b><i>Lady.</i></b><br><b>Reaction:</b> After you marshal Tanda
   * Stokeworth, each player gains 3 gold..<br><i>There Is My Claim.</i><br>
   **/
  TandaStokeworthTimc = "TANDA_STOKEWORTH_TIMC",
  /**
   * <h5>Without His Beard</h5>House Lannister.<br><b>Reaction:</b> After you win
   * an [intrigue] challenge, discard up to 3 cards at random from the losing
   * opponent's hand. Then, that player draws 2 cards..<br><i>There Is My Claim.</i><br>
   **/
  WithoutHisBeardTimc = "WITHOUT_HIS_BEARD_TIMC",
  /**
   * <h5>Aeron Damphair (TIMC)</h5>House Greyjoy.<br><b><i>Drowned God. Ironborn.
   * Lord.</i></b><br><b>Reaction:</b> After a character is saved, either: stand
   * it, or kneel it..<br><i>There Is My Claim.</i><br>
   **/
  AeronDamphairTimc = "AERON_DAMPHAIR_TIMC",
  /**
   * <h5>King Balon's Solar</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br><b>Reaction:</b> After you win initiative, gain 1
   * gold..<br><i>There Is My Claim.</i><br>
   **/
  KingBalonsSolarTimc = "KING_BALONS_SOLAR_TIMC",
  /**
   * <h5>Pyat Pree</h5>House
   * Targaryen.<br><b><i>Warlock.</i></b><br><b>Reaction:</b> After you win a
   * challenge in which Pyat Pree is participating, search the top X cards of your
   * deck for a [targaryen] attachment or event, reveal it, and add it to your
   * hand. Shuffle your deck. X is the STR by which you won the
   * challenge..<br><i>There Is My Claim.</i><br>
   **/
  PyatPreeTimc = "PYAT_PREE_TIMC",
  /**
   * <h5>Vaes Tolorro</h5>House
   * Targaryen.<br><b><i>Essos.</i></b><br><b>Interrupt:</b> When a character with
   * 1 or more power is killed, kneel Vaes Tolorro to move 1 power from that
   * character to Vaes Tolorro. (Up to 2 power instead if that character's STR is
   * 0.).<br><i>There Is My Claim.</i><br>
   **/
  VaesTolorroTimc = "VAES_TOLORRO_TIMC",
  /**
   * <h5>Elia Sand</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Reaction:</b> After you lose a challenge, choose a
   * character. Until the end of the phase, that character gains stealth. (Limit
   * twice per phase.).<br><i>There Is My Claim.</i><br>
   **/
  EliaSandTimc = "ELIA_SAND_TIMC",
  /**
   * <h5>Burning on the Sand</h5>House Martell.<br><b>Reaction:</b> After you lose
   * an unopposed challenge, set the claim value on the winning opponent's revealed
   * plot card to 0 until the end of the challenge..<br><i>There Is My Claim.</i><br>
   **/
  BurningOnTheSandTimc = "BURNING_ON_THE_SAND_TIMC",
  /**
   * <h5>Jaqen H'ghar</h5>Neutral.<br><b><i>Ally.</i></b><br><b>Reaction:</b> After
   * Jaqen H'ghar enters play, place a Valar Morghulis token on up to 3 different
   * unique characters. If Jaqen H'ghar leaves play, discard those tokens from
   * play.<b>Reaction:</b> After you win a challenge in which Jaqen H'ghar is
   * attacking alone, choose and kill a character with a Valar Morghulis
   * token..<br><i>There Is My Claim.</i><br>
   **/
  JaqenHgharTimc = "JAQEN_HGHAR_TIMC",
  /**
   * <h5>Isle of Ravens</h5>Neutral.<br><b><i>Oldtown.</i></b><br><b>Action:</b>
   * Kneel Isle of Ravens to choose a card in any player's discard pile, and
   * shuffle it into its owner's deck..<br><i>There Is My Claim.</i><br>
   **/
  IsleOfRavensTimc = "ISLE_OF_RAVENS_TIMC",
  /**
   * <h5>King Beyond the
   * Wall</h5>Neutral.<br><b><i>Title.</i></b><br><i>Wildling</i> character
   * only.Attached character gains the <i>King</i> trait.While attached character
   * is attacking a player with a higher power total than you, raise the claim
   * value on your revealed plot card by 1..<br><i>There Is My Claim.</i><br>
   **/
  KingBeyondTheWallTimc = "KING_BEYOND_THE_WALL_TIMC",
  /**
   * <h5>Valar Morghulis</h5>Neutral.<br><b><i>Omen.</i></b><br><b>When
   * Revealed:</b> Kill each character..<br><i>There Is My Claim.</i><br>
   **/
  ValarMorghulisTimc = "VALAR_MORGHULIS_TIMC",
  /**
   * <h5>Roose Bolton</h5>House Stark.<br><b><i>Ally. House Bolton.
   * Lord.</i></b><br><b>Reaction:</b> After you win a challenge in which Roose
   * Bolton is attacking, choose up to X total STR worth of characters controlled
   * by the losing opponent. X is Roose Bolton's STR. Sacrifice Roose Bolton to
   * kill each of those characters..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  RooseBoltonGoH = "ROOSE_BOLTON_GoH",
  /**
   * <h5>Harrenhal (GoH)</h5>House Stark.<br><b><i>Contested.
   * Stronghold.</i></b><br><b>Reaction:</b> After a character enters play, kneel
   * your faction card and sacrifice Harrenhal to kill it..<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  HarrenhalGoH = "HARRENHAL_GoH",
  /**
   * <h5>Brienne of Tarth (GoH)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br>Renown.While you control a <i>King</i>
   * character or Catelyn Stark, Brienne of Tarth does not kneel when declared as a
   * defender..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  BrienneOfTarthGoH = "BRIENNE_OF_TARTH_GoH",
  /**
   * <h5>Offer of a Peach</h5>House Tyrell.<br>Play only if you control Renly
   * Baratheon or a <i>Lady</i> character.<b>Challenges Action:</b> Choose an
   * attacking character. Stand that character and remove it from the
   * challenge..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  OfferOfAPeachGoH = "OFFER_OF_A_PEACH_GoH",
  /**
   * <h5>Craster</h5>The Night's Watch.<br><b><i>Ally. Wildling.</i></b><br>Immune
   * to <i>Omen</i> card effects.<b>Action:</b> Sacrifice Craster to put each
   * character that was killed this phase into play from its owner's dead
   * pile..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  CrasterGoH = "CRASTER_GoH",
  /**
   * <h5>Dragonglass Dagger</h5>The Night's
   * Watch.<br><b><i>Weapon.</i></b><br>[thenightswatch] character only.While
   * attached character is participating in a challenge, it gets +2 STR and is
   * immune to opponent's character abilities..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  DragonglassDaggerGoH = "DRAGONGLASS_DAGGER_GoH",
  /**
   * <h5>Ser Davos Seaworth (GoH)</h5>House Baratheon.<br><b><i>Knight. Lord.
   * Smuggler.</i></b><br>Stealth.<b>Reaction:</b> After Ser Davos Seaworth
   * bypasses a non-loyal character using stealth, either: draw 1 card, or gain 1
   * gold..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  SerDavosSeaworthGoH = "SER_DAVOS_SEAWORTH_GoH",
  /**
   * <h5>Ritual of R'hllor</h5>House
   * Baratheon.<br><b><i>R'hllor.</i></b><br><b>Reaction:</b> After you win
   * dominance, choose X standing <i>R'hllor</i> characters. Each of those
   * characters gains 1 power..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  RitualOfRhllorGoH = "RITUAL_OF_RHLLOR_GoH",
  /**
   * <h5>Joffrey Baratheon (GoH)</h5>House Lannister.<br><b><i>King.
   * Lord.</i></b><br><b>Reaction:</b> After you marshal a loyal character, kneel
   * that character and your faction card to choose and kill a non-<i>King</i>
   * character with a lower printed cost..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  JoffreyBaratheonGoH = "JOFFREY_BARATHEON_GoH",
  /**
   * <h5>Chataya's Brothel</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br><b>Marshaling Action:</b> Kneel a character with an
   * [intrigue] icon to gain 1 gold. (Limit twice per phase.).<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  ChatayasBrothelGoH = "CHATAYAS_BROTHEL_GoH",
  /**
   * <h5>Helya</h5>House Greyjoy.<br><b><i>Ironborn. Steward.</i></b><br>Each
   * attachment gains terminal..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  HelyaGoH = "HELYA_GoH",
  /**
   * <h5>Bless Him With Salt</h5>House Greyjoy.<br><b><i>Blessing.</i></b><br>Play
   * only during a [power] challenge.<b>Action:</b> Choose a participating
   * <i>Drowned God</i> or <i>Ironborn</i> character. Until the end of the
   * challenge, that character gets +3 STR. If you win the challenge, draw 1
   * card..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  BlessHimWithSaltGoH = "BLESS_HIM_WITH_SALT_GoH",
  /**
   * <h5>Xaro Xhoan Daxos</h5>House
   * Targaryen.<br><b><i>Merchant.</i></b><br><b>Reaction:</b> After you marshal a
   * unique attachment, gain 2 gold. (Limit once per phase.).<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  XaroXhoanDaxosGoH = "XARO_XHOAN_DAXOS_GoH",
  /**
   * <h5>Mother of Dragons</h5>House
   * Targaryen.<br><b><i>Title.</i></b><br><i>Stormborn</i> character you control
   * only.<b>Challenges Action:</b> During a challenge in which you control a
   * participating <i>Dragon</i> character, kneel Mother of Dragons to have
   * attached character participate in the challenge on your side..<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  MotherOfDragonsGoH = "MOTHER_OF_DRAGONS_GoH",
  /**
   * <h5>Myrcella Baratheon (GoH)</h5>House
   * Martell.<br><b><i>Lady.</i></b><br>While there are no <i>King</i> characters
   * in play, Myrcella Baratheon gains renown and does not kneel when declared as a
   * defender in a [power] challenge..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  MyrcellaBaratheonGoH = "MYRCELLA_BARATHEON_GoH",
  /**
   * <h5>The Prince's Pass</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b> After you lose a
   * challenge as the defending player, kneel The Prince's Pass to choose an
   * attacking character. Until the end of the phase, that character loses a
   * challenge icon of your choice. Then, if it has no challenge icons, you may
   * sacrifice The Prince's Pass to discard it from play..<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  ThePrincesPassGoH = "THE_PRINCES_PASS_GoH",
  /**
   * <h5>Silent Sisters</h5>Neutral.<br><b><i>Ally. The Seven.</i></b><br>Silent
   * Sisters gets +1 STR for each character in your dead pile..<br><i>Ghosts of
   * Harrenhal.</i><br>
   **/
  SilentSistersGoH = "SILENT_SISTERS_GoH",
  /**
   * <h5>The Frostfangs</h5>Neutral.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After The Frostfangs enters play, give
   * control of it to an opponent.-1 Reserve..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  TheFrostfangsGoH = "THE_FROSTFANGS_GoH",
  /**
   * <h5>Quiet as a Shadow</h5>Neutral.<br><b>Action:</b> Choose a unique character
   * with printed cost 3 or lower. Until the end of the phase, that character gains
   * stealth..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  QuietAsAShadowGoH = "QUIET_AS_A_SHADOW_GoH",
  /**
   * <h5>Ghosts of Harrenhal</h5>Neutral.<br><b><i>Omen.</i></b><br><b>When
   * Revealed:</b> Put the top character in each player's dead pile into
   * play..<br><i>Ghosts of Harrenhal.</i><br>
   **/
  GhostsOfHarrenhalGoH = "GHOSTS_OF_HARRENHAL_GoH",
  /**
   * <h5>House Manderly Knight</h5>House Stark.<br><b><i>House Manderly.
   * Knight.</i></b><br>While there is a <i>Winter</i> plot card revealed, House
   * Manderly Knight gets +2 STR..<br><i>Tyrion's Chain.</i><br>
   **/
  HouseManderlyKnightTc = "HOUSE_MANDERLY_KNIGHT_TC",
  /**
   * <h5>"Wolf in the Night"</h5>House
   * Stark.<br><b><i>Song.</i></b><br><b>Action:</b> Choose a [stark] character
   * that is attacking alone. Until the end of the challenge, that character gets
   * +3 STR and gains renown..<br><i>Tyrion's Chain.</i><br>
   **/
  WolfInTheNightTc = "WOLF_IN_THE_NIGHT_TC",
  /**
   * <h5>Ser Robar Royce</h5>House
   * Tyrell.<br><b><i>Knight.</i></b><br><b>Reaction:</b> After a <i>Summer</i>
   * plot card is revealed, Ser Robar Royce gains 1 power. (Limit once per
   * phase).<b>Forced Reaction:</b> After a <i>Winter</i> plot card is revealed,
   * kneel Ser Robar Royce..<br><i>Tyrion's Chain.</i><br>
   **/
  SerRobarRoyceTc = "SER_ROBAR_ROYCE_TC",
  /**
   * <h5>Renly's Pavilion</h5>House
   * Tyrell.<br><b><i>Westeros.</i></b><br><b>Action:</b> Kneel Renly's Pavilion to
   * choose 2 characters. Until the end of the phase, one of those characters gets
   * -1 STR, and the other gets +1 STR..<br><i>Tyrion's Chain.</i><br>
   **/
  RenlysPavilionTc = "RENLYS_PAVILION_TC",
  /**
   * <h5>Qhorin Halfhand</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>Renown.
   * No attachments except <i>Weapon</i>.<b>Reaction:</b> After you win a
   * [military] challenge in which Qhorin Halfhand is participating, choose and
   * kill a non-unique character with lower STR than his controlled by the losing
   * opponent..<br><i>Tyrion's Chain.</i><br>
   **/
  QhorinHalfhandTc = "QHORIN_HALFHAND_TC",
  /**
   * <h5>Fist of the First Men</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br>While your reserve value is higher than an opponent's, each
   * <i>Ranger</i> character you control gets +1 STR and cannot be bypassed by
   * stealth..<br><i>Tyrion's Chain.</i><br>
   **/
  FistOfTheFirstMenTc = "FIST_OF_THE_FIRST_MEN_TC",
  /**
   * <h5>Salladhor Saan (TC)</h5>House Baratheon.<br><b><i>Mercenary. Raider.
   * Smuggler.</i></b><br><b>Reaction:</b> After you win a challenge in which
   * Salladhor Saan is participating, put a <i>Warship</i> location or
   * <i>Weapon</i> attachment into play from your hand..<br><i>Tyrion's Chain.</i><br>
   **/
  SalladhorSaanTc = "SALLADHOR_SAAN_TC",
  /**
   * <h5>The Valyrian</h5>House Baratheon.<br><b><i>Warship.</i></b><br>Ambush
   * (2).<b>Action:</b> Kneel The Valyrian to give an attacking character +X STR
   * until the end of the challenge. X is the number of gold in the defending
   * player's gold pool..<br><i>Tyrion's Chain.</i><br>
   **/
  TheValyrianTc = "THE_VALYRIAN_TC",
  /**
   * <h5>Podrick Payne</h5>House
   * Lannister.<br><b><i>Companion.</i></b><br><b>Interrupt:</b> When a character
   * would be killed for [military] claim, pay 2 gold and put Podrick Payne into
   * play from your hand to save it. Then, if that character was Tyrion Lannister,
   * you may pay 2 gold to choose and kill an attacking character..<br><i>Tyrion's Chain.</i><br>
   **/
  PodrickPayneTc = "PODRICK_PAYNE_TC",
  /**
   * <h5>Tyrion's Chain</h5>House Lannister.<br><b>Reaction:</b> After you win a
   * challenge in which you control a participating unique [lannister] character,
   * choose a revealed <i>War</i> plot card. Initiate the when revealed ability on
   * that plot card as if you had just revealed it. (Max 1 per
   * phase.).<br><i>Tyrion's Chain.</i><br>
   **/
  TyrionsChainTc = "TYRIONS_CHAIN_TC",
  /**
   * <h5>Esgred</h5>House Greyjoy.<br><b><i>Ironborn.</i></b><br>Stealth.If you
   * control Asha Greyjoy, sacrifice Esgred. Then, your Asha Greyjoy gains 1
   * power.Esgred may bypass an additional character using stealth.<em>Errata from
   * FAQ v2.1</em>.<br><i>Tyrion's Chain.</i><br>
   **/
  EsgredTc = "ESGRED_TC",
  /**
   * <h5>Sea Bitch</h5>House Greyjoy.<br><b><i>Warship.</i></b><br><b>Action:</b>
   * Sacrifice Sea Bitch to choose a non-limited location. Take control of that
   * location until the end of the phase..<br><i>Tyrion's Chain.</i><br>
   **/
  SeaBitchTc = "SEA_BITCH_TC",
  /**
   * <h5>Quaithe of the Shadow</h5>House
   * Targaryen.<br><b><i>Companion.</i></b><br>Ambush (3).<b>Reaction:</b> After
   * Quaithe of the Shadow enters play during a challenge, remove each character
   * with STR 2 or lower from the challenge..<br><i>Tyrion's Chain.</i><br>
   **/
  QuaitheOfTheShadowTc = "QUAITHE_OF_THE_SHADOW_TC",
  /**
   * <h5>House of the Undying</h5>House
   * Targaryen.<br><b><i>Qarth.</i></b><br><b>Challenges Action:</b> Remove House
   * of the Undying from the game to choose an opponent. Put each character in that
   * player's dead pile into play under your control. At the end of the phase,
   * return each of those cards to its owner's dead pile (cannot be
   * saved)..<br><i>Tyrion's Chain.</i><br>
   **/
  HouseOfTheUndyingTc = "HOUSE_OF_THE_UNDYING_TC",
  /**
   * <h5>Ser Arys Oakheart</h5>House Martell.<br><b><i>Kingsguard.
   * Knight.</i></b><br>No attachments except <i>Weapon</i>.<b>Reaction:</b> After
   * Ser Arys Oakheart enters play, pay 2 gold to choose an <i>Ally</i> character,
   * and discard it from play..<br><i>Tyrion's Chain.</i><br>
   **/
  SerArysOakheartTc = "SER_ARYS_OAKHEART_TC",
  /**
   * <h5>The Greenblood</h5>House Martell.<br><b><i>Dorne.</i></b><br>Each
   * [martell] character you control gets +1 STR for each <i>Summer</i> plot card
   * revealed..<br><i>Tyrion's Chain.</i><br>
   **/
  TheGreenbloodTc = "THE_GREENBLOOD_TC",
  /**
   * <h5>Northern Refugee</h5>Neutral.<br><b><i>Ally. Wildling.</i></b><br>While
   * there is a <i>Winter</i> plot card revealed, reduce the cost to marshal
   * Northern Refugee by 1..<br><i>Tyrion's Chain.</i><br>
   **/
  NorthernRefugeeTc = "NORTHERN_REFUGEE_TC",
  /**
   * <h5>Relentless Assault</h5>Neutral.<br><b>Reaction:</b> After you win a
   * challenge by 5 or more STR as the attacking player, kneel your faction card.
   * Then, you may initiate an additional challenge of that type this
   * phase..<br><i>Tyrion's Chain.</i><br>
   **/
  RelentlessAssaultTc = "RELENTLESS_ASSAULT_TC",
  /**
   * <h5>Tarred Heads</h5>Neutral.<br><b>Reaction:</b> After you win a [power]
   * challenge, discard 1 card at random from the losing opponent's hand. If that
   * card is a character, place it in its owner's dead pile..<br><i>Tyrion's Chain.</i><br>
   **/
  TarredHeadsTc = "TARRED_HEADS_TC",
  /**
   * <h5>Battle of the Blackwater</h5>Neutral.<br><b><i>Siege.
   * War.</i></b><br><b>When Revealed:</b> Choose an opponent. Discard each
   * duplicate you control and each duplicate controlled by that opponent from
   * play..<br><i>Tyrion's Chain.</i><br>
   **/
  BattleOfTheBlackwaterTc = "BATTLE_OF_THE_BLACKWATER_TC",
  /**
   * <h5>Cersei Lannister (LoCR)</h5>House Lannister.<br><b><i>Lady.
   * Queen.</i></b><br>Cersei Lannister does not kneel when declared as an attacker
   * in an [intrigue] challenge.<b>Reaction:</b> After 1 or more cards are
   * discarded from an opponent's hand, if you do not support that player, Cersei
   * Lannister gains 1 power. (Limit 3 times per round.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  CerseiLannisterLoCr = "CERSEI_LANNISTER_LoCR",
  /**
   * <h5>Tyrion Lannister (LoCR)</h5>House
   * Lannister.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After you win a
   * challenge, return an attacking <i>Clansman</i> character to your hand to
   * (choose one): draw 2 cards, gain 3 gold, or raise the claim value on your
   * revealed plot card by 1 until the end of the challenge. (Limit twice per
   * phase.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  TyrionLannisterLoCr = "TYRION_LANNISTER_LoCR",
  /**
   * <h5>Ser Kevan Lannister</h5>House Lannister.<br><b><i>Knight. Lord. Small
   * Council.</i></b><br><b>Reaction:</b> After you marshal Ser Kevan Lannister,
   * choose a [lannister] or neutral location or attachment in your discard pile
   * and put it into play..<br><i>Lions of Casterly Rock.</i><br>
   **/
  SerKevanLannisterLoCr = "SER_KEVAN_LANNISTER_LoCR",
  /**
   * <h5>Timett Son of Timett</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br><b>Reaction:</b> After you win a
   * challenge in which Timett Son of Timett is attacking, choose and kill a
   * character with printed cost X or lower. X is the number of <i>Clansman</i>
   * characters you control..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TimettSonOfTimettLoCr = "TIMETT_SON_OF_TIMETT_LoCR",
  /**
   * <h5>Ser Jaime Lannister (LoCR)</h5>House Lannister.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Each <i>Knight</i> character you control gains renown while
   * attacking alone.<b>Challenges Action:</b> Choose a <i>Kingsguard</i>
   * character. Until the end of the phase, that character gains an [intrigue]
   * icon. (Limit once per phase.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  SerJaimeLannisterLoCr = "SER_JAIME_LANNISTER_LoCR",
  /**
   * <h5>Tywin Lannister (LoCR)</h5>House Lannister.<br><b><i>Lord. Small
   * Council.</i></b><br>Pillage.<b>Interrupt:</b> When exactly 1 card is discarded
   * from a player's deck, instead look at the top 2 cards of that player's deck
   * and discard 1..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TywinLannisterLoCr = "TYWIN_LANNISTER_LoCR",
  /**
   * <h5>Chella Daughter of Cheyk</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br>Chella Daughter of Cheyk gets +1 STR
   * for each ear token she has. While she has 3 or more ear tokens, she gains
   * intimidate and renown.<b>Reaction:</b> After a character is killed during a
   * challenge in which Chella Daughter of Cheyk is attacking, place an ear token
   * on her..<br><i>Lions of Casterly Rock.</i><br>
   **/
  ChellaDaughterOfCheykLoCr = "CHELLA_DAUGHTER_OF_CHEYK_LoCR",
  /**
   * <h5>Ser Gregor's Marauders</h5>House Lannister.<br><b><i>House Clegane.
   * Raider.</i></b><br>Pillage.<b>Reaction:</b> After Ser Gregor's Marauders
   * discards an event using pillage, stand Ser Gregor's Marauders..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  SerGregorsMaraudersLoCr = "SER_GREGORS_MARAUDERS_LoCR",
  /**
   * <h5>Shagga Son of Dolf</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br>While Shagga Son of Dolf is in your
   * hand, he gains ambush (0) if you control a <i>Clansman</i> character or Tyrion
   * Lannister.<b>Forced Reaction:</b> After Shagga Son of Dolf enters play using
   * ambush, choose and kill a [lannister] character you control..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  ShaggaSonOfDolfLoCr = "SHAGGA_SON_OF_DOLF_LoCR",
  /**
   * <h5>Taena Merryweather</h5>House Lannister.<br><b><i>Companion.
   * Lady.</i></b><br><b>Reaction:</b> After you play an event, choose and discard
   * 1 card from your hand to draw 1 card..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TaenaMerryweatherLoCr = "TAENA_MERRYWEATHER_LoCR",
  /**
   * <h5>Moon Brothers</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br><b>Action:</b> During a challenge in
   * which you control an attacking <i>Clansman</i> character, kneel your faction
   * card to put Moon Brothers into play from your hand (standing), participating
   * as an attacker..<br><i>Lions of Casterly Rock.</i><br>
   **/
  MoonBrothersLoCr = "MOON_BROTHERS_LoCR",
  /**
   * <h5>Red Keep Spy</h5>House Lannister.<br><b><i>Ally. Spy.</i></b><br>Ambush
   * (4).<b>Reaction:</b> After Red Keep Spy enters play using ambush, choose a
   * character with printed cost 3 or lower. If you have more cards in hand than
   * that character's controller, return it to its owner's hand..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  RedKeepSpyLoCr = "RED_KEEP_SPY_LoCR",
  /**
   * <h5>Alayaya</h5>House
   * Lannister.<br><b><i>Companion.</i></b><br><b>Reaction:</b> After you win a
   * challenge in which Alayaya is participating, move 1 gold from the losing
   * opponent's gold pool to your own..<br><i>Lions of Casterly Rock.</i><br>
   **/
  AlayayaLoCr = "ALAYAYA_LoCR",
  /**
   * <h5>Ser Lancel Lannister</h5>House Lannister.<br><b><i>Knight.
   * Lord.</i></b><br>While you control exactly 1 other [lannister] <i>Lord</i> or
   * <i>Lady</i> character, Ser Lancel Lannister gets +X STR, where X is that
   * character's STR..<br><i>Lions of Casterly Rock.</i><br>
   **/
  SerLancelLannisterLoCr = "SER_LANCEL_LANNISTER_LoCR",
  /**
   * <h5>Tommen Baratheon</h5>House Lannister.<br><b><i>King. Lord.</i></b><br>Each
   * player with no cards in his or her hand cannot gain power from challenge
   * bonuses (unopposed and rivals)..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TommenBaratheonLoCr = "TOMMEN_BARATHEON_LoCR",
  /**
   * <h5>Lannisport Guard</h5>House Lannister.<br><b><i>Ally.
   * Guard.</i></b><br><b>Reaction:</b> After you marshal Lannisport Guard, each
   * player draws 1 card..<br><i>Lions of Casterly Rock.</i><br>
   **/
  LannisportGuardLoCr = "LANNISPORT_GUARD_LoCR",
  /**
   * <h5>Golden Tooth</h5>House Lannister.<br><b><i>Stronghold. The
   * Westerlands.</i></b><br>Limited.<b>Action:</b> Kneel Golden Tooth to gain 1
   * gold. (3 gold instead if an opponent has no cards in his or her
   * hand.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  GoldenToothLoCr = "GOLDEN_TOOTH_LoCR",
  /**
   * <h5>Mountains of the Moon</h5>House
   * Lannister.<br><b><i>Westeros.</i></b><br><b>Reaction:</b> After a
   * <i>Clansman</i> character enters play, that character gains a challenge icon
   * of your choice until the end of the phase..<br><i>Lions of Casterly Rock.</i><br>
   **/
  MountainsOfTheMoonLoCr = "MOUNTAINS_OF_THE_MOON_LoCR",
  /**
   * <h5>Lannisport Treasury</h5>House Lannister.<br><b><i>The
   * Westerlands.</i></b><br><b>Reaction:</b> After the taxation phase begins,
   * place 1 gold from your gold pool on Lannisport Treasury.<b>Marshaling
   * Action:</b> Kneel Lannisport Treasury to move any number of gold from
   * Lannisport Treasury to your gold pool..<br><i>Lions of Casterly Rock.</i><br>
   **/
  LannisportTreasuryLoCr = "LANNISPORT_TREASURY_LoCR",
  /**
   * <h5>Shield of Lannisport</h5>House
   * Lannister.<br><b><i>Title.</i></b><br>[lannister] <i>Lord</i> or <i>Lady</i>
   * character only.While you control no <i>Lord</i> or <i>Lady</i> characters with
   * printed cost 4 or higher other than attached character, attached character
   * gets +2 STR and gains renown.+1 Income..<br><i>Lions of Casterly Rock.</i><br>
   **/
  ShieldOfLannisportLoCr = "SHIELD_OF_LANNISPORT_LoCR",
  /**
   * <h5>Valyrian Steel Dagger</h5>House Lannister.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>During [intrigue] challenges, attached character gets +2
   * STR and gains stealth..<br><i>Lions of Casterly Rock.</i><br>
   **/
  ValyrianSteelDaggerLoCr = "VALYRIAN_STEEL_DAGGER_LoCR",
  /**
   * <h5>A Lannister Always Pays His Debts</h5>House Lannister.<br><b>Challenges
   * Action:</b> Choose an opponent who has won a challenge against you this phase.
   * You may initiate an additional [military] and [intrigue] challenge against
   * that player this phase. (Max 1 per phase.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  ALannisterAlwaysPaysHisDebtsLoCr = "A_LANNISTER_ALWAYS_PAYS_HIS_DEBTS_LoCR",
  /**
   * <h5>Insidious Scheme</h5>House Lannister.<br><b>Reaction:</b> After claim is
   * applied for an [intrigue] challenge you won by 5 or more STR, draw 2 cards. (4
   * cards instead if the losing opponent has no cards in his or her
   * hand.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  InsidiousSchemeLoCr = "INSIDIOUS_SCHEME_LoCR",
  /**
   * <h5>Daring Rescue</h5>House Lannister.<br>Play only if you control a
   * <i>Knight</i> character.<b>Challenges Action:</b> Return a character you
   * control to its owner's hand. Then, have a <i>Knight</i> character you control
   * gain 1 power..<br><i>Lions of Casterly Rock.</i><br>
   **/
  DaringRescueLoCr = "DARING_RESCUE_LoCR",
  /**
   * <h5>Edric Storm</h5>House
   * Baratheon.<br><b><i>Bastard.</i></b><br><b>Reaction:</b> After the dominance
   * phase begins, choose a character. That character does not contribute its STR
   * to its controller's total for dominance this phase..<br><i>Lions of Casterly Rock.</i><br>
   **/
  EdricStormLoCr = "EDRIC_STORM_LoCR",
  /**
   * <h5>Disputed Claim</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br><i>Bastard</i>, <i>Lord</i>, or
   * <i>Lady</i> character only.While you have more power on your faction card than
   * each opponent, attached character gets +2 STR and gains renown..<br><i>Lions
   * of Casterly Rock.</i><br>
   **/
  DisputedClaimLoCr = "DISPUTED_CLAIM_LoCR",
  /**
   * <h5>Victarion Greyjoy (LoCR)</h5>House Greyjoy.<br><b><i>Captain. Ironborn.
   * Lord.</i></b><br>Intimidate. Renown.<b>Interrupt:</b> When Victarion Greyjoy
   * would be killed, discard 2 power from him to save him..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  VictarionGreyjoyLoCr = "VICTARION_GREYJOY_LoCR",
  /**
   * <h5>Old Wyk</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br><b>Reaction:</b> After you initiate a [power] challenge,
   * kneel Old Wyk to put the top <i>Drowned God</i> character in your dead pile
   * into play knelt, participating as an attacker. Then, if you win the challenge
   * by 5 or more STR, return that character to your hand. Otherwise, place it on
   * the bottom of your deck.<em>Errata from FAQ v2.0</em>.<br><i>Lions of Casterly Rock.</i><br>
   **/
  OldWykLoCr = "OLD_WYK_LoCR",
  /**
   * <h5>Trystane Martell</h5>House
   * Martell.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After you lose a challenge
   * in which Trystane Martell is participating, choose a character with lower STR
   * than his. Until the end of the phase, that character cannot be declared as a
   * defender..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TrystaneMartellLoCr = "TRYSTANE_MARTELL_LoCR",
  /**
   * <h5>You Murdered Her Children</h5>House Martell.<br><b>Challenges Action:</b>
   * Choose a [martell] character you control. Until the end of the phase, double
   * that character's STR. At the end of the phase, if that character is still in
   * play, kill it..<br><i>Lions of Casterly Rock.</i><br>
   **/
  YouMurderedHerChildrenLoCr = "YOU_MURDERED_HER_CHILDREN_LoCR",
  /**
   * <h5>Sweet Donnel Hill</h5>The Night's Watch.<br><b><i>Bastard.
   * Steward.</i></b><br>No attachments except <i>Weapon</i>.While Sweet Donnel
   * Hill is defending, each attacking character loses all keywords..<br><i>Lions
   * of Casterly Rock.</i><br>
   **/
  SweetDonnelHillLoCr = "SWEET_DONNEL_HILL_LoCR",
  /**
   * <h5>Bridge of Skulls</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Interrupt:</b> When the challenges phase ends, choose an
   * opponent who did not initiate a military challenge against you this phase.
   * That player discards one card at random from his or her hand..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  BridgeOfSkullsLoCr = "BRIDGE_OF_SKULLS_LoCR",
  /**
   * <h5>Jeyne Westerling</h5>House Stark.<br><b><i>Lady.
   * Queen.</i></b><br><b>Action:</b> Kneel Jeyne Westerling to choose and stand a
   * [stark] <i>King</i> or <i>Lord</i> character..<br><i>Lions of Casterly Rock.</i><br>
   **/
  JeyneWesterlingLoCr = "JEYNE_WESTERLING_LoCR",
  /**
   * <h5>Last Hearth Scouts</h5>House Stark.<br><b><i>House
   * Umber.</i></b><br><b>Forced Reaction:</b> After a character enters play during
   * the challenges phase, kneel that character..<br><i>Lions of Casterly Rock.</i><br>
   **/
  LastHearthScoutsLoCr = "LAST_HEARTH_SCOUTS_LoCR",
  /**
   * <h5>Ser Barristan Selmy (LoCR)</h5>House
   * Targaryen.<br><b><i>Knight.</i></b><br><b>Reaction:</b> After you win a
   * challenge in which Ser Barristan Selmy is participating, if you have fewer
   * cards in hand than the losing opponent, stand him..<br><i>Lions of Casterly Rock.</i><br>
   **/
  SerBarristanSelmyLoCr = "SER_BARRISTAN_SELMY_LoCR",
  /**
   * <h5>Daenerys's Favor</h5>House
   * Targaryen.<br><b><i>Condition.</i></b><br>[targaryen] character only.While
   * attached character is participating in a challenge, each other participating
   * character gets -1 STR..<br><i>Lions of Casterly Rock.</i><br>
   **/
  DaeneryssFavorLoCr = "DAENERYSS_FAVOR_LoCR",
  /**
   * <h5>Alerie Tyrell</h5>House Tyrell.<br><b><i>House Hightower.
   * Lady.</i></b><br><b>Reaction:</b> After Alerie Tyrell enters play, search the
   * top 10 cards of your deck for a [tyrell] character with printed cost 3 or
   * lower, reveal it, and add it to your hand. Shuffle your deck..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  AlerieTyrellLoCr = "ALERIE_TYRELL_LoCR",
  /**
   * <h5>"A Rose of Gold"</h5>House Tyrell.<br><b><i>Song.</i></b><br><b>Challenges
   * Action:</b> Look at the top 3 cards of your deck. Add 1 to your hand, and
   * place the others on the bottom of your deck in any order..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  ARoseOfGoldLoCr = "A_ROSE_OF_GOLD_LoCR",
  /**
   * <h5>High Septon</h5>Neutral.<br><b><i>The Seven.</i></b><br><b>Interrupt:</b>
   * When an opponent chooses a character you control as the only target of a
   * triggered ability, choose an eligible <i>The Seven</i> character you control
   * to become the target of that triggered ability instead. (Limit once per
   * phase.).<br><i>Lions of Casterly Rock.</i><br>
   **/
  HighSeptonLoCr = "HIGH_SEPTON_LoCR",
  /**
   * <h5>Devout Freerider</h5>Neutral.<br><b><i>Ally. Mercenary. The
   * Seven.</i></b><br>During the challenges phase, each player cannot gain
   * gold..<br><i>Lions of Casterly Rock.</i><br>
   **/
  DevoutFreeriderLoCr = "DEVOUT_FREERIDER_LoCR",
  /**
   * <h5>Wildling Bandit</h5>Neutral.<br><b><i>Wildling.</i></b><br>While Wildling
   * Bandit is attacking an opponent with more gold in his or her gold pool than
   * you, it gets +2 STR..<br><i>Lions of Casterly Rock.</i><br>
   **/
  WildlingBanditLoCr = "WILDLING_BANDIT_LoCR",
  /**
   * <h5>Ocean Road</h5>Neutral.<br><b><i>Westeros.</i></b><br>Limited.<b>Marshaling
   * Action:</b> Kneel Ocean Road to reduce the cost of the next neutral or
   * out-of-faction card you marshal this phase by 1..<br><i>Lions of Casterly Rock.</i><br>
   **/
  OceanRoadLoCr = "OCEAN_ROAD_LoCR",
  /**
   * <h5>Appointed</h5>Neutral.<br><b><i>Title.</i></b><br>Unique character
   * only.Attached character gains an [intrigue] icon and the <i>Small Council</i>
   * trait..<br><i>Lions of Casterly Rock.</i><br>
   **/
  AppointedLoCr = "APPOINTED_LoCR",
  /**
   * <h5>The Council Consents</h5>Neutral.<br><b><i>Small
   * Council.</i></b><br><b>Reaction:</b> After a player wins an [intrigue]
   * challenge by 5 or more STR, stand each <i>Small Council</i>
   * character..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TheCouncilConsentsLoCr = "THE_COUNCIL_CONSENTS_LoCR",
  /**
   * <h5>"The Rains of Castamere"</h5>Neutral.<br><b><i>Song.</i></b><br>Your plot
   * deck must be 12 cards, including exactly 5 different <i>Scheme</i> cards.
   * During the plot phase, <i>Scheme</i> cards are not considered to be in your
   * plot deck.<b>Reaction:</b> After you win an [intrigue] challenge by 5 or more
   * STR, kneel your faction card to reveal a <i>Scheme</i> plot. If that card
   * leaves play, remove it from the game..<br><i>Lions of Casterly Rock.</i><br>
   **/
  TheRainsOfCastamereLoCr = "THE_RAINS_OF_CASTAMERE_LoCR",
  /**
   * <h5>Lions of the Rock</h5>House
   * Lannister.<br><b><i>Kingdom.</i></b><br><b>Reaction:</b> After the challenges
   * phase begins, gain 3 gold..<br><i>Lions of Casterly Rock.</i><br>
   **/
  LionsOfTheRockLoCr = "LIONS_OF_THE_ROCK_LoCR",
  /**
   * <h5>Unexpected Delay</h5>Neutral.<br><b><i>House Frey.</i></b><br><b>Forced
   * Reaction:</b> After the challenges phase begins, each player chooses a
   * character without attachments or power. Return each of those characters to its
   * owner's hand..<br><i>Lions of Casterly Rock.</i><br>
   **/
  UnexpectedDelayLoCr = "UNEXPECTED_DELAY_LoCR",
  /**
   * <h5>Summoned to Court</h5>Neutral.<br><b><i>Edict.
   * Kingdom.</i></b><br><b>Forced Interrupt:</b> When the draw phase ends, each
   * player chooses a card in his or her hand, if able. Then, reveal the chosen
   * cards. Each player who revealed a character with the lowest printed cost may
   * put that character into play..<br><i>Lions of Casterly Rock.</i><br>
   **/
  SummonedToCourtLoCr = "SUMMONED_TO_COURT_LoCR",
  /**
   * <h5>Littlefinger's Meddling</h5>Neutral.<br><b><i>Kingdom.
   * Scheme.</i></b><br>Reduce the cost of each event you play by 2..<br><i>Lions
   * of Casterly Rock.</i><br>
   **/
  LittlefingersMeddlingLoCr = "LITTLEFINGERS_MEDDLING_LoCR",
  /**
   * <h5>Gossip and Lies</h5>Neutral.<br><b><i>Scheme.</i></b><br>Each character
   * you control does not kneel when declared as an attacker in the first
   * [intrigue] challenge you initiate during the challenges phase..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  GossipAndLiesLoCr = "GOSSIP_AND_LIES_LoCR",
  /**
   * <h5>Time of Plenty</h5>Neutral.<br><b><i>Summer.</i></b><br>Increase the
   * number of cards each player draws in the draw phase by 1..<br><i>Lions of
   * Casterly Rock.</i><br>
   **/
  TimeOfPlentyLoCr = "TIME_OF_PLENTY_LoCR",
  /**
   * <h5>Early Frost</h5>Neutral.<br><b><i>Winter.</i></b><br>Reduce the number of
   * cards each player draws in the draw phase by 1..<br><i>Lions of Casterly Rock.</i><br>
   **/
  EarlyFrostLoCr = "EARLY_FROST_LoCR",
  /**
   * <h5>Hoster Tully</h5>House Stark.<br><b><i>House Tully. Lord.</i></b><br>While
   * Hoster Tully is participating in a challenge, each other participating
   * <i>House Tully</i> character you control gains renown..<br><i>All Men Are Fools.</i><br>
   **/
  HosterTullyAmaf = "HOSTER_TULLY_AMAF",
  /**
   * <h5>The Tumblestone</h5>House Stark.<br><b><i>The
   * Riverlands.</i></b><br>Bestow (3).<b>Reaction:</b> After a <i>House Tully</i>
   * character gains power, discard 1 gold from The Tumblestone to stand that
   * character..<br><i>All Men Are Fools.</i><br>
   **/
  TheTumblestoneAmaf = "THE_TUMBLESTONE_AMAF",
  /**
   * <h5>Margaery Tyrell (AMAF)</h5>House Tyrell.<br><b><i>Lady.
   * Queen.</i></b><br>Renown.<b>Reaction:</b> After a unique <i>King</i> or
   * <i>Lord</i> character you control is killed, search your deck for a unique
   * <i>King</i> or <i>Lord</i> character and put it into play. Shuffle your deck.
   * (Limit once per round.).<br><i>All Men Are Fools.</i><br>
   **/
  MargaeryTyrellAmaf = "MARGAERY_TYRELL_AMAF",
  /**
   * <h5>All Men Are Fools</h5>House Tyrell.<br><b>Reaction:</b> After you win a
   * challenge by 5 or more STR, each <i>Lady</i> character you control gains 1
   * power. (Max 1 per challenge.).<br><i>All Men Are Fools.</i><br>
   **/
  AllMenAreFoolsAmaf = "ALL_MEN_ARE_FOOLS_AMAF",
  /**
   * <h5>Eastwatch Carpenter</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Reaction:</b> After you collect income,
   * gain 1 gold for every 2 [thenightswatch] locations you control..<br><i>All Men
   * Are Fools.</i><br>
   **/
  EastwatchCarpenterAmaf = "EASTWATCH_CARPENTER_AMAF",
  /**
   * <h5>Eastwatch-by-the-Sea</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After the dominance phase begins, if you
   * have a higher reserve value than an opponent, draw 1 card.+1
   * Reserve..<br><i>All Men Are Fools.</i><br>
   **/
  EastwatchByTheSeaAmaf = "EASTWATCH_BY_THE_SEA_AMAF",
  /**
   * <h5>Fickle Bannerman</h5>House Baratheon.<br><b><i>Ally.</i></b><br>Bestow
   * (2). Renown.<b>Forced Reaction:</b> After you lose a [power] challenge, the
   * winning opponent takes control of Fickle Bannerman unless you discard 1 gold
   * from it..<br><i>All Men Are Fools.</i><br>
   **/
  FickleBannermanAmaf = "FICKLE_BANNERMAN_AMAF",
  /**
   * <h5>Storm's End</h5>House
   * Baratheon.<br><b><i>Stronghold.</i></b><br><b>Reaction:</b> After you win
   * dominance, discard 1 power from your faction card to choose 2 characters. Each
   * of those characters gains 1 power..<br><i>All Men Are Fools.</i><br>
   **/
  StormsEndAmaf = "STORMS_END_AMAF",
  /**
   * <h5>Stone Crows</h5>House Lannister.<br><b><i>Clansman.</i></b><br>Ambush (3).
   * Bestow (2). <b>Reaction:</b> After you win a challenge in which Stone Crows is
   * attacking, discard 1 gold from it to have the losing opponent choose and kill
   * a defending character..<br><i>All Men Are Fools.</i><br>
   **/
  StoneCrowsAmaf = "STONE_CROWS_AMAF",
  /**
   * <h5>Attack From the Mountains</h5>House Lannister.<br><b>Reaction:</b> After
   * you win a challenge in which you control an attacking <i>Clansman</i>
   * character, put a <i>Clansman</i> character into play from your
   * hand..<br><i>All Men Are Fools.</i><br>
   **/
  AttackFromTheMountainsAmaf = "ATTACK_FROM_THE_MOUNTAINS_AMAF",
  /**
   * <h5>Drowned Disciple</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Reaction:</b> After a character enters play from your dead
   * pile, choose a <i>Drowned God</i> character and have it gain 1 power. (Limit
   * twice per phase.).<br><i>All Men Are Fools.</i><br>
   **/
  DrownedDiscipleAmaf = "DROWNED_DISCIPLE_AMAF",
  /**
   * <h5>Moat Cailin</h5>House Greyjoy.<br><b><i>Contested. The
   * North.</i></b><br>While there are more <i>Winter</i> plot cards than
   * <i>Summer</i> plot cards revealed, reduce the initiative value on each
   * opponent's revealed plot card by 3, and the reserve value on each opponent's
   * revealed plot card by 1..<br><i>All Men Are Fools.</i><br>
   **/
  MoatCailinAmaf = "MOAT_CAILIN_AMAF",
  /**
   * <h5>Ghiscari Elite</h5>House
   * Targaryen.<br><b><i>Ally.</i></b><br><b>Reaction:</b> After Ghiscari Elite is
   * knelt, choose an attachment or event in your discard pile, and place it on the
   * bottom of your deck..<br><i>All Men Are Fools.</i><br>
   **/
  GhiscariEliteAmaf = "GHISCARI_ELITE_AMAF",
  /**
   * <h5>Slaver's Bay Port</h5>House
   * Targaryen.<br><b><i>Essos.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel
   * Slaver's Bay Port to gain 1 gold. (2 gold instead if an opponent has 4 or more
   * characters in his or her dead pile.).<br><i>All Men Are Fools.</i><br>
   **/
  SlaversBayPortAmaf = "SLAVERS_BAY_PORT_AMAF",
  /**
   * <h5>Ricasso</h5>House Martell.<br><b><i>Ally. Steward.</i></b><br>Bestow (2).
   * You are considered to have X additional plot cards in your used pile. X is the
   * number of gold Ricasso has..<br><i>All Men Are Fools.</i><br>
   **/
  RicassoAmaf = "RICASSO_AMAF",
  /**
   * <h5>The Prince's Plan</h5>House Martell.<br><b>Action:</b> Choose a character.
   * Until the end of the phase, that character gets +1 STR for each plot card in
   * your used pile and gains a challenge icon of your choice.<b>Reaction:</b>
   * After you lose a challenge, pay 1 gold to return The Prince's Plan from your
   * discard pile to your hand..<br><i>All Men Are Fools.</i><br>
   **/
  ThePrincesPlanAmaf = "THE_PRINCES_PLAN_AMAF",
  /**
   * <h5>Ygritte</h5>Neutral.<br><b><i>Wildling.</i></b><br>Ygritte cannot be knelt
   * by card effects.While you control another <i>Wildling</i> character, Ygritte
   * gains stealth..<br><i>All Men Are Fools.</i><br>
   **/
  YgritteAmaf = "YGRITTE_AMAF",
  /**
   * <h5>Alliance</h5>Neutral.<br>Your minimum deck size is 75 cards.You may run 2
   * <i>Banner</i> agendas in addition to this agenda..<br><i>All Men Are Fools.</i><br>
   **/
  AllianceAmaf = "ALLIANCE_AMAF",
  /**
   * <h5>Barring the Gates</h5>Neutral.<br><b><i>Edict. Winter.</i></b><br>Card
   * abilities cannot cause characters to enter play..<br><i>All Men Are Fools.</i><br>
   **/
  BarringTheGatesAmaf = "BARRING_THE_GATES_AMAF",
  /**
   * <h5>Late Summer Feast</h5>Neutral.<br><b><i>Kingdom.
   * Summer.</i></b><br><b>Forced Reaction:</b> After you win a challenge, the
   * losing opponent may draw 1 card..<br><i>All Men Are Fools.</i><br>
   **/
  LateSummerFeastAmaf = "LATE_SUMMER_FEAST_AMAF",
  /**
   * <h5>Bear Island Host</h5>House Stark.<br><b><i>Army. House
   * Mormont.</i></b><br>Bestow (3). No attachments.<b>Action:</b> Discard 1 gold
   * from Bear Island Host to choose a <i>House Mormont</i> character. Until the
   * end of the phase, that character does not kneel when declared as an attacker
   * in a [military] challenge..<br><i>Guarding the Realm.</i><br>
   **/
  BearIslandHostGtR = "BEAR_ISLAND_HOST_GtR",
  /**
   * <h5>Marriage Pact</h5>House
   * Stark.<br><b><i>Condition.</i></b><br>Terminal.Attached character cannot
   * participate in challenges against you.<b>Forced Interrupt:</b> When attached
   * character leaves play, sacrifice a character you control..<br><i>Guarding the Realm.</i><br>
   **/
  MarriagePactGtR = "MARRIAGE_PACT_GtR",
  /**
   * <h5>Knight of the Reach</h5>House
   * Tyrell.<br><b><i>Knight.</i></b><br><b>Reaction:</b> After you win a challenge
   * in which Knight of the Reach is attacking or defending alone, choose a
   * <i>Lady</i> character. That character gains 1 power..<br><i>Guarding the Realm.</i><br>
   **/
  KnightOfTheReachGtR = "KNIGHT_OF_THE_REACH_GtR",
  /**
   * <h5>"Lord Renly's Ride"</h5>House
   * Tyrell.<br><b><i>Song.</i></b><br><b>Action:</b> Choose a character. Until the
   * end of the phase, that character gets +X STR and gains intimidate. X is the
   * printed STR of the top character in your dead pile..<br><i>Guarding the Realm.</i><br>
   **/
  LordRenlysRideGtR = "LORD_RENLYS_RIDE_GtR",
  /**
   * <h5>Gilly</h5>The Night's Watch.<br><b><i>Wildling.</i></b><br>Bestow
   * (3).<b>Action:</b> Discard 1 gold from Gilly to choose a <i>Steward</i>
   * character you control. Until the end of the phase, that character gains
   * stealth..<br><i>Guarding the Realm.</i><br>
   **/
  GillyGtR = "GILLY_GtR",
  /**
   * <h5>Guarding the Realm</h5>The Night's Watch.<br><b>Marshaling Action:</b>
   * Choose a character with printed cost 3 or lower in an opponent's discard pile,
   * and put it into play under your control.<b>Reaction:</b> After you win a
   * challenge as the defending player, pay 1 gold to return Guarding the Realm
   * from your discard pile to your hand..<br><i>Guarding the Realm.</i><br>
   **/
  GuardingTheRealmGtR = "GUARDING_THE_REALM_GtR",
  /**
   * <h5>Melisandre (GtR)</h5>House Baratheon.<br><b><i>Lady.
   * R'hllor.</i></b><br>Insight.<b>Reaction:</b> After you win dominance, choose
   * an opponent and look at his or her hand. Then, choose and discard 1 card from
   * that hand. If that card is a character, place it in its owner's dead
   * pile..<br><i>Guarding the Realm.</i><br>
   **/
  MelisandreGtR = "MELISANDRE_GtR",
  /**
   * <h5>Light of the Lord</h5>House Baratheon.<br><b><i>Blessing.
   * R'hllor.</i></b><br>[baratheon] or <i>R'hllor</i> character
   * only.<b>Reaction:</b> After the dominance phase begins, stand attached
   * character and gain 1 gold..<br><i>Guarding the Realm.</i><br>
   **/
  LightOfTheLordGtR = "LIGHT_OF_THE_LORD_GtR",
  /**
   * <h5>Polliver</h5>House
   * Lannister.<br><b><i>Ally.</i></b><br>Pillage.<b>Reaction:</b> After Polliver
   * discards a character using pillage, return 2 gold from the losing opponent's
   * gold pool to the treasury..<br><i>Guarding the Realm.</i><br>
   **/
  PolliverGtR = "POLLIVER_GtR",
  /**
   * <h5>The Hand's Solar</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br><b>Action:</b> Kneel The Hand's Solar to choose a
   * character. Until the end of the phase, that character gains an [intrigue]
   * icon..<br><i>Guarding the Realm.</i><br>
   **/
  TheHandsSolarGtR = "THE_HANDS_SOLAR_GtR",
  /**
   * <h5>Wex Pyke</h5>House Greyjoy.<br><b><i>Bastard. House
   * Botley.</i></b><br>Bestow (8).While Wex Pyke is attacking, each character with
   * printed cost X cannot be declared as a defender. X is the number of gold Wex
   * Pyke has.<b>Dominance Action:</b> Move 1 gold from your gold pool to Wex Pyke.
   * (Limit twice per phase.).<br><i>Guarding the Realm.</i><br>
   **/
  WexPykeGtR = "WEX_PYKE_GtR",
  /**
   * <h5>Iron Islands Market</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Iron Islands
   * Market to gain 1 gold. (2 gold instead if an opponent has 8 or more cards in
   * his or her discard pile.).<br><i>Guarding the Realm.</i><br>
   **/
  IronIslandsMarketGtR = "IRON_ISLANDS_MARKET_GtR",
  /**
   * <h5>Second Sons</h5>House Targaryen.<br><b><i>Mercenary.</i></b><br>Bestow
   * (3).<b>Forced Interrupt:</b> When the challenges phase ends, sacrifice Second
   * Sons unless you discard 1 gold from it..<br><i>Guarding the Realm.</i><br>
   **/
  SecondSonsGtR = "SECOND_SONS_GtR",
  /**
   * <h5>A Dragon Is No Slave</h5>House Targaryen.<br><b>Challenges Action:</b>
   * Choose a character without attachments. That character gets -2 STR until the
   * end of the phase.<b>Reaction:</b> After you win a challenge in which you
   * control a participating <i>Dragon</i> character or Daenerys Targaryen, pay 1
   * gold to return A Dragon Is No Slave from your discard pile to your
   * hand..<br><i>Guarding the Realm.</i><br>
   **/
  ADragonIsNoSlaveGtR = "A_DRAGON_IS_NO_SLAVE_GtR",
  /**
   * <h5>Orphan of the Greenblood</h5>House
   * Martell.<br><b><i>Ally.</i></b><br>Bestow (3).<b>Action:</b> Discard 1 gold
   * from Orphan of the Greenblood to return another character you control to its
   * owner's hand..<br><i>Guarding the Realm.</i><br>
   **/
  OrphanOfTheGreenbloodGtR = "ORPHAN_OF_THE_GREENBLOOD_GtR",
  /**
   * <h5>Scorching Deserts</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b> After a character with
   * fewer than 2 challenge icons is declared as an attacker or defender, kneel and
   * sacrifice Scorching Deserts to remove that character from the
   * challenge..<br><i>Guarding the Realm.</i><br>
   **/
  ScorchingDesertsGtR = "SCORCHING_DESERTS_GtR",
  /**
   * <h5>Black Walder</h5>Neutral.<br><b><i>House Frey.</i></b><br>Bestow
   * (3).During the third challenge you initiate each phase, Black Walder gains
   * renown and gets +2 STR for each gold he has..<br><i>Guarding the Realm.</i><br>
   **/
  BlackWalderGtR = "BLACK_WALDER_GtR",
  /**
   * <h5>Great Hall</h5>Neutral.<br><b><i>Westeros.</i></b><br>Limited.<b>Marshaling
   * Action:</b> Kneel Great Hall to reduce the cost of the next unique character
   * you marshal this phase by 1. (By 2 instead if that character's printed cost is
   * 6 or higher.).<br><i>Guarding the Realm.</i><br>
   **/
  GreatHallGtR = "GREAT_HALL_GtR",
  /**
   * <h5>"The Dornishman's
   * Wife"</h5>Neutral.<br><b><i>Song.</i></b><br><b>Action:</b> Choose an
   * opponent. If that player has a higher power total than you, gain 2 gold. If
   * that player has more cards in his or her hand than you, gain 1 power for your
   * faction. If that player controls more characters than you, draw 1
   * card..<br><i>Guarding the Realm.</i><br>
   **/
  TheDornishmansWifeGtR = "THE_DORNISHMANS_WIFE_GtR",
  /**
   * <h5>The Annals of Castle Black</h5>Neutral.<br><b><i>Legacy.</i></b><br>Each
   * player may play events in his or her discard pile as if they were in his or
   * her hand.<b>Forced Reaction:</b> After an event is placed in a discard pile,
   * remove it from the game..<br><i>Guarding the Realm.</i><br>
   **/
  TheAnnalsOfCastleBlackGtR = "THE_ANNALS_OF_CASTLE_BLACK_GtR",
  /**
   * <h5>Roaming Wolfpack</h5>House
   * Stark.<br><b><i>Direwolf.</i></b><br>Intimidate. No attachments.While Roaming
   * Wolfpack is attacking, each attacking <i>Direwolf</i> character gets +2
   * STR..<br><i>The Fall of Astapor.</i><br>
   **/
  RoamingWolfpackTFoA = "ROAMING_WOLFPACK_TFoA",
  /**
   * <h5>The North Remembers</h5>House Stark.<br><b>Challenges Action:</b> Each
   * player sacrifices a character or location.<b>Reaction:</b> After a character
   * you control is killed, pay 1 gold to return The North Remembers from your
   * discard pile to your hand..<br><i>The Fall of Astapor.</i><br>
   **/
  TheNorthRemembersTFoA = "THE_NORTH_REMEMBERS_TFoA",
  /**
   * <h5>Elinor Tyrell</h5>House Tyrell.<br><b><i>Lady.</i></b><br>You may marshal
   * or play 1 additional limited card each round..<br><i>The Fall of
   * Astapor.</i><br>
   **/
  ElinorTyrellTFoA = "ELINOR_TYRELL_TFoA",
  /**
   * <h5>Silver Hair Net</h5>House Tyrell.<br><b><i>Item.</i></b><br><i>Lady</i>
   * character only.Attached character gains stealth.While attached character is
   * participating in a challenge, reduce the cost of each event you play by
   * 1..<br><i>The Fall of Astapor.</i><br>
   **/
  SilverHairNetTFoA = "SILVER_HAIR_NET_TFoA",
  /**
   * <h5>Recruiter for the Watch</h5>The Night's Watch.<br><b><i>Wandering
   * Crow.</i></b><br>You may choose not to stand Recruiter for the Watch during
   * the standing phase.<b>Marshaling Action:</b> Kneel Recruiter for the Watch to
   * choose a character with printed cost 2 or lower. Take control of that
   * character until Recruiter for the Watch stands or leaves play..<br><i>The Fall
   * of Astapor.</i><br>
   **/
  RecruiterForTheWatchTFoA = "RECRUITER_FOR_THE_WATCH_TFoA",
  /**
   * <h5>Underground Vault</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Underground Vault to
   * gain 1 gold. (2 gold instead if the gold value on an opponent's revealed plot
   * card is 5 or higher.).<br><i>The Fall of Astapor.</i><br>
   **/
  UndergroundVaultTFoA = "UNDERGROUND_VAULT_TFoA",
  /**
   * <h5>Flea Bottom Bastard</h5>House
   * Baratheon.<br><b><i>Bastard.</i></b><br>During the dominance phase, Flea
   * Bottom Bastard gets +3 STR..<br><i>The Fall of Astapor.</i><br>
   **/
  FleaBottomBastardTFoA = "FLEA_BOTTOM_BASTARD_TFoA",
  /**
   * <h5>Spears of the Merling King</h5>House
   * Baratheon.<br><b><i>Westeros.</i></b><br><b>Interrupt:</b> When a character
   * you control is killed, sacrifice Spears of the Merling King to return that
   * character to your hand instead of placing it in your dead pile..<br><i>The
   * Fall of Astapor.</i><br>
   **/
  SpearsOfTheMerlingKingTFoA = "SPEARS_OF_THE_MERLING_KING_TFoA",
  /**
   * <h5>Cersei's Attendant</h5>House
   * Lannister.<br><b><i>Companion.</i></b><br>While Cersei's Attendant is
   * participating in a challenge against an opponent with no cards in his or her
   * hand, Cersei's Attendant gains insight..<br><i>The Fall of Astapor.</i><br>
   **/
  CerseisAttendantTFoA = "CERSEIS_ATTENDANT_TFoA",
  /**
   * <h5>Fever Dreams</h5>House Lannister.<br><b><i>Dream.</i></b><br>Opponent's
   * character only. Bestow (3).<b>Reaction:</b> After attached character is knelt,
   * discard 1 gold from Fever Dreams to draw 2 cards..<br><i>The Fall of
   * Astapor.</i><br>
   **/
  FeverDreamsTFoA = "FEVER_DREAMS_TFoA",
  /**
   * <h5>Theon Greyjoy (TFoA)</h5>House Greyjoy.<br><b><i>Ironborn.
   * Lord.</i></b><br>While Theon Greyjoy is attacking alone, each character with a
   * higher STR than his does not contribute its STR to the challenge..<br><i>The
   * Fall of Astapor.</i><br>
   **/
  TheonGreyjoyTFoA = "THEON_GREYJOY_TFoA",
  /**
   * <h5>Corsair's Dirk</h5>House
   * Greyjoy.<br><b><i>Weapon.</i></b><br><i>Ironborn</i> character only.Attached
   * character gets +2 STR.<b>Reaction:</b> After you win a challenge in which
   * attached character is attacking, move 1 gold from the losing opponent's gold
   * pool to your own..<br><i>The Fall of Astapor.</i><br>
   **/
  CorsairsDirkTFoA = "CORSAIRS_DIRK_TFoA",
  /**
   * <h5>Grey Worm</h5>House Targaryen.<br><b><i>Companion.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Action:</b> During a challenge in which
   * Grey Worm is attacking, choose a defending character. Until the end of the
   * challenge, that character gets -3 STR. (Limit once per challenge.).<br><i>The
   * Fall of Astapor.</i><br>
   **/
  GreyWormTFoA = "GREY_WORM_TFoA",
  /**
   * <h5>Astapor</h5>House Targaryen.<br><b><i>Astapor.
   * Contested.</i></b><br>Bestow (4).<b>Action:</b> Kneel Astapor to choose a
   * participating character. Until the end of the challenge, that character gets
   * -X STR. X is the number of gold Astapor has..<br><i>The Fall of
   * Astapor.</i><br>
   **/
  AstaporTFoA = "ASTAPOR_TFoA",
  /**
   * <h5>Maester of Sunspear</h5>House
   * Martell.<br><b><i>Maester.</i></b><br><b>Reaction:</b> After you lose a
   * challenge in which Maester of Sunspear is participating, choose an attachment
   * and return it to its owner's hand..<br><i>The Fall of Astapor.</i><br>
   **/
  MaesterOfSunspearTFoA = "MAESTER_OF_SUNSPEAR_TFoA",
  /**
   * <h5>Dornish Fiefdom</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel
   * Dornish Fiefdom to gain 1 gold. (2 gold instead if you are not the first
   * player.).<br><i>The Fall of Astapor.</i><br>
   **/
  DornishFiefdomTFoA = "DORNISH_FIEFDOM_TFoA",
  /**
   * <h5>Frey Lordling</h5>Neutral.<br><b><i>House Frey.
   * Lord.</i></b><br><b>Reaction:</b> After you initiate a challenge, Frey
   * Lordling gets +1 STR until the end of the phase..<br><i>The Fall of
   * Astapor.</i><br>
   **/
  FreyLordlingTFoA = "FREY_LORDLING_TFoA",
  /**
   * <h5>The Twins</h5>Neutral.<br><b><i>House Frey. The
   * Riverlands.</i></b><br>During the third challenge you initiate each phase, if
   * you control an attacking <i>House Frey</i> character, raise the claim value on
   * your revealed plot card by 1..<br><i>The Fall of Astapor.</i><br>
   **/
  TheTwinsTFoA = "THE_TWINS_TFoA",
  /**
   * <h5>Lay Siege</h5>Neutral.<br><b><i>Siege.</i></b><br><b>Action:</b> Choose
   * and kneel a location. Then, if that location is <i>Contested</i>, discard it
   * from play..<br><i>The Fall of Astapor.</i><br>
   **/
  LaySiegeTFoA = "LAY_SIEGE_TFoA",
  /**
   * <h5>Duel</h5>Neutral.<br><b><i>War.</i></b><br><b>When Revealed:</b> Choose an
   * opponent. That player chooses 2 non-<i>Army</i> characters, each with printed
   * cost 6 or higher. Then, that player chooses and kneels 1 of those characters.
   * Kill the other (cannot be saved)..<br><i>The Fall of Astapor.</i><br>
   **/
  DuelTFoA = "DUEL_TFoA",
  /**
   * <h5>Dacey Mormont</h5>House Stark.<br><b><i>House Mormont.
   * Lady.</i></b><br>Renown.X is the number of [stark] characters you
   * control..<br><i>The Red Wedding.</i><br>
   **/
  DaceyMormontTrw = "DACEY_MORMONT_TRW",
  /**
   * <h5>Winterfell Archery Range</h5>House
   * Stark.<br><b><i>Winterfell.</i></b><br><b>Action:</b> During a [military]
   * challenge, kneel Winterfell Archery Range to choose a participating character
   * with STR 3 or lower, and remove it from the challenge..<br><i>The Red
   * Wedding.</i><br>
   **/
  WinterfellArcheryRangeTrw = "WINTERFELL_ARCHERY_RANGE_TRW",
  /**
   * <h5>Oldtown Informer</h5>House Tyrell.<br><b><i>Ally. Spy.</i></b><br>Ambush
   * (2). Bestow (3).<b>Reaction:</b> After a card enters play during the
   * challenges phase, draw X cards. Then, discard X cards. X is the number of gold
   * Oldtown Informer has..<br><i>The Red Wedding.</i><br>
   **/
  OldtownInformerTrw = "OLDTOWN_INFORMER_TRW",
  /**
   * <h5>Arbor Vineyard</h5>House Tyrell.<br><b><i>House
   * Redwyne.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Arbor Vineyard to
   * gain 1 gold. (2 gold instead if there are more <i>Summer</i> plot cards than
   * <i>Winter</i> plot cards revealed.).<br><i>The Red Wedding.</i><br>
   **/
  ArborVineyardTrw = "ARBOR_VINEYARD_TRW",
  /**
   * <h5>Othell Yarwyck</h5>The Night's
   * Watch.<br><b><i>Builder.</i></b><br><b>Action:</b> Kneel a [thenightswatch]
   * location to choose a [thenightswatch] character. Until the end of the phase,
   * that character gains a challenge icon of your choice..<br><i>The Red
   * Wedding.</i><br>
   **/
  OthellYarwyckTrw = "OTHELL_YARWYCK_TRW",
  /**
   * <h5>Improved Fortifications</h5>The Night's
   * Watch.<br><b><i>Fortification.</i></b><br>Location only.<b>Interrupt:</b> When
   * attached location would leave play, sacrifice Improved Fortifications to save
   * it..<br><i>The Red Wedding.</i><br>
   **/
  ImprovedFortificationsTrw = "IMPROVED_FORTIFICATIONS_TRW",
  /**
   * <h5>Ser Axell Florent</h5>House Baratheon.<br><b><i>House Florent.
   * Knight.</i></b><br>Bestow (3).<b>Reaction:</b> After you win a challenge in
   * which Ser Axell Florent is participating, discard 1 gold from him to choose
   * and kneel a character without attachments..<br><i>The Red Wedding.</i><br>
   **/
  SerAxellFlorentTrw = "SER_AXELL_FLORENT_TRW",
  /**
   * <h5>Saving the Kingdom</h5>House Baratheon.<br><b>Challenges Action:</b>
   * Choose and kneel a character with STR 3 or lower. That character cannot stand
   * during the standing phase this round.<b>Reaction:</b> After you win dominance,
   * pay 1 gold to return Saving the Kingdom from your discard pile to your
   * hand..<br><i>The Red Wedding.</i><br>
   **/
  SavingTheKingdomTrw = "SAVING_THE_KINGDOM_TRW",
  /**
   * <h5>Ser Osmund Kettleblack</h5>House Lannister.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Bestow (3).<b>Challenges Action:</b> Discard 1 gold from
   * Ser Osmund Kettleblack to put a <i>Knight</i> character into play from your
   * hand. At the end of the phase, if that card is still in play, discard it from
   * play (cannot be saved). (Limit once per phase.).<br><i>The Red
   * Wedding.</i><br>
   **/
  SerOsmundKettleblackTrw = "SER_OSMUND_KETTLEBLACK_TRW",
  /**
   * <h5>Tywin's Stratagem</h5>House Lannister.<br><b>Challenges Action:</b> Choose
   * a character with printed cost 2 or lower controlled by each player. Return
   * each of those characters to its owner's hand.<b>Reaction:</b> After a
   * character is discarded from an opponent's hand or deck, pay 1 gold to return
   * Tywin's Stratagem from your discard pile to your hand..<br><i>The Red
   * Wedding.</i><br>
   **/
  TywinsStratagemTrw = "TYWINS_STRATAGEM_TRW",
  /**
   * <h5>Silence's Crew</h5>House Greyjoy.<br><b><i>Raider.</i></b><br>Bestow (3).
   * No attachments. Pillage.Silence's Crew gets +2 STR for each gold it
   * has.<b>Reaction:</b> After Silence's Crew discards a location or attachment
   * using pillage, place 1 gold from the treasury on Silence's Crew..<br><i>The
   * Red Wedding.</i><br>
   **/
  SilencesCrewTrw = "SILENCES_CREW_TRW",
  /**
   * <h5>Plunder</h5>House Greyjoy.<br><b>Action:</b> Kneel your faction card to
   * choose an opponent. Gain 1 gold for each location and attachment in that
   * player's discard pile..<br><i>The Red Wedding.</i><br>
   **/
  PlunderTrw = "PLUNDER_TRW",
  /**
   * <h5>Strong Belwas</h5>House Targaryen.<br><b><i>Companion.</i></b><br>Bestow
   * (2).<b>Interrupt:</b> When another unique [targaryen] character would be
   * killed, discard 1 gold from Strong Belwas to save it. (Limit once per
   * phase.).<br><i>The Red Wedding.</i><br>
   **/
  StrongBelwasTrw = "STRONG_BELWAS_TRW",
  /**
   * <h5>Breaker of Chains</h5>House Targaryen.<br><b><i>Title.</i></b><br>Unique
   * [targaryen] character only.Attached character gets +1 STR for each character
   * you control with printed cost 2 or lower.<b>Reaction:</b> After attached
   * character is declared as an attacker, put a character with printed cost 2 or
   * lower into play from your hand..<br><i>The Red Wedding.</i><br>
   **/
  BreakerOfChainsTrw = "BREAKER_OF_CHAINS_TRW",
  /**
   * <h5>Ellaria Sand (TRW)</h5>House Martell.<br><b><i>Bastard.
   * Companion.</i></b><br>Bestow (3).<b>Reaction:</b> After you lose a challenge
   * in which Ellaria Sand is participating, discard 1 gold from her to stand each
   * <i>Bastard</i> character you control..<br><i>The Red Wedding.</i><br>
   **/
  EllariaSandTrw = "ELLARIA_SAND_TRW",
  /**
   * <h5>Secret Schemes</h5>House Martell.<br><b>Action:</b> Kneel your faction
   * card to draw X cards. X is the number of plot cards in your used
   * pile..<br><i>The Red Wedding.</i><br>
   **/
  SecretSchemesTrw = "SECRET_SCHEMES_TRW",
  /**
   * <h5>Walder Frey</h5>Neutral.<br><b><i>House Frey.
   * Lord.</i></b><br>Renown.While Walder Frey is attacking, each other <i>House
   * Frey</i> character you control is also considered to be attacking..<br><i>The
   * Red Wedding.</i><br>
   **/
  WalderFreyTrw = "WALDER_FREY_TRW",
  /**
   * <h5>Frey Bastard</h5>Neutral.<br><b><i>Bastard. House Frey.</i></b><br>Bestow
   * (2).<b>Reaction:</b> After you win a challenge in which you control 2 or more
   * attacking <i>House Frey</i> characters, discard 1 gold from Frey Bastard to
   * gain 1 power for your faction..<br><i>The Red Wedding.</i><br>
   **/
  FreyBastardTrw = "FREY_BASTARD_TRW",
  /**
   * <h5>Frey Hospitality</h5>Neutral.<br><b><i>House
   * Frey.</i></b><br><b>Reaction:</b> After you win a challenge in which you
   * control an attacking <i>House Frey</i> character, if it was the third
   * challenge you initiated this phase, choose and kill a character controlled by
   * the losing opponent. (Choose and kill 3 characters instead if you won by 20 or
   * more STR.).<br><i>The Red Wedding.</i><br>
   **/
  FreyHospitalityTrw = "FREY_HOSPITALITY_TRW",
  /**
   * <h5>The Red Wedding</h5>Neutral.<br><b><i>House Frey.
   * Scheme.</i></b><br><b>Interrupt:</b> When you win a challenge as the attacking
   * player, choose and kill a <i>Lord</i> or <i>Lady</i> character controlled by
   * the losing opponent. (Any player may initiate this ability.).<br><i>The Red
   * Wedding.</i><br>
   **/
  TheRedWeddingTrw = "THE_RED_WEDDING_TRW",
  /**
   * <h5>Bran Stark (OR)</h5>House Stark.<br><b><i>Lord.</i></b><br><b>Action:</b>
   * Kneel Bran Stark to choose and stand a <i>Direwolf</i> character. Until the
   * end of the phase, that character gains a challenge icon of your
   * choice..<br><i>Oberyn's Revenge.</i><br>
   **/
  BranStarkOr = "BRAN_STARK_OR",
  /**
   * <h5>Passing the Black Gate</h5>House Stark.<br><b>Marshaling Action:</b> Kneel
   * your faction card to reduce the cost of each [stark] character you marshal
   * this phase by 1..<br><i>Oberyn's Revenge.</i><br>
   **/
  PassingTheBlackGateOr = "PASSING_THE_BLACK_GATE_OR",
  /**
   * <h5>Ser Garlan Tyrell (OR)</h5>House Tyrell.<br><b><i>Knight.
   * Lord.</i></b><br>Bestow (3). Renown.Ser Garlan Tyrell gets +1 STR for each
   * gold he has.<b>Action:</b> Discard 1 gold from Ser Garlan Tyrell to choose a
   * [tyrell] character. Until the end of the phase, that character gets +2
   * STR..<br><i>Oberyn's Revenge.</i><br>
   **/
  SerGarlanTyrellOr = "SER_GARLAN_TYRELL_OR",
  /**
   * <h5>Olenna's Machinations</h5>House Tyrell.<br><b>Challenges Action:</b> You
   * may initiate an additional [power] challenge this phase. (Max 1 per
   * phase.)<b>Reaction:</b> After you win an [intrigue] challenge by 5 or more
   * STR, pay 1 gold to return Olenna's Machinations from your discard pile to your
   * hand..<br><i>Oberyn's Revenge.</i><br>
   **/
  OlennasMachinationsOr = "OLENNAS_MACHINATIONS_OR",
  /**
   * <h5>Defender of the Wall</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>.While Defender of the Wall is defending, it
   * gets +2 STR..<br><i>Oberyn's Revenge.</i><br>
   **/
  DefenderOfTheWallOr = "DEFENDER_OF_THE_WALL_OR",
  /**
   * <h5>Mutiny At Craster's Keep</h5>The Night's Watch.<br><b>Dominance
   * Action:</b> Choose a character with the highest printed cost among characters
   * you control. Sacrifice that character to choose a character an opponent
   * controls and discard it from play..<br><i>Oberyn's Revenge.</i><br>
   **/
  MutinyAtCrastersKeepOr = "MUTINY_AT_CRASTERS_KEEP_OR",
  /**
   * <h5>Stannis's Cavalry</h5>House Baratheon.<br><b><i>Army.</i></b><br>Bestow
   * (8). No attachments.Each character an opponent controls with printed cost X
   * cannot stand during the standing phase. X is the number of gold Stannis's
   * Cavalry has.<b>Standing Action:</b> Move 1 gold from your gold pool to
   * Stannis's Cavalry. (Limit twice per phase.).<br><i>Oberyn's Revenge.</i><br>
   **/
  StannissCavalryOr = "STANNISS_CAVALRY_OR",
  /**
   * <h5>Northern Encampment</h5>House Baratheon.<br><b><i>The
   * North.</i></b><br>Limited.Northern Encampment cannot stand during the standing
   * phase unless you have won dominance this round.<b>Marshaling Action:</b> Kneel
   * Northern Encampment to gain 2 gold..<br><i>Oberyn's Revenge.</i><br>
   **/
  NorthernEncampmentOr = "NORTHERN_ENCAMPMENT_OR",
  /**
   * <h5>Kayce Merchant</h5>House Lannister.<br><b><i>Merchant.</i></b><br>Bestow
   * (3).<b>Reaction:</b> After you collect income, discard 1 gold from Kayce
   * Merchant to gain 2 gold..<br><i>Oberyn's Revenge.</i><br>
   **/
  KayceMerchantOr = "KAYCE_MERCHANT_OR",
  /**
   * <h5>A Task For Every Tool</h5>House Lannister.<br><b>Challenges Action:</b>
   * Put a [lannister] character with printed STR 2 or lower into play from your
   * hand..<br><i>Oberyn's Revenge.</i><br>
   **/
  ATaskForEveryToolOr = "A_TASK_FOR_EVERY_TOOL_OR",
  /**
   * <h5>Nute the Barber</h5>House
   * Greyjoy.<br><b><i>Ironborn.</i></b><br>Pillage.<b>Reaction:</b> After a
   * character you control discards a card using pillage, return a card from the
   * losing opponent's discard pile to its owner's hand. Then, draw 1 card. (Limit
   * 3 times per phase.).<br><i>Oberyn's Revenge.</i><br>
   **/
  NuteTheBarberOr = "NUTE_THE_BARBER_OR",
  /**
   * <h5>Iron Victory</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>While you
   * control Victarion Greyjoy, he gets +1 STR for each power he
   * has.<b>Reaction:</b> After a [greyjoy] character is saved, that character
   * gains 1 power. (Limit twice per phase.).<br><i>Oberyn's Revenge.</i><br>
   **/
  IronVictoryOr = "IRON_VICTORY_OR",
  /**
   * <h5>Irri</h5>House Targaryen.<br><b><i>Companion. Dothraki.</i></b><br>Bestow
   * (2).<b>Action:</b> Discard 1 gold from Irri to choose and stand a <i>Lord</i>
   * or <i>Lady</i> character. (Limit once per phase.).<br><i>Oberyn's
   * Revenge.</i><br>
   **/
  IrriOr = "IRRI_OR",
  /**
   * <h5>Overthrowing the Masters</h5>House Targaryen.<br><b>Action:</b> During a
   * challenge in which you are the attacking player, choose a defending character
   * with X STR or lower and remove it from the challenge. X is the number of
   * characters in the defending player's dead pile..<br><i>Oberyn's
   * Revenge.</i><br>
   **/
  OverthrowingTheMastersOr = "OVERTHROWING_THE_MASTERS_OR",
  /**
   * <h5>The Red Viper (OR)</h5>House
   * Martell.<br><b><i>Lord.</i></b><br>Renown.While The Red Viper is attacking,
   * each defending character with fewer than 2 challenge icons does not contribute
   * its STR to the challenge..<br><i>Oberyn's Revenge.</i><br>
   **/
  TheRedViperOr = "THE_RED_VIPER_OR",
  /**
   * <h5>Dornish Revenge</h5>House Martell.<br><b>Reaction:</b> After you initiate
   * a challenge, choose a character controlled by the defending player. That
   * character must be declared as a defender for this challenge, if able. If you
   * win this challenge by 5 or more STR, the losing opponent must choose and kill
   * a defending character..<br><i>Oberyn's Revenge.</i><br>
   **/
  DornishRevengeOr = "DORNISH_REVENGE_OR",
  /**
   * <h5>Begging Brother</h5>Neutral.<br><b><i>The Seven.</i></b><br>Bestow
   * (3).<b>Interrupt:</b> When the effects of a triggered character ability would
   * initiate, discard 1 gold from Begging Brother to cancel those
   * effects..<br><i>Oberyn's Revenge.</i><br>
   **/
  BeggingBrotherOr = "BEGGING_BROTHER_OR",
  /**
   * <h5>Flea Bottom</h5>Neutral.<br><b><i>King's Landing.</i></b><br><b>Challenges
   * Action:</b> Pay 1 gold and kneel Flea Bottom to put a character with printed
   * cost 3 or lower into play from your discard pile. At the end of the phase, if
   * that card is still in play, place it on the bottom of your
   * deck..<br><i>Oberyn's Revenge.</i><br>
   **/
  FleaBottomOr = "FLEA_BOTTOM_OR",
  /**
   * <h5>The Iron Bank Will Have Its Due</h5>Neutral.<br><b>Action:</b> If it is
   * not the taxation phase, kneel your faction card and return a character to your
   * hand to gain gold equal to that character's printed cost. Until the end of the
   * round, you cannot marshal or put into play any card with the same title as
   * that character..<br><i>Oberyn's Revenge.</i><br>
   **/
  TheIronBankWillHaveItsDueOr = "THE_IRON_BANK_WILL_HAVE_ITS_DUE_OR",
  /**
   * <h5>Wheels Within Wheels</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>When
   * Revealed:</b> Search the top 10 cards of your deck for any number of events
   * and reveal them. Add 1 to your hand, and place the others in your discard
   * pile. Shuffle your deck..<br><i>Oberyn's Revenge.</i><br>
   **/
  WheelsWithinWheelsOr = "WHEELS_WITHIN_WHEELS_OR",
  /**
   * <h5>Sansa's Maid</h5>House Stark.<br><b><i>Companion.</i></b><br>Bestow
   * (3).Each <i>Lady</i> character you control gets +1 STR for each gold Sansa's
   * Maid has..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  SansasMaidTbwb = "SANSAS_MAID_TBWB",
  /**
   * <h5>Northern Keep</h5>House Stark.<br><b><i>The
   * North.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel Northern Keep to
   * gain 1 gold. (2 gold instead if there are more <i>Winter</i> plot cards than
   * <i>Summer</i> plot cards revealed.).<br><i>The Brotherhood Without
   * Banners.</i><br>
   **/
  NorthernKeepTbwb = "NORTHERN_KEEP_TBWB",
  /**
   * <h5>Highgarden Minstrel</h5>House
   * Tyrell.<br><b><i>Minstrel.</i></b><br><b>Reaction:</b> After you play a
   * <i>Song</i> event, gain 1 gold. (Limit 3 times per round.).<br><i>The
   * Brotherhood Without Banners.</i><br>
   **/
  HighgardenMinstrelTbwb = "HIGHGARDEN_MINSTREL_TBWB",
  /**
   * <h5>Horn Hill</h5>House Tyrell.<br><b><i>The Reach.</i></b><br>Bestow
   * (3).<b>Challenges Action:</b> Kneel Horn Hill to give each participating
   * [tyrell] character you control +X STR until the end of the challenge. X is the
   * number of gold Horn Hill has..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  HornHillTbwb = "HORN_HILL_TBWB",
  /**
   * <h5>Donal Noye</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>Bestow (3).
   * No attachments except <i>Weapon</i>.<b>Action:</b> Discard 1 gold from Donal
   * Noye to put a <i>Weapon</i> attachment into play from your hand..<br><i>The
   * Brotherhood Without Banners.</i><br>
   **/
  DonalNoyeTbwb = "DONAL_NOYE_TBWB",
  /**
   * <h5>Ranger's Bow</h5>The Night's
   * Watch.<br><b><i>Weapon.</i></b><br>[thenightswatch] character only.Attached
   * character gets +1 STR.<b>Challenges Action:</b> Kneel Ranger's Bow to choose a
   * defending [thenightswatch] character. Until the end of the challenge, that
   * character gets +2 STR..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  RangersBowTbwb = "RANGERS_BOW_TBWB",
  /**
   * <h5>Patchface</h5>House Baratheon.<br><b><i>Fool.</i></b><br>While another
   * <i>Fool</i> character has a keyword, Patchface gains that keyword.While
   * another <i>Fool</i> character has a challenge icon, Patchface gains that
   * challenge icon..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  PatchfaceTbwb = "PATCHFACE_TBWB",
  /**
   * <h5>King's Blood</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br><i>Bastard</i> or <i>King</i>
   * character you control only. Bestow (3).<b>Plot Action:</b> Kneel attached
   * character and sacrifice King's Blood to discard X power from each opponent's
   * faction card. X is the number of gold King's Blood has..<br><i>The Brotherhood
   * Without Banners.</i><br>
   **/
  KingsBloodTbwb = "KINGS_BLOOD_TBWB",
  /**
   * <h5>Genna Frey</h5>House Lannister.<br><b><i>House Frey.
   * Lady.</i></b><br><b>Reaction:</b> After you win a challenge in which Genna
   * Frey is attacking, if it was the third challenge you initiated this phase, the
   * losing opponent discards 1 card at random from his or her hand. (2 cards
   * instead if you control another attacking <i>House Frey</i>
   * character.).<br><i>The Brotherhood Without Banners.</i><br>
   **/
  GennaFreyTbwb = "GENNA_FREY_TBWB",
  /**
   * <h5>The Goldroad</h5>House
   * Lannister.<br><b><i>Westeros.</i></b><br>Limited.<b>Challenges Action:</b>
   * Kneel The Goldroad to gain 1 gold.+1 Income..<br><i>The Brotherhood Without
   * Banners.</i><br>
   **/
  TheGoldroadTbwb = "THE_GOLDROAD_TBWB",
  /**
   * <h5>Stony Shore Raider</h5>House Greyjoy.<br><b><i>Ironborn.
   * Raider.</i></b><br>Bestow (3).<b>Action:</b> Discard 1 gold from Stony Shore
   * Raider to choose and kneel a location with printed cost 3 or lower. (Limit
   * once per round.).<br><i>The Brotherhood Without Banners.</i><br>
   **/
  StonyShoreRaiderTbwb = "STONY_SHORE_RAIDER_TBWB",
  /**
   * <h5>Pay The Iron Price</h5>House Greyjoy.<br><b>Challenges Action:</b> Choose
   * an attachment in an opponent's discard pile, and put it into play under your
   * control.<b>Reaction:</b> After you win an unopposed challenge, pay 1 gold to
   * return Pay The Iron Price from your discard pile to your hand..<br><i>The
   * Brotherhood Without Banners.</i><br>
   **/
  PayTheIronPriceTbwb = "PAY_THE_IRON_PRICE_TBWB",
  /**
   * <h5>Freedmen</h5>House Targaryen.<br><b><i>Ally.</i></b><br><b>Reaction:</b>
   * After you win a challenge by 5 or more STR as the attacking player, put
   * Freedmen into play from your discard pile..<br><i>The Brotherhood Without
   * Banners.</i><br>
   **/
  FreedmenTbwb = "FREEDMEN_TBWB",
  /**
   * <h5>Warrior's Braid</h5>House Targaryen.<br><b><i>Item.</i></b><br>[targaryen]
   * character only.Attached character gains renown, and gets +1 STR for each bell
   * token on Warrior's Braid.<b>Reaction:</b> After you win a [military] challenge
   * in which attached character is attacking, place a bell token on Warrior's
   * Braid..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  WarriorsBraidTbwb = "WARRIORS_BRAID_TBWB",
  /**
   * <h5>Dornish Spy</h5>House Martell.<br><b><i>Spy.</i></b><br>Ambush
   * (4).<b>Reaction:</b> After Dornish Spy enters play, choose a character. Until
   * the end of the phase, that character loses a challenge icon of your
   * choice..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  DornishSpyTbwb = "DORNISH_SPY_TBWB",
  /**
   * <h5>Locked Away</h5>House
   * Martell.<br><b><i>Condition.</i></b><br>Terminal.<b>Reaction:</b> After the
   * marshaling phase begins, return attached character to its owner's hand (cannot
   * be saved)..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  LockedAwayTbwb = "LOCKED_AWAY_TBWB",
  /**
   * <h5>Beric Dondarrion</h5>Neutral.<br><b><i>Knight. Lord.
   * R'hllor.</i></b><br>Renown.X is the number of kiss tokens Beric Dondarrion
   * has.<b>Forced Reaction:</b> After you marshal Beric Dondarrion, place 6 kiss
   * tokens on him. (Cannot be canceled.)<b>Interrupt:</b> When Beric Dondarrion
   * would be killed, discard a kiss token from him to save him..<br><i>The
   * Brotherhood Without Banners.</i><br>
   **/
  BericDondarrionTbwb = "BERIC_DONDARRION_TBWB",
  /**
   * <h5>Unbridled Generosity</h5>Neutral.<br><b>Action:</b> Choose up to 3 cards.
   * Move 1 gold from the treasury to each of those cards..<br><i>The Brotherhood
   * Without Banners.</i><br>
   **/
  UnbridledGenerosityTbwb = "UNBRIDLED_GENEROSITY_TBWB",
  /**
   * <h5>The Brotherhood Without Banners</h5>Neutral.<br>You cannot include loyal
   * characters in your deck.<b>Reaction:</b> After the challenges phase begins,
   * kneel your faction card to choose a neutral character you control. Until the
   * end of the phase, that character gains (choose one): insight, intimidate,
   * renown, or stealth..<br><i>The Brotherhood Without Banners.</i><br>
   **/
  TheBrotherhoodWithoutBannersTbwb = "THE_BROTHERHOOD_WITHOUT_BANNERS_TBWB",
  /**
   * <h5>Favors From the
   * Crown</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>Reaction:</b> After a card
   * with bestow enters play, place 1 gold from the treasury on that card. (2 gold
   * instead if that card has 3 or more gold on it.).<br><i>The Brotherhood Without
   * Banners.</i><br>
   **/
  FavorsFromTheCrownTbwb = "FAVORS_FROM_THE_CROWN_TBWB",
  /**
   * <h5>Jon Snow (WotW)</h5>The Night's Watch.<br><b><i>Bastard. Steward.
   * Wildling.</i></b><br>Stealth.<b>Reaction:</b> After you win a challenge in
   * which Jon Snow is participating, either: stand each attacking <i>Wildling</i>
   * character, or stand each defending [thenightswatch] character. (Limit once per
   * phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  JonSnowWotW = "JON_SNOW_WotW",
  /**
   * <h5>Bowen Marsh</h5>The Night's Watch.<br><b><i>Lord.
   * Steward.</i></b><br>During [intrigue] challenges, each <i>Steward</i>
   * character you control gains insight.+1 Reserve..<br><i>Watchers on the Wall.</i><br>
   **/
  BowenMarshWotW = "BOWEN_MARSH_WotW",
  /**
   * <h5>Old Bear Mormont (WotW)</h5>The Night's Watch.<br><b><i>Commander.
   * Lord.</i></b><br><b>Reaction:</b> After you win a challenge in which Old Bear
   * Mormont is participating, choose a non-unique character in the losing
   * opponent's discard pile, and put it into play under your
   * control..<br><i>Watchers on the Wall.</i><br>
   **/
  OldBearMormontWotW = "OLD_BEAR_MORMONT_WotW",
  /**
   * <h5>Cotter Pyke</h5>The Night's Watch.<br><b><i>Bastard. Commander.
   * Ironborn.</i></b><br>Stealth.<b>Reaction:</b> After Cotter Pyke bypasses a
   * character using stealth, if there is a <i>Winter</i> plot card revealed,
   * choose a [thenightswatch] character and have it gain stealth until the end of
   * the phase..<br><i>Watchers on the Wall.</i><br>
   **/
  CotterPykeWotW = "COTTER_PYKE_WotW",
  /**
   * <h5>Maester Aemon (WotW)</h5>The Night's Watch.<br><b><i>Maester.
   * Steward.</i></b><br>No attachments except <i>Item</i>.<b>Interrupt:</b> When
   * the challenges phase ends, choose an opponent and a challenge type that has
   * not been initiated against you this phase. That player must satisfy the claim
   * of that challenge type as if you were the winning opponent..<br><i>Watchers on
   * the Wall.</i><br>
   **/
  MaesterAemonWotW = "MAESTER_AEMON_WotW",
  /**
   * <h5>Grizzled Miner</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.Reduce the cost to marshal Grizzled Miner by
   * 1 for each [thenightswatch] attachment and location you control (to a minimum
   * of 1)..<br><i>Watchers on the Wall.</i><br>
   **/
  GrizzledMinerWotW = "GRIZZLED_MINER_WotW",
  /**
   * <h5>Ser Denys Mallister</h5>The Night's Watch.<br><b><i>Commander.
   * Knight.</i></b><br>While Ser Denys Mallister is defending, he gains
   * renown..<br><i>Watchers on the Wall.</i><br>
   **/
  SerDenysMallisterWotW = "SER_DENYS_MALLISTER_WotW",
  /**
   * <h5>Ser Jaremy Rykker</h5>The Night's Watch.<br><b><i>Knight.
   * Ranger.</i></b><br>No attachments except <i>Weapon</i>.Each other
   * <i>Ranger</i> character you control gains a [power] icon..<br><i>Watchers on
   * the Wall.</i><br>
   **/
  SerJaremyRykkerWotW = "SER_JAREMY_RYKKER_WotW",
  /**
   * <h5>Castle Black Mason</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Action:</b> Kneel 2 <i>Builder</i>
   * characters to search the top 10 cards of your deck for a location or
   * attachment, reveal it, and add it to your hand. Shuffle your deck. (Limit
   * twice per round.).<br><i>Watchers on the Wall.</i><br>
   **/
  CastleBlackMasonWotW = "CASTLE_BLACK_MASON_WotW",
  /**
   * <h5>Grenn</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Reaction:</b> After you win a challenge in which Grenn
   * is attacking, move 1 power from the losing opponent's faction card to another
   * attacking [thenightswatch] character. (Up to 2 power instead if that character
   * is standing.).<br><i>Watchers on the Wall.</i><br>
   **/
  GrennWotW = "GRENN_WotW",
  /**
   * <h5>Pyp</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Reaction:</b> After you win a challenge in which Pyp
   * is attacking, choose another attacking [thenightswatch] character. That
   * character gains insight until the end of the phase..<br><i>Watchers on the Wall.</i><br>
   **/
  PypWotW = "PYP_WotW",
  /**
   * <h5>Samwell Tarly (WotW)</h5>The Night's
   * Watch.<br><b><i>Steward.</i></b><br>While Samwell Tarly is participating in a
   * challenge, treat each other participating non-<i>Steward</i> character as if
   * its printed text box were blank (except for <i>Traits</i>)..<br><i>Watchers on
   * the Wall.</i><br>
   **/
  SamwellTarlyWotW = "SAMWELL_TARLY_WotW",
  /**
   * <h5>Satin</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Reaction:</b> After Satin is knelt, choose and stand
   * another <i>Steward</i> character. (Limit twice per phase.).<br><i>Watchers on
   * the Wall.</i><br>
   **/
  SatinWotW = "SATIN_WotW",
  /**
   * <h5>Lost Ranger</h5>The Night's Watch.<br><b><i>Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Forced Interrupt:</b> When the challenges
   * phase ends, if you control no other <i>Ranger</i> characters, sacrifice Lost
   * Ranger..<br><i>Watchers on the Wall.</i><br>
   **/
  LostRangerWotW = "LOST_RANGER_WotW",
  /**
   * <h5>Seasoned Woodsman</h5>The Night's
   * Watch.<br><b><i>Builder.</i></b><br><b>Reaction:</b> After you attach an
   * attachment to Seasoned Woodsman, either: gain 1 gold, or draw 1 card. (Limit
   * twice per phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  SeasonedWoodsmanWotW = "SEASONED_WOODSMAN_WotW",
  /**
   * <h5>Builder at the Wall</h5>The Night's
   * Watch.<br><b><i>Builder.</i></b><br><b>Marshaling Action:</b> Kneel Builder at
   * the Wall to reduce the cost of the next [thenightswatch] attachment or
   * location you marshal this phase by 1..<br><i>Watchers on the Wall.</i><br>
   **/
  BuilderAtTheWallWotW = "BUILDER_AT_THE_WALL_WotW",
  /**
   * <h5>The New Gift</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel a <i>Steward</i>
   * character to gain 1 gold. (Limit twice per phase.)<b>Challenges Action:</b>
   * Kneel a <i>Steward</i> character to draw 1 card. (Limit twice per
   * phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  TheNewGiftWotW = "THE_NEW_GIFT_WotW",
  /**
   * <h5>Abandoned Stronghold</h5>The Night's Watch.<br><b><i>Stronghold. The
   * North.</i></b><br><b>Action:</b> Kneel Abandoned Stronghold to choose a
   * defending character. Until the end of the challenge, that character gets +X
   * STR. X is the number of <i>Builder</i> characters you control..<br><i>Watchers
   * on the Wall.</i><br>
   **/
  AbandonedStrongholdWotW = "ABANDONED_STRONGHOLD_WotW",
  /**
   * <h5>Queenscrown</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Action:</b> Kneel Queenscrown to reveal the top 3 cards
   * of an opponent's deck. Choose up to 1 character revealed this way and place it
   * in that player's discard pile. Place the other cards on the bottom of that
   * player's deck in any order..<br><i>Watchers on the Wall.</i><br>
   **/
  QueenscrownWotW = "QUEENSCROWN_WotW",
  /**
   * <h5>Catapult on the Wall</h5>The Night's
   * Watch.<br><b><i>Weapon.</i></b><br><b>Action:</b> Kneel Catapult on the Wall
   * and attached character to choose and kill an attacking character with STR 4 or
   * lower. Attached character cannot stand during the standing phase this
   * round..<br><i>Watchers on the Wall.</i><br>
   **/
  CatapultOnTheWallWotW = "CATAPULT_ON_THE_WALL_WotW",
  /**
   * <h5>Ghost (WotW)</h5>The Night's
   * Watch.<br><b><i>Direwolf.</i></b><br>[thenightswatch] or [stark] character
   * only.<b>Interrupt:</b> When attached character would be killed, return Ghost
   * to your hand to save that character..<br><i>Watchers on the Wall.</i><br>
   **/
  GhostWotW = "GHOST_WotW",
  /**
   * <h5>Sworn to the Watch</h5>The Night's
   * Watch.<br><b><i>Condition.</i></b><br>Attached character gains the
   * [thenightswatch] affiliation.While attached character has:- a [military] icon,
   * it gains the <i>Ranger</i> trait.- an [intrigue] icon, it gains the
   * <i>Steward</i> trait.- a [power] icon, it gains the <i>Builder</i>
   * trait..<br><i>Watchers on the Wall.</i><br>
   **/
  SwornToTheWatchWotW = "SWORN_TO_THE_WATCH_WotW",
  /**
   * <h5>Now My Watch Begins</h5>The Night's Watch.<br><b>Reaction:</b> After a
   * character with printed cost 5 or lower is placed in an opponent's discard
   * pile, put that character into play under your control..<br><i>Watchers on the Wall.</i><br>
   **/
  NowMyWatchBeginsWotW = "NOW_MY_WATCH_BEGINS_WotW",
  /**
   * <h5>I Shall Win No Glory</h5>The Night's Watch.<br><b>Reaction:</b> After a
   * challenge is initiated against you, kneel 3 <i>Builder</i> characters, 3
   * <i>Ranger</i> characters, or 3 <i>Steward</i> characters to end the challenge
   * immediately with no winner or loser..<br><i>Watchers on the Wall.</i><br>
   **/
  IShallWinNoGloryWotW = "I_SHALL_WIN_NO_GLORY_WotW",
  /**
   * <h5>Marya Seaworth</h5>House Baratheon.<br><b><i>Companion.
   * Lady.</i></b><br><b>Reaction:</b> After a character is bypassed using stealth,
   * pay 1 gold to kneel it. (Limit twice per phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  MaryaSeaworthWotW = "MARYA_SEAWORTH_WotW",
  /**
   * <h5>Black Betha</h5>House Baratheon.<br><b><i>Warship.</i></b><br>While you
   * control Ser Davos Seaworth, he gains renown.<b>Action:</b> Kneel Black Betha
   * to choose an attacking character. Until the end of the challenge, that
   * character gets +X STR. X is the number of kneeling characters the defending
   * player controls..<br><i>Watchers on the Wall.</i><br>
   **/
  BlackBethaWotW = "BLACK_BETHA_WotW",
  /**
   * <h5>Salt Wife</h5>House Greyjoy.<br><b><i>Companion.</i></b><br><b>Challenges
   * Action:</b> Sacrifice Salt Wife to choose a character. Until the end of the
   * phase, that character cannot be declared as a defender..<br><i>Watchers on the Wall.</i><br>
   **/
  SaltWifeWotW = "SALT_WIFE_WotW",
  /**
   * <h5>Raiding the Bay of Ice</h5>House Greyjoy.<br><b>Reaction:</b> After you
   * win a challenge as the attacking player, kneel a <i>Warship</i> location to
   * choose a non-limited location controlled by the losing opponent, and place it
   * on top of its owner's deck..<br><i>Watchers on the Wall.</i><br>
   **/
  RaidingTheBayOfIceWotW = "RAIDING_THE_BAY_OF_ICE_WotW",
  /**
   * <h5>Ulf Son of Umar</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br><b>Reaction:</b> After a
   * <i>Clansman</i> character enters play under your control, Ulf Son of Umar gets
   * +X STR until the end of the phase. X is that character's printed STR. (Limit 3
   * times per phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  UlfSonOfUmarWotW = "ULF_SON_OF_UMAR_WotW",
  /**
   * <h5>There Are No Men Like Me</h5>House Lannister.<br><b>Action:</b> Choose a
   * <i>Knight</i> character. Until the end of the phase, that character does not
   * kneel when declared as an attacker or defender in a [military]
   * challenge..<br><i>Watchers on the Wall.</i><br>
   **/
  ThereAreNoMenLikeMeWotW = "THERE_ARE_NO_MEN_LIKE_ME_WotW",
  /**
   * <h5>Southron Messenger</h5>House Martell.<br><b><i>Ally.</i></b><br>Ambush
   * (5).<b>Reaction:</b> After Southron Messenger enters play during a challenge,
   * choose a participating character with fewer than 2 challenge icons, and return
   * that character to its owner's hand..<br><i>Watchers on the Wall.</i><br>
   **/
  SouthronMessengerWotW = "SOUTHRON_MESSENGER_WotW",
  /**
   * <h5>Lingering Venom</h5>House
   * Martell.<br><b><i>Condition.</i></b><br>Terminal.<b>Reaction:</b> After you
   * lose a challenge, place a venom token on Lingering Venom. Then, if attached
   * character's STR is equal to or lower than the number of venom tokens on
   * Lingering Venom, kill it..<br><i>Watchers on the Wall.</i><br>
   **/
  LingeringVenomWotW = "LINGERING_VENOM_WotW",
  /**
   * <h5>Jeyne Poole</h5>House Stark.<br><b><i>Companion.</i></b><br><b>Marshaling
   * Action:</b> Sacrifice Jeyne Poole to return a <i>Lady</i> character from your
   * discard pile to your hand..<br><i>Watchers on the Wall.</i><br>
   **/
  JeynePooleWotW = "JEYNE_POOLE_WotW",
  /**
   * <h5>Summer (WotW)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>Unique
   * [stark] character only.<b>Action:</b> Kneel attached character to have it
   * participate in a [military] challenge on your side. (Limit once per
   * challenge.)<b>Action:</b> Pay 1 gold to attach Summer to a different
   * character. (Limit once per phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  SummerWotW = "SUMMER_WotW",
  /**
   * <h5>Dothraki Honor Guard</h5>House Targaryen.<br><b><i>Army. Dothraki.
   * Guard.</i></b><br>No attachments.Dothraki Honor Guard gets -1 STR for each
   * card in your hand..<br><i>Watchers on the Wall.</i><br>
   **/
  DothrakiHonorGuardWotW = "DOTHRAKI_HONOR_GUARD_WotW",
  /**
   * <h5>Plaza of Pride</h5>House
   * Targaryen.<br><b><i>Astapor.</i></b><br><b>Action:</b> Kneel Plaza of Pride
   * and discard a card from your hand to choose and stand a character with printed
   * cost X or lower. X is 3 higher than the printed cost of the discarded
   * card..<br><i>Watchers on the Wall.</i><br>
   **/
  PlazaOfPrideWotW = "PLAZA_OF_PRIDE_WotW",
  /**
   * <h5>Ser Jon Fossoway</h5>House Tyrell.<br><b><i>Knight.</i></b><br>While Ser
   * Jon Fossoway's STR is 5 or higher, he gains renown..<br><i>Watchers on the Wall.</i><br>
   **/
  SerJonFossowayWotW = "SER_JON_FOSSOWAY_WotW",
  /**
   * <h5>The Honeywine</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br><b>Reaction:</b> After you win a challenge by 5 or more STR
   * as the attacking player, The Honeywine gains 1 power..<br><i>Watchers on the Wall.</i><br>
   **/
  TheHoneywineWotW = "THE_HONEYWINE_WotW",
  /**
   * <h5>Rattleshirt</h5>Neutral.<br><b><i>Wildling.</i></b><br>While Rattleshirt
   * is attacking alone, each character without attachments cannot be declared as a
   * defender..<br><i>Watchers on the Wall.</i><br>
   **/
  RattleshirtWotW = "RATTLESHIRT_WotW",
  /**
   * <h5>Dalla</h5>Neutral.<br><b><i>Wildling.</i></b><br><b>Reaction:</b> After a
   * <i>Wildling</i> character enters play under your control, draw 1 card. (Limit
   * once per phase.).<br><i>Watchers on the Wall.</i><br>
   **/
  DallaWotW = "DALLA_WotW",
  /**
   * <h5>Crow Killers</h5>Neutral.<br><b><i>Wildling.</i></b><br>Crow Killers does
   * not kneel when declared as an attacker against an opponent whose reserve value
   * is higher than yours..<br><i>Watchers on the Wall.</i><br>
   **/
  CrowKillersWotW = "CROW_KILLERS_WotW",
  /**
   * <h5>The Frozen Shore</h5>Neutral.<br><b><i>The
   * North.</i></b><br><b>Reaction:</b> After you win a challenge, kneel The Frozen
   * Shore to choose and stand 1 attacking <i>Wildling</i> character for each
   * <i>Winter</i> plot card revealed..<br><i>Watchers on the Wall.</i><br>
   **/
  TheFrozenShoreWotW = "THE_FROZEN_SHORE_WotW",
  /**
   * <h5>Weirwood Bow</h5>Neutral.<br><b><i>Weapon.</i></b><br>[thenightswatch] or
   * <i>Wildling</i> character only.<b>Action:</b> Kneel Weirwood Bow to choose a
   * defending character. That character gets -2 STR until the end of the
   * challenge..<br><i>Watchers on the Wall.</i><br>
   **/
  WeirwoodBowWotW = "WEIRWOOD_BOW_WotW",
  /**
   * <h5>Scaling the Wall</h5>Neutral.<br><b>Reaction:</b> After you win a
   * challenge in which you control an attacking <i>Wildling</i> character, choose
   * a non-limited location controlled by the losing opponent. Return that location
   * to its owner's hand..<br><i>Watchers on the Wall.</i><br>
   **/
  ScalingTheWallWotW = "SCALING_THE_WALL_WotW",
  /**
   * <h5>"The Last of the
   * Giants"</h5>Neutral.<br><b><i>Song.</i></b><br><b>Action:</b> Put a neutral
   * character into play from your hand. Until the end of the phase, that character
   * gains intimidate. At the end of the phase, if that character is still in play,
   * kill it (cannot be saved)..<br><i>Watchers on the Wall.</i><br>
   **/
  TheLastOfTheGiantsWotW = "THE_LAST_OF_THE_GIANTS_WotW",
  /**
   * <h5>The Fire That Burns</h5>The Night's
   * Watch.<br><b><i>Winter.</i></b><br>Each [thenightswatch] character you control
   * does not kneel when declared as a defender..<br><i>Watchers on the Wall.</i><br>
   **/
  TheFireThatBurnsWotW = "THE_FIRE_THAT_BURNS_WotW",
  /**
   * <h5>Retaliation</h5>Neutral.<br><b><i>War.</i></b><br>If you win initiative,
   * you must choose an opponent to be the first player..<br><i>Watchers on the Wall.</i><br>
   **/
  RetaliationWotW = "RETALIATION_WotW",
  /**
   * <h5>Whisper Campaign</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>Forced
   * Reaction:</b> After a character without an [intrigue] icon enters play, kneel
   * it..<br><i>Watchers on the Wall.</i><br>
   **/
  WhisperCampaignWotW = "WHISPER_CAMPAIGN_WotW",
  /**
   * <h5>Called Into Service</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Reveal the top card of your deck. If it is a character, put it
   * into play. If it is a non-character card, draw it and gain 2
   * gold..<br><i>Watchers on the Wall.</i><br>
   **/
  CalledIntoServiceWotW = "CALLED_INTO_SERVICE_WotW",
  /**
   * <h5>The White Shadows</h5>Neutral.<br><b><i>Omen.</i></b><br><b>Reaction:</b>
   * After a character an opponent controls is killed, put it into play under your
   * control. While that character is in play, treat its printed text box as if it
   * were blank. At the end of the phase, if that card is still in play, place it
   * in its owner's dead pile (cannot be saved)..<br><i>Watchers on the Wall.</i><br>
   **/
  TheWhiteShadowsWotW = "THE_WHITE_SHADOWS_WotW",
  /**
   * <h5>Name Day Tourney</h5>Neutral.<br><b><i>Summer.</i></b><br><b>Reaction:</b>
   * After you win a challenge in which a <i>Knight</i> character you control is
   * attacking or defending alone, choose a <i>Lord</i> or <i>Lady</i> character
   * you control and have it gain 1 power..<br><i>Watchers on the Wall.</i><br>
   **/
  NameDayTourneyWotW = "NAME_DAY_TOURNEY_WotW",
  /**
   * <h5>Frozen Expanse</h5>Neutral.<br><b><i>Winter.</i></b><br>Each character
   * with STR 2 or lower cannot stand..<br><i>Watchers on the Wall.</i><br>
   **/
  FrozenExpanseWotW = "FROZEN_EXPANSE_WotW",
  /**
   * <h5>Archmaester's Key</h5>Neutral.<br><b><i>Item.
   * Citadel.</i></b><br><i>Maester</i> character only.<b>Action:</b> Kneel
   * attached character to choose an event in an opponent's discard pile. Once this
   * phase, you may play that event as if it were in your hand. If you do, place it
   * on the bottom of its owner's deck instead of placing it in that player's
   * discard pile..<br><i>The Archmaester's Key.</i><br>
   **/
  ArchmaestersKeyTak = "ARCHMAESTERS_KEY_TAK",
  /**
   * <h5>Dreadfort Maester</h5>House Stark.<br><b><i>House Bolton.
   * Maester.</i></b><br><b>Reaction:</b> After you initiate a [military] or
   * [intrigue] challenge, sacrifice Dreadfort Maester to raise the claim value on
   * your revealed plot card by 1 until the end of the challenge..<br><i>The
   * Archmaester's Key.</i><br>
   **/
  DreadfortMaesterTak = "DREADFORT_MAESTER_TAK",
  /**
   * <h5>At Night They Howl</h5>House Stark.<br><b>Challenges Action:</b> Choose
   * and stand any number of <i>Direwolf</i> characters and characters with a
   * <i>Direwolf</i> attachment..<br><i>The Archmaester's Key.</i><br>
   **/
  AtNightTheyHowlTak = "AT_NIGHT_THEY_HOWL_TAK",
  /**
   * <h5>Septa Nysterica</h5>House Tyrell.<br><b><i>The
   * Seven.</i></b><br><b>Action:</b> Kneel Septa Nysterica to choose an attacking
   * character with STR 4 or lower. Stand that character and remove it from the
   * challenge..<br><i>The Archmaester's Key.</i><br>
   **/
  SeptaNystericaTak = "SEPTA_NYSTERICA_TAK",
  /**
   * <h5>Oathkeeper</h5>House Tyrell.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>Attached character gets +2 STR.<b>Reaction:</b> After you
   * win a challenge by 5 or more STR in which attached character is participating,
   * sacrifice Oathkeeper to search your deck for a non-[tyrell] character, reveal
   * it, and add it to your hand. Shuffle your deck..<br><i>The Archmaester's Key.</i><br>
   **/
  OathkeeperTak = "OATHKEEPER_TAK",
  /**
   * <h5>Young Builder</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>Bestow
   * (3). No attachments except <i>Weapon</i>.<b>Reaction:</b> After a
   * [thenightswatch] location or attachment enters play under your control,
   * discard 1 gold from Young Builder to draw 1 card..<br><i>The Archmaester's Key.</i><br>
   **/
  YoungBuilderTak = "YOUNG_BUILDER_TAK",
  /**
   * <h5>"The Rat Cook"</h5>The Night's
   * Watch.<br><b><i>Song.</i></b><br><b>Marshaling Action:</b> Choose a character
   * with printed cost X or lower. X is the number of Steward characters you
   * control. Until the end of the round, take control of that character, and treat
   * its printed text box as if it were blank (except for Traits)..<br><i>The
   * Archmaester's Key.</i><br>
   **/
  TheRatCookTak = "THE_RAT_COOK_TAK",
  /**
   * <h5>Queen's Men</h5>House Baratheon.<br><b><i>Ally.
   * R'hllor.</i></b><br><b>Reaction:</b> After you marshal Queen's Men, choose an
   * opponent and look at his or her hand. Then, you may kneel a non-[baratheon]
   * character to choose and discard 1 non-character card from that
   * hand..<br><i>The Archmaester's Key.</i><br>
   **/
  QueensMenTak = "QUEENS_MEN_TAK",
  /**
   * <h5>Traitor to the Crown</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br>Opponent's character only.Attached
   * character does not contribute its STR to [power] challenges or to its
   * controller's total for dominance..<br><i>The Archmaester's Key.</i><br>
   **/
  TraitorToTheCrownTak = "TRAITOR_TO_THE_CROWN_TAK",
  /**
   * <h5>Maester at the Rock</h5>House
   * Lannister.<br><b><i>Maester.</i></b><br><b>Reaction:</b> After you play a
   * [lannister] event, kneel Maester at the Rock to move that event from your
   * discard pile to the top of your deck..<br><i>The Archmaester's Key.</i><br>
   **/
  MaesterAtTheRockTak = "MAESTER_AT_THE_ROCK_TAK",
  /**
   * <h5>Ashemark</h5>House Lannister.<br><b><i>The Westerlands.</i></b><br>Bestow
   * (3).<b>Reaction:</b> After a phase begins, kneel and sacrifice Ashemark to
   * return each character with printed cost X or lower to its owner's hand. X is
   * the number of gold on Ashemark..<br><i>The Archmaester's Key.</i><br>
   **/
  AshemarkTak = "ASHEMARK_TAK",
  /**
   * <h5>Acolyte of the Waves</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Interrupt:</b> When Acolyte of the Waves is killed, gain 1
   * power for your faction..<br><i>The Archmaester's Key.</i><br>
   **/
  AcolyteOfTheWavesTak = "ACOLYTE_OF_THE_WAVES_TAK",
  /**
   * <h5>Nagga's Ribs</h5>House Greyjoy.<br><b><i>Iron Islands.</i></b><br>For each
   * character in your dead pile, Nagga's Ribs contributes 2 STR to your total for
   * dominance.<b>Reaction:</b> After a character is placed in your discard pile,
   * move it to your dead pile..<br><i>The Archmaester's Key.</i><br>
   **/
  NaggasRibsTak = "NAGGAS_RIBS_TAK",
  /**
   * <h5>Daario Naharis</h5>House Targaryen.<br><b><i>Companion.
   * Mercenary.</i></b><br>Renown.<b>Reaction:</b> After you win a challenge in
   * which Daario Naharis is attacking, choose another <i>Ally</i>,
   * <i>Companion</i>, or <i>Mercenary</i> character. Stand that character and take
   * control of it until the end of the phase..<br><i>The Archmaester's Key.</i><br>
   **/
  DaarioNaharisTak = "DAARIO_NAHARIS_TAK",
  /**
   * <h5>Bloody Arakh</h5>House
   * Targaryen.<br><b><i>Weapon.</i></b><br><i>Dothraki</i> character
   * only.<b>Reaction:</b> After you win a [military] challenge in which attached
   * character is attacking, sacrifice Bloody Arakh. Then, you may initiate an
   * additional [military] challenge this phase. (Max 1 per phase.).<br><i>The
   * Archmaester's Key.</i><br>
   **/
  BloodyArakhTak = "BLOODY_ARAKH_TAK",
  /**
   * <h5>Dorea Sand</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Reaction:</b> After Dorea Sand enters play, choose
   * another character with printed cost X or lower and return it to its owner's
   * hand. X is the number of <i>Sand Snake</i> characters you control..<br><i>The
   * Archmaester's Key.</i><br>
   **/
  DoreaSandTak = "DOREA_SAND_TAK",
  /**
   * <h5>The Water Gardens</h5>House
   * Martell.<br><b><i>Dorne.</i></b><br><b>Action:</b> Kneel The Water Gardens to
   * reduce the cost of the next non-character card you marshal, play, or ambush
   * this phase by X. X is the number of plot cards in your used pile..<br><i>The
   * Archmaester's Key.</i><br>
   **/
  TheWaterGardensTak = "THE_WATER_GARDENS_TAK",
  /**
   * <h5>Mag the Mighty</h5>Neutral.<br><b><i>Giant. Wildling.</i></b><br>Renown.
   * No attachments except <i>Weapon</i>.<b>Forced Reaction:</b> After you win a
   * challenge in which Mag the Mighty is participating, choose and kill a
   * character you control. Then, the losing opponent chooses and kills a character
   * he or she controls..<br><i>The Archmaester's Key.</i><br>
   **/
  MagTheMightyTak = "MAG_THE_MIGHTY_TAK",
  /**
   * <h5>The Iron Bank</h5>Neutral.<br><b><i>Braavos.</i></b><br>Bestow (1).During
   * the marshaling phase, you may spend gold on The Iron Bank as if it were in
   * your gold pool.<b>Reaction:</b> After you collect income, move X gold from the
   * treasury to The Iron Bank. X is the number of gold on The Iron
   * Bank..<br><i>The Archmaester's Key.</i><br>
   **/
  TheIronBankTak = "THE_IRON_BANK_TAK",
  /**
   * <h5>Valar Dohaeris</h5>Neutral.<br><b><i>Omen.</i></b><br><b>When
   * Revealed:</b> Each player chooses any number of characters he or she controls
   * with a total printed cost of 10 or lower. Place each character not chosen on
   * the bottom of its owner's deck (cannot be saved)..<br><i>The Archmaester's Key.</i><br>
   **/
  ValarDohaerisTak = "VALAR_DOHAERIS_TAK",
  /**
   * <h5>Maege Mormont</h5>House Stark.<br><b><i>House Mormont.
   * Lady.</i></b><br>Renown.<b>Reaction:</b> After you win a challenge in which
   * you control a participating <i>House Mormont</i> character, reveal the top
   * card of your deck. If it is a [stark] card, draw it..<br><i>Journey to
   * Oldtown.</i><br>
   **/
  MaegeMormontJtO = "MAEGE_MORMONT_JtO",
  /**
   * <h5>The House of Black and White</h5>House
   * Stark.<br><b><i>Braavos.</i></b><br>Bestow (10).<b>Dominance Action:</b> Kneel
   * The House of Black and White and discard X gold from it to choose and kill a
   * character with printed STR X or lower (X cannot be 0). You may move any number
   * of gold from your gold pool to The House of Black and White..<br><i>Journey to
   * Oldtown.</i><br>
   **/
  TheHouseOfBlackAndWhiteJtO = "THE_HOUSE_OF_BLACK_AND_WHITE_JtO",
  /**
   * <h5>Brightwater Knight</h5>House Tyrell.<br><b><i>House Florent.
   * Knight.</i></b><br>Bestow (3).<b>Marshaling Action:</b> Discard 1 gold from
   * Brightwater Knight to reduce the cost of the next <i>Knight</i> character you
   * marshal this phase by 2. (Limit once per phase.).<br><i>Journey to
   * Oldtown.</i><br>
   **/
  BrightwaterKnightJtO = "BRIGHTWATER_KNIGHT_JtO",
  /**
   * <h5>Oldtown</h5>House Tyrell.<br><b><i>Oldtown. The
   * Reach.</i></b><br><b>Action:</b> Kneel Oldtown to name a cardtype (character,
   * location, attachment, or event). Then, reveal the top card of your deck. If
   * the revealed card has that cardtype, draw it and gain 1 power for your
   * faction..<br><i>Journey to Oldtown.</i><br>
   **/
  OldtownJtO = "OLDTOWN_JtO",
  /**
   * <h5>Dareon</h5>The Night's Watch.<br><b><i>Minstrel.
   * Steward.</i></b><br><b>Reaction:</b> After you play a <i>Song</i> event,
   * choose an opponent. Move 1 gold from that player's gold pool to your own.
   * (Limit once per phase.).<br><i>Journey to Oldtown.</i><br>
   **/
  DareonJtO = "DAREON_JtO",
  /**
   * <h5>Journey to Oldtown</h5>The Night's Watch.<br><b>Reaction:</b> After the
   * plot phase begins, choose a character you control. Remove it from the game
   * until the beginning of the next plot phase..<br><i>Journey to Oldtown.</i><br>
   **/
  JourneyToOldtownJtO = "JOURNEY_TO_OLDTOWN_JtO",
  /**
   * <h5>Devan Seaworth</h5>House Baratheon.<br><b><i>Companion.</i></b><br>Bestow
   * (3).<b>Reaction:</b> After you win dominance, discard X gold from Devan
   * Seaworth to search your deck for a non-limited location with printed cost X or
   * lower, reveal it, and put it into play (X cannot be 0). Shuffle your
   * deck..<br><i>Journey to Oldtown.</i><br>
   **/
  DevanSeaworthJtO = "DEVAN_SEAWORTH_JtO",
  /**
   * <h5>Stannis's Wrath</h5>House Baratheon.<br><b>Action:</b> Choose and kneel a
   * character without a [power] icon..<br><i>Journey to Oldtown.</i><br>
   **/
  StannissWrathJtO = "STANNISS_WRATH_JtO",
  /**
   * <h5>Black Ears</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br><b>Reaction:</b> After a character is
   * killed, pay 2 gold to put Black Ears into play from your hand..<br><i>Journey
   * to Oldtown.</i><br>
   **/
  BlackEarsJtO = "BLACK_EARS_JtO",
  /**
   * <h5>Kingslayer</h5>House
   * Lannister.<br><b><i>Title.</i></b><br><i>Kingsguard</i> character only.
   * Terminal.<b>Action:</b> Kneel attached character to choose and kill a
   * character with 2 or more power. (Limit once per game.)<b>Forced Interrupt:</b>
   * When attached character leaves play, each opponent gains 2 power for his or
   * her faction..<br><i>Journey to Oldtown.</i><br>
   **/
  KingslayerJtO = "KINGSLAYER_JtO",
  /**
   * <h5>Tris Botley</h5>House Greyjoy.<br><b><i>House Botley.
   * Lord.</i></b><br>Pillage.<b>Action:</b> Choose a card in an opponent's discard
   * pile and remove it from the game. Until Tris Botley leaves play, that player
   * cannot marshal or play any copy of that card. (Limit once per
   * round.).<br><i>Journey to Oldtown.</i><br>
   **/
  TrisBotleyJtO = "TRIS_BOTLEY_JtO",
  /**
   * <h5>Black Wind</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>While you
   * control Asha Greyjoy, she gains renown.<b>Reaction:</b> After a character you
   * control discards a location or attachment using pillage, draw 1 card. (Limit
   * twice per phase.).<br><i>Journey to Oldtown.</i><br>
   **/
  BlackWindJtO = "BLACK_WIND_JtO",
  /**
   * <h5>Stormcrows</h5>House Targaryen.<br><b><i>Mercenary.</i></b><br>Bestow
   * (5).<b>Challenges Action:</b> Discard X gold from Stormcrows to choose X
   * characters. Until the end of the phase, each of those characters gets -1 STR.
   * (Limit once per phase.).<br><i>Journey to Oldtown.</i><br>
   **/
  StormcrowsJtO = "STORMCROWS_JtO",
  /**
   * <h5>Consuming Flames</h5>House Targaryen.<br><b>Challenges Action:</b> Discard
   * another [targaryen] card from your hand to choose a participating character.
   * Until the end of the phase, that character gets -3 STR and is killed if its
   * STR is 0..<br><i>Journey to Oldtown.</i><br>
   **/
  ConsumingFlamesJtO = "CONSUMING_FLAMES_JtO",
  /**
   * <h5>Arianne Martell (JtO)</h5>House
   * Martell.<br><b><i>Lady.</i></b><br>Insight.<b>Challenges Action:</b> Return
   * Arianne Martell to your hand to choose a character with a lower STR than hers,
   * and return it to its owner's hand..<br><i>Journey to Oldtown.</i><br>
   **/
  ArianneMartellJtO = "ARIANNE_MARTELL_JtO",
  /**
   * <h5>Change of Plans</h5>House Martell.<br><b>Reaction:</b> After you lose a
   * challenge, if there are fewer than 5 plot cards in your used pile, move a card
   * from your plot deck to the bottom of your used pile..<br><i>Journey to
   * Oldtown.</i><br>
   **/
  ChangeOfPlansJtO = "CHANGE_OF_PLANS_JtO",
  /**
   * <h5>Thoros of Myr</h5>Neutral.<br><b><i>Brotherhood.
   * R'hllor.</i></b><br>Renown.<b>Interrupt:</b> When another non-loyal character
   * you control would be killed, kneel Thoros of Myr and discard 1 power from him
   * to save that character..<br><i>Journey to Oldtown.</i><br>
   **/
  ThorosOfMyrJtO = "THOROS_OF_MYR_JtO",
  /**
   * <h5>Gates of the Moon</h5>Neutral.<br><b><i>Contested. House
   * Arryn.</i></b><br>Limited.Increase the gold value on each opponent's revealed
   * plot card by 1.+2 Income..<br><i>Journey to Oldtown.</i><br>
   **/
  GatesOfTheMoonJtO = "GATES_OF_THE_MOON_JtO",
  /**
   * <h5>The House With the Red Door</h5>Neutral.<br><b><i>Dream.</i></b><br>After
   * all agendas are announced, search your deck for a non-limited unique location
   * with printed cost 3 or lower and put it into play. That location cannot be
   * discarded from play by card effects.You cannot spend more than 4 gold during
   * setup..<br><i>Journey to Oldtown.</i><br>
   **/
  TheHouseWithTheRedDoorJtO = "THE_HOUSE_WITH_THE_RED_DOOR_JtO",
  /**
   * <h5>Sailing the Summer Sea</h5>Neutral.<br><b><i>Summer.</i></b><br>You may
   * initiate an additional [power] challenge during the challenges phase. You
   * cannot initiate [military] or [intrigue] challenges..<br><i>Journey to
   * Oldtown.</i><br>
   **/
  SailingTheSummerSeaJtO = "SAILING_THE_SUMMER_SEA_JtO",
  /**
   * <h5>Ramsay Snow</h5>House Stark.<br><b><i>Bastard. House
   * Bolton.</i></b><br><b>Forced Reaction:</b> After Ramsay Snow enters play, each
   * player sacrifices a character, if able..<br><i>Kingsmoot.</i><br>
   **/
  RamsaySnowKm = "RAMSAY_SNOW_Km",
  /**
   * <h5>The Dreadfort</h5>House Stark.<br><b><i>House Bolton. The
   * North.</i></b><br><b>Reaction:</b> After a character you control is
   * sacrificed, kneel The Dreadfort to choose and stand a <i>House Bolton</i> or
   * non-[stark] character..<br><i>Kingsmoot.</i><br>
   **/
  TheDreadfortKm = "THE_DREADFORT_Km",
  /**
   * <h5>Ser Hyle Hunt</h5>House Tyrell.<br><b><i>Knight.</i></b><br><b>Action:</b>
   * During a challenge in which Ser Hyle Hunt is participating, pay 1 gold to
   * choose a participating character with a lower STR than his. Stand that
   * character and remove it from the challenge. (Limit once per
   * challenge.).<br><i>Kingsmoot.</i><br>
   **/
  SerHyleHuntKm = "SER_HYLE_HUNT_Km",
  /**
   * <h5>The Bounty of Highgarden</h5>House Tyrell.<br>Limited.<b>Action:</b> Gain
   * 5 gold. (Cannot be canceled.).<br><i>Kingsmoot.</i><br>
   **/
  TheBountyOfHighgardenKm = "THE_BOUNTY_OF_HIGHGARDEN_Km",
  /**
   * <h5>Haunted Forest Scout</h5>The Night's Watch.<br><b><i>Ally.
   * Ranger.</i></b><br>No attachments except <i>Weapon</i>.Haunted Forest Scout
   * cannot be declared as a defender.While you control 3 or more <i>Ranger</i>
   * characters, Haunted Forest Scout does not kneel when declared as an
   * attacker..<br><i>Kingsmoot.</i><br>
   **/
  HauntedForestScoutKm = "HAUNTED_FOREST_SCOUT_Km",
  /**
   * <h5>Mole's Town</h5>The Night's Watch.<br><b><i>The North.</i></b><br>Bestow
   * (4).<b>Challenges Action:</b> Kneel Mole's Town to choose a character without
   * gold. Move 1 gold from Mole's Town to that character. Then, that character
   * cannot be declared as an attacker until the end of the
   * phase..<br><i>Kingsmoot.</i><br>
   **/
  MolesTownKm = "MOLES_TOWN_Km",
  /**
   * <h5>Lyseni Pirate</h5>House Baratheon.<br><b><i>Raider.
   * Smuggler.</i></b><br>While you control a <i>Warship</i> location, Lyseni
   * Pirate gains stealth.<b>Reaction:</b> After you win a challenge in which
   * Lyseni Pirate is attacking, move 1 gold from the losing opponent’s gold pool
   * or a card that player controls to your gold pool..<br><i>Kingsmoot.</i><br>
   **/
  LyseniPirateKm = "LYSENI_PIRATE_Km",
  /**
   * <h5>Laughing Lord</h5>House
   * Baratheon.<br><b><i>Warship.</i></b><br><b>Reaction:</b> After you initiate a
   * challenge, kneel Laughing Lord to choose an attacking [baratheon] character.
   * Until the end of the challenge, that character gains
   * intimidate..<br><i>Kingsmoot.</i><br>
   **/
  LaughingLordKm = "LAUGHING_LORD_Km",
  /**
   * <h5>Raff the Sweetling</h5>House
   * Lannister.<br><b><i>Ally.</i></b><br>Pillage.<b>Reaction:</b> After Raff the
   * Sweetling discards a character using pillage, choose a character with printed
   * cost 2 or lower and return it to its owner’s hand..<br><i>Kingsmoot.</i><br>
   **/
  RaffTheSweetlingKm = "RAFF_THE_SWEETLING_Km",
  /**
   * <h5>Sparring in Secret</h5>House Lannister.<br><b>Action:</b> Kneel a
   * <i>Knight</i> character to choose and stand another <i>Knight</i>
   * character..<br><i>Kingsmoot.</i><br>
   **/
  SparringInSecretKm = "SPARRING_IN_SECRET_Km",
  /**
   * <h5>Asha Greyjoy (Km)</h5>House Greyjoy.<br><b><i>Captain. Ironborn.
   * Lady.</i></b><br>Pillage. Stealth.<b>Reaction:</b> After Asha Greyjoy discards
   * a card using pillage, search the top X cards of your deck for a card and add
   * it to your hand. Shuffle your deck. X is the number of cards in the losing
   * opponent's discard pile..<br><i>Kingsmoot.</i><br>
   **/
  AshaGreyjoyKm = "ASHA_GREYJOY_Km",
  /**
   * <h5>Kingsmoot</h5>House Greyjoy.<br><b>Reaction:</b> After you win dominance,
   * choose a unique [greyjoy] character you control. That character gains 1 power
   * for each unique [greyjoy] character you control. (Max 1 per
   * round.).<br><i>Kingsmoot.</i><br>
   **/
  KingsmootKm = "KINGSMOOT_Km",
  /**
   * <h5>Jhiqui</h5>House Targaryen.<br><b><i>Companion.
   * Dothraki.</i></b><br><b>Reaction:</b> After you win a challenge, discard 1
   * card from your hand to have a participating <i>Lord</i> or <i>Lady</i>
   * character gain 1 power..<br><i>Kingsmoot.</i><br>
   **/
  JhiquiKm = "JHIQUI_Km",
  /**
   * <h5>The Skahazadhan</h5>House
   * Targaryen.<br><b><i>Essos.</i></b><br><b>Reaction:</b> After you reveal a plot
   * card, kneel The Skahazadhan and discard 1 card from your hand to gain 2 gold.
   * (3 gold instead if that plot card has the <i>Summer</i>
   * trait.).<br><i>Kingsmoot.</i><br>
   **/
  TheSkahazadhanKm = "THE_SKAHAZADHAN_Km",
  /**
   * <h5>Darkstar (Km)</h5>House Martell.<br><b><i>House Dayne.
   * Knight.</i></b><br>Stealth.<b>Reaction:</b> After Darkstar bypasses a
   * character using stealth, that character loses a challenge icon of your choice
   * until the end of the phase..<br><i>Kingsmoot.</i><br>
   **/
  DarkstarKm = "DARKSTAR_Km",
  /**
   * <h5>Sand Steed</h5>House Martell.<br><b><i>Warhorse.</i></b><br>Limit 1 copy
   * per character.<b>Reaction:</b> After a <i>Summer</i> plot card enters your
   * used pile, attached character gains 1 power..<br><i>Kingsmoot.</i><br>
   **/
  SandSteedKm = "SAND_STEED_Km",
  /**
   * <h5>Tom of Sevenstreams</h5>Neutral.<br><b><i>Brotherhood. Minstrel.
   * R'hllor.</i></b><br><b>Reaction:</b> After you play a <i>Song</i> event,
   * choose and stand a non-loyal character you control. (Limit once per
   * phase.).<br><i>Kingsmoot.</i><br>
   **/
  TomOfSevenstreamsKm = "TOM_OF_SEVENSTREAMS_Km",
  /**
   * <h5>Lem Lemoncloak</h5>Neutral.<br><b><i>Brotherhood.
   * R'hllor.</i></b><br>While you control no loyal characters, Lem Lemoncloak gets
   * +2 STR and gains a [power] icon..<br><i>Kingsmoot.</i><br>
   **/
  LemLemoncloakKm = "LEM_LEMONCLOAK_Km",
  /**
   * <h5>Forgotten By History</h5>Neutral.<br><b>Dominance Action:</b> Kneel your
   * faction card to choose a character with printed cost X or lower, and shuffle
   * it into its owner's deck. X is the amount of power on the faction card of that
   * character's controller..<br><i>Kingsmoot.</i><br>
   **/
  ForgottenByHistoryKm = "FORGOTTEN_BY_HISTORY_Km",
  /**
   * <h5>The Withering Cold</h5>Neutral.<br><b><i>Winter.</i></b><br>Skip the
   * standing phase this round..<br><i>Kingsmoot.</i><br>
   **/
  TheWitheringColdKm = "THE_WITHERING_COLD_Km",
  /**
   * <h5>Nymeria (FotOG)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>Intimidate.
   * No attachments.<b>Action:</b> During a challenge in which you control a
   * participating [stark] character, kneel Nymeria and any number of other
   * <i>Direwolf</i> characters to have each of those characters participate in the
   * challenge on your side..<br><i>Favor of the Old Gods.</i><br>
   **/
  NymeriaFotOg = "NYMERIA_FotOG",
  /**
   * <h5>Favor of the Old Gods</h5>House Stark.<br><b><i>Blessing. Old
   * Gods.</i></b><br>Attached character gains the <i>Old Gods</i>
   * trait.<b>Action:</b> If each character, location, and attachment you control
   * has the [stark] affiliation, kneel Favor of the Old Gods to stand attached
   * character..<br><i>Favor of the Old Gods.</i><br>
   **/
  FavorOfTheOldGodsFotOg = "FAVOR_OF_THE_OLD_GODS_FotOG",
  /**
   * <h5>Hightower Spy</h5>House Tyrell.<br><b><i>House Hightower.
   * Spy.</i></b><br>Ambush (3).<b>Reaction:</b> After Hightower Spy enters play,
   * choose a character and reveal the top card of your deck. Until the end of the
   * phase, that character gets +X STR. X is the printed cost of the revealed
   * card..<br><i>Favor of the Old Gods.</i><br>
   **/
  HightowerSpyFotOg = "HIGHTOWER_SPY_FotOG",
  /**
   * <h5>Blessed by the Maiden</h5>House Tyrell.<br><b><i>Blessing. The
   * Seven.</i></b><br>Character you control only.Attached character gains <i>The
   * Seven</i> trait and "No attachments except <i>Blessing.</i>".<br><i>Favor of
   * the Old Gods.</i><br>
   **/
  BlessedByTheMaidenFotOg = "BLESSED_BY_THE_MAIDEN_FotOG",
  /**
   * <h5>Garrison on the Wall</h5>The Night's Watch.<br><b><i>Army.</i></b><br>No
   * attachments.<b>Reaction:</b> After Garrison on the Wall is declared as a
   * defender, kneel a non-[thenightswatch] character to stand Garrison on the
   * Wall..<br><i>Favor of the Old Gods.</i><br>
   **/
  GarrisonOnTheWallFotOg = "GARRISON_ON_THE_WALL_FotOG",
  /**
   * <h5>Obsidian Arrows</h5>The Night's Watch.<br><b><i>Weapon.</i></b><br>Bestow
   * (4).<b>Action:</b> While attached character is attacking, move 1 gold from
   * Obsidian Arrows to a defending character to give that character –3 STR until
   * the end of the challenge. (Limit once per challenge.).<br><i>Favor of the Old Gods.</i><br>
   **/
  ObsidianArrowsFotOg = "OBSIDIAN_ARROWS_FotOG",
  /**
   * <h5>Selyse Baratheon (FotOG)</h5>House Baratheon.<br><b><i>Lady. Queen.
   * R'hllor.</i></b><br><b>Forced Reaction:</b> After you marshal Selyse
   * Baratheon, kneel your faction card. Then, kneel each non-<i>Lady</i>
   * character..<br><i>Favor of the Old Gods.</i><br>
   **/
  SelyseBaratheonFotOg = "SELYSE_BARATHEON_FotOG",
  /**
   * <h5>Dragonstone Castle</h5>House Baratheon.<br><b><i>Dragonstone.
   * Stronghold.</i></b><br><b>Reaction:</b> After a phase begins, kneel
   * Dragonstone Castle to choose a character. Until the end of the phase, that
   * character cannot stand..<br><i>Favor of the Old Gods.</i><br>
   **/
  DragonstoneCastleFotOg = "DRAGONSTONE_CASTLE_FotOG",
  /**
   * <h5>Ser Balon Swann</h5>House Lannister.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Renown.<b>Reaction:</b> After a non-[lannister] Knight
   * character enters play under your control, gain 2 gold. (Limit once per
   * phase.).<br><i>Favor of the Old Gods.</i><br>
   **/
  SerBalonSwannFotOg = "SER_BALON_SWANN_FotOG",
  /**
   * <h5>Sweet Cersei</h5>House Lannister.<br><b><i>Warship.</i></b><br>During the
   * challenges phase, you may spend gold on Sweet Cersei as if it were in your
   * gold pool.<b>Reaction:</b> After you win an [intrigue] challenge, move 1 gold
   * from the treasury to Sweet Cersei..<br><i>Favor of the Old Gods.</i><br>
   **/
  SweetCerseiFotOg = "SWEET_CERSEI_FotOG",
  /**
   * <h5>Coastal Reaver</h5>House
   * Greyjoy.<br><b><i>Raider.</i></b><br><b>Reaction:</b> After Coastal Reaver
   * enters play, choose an opponent. That player chooses a card in his or her hand
   * and places it on top of his or her deck..<br><i>Favor of the Old Gods.</i><br>
   **/
  CoastalReaverFotOg = "COASTAL_REAVER_FotOG",
  /**
   * <h5>Support of Harlaw</h5>House Greyjoy.<br><b><i>House
   * Harlaw.</i></b><br><b>Challenges Action:</b> Kneel a <i>Warship</i> location
   * to have attached character gain (choose one): pillage, renown, or stealth
   * until the end of the phase..<br><i>Favor of the Old Gods.</i><br>
   **/
  SupportOfHarlawFotOg = "SUPPORT_OF_HARLAW_FotOG",
  /**
   * <h5>Wise Master</h5>House Targaryen.<br><b><i>Ally.</i></b><br>Bestow
   * (3).<b>Action:</b> Discard 1 gold from Wise Master to return an out-of-faction
   * attachment or event from your discard pile to your hand. (Limit once per
   * round.).<br><i>Favor of the Old Gods.</i><br>
   **/
  WiseMasterFotOg = "WISE_MASTER_FotOG",
  /**
   * <h5>Yunkai</h5>House Targaryen.<br><b><i>Essos.</i></b><br>Bestow
   * (4).<b>Action:</b> During a challenge in which you are the attacking player,
   * kneel Yunkai and discard X gold from it to remove each character with STR X or
   * lower from the challenge (X cannot be 0). Then, if you win the challenge,
   * place 2 gold from the treasury on Yunkai..<br><i>Favor of the Old Gods.</i><br>
   **/
  YunkaiFotOg = "YUNKAI_FotOG",
  /**
   * <h5>Planky Town Trader</h5>House Martell.<br><b><i>Merchant.</i></b><br>Bestow
   * (5).<b>Interrupt:</b> When Planky Town Trader leaves play, put a non-[martell]
   * character with printed cost X or lower into play from your hand. X is the
   * number of gold on Planky Town Trader. Until the end of the phase, that
   * character cannot leave play..<br><i>Favor of the Old Gods.</i><br>
   **/
  PlankyTownTraderFotOg = "PLANKY_TOWN_TRADER_FotOG",
  /**
   * <h5>Shandystone</h5>House Martell.<br><b><i>Dorne.
   * Stronghold.</i></b><br><b>Reaction:</b> After you lose a challenge as the
   * defending player, kneel Shandystone to choose and stand a character you
   * control..<br><i>Favor of the Old Gods.</i><br>
   **/
  ShandystoneFotOg = "SHANDYSTONE_FotOG",
  /**
   * <h5>Warrior's Sons</h5>Neutral.<br><b><i>Army. The Seven.</i></b><br>No
   * attachments.<b>Reaction:</b> After an opponent plays an event during a
   * challenge in which Warrior’s Sons is participating, move 1 power from that
   * opponent’s faction card to Warrior’s Sons..<br><i>Favor of the Old Gods.</i><br>
   **/
  WarriorsSonsFotOg = "WARRIORS_SONS_FotOG",
  /**
   * <h5>Seized by the
   * Guard</h5>Neutral.<br><b><i>Condition.</i></b><br>Non-limited location only.
   * Bestow (4). Terminal.Treat attached location as if its printed text box were
   * blank (except for <i>Traits</i>).<b>Forced Reaction:</b> After the marshaling
   * phase begins, sacrifice Seized by the Guard unless you discard 1 gold from
   * it..<br><i>Favor of the Old Gods.</i><br>
   **/
  SeizedByTheGuardFotOg = "SEIZED_BY_THE_GUARD_FotOG",
  /**
   * <h5>Greensight</h5>Neutral.<br><b>Forced Reaction:</b> After the draw phase
   * begins, reveal the top card of each player's deck. You may kneel your faction
   * card to discard those cards..<br><i>Favor of the Old Gods.</i><br>
   **/
  GreensightFotOg = "GREENSIGHT_FotOG",
  /**
   * <h5>The King in the North</h5>Neutral.<br><b><i>Kingdom.</i></b><br>While a
   * player does not control a <i>King</i> character, he or she cannot trigger
   * abilities on characters, locations, or attachments..<br><i>Favor of the Old Gods.</i><br>
   **/
  TheKingInTheNorthFotOg = "THE_KING_IN_THE_NORTH_FotOG",
  /**
   * <h5>Arya Stark (TFM)</h5>House Stark.<br><b><i>Lady.</i></b><br>While Arya
   * Stark is standing, characters cannot be saved..<br><i>The Faith
   * Militant.</i><br>
   **/
  AryaStarkTfm = "ARYA_STARK_TFM",
  /**
   * <h5>I Am No One</h5>House Stark.<br><b>Action:</b> Choose a character you
   * control with printed cost 3 or lower. Until the end of the phase, that
   * character loses all faction affiliations and <i>Traits</i>, gains insight and
   * stealth, and does not kneel when declared as an attacker..<br><i>The Faith
   * Militant.</i><br>
   **/
  IAmNoOneTfm = "I_AM_NO_ONE_TFM",
  /**
   * <h5>Highgarden Refugee</h5>House Tyrell.<br><b><i>Ally.</i></b><br>While there
   * is a <i>Summer</i> plot card revealed, reduce the cost to marshal Highgarden
   * Refugee by 1..<br><i>The Faith Militant.</i><br>
   **/
  HighgardenRefugeeTfm = "HIGHGARDEN_REFUGEE_TFM",
  /**
   * <h5>Arbor Queen</h5>House Tyrell.<br><b><i>Warship.</i></b><br><b>Action:</b>
   * Kneel Arbor Queen to choose a [tyrell] character and a non-[tyrell] character.
   * Until the end of the phase, each of those characters gets +2 STR..<br><i>The
   * Faith Militant.</i><br>
   **/
  ArborQueenTfm = "ARBOR_QUEEN_TFM",
  /**
   * <h5>Coldhands</h5>The Night's Watch.<br><b><i>The North.</i></b><br>Coldhands
   * cannot be saved.<b>Reaction:</b> After you marshal Coldhands, choose 1 other
   * non-<i>Army</i> character controlled by each player. Remove each of those
   * characters from the game until Coldhands leaves play..<br><i>The Faith
   * Militant.</i><br>
   **/
  ColdhandsTfm = "COLDHANDS_TFM",
  /**
   * <h5>The Bay of Seals</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Action:</b> Kneel The Bay of Seals to choose and stand a
   * character owned by an opponent..<br><i>The Faith Militant.</i><br>
   **/
  TheBayOfSealsTfm = "THE_BAY_OF_SEALS_TFM",
  /**
   * <h5>King's Men</h5>House Baratheon.<br><b><i>Ally. The
   * Seven.</i></b><br><b>Reaction:</b> After a phase begins, choose a kneeling
   * character. Until the end of the phase, treat that character as if its printed
   * text box were blank (except for <i>Traits</i>). (Limit once per
   * round.).<br><i>The Faith Militant.</i><br>
   **/
  KingsMenTfm = "KINGS_MEN_TFM",
  /**
   * <h5>Sacrificed to the Red God</h5>House
   * Baratheon.<br><b><i>R'hllor.</i></b><br>Play only if you control a
   * <i>R'hllor</i> character.<b>Marshaling Action:</b> Sacrifice a character to
   * search your deck for a <i>R'hllor</i> character with equal or lower printed
   * cost and add it to your hand. Shuffle your deck..<br><i>The Faith
   * Militant.</i><br>
   **/
  SacrificedToTheRedGodTfm = "SACRIFICED_TO_THE_RED_GOD_TFM",
  /**
   * <h5>Cersei's Informer</h5>House Lannister.<br><b><i>Spy.</i></b><br>Bestow
   * (3).<b>Action:</b> Move 1 gold from Cersei's Informer to a non-<i>Spy</i> card
   * you control to draw 1 card. Then, choose and discard 1 card from your hand.
   * (Limit once per round.).<br><i>The Faith Militant.</i><br>
   **/
  CerseisInformerTfm = "CERSEIS_INFORMER_TFM",
  /**
   * <h5>Ser Pounce</h5>House Lannister.<br><b><i>Cat. Knight.</i></b><br>Unique
   * character with printed cost 3 or lower only. Ambush (1).Attached character
   * gains an [intrigue] icon and does not kneel when declared as an attacker in an
   * [intrigue] challenge..<br><i>The Faith Militant.</i><br>
   **/
  SerPounceTfm = "SER_POUNCE_TFM",
  /**
   * <h5>Tarle the Thrice-Drowned</h5>House Greyjoy.<br><b><i>Drowned God.
   * Ironborn.</i></b><br>You may marshal non-unique <i>Drowned God</i> characters
   * from your dead pile as if they were in your hand..<br><i>The Faith
   * Militant.</i><br>
   **/
  TarleTheThriceDrownedTfm = "TARLE_THE_THRICE_DROWNED_TFM",
  /**
   * <h5>Given to the Drowned God</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Action:</b> Kill a <i>Drowned God</i> character to draw X
   * cards. X is that character's printed cost..<br><i>The Faith Militant.</i><br>
   **/
  GivenToTheDrownedGodTfm = "GIVEN_TO_THE_DROWNED_GOD_TFM",
  /**
   * <h5>Daenerys Targaryen (TFM)</h5>House Targaryen.<br><b><i>Lady.
   * Queen.</i></b><br>Daenerys Targaryen's STR cannot be reduced by card
   * effects.<b>Reaction:</b> After you play a [targaryen] event, choose a
   * character. Until the end of the phase, that character gets -1 STR and is
   * killed if its STR is 0. (Limit 3 times per round.).<br><i>The Faith
   * Militant.</i><br>
   **/
  DaenerysTargaryenTfm = "DAENERYS_TARGARYEN_TFM",
  /**
   * <h5>Mhysa</h5>House Targaryen.<br><b><i>Title.</i></b><br><i>Lady</i>
   * character only.During the first [power] challenge you initiate each round,
   * attached character does not kneel when declared as an attacker and gets +1 STR
   * for each attacking character..<br><i>The Faith Militant.</i><br>
   **/
  MhysaTfm = "MHYSA_TFM",
  /**
   * <h5>House Yronwood Knight</h5>House Martell.<br><b><i>House Yronwood.
   * Knight.</i></b><br><b>Reaction:</b> After you lose a challenge in which House
   * Yronwood Knight is participating, discard 1 card at random from the winning
   * opponent's hand..<br><i>The Faith Militant.</i><br>
   **/
  HouseYronwoodKnightTfm = "HOUSE_YRONWOOD_KNIGHT_TFM",
  /**
   * <h5>Secret Pact</h5>House
   * Martell.<br><b><i>Condition.</i></b><br>Non-[martell] character only. Ambush
   * (3).Attached character gains renown.Attached character cannot be declared as
   * an attacker in challenges against you..<br><i>The Faith Militant.</i><br>
   **/
  SecretPactTfm = "SECRET_PACT_TFM",
  /**
   * <h5>The High Sparrow</h5>Neutral.<br><b><i>The Seven.</i></b><br>Each player
   * cannot gain more than 7 gold each round.Each player cannot draw more than 3
   * cards each round..<br><i>The Faith Militant.</i><br>
   **/
  TheHighSparrowTfm = "THE_HIGH_SPARROW_TFM",
  /**
   * <h5>"The Song of the Seven"</h5>Neutral.<br><b><i>Song. The
   * Seven.</i></b><br><b>Reaction:</b> After you lose dominance, move 2 power from
   * the winning opponent's faction card to a <i>The Seven</i> character you
   * control. (Max 1 per phase.).<br><i>The Faith Militant.</i><br>
   **/
  TheSongOfTheSevenTfm = "THE_SONG_OF_THE_SEVEN_TFM",
  /**
   * <h5>The Faith Militant</h5>Neutral.<br><b><i>The Seven.</i></b><br>Non-<i>The
   * Seven</i> characters and locations you control cannot gain
   * power.<b>Reaction:</b> After you win a challenge, kneel your faction card to
   * move 1 power from the losing opponent's faction card to a participating <i>The
   * Seven</i> character you control..<br><i>The Faith Militant.</i><br>
   **/
  TheFaithMilitantTfm = "THE_FAITH_MILITANT_TFM",
  /**
   * <h5>Compelled by the Faith</h5>Neutral.<br><b><i>The Seven.</i></b><br><b>When
   * Revealed:</b> Move each power from each card in play to its controller's
   * faction card..<br><i>The Faith Militant.</i><br>
   **/
  CompelledByTheFaithTfm = "COMPELLED_BY_THE_FAITH_TFM",
  /**
   * <h5>Host of the Riverlands</h5>House Stark.<br><b><i>Army. House
   * Tully.</i></b><br>Bestow (3). No attachments.<b>Reaction:</b> After a <i>House
   * Tully</i> character you control gains power, discard 1 gold from Host of the
   * Riverlands to have that character gain 1 power. (Limit once per
   * phase.).<br><i>Someone Always Tells.</i><br>
   **/
  HostOfTheRiverlandsSat = "HOST_OF_THE_RIVERLANDS_SAT",
  /**
   * <h5>Godswood</h5>House Stark.<br><b><i>Old Gods.</i></b><br><b>Reaction:</b>
   * After you win a challenge as the attacking player, if there are more
   * <i>Winter</i> plot cards than <i>Summer</i> plot cards revealed, kneel
   * Godswood to draw X cards. X is the claim value on your revealed plot
   * card..<br><i>Someone Always Tells.</i><br>
   **/
  GodswoodSat = "GODSWOOD_SAT",
  /**
   * <h5>Mace Tyrell (SAT)</h5>House Tyrell.<br><b><i>Lord. Small
   * Council.</i></b><br><b>Reaction:</b> After Mace Tyrell is knelt, draw 2 cards.
   * Then, choose a card in your hand and place it on top of your deck.+1
   * Income..<br><i>Someone Always Tells.</i><br>
   **/
  MaceTyrellSat = "MACE_TYRELL_SAT",
  /**
   * <h5>This Must Be Answered Fiercely!</h5>House Tyrell.<br><b>Reaction:</b>
   * After 3 or more characters are declared as attackers in a challenge against
   * you, search your deck for a [tyrell] character and put it into play. Shuffle
   * your deck..<br><i>Someone Always Tells.</i><br>
   **/
  ThisMustBeAnsweredFiercelySat = "THIS_MUST_BE_ANSWERED_FIERCELY_SAT",
  /**
   * <h5>Septon Cellador</h5>The Night's Watch.<br><b><i>The
   * Seven.</i></b><br><b>Challenges Action:</b> Kneel Septon Cellador to choose an
   * opponent. That player must choose and discard a character from his or her hand
   * unless he or she reveals a hand containing no characters..<br><i>Someone
   * Always Tells.</i><br>
   **/
  SeptonCelladorSat = "SEPTON_CELLADOR_SAT",
  /**
   * <h5>The Crow is a Tricksy Bird</h5>The Night's Watch.<br><b>Plot Action:</b>
   * Kneel your faction card to choose an opponent and look at his or her plot
   * deck. Choose 1 plot in that deck. That player must reveal that plot as his or
   * her next plot card, if able..<br><i>Someone Always Tells.</i><br>
   **/
  TheCrowIsATricksyBirdSat = "THE_CROW_IS_A_TRICKSY_BIRD_SAT",
  /**
   * <h5>The Bastard of Nightsong</h5>House Baratheon.<br><b><i>Bastard.
   * Knight.</i></b><br><b>Reaction:</b> After you win a [power] challenge in which
   * The Bastard of Nightsong is participating, move 1 power from the losing
   * opponent’s faction card to your own..<br><i>Someone Always Tells.</i><br>
   **/
  TheBastardOfNightsongSat = "THE_BASTARD_OF_NIGHTSONG_SAT",
  /**
   * <h5>King at the Wall</h5>House Baratheon.<br><b><i>Title.</i></b><br>Unique
   * [baratheon] character only.Attached character gains the <i>King</i>
   * trait.<b>Reaction:</b> After you win a [power] challenge in which attached
   * character is participating, draw 1 card for each out-of-faction location you
   * control..<br><i>Someone Always Tells.</i><br>
   **/
  KingAtTheWallSat = "KING_AT_THE_WALL_SAT",
  /**
   * <h5>Qyburn</h5>House Lannister.<br><b><i>Maester. Small
   * Council.</i></b><br><b>Reaction:</b> After a character is killed, kneel Qyburn
   * to draw 2 cards. Then, choose and discard 1 card from your
   * hand..<br><i>Someone Always Tells.</i><br>
   **/
  QyburnSat = "QYBURN_SAT",
  /**
   * <h5>A Plot Against The Queen</h5>House Lannister.<br><b>Reaction:</b> After
   * you lose a [power] challenge, return a character with 1 or more power to your
   * hand to choose a participating character with 1 or more power and return it to
   * its owner’s hand..<br><i>Someone Always Tells.</i><br>
   **/
  APlotAgainstTheQueenSat = "A_PLOT_AGAINST_THE_QUEEN_SAT",
  /**
   * <h5>Saltcliffe Sailor</h5>House Greyjoy.<br><b><i>Ally.</i></b><br>Bestow
   * (3).Each character you control with 1 or more gold gains
   * stealth.<b>Action:</b> Move 1 gold from Saltcliffe Sailor to a non-[greyjoy]
   * character you control..<br><i>Someone Always Tells.</i><br>
   **/
  SaltcliffeSailorSat = "SALTCLIFFE_SAILOR_SAT",
  /**
   * <h5>Driftwood Cudgel</h5>House Greyjoy.<br><b><i>Drowned God.
   * Weapon.</i></b><br><i>Drowned God</i> character only.Attached character gets
   * +1 STR for each character in your dead pile.<b>Interrupt:</b> When attached
   * character is killed, move Driftwood Cudgel to another eligible character. That
   * character gains 1 power. (Limit once per phase.)<em>Errata from FAQ
   * v1.4</em>.<br><i>Someone Always Tells.</i><br>
   **/
  DriftwoodCudgelSat = "DRIFTWOOD_CUDGEL_SAT",
  /**
   * <h5>Raiding Khalasar</h5>House Targaryen.<br><b><i>Army.
   * Dothraki.</i></b><br>No attachments. Pillage.While Raiding Khalasar is
   * attacking, if you control an attacking <i>Bloodrider</i> character, raise the
   * claim value on your revealed plot card by 1..<br><i>Someone Always Tells.</i><br>
   **/
  RaidingKhalasarSat = "RAIDING_KHALASAR_SAT",
  /**
   * <h5>To Go Forward You Must Go Back</h5>House
   * Targaryen.<br><b><i>Prophecy.</i></b><br><b>Dominance Action:</b> Each player
   * may shuffle his or her hand (of at least 1 card) into his or her deck. Each
   * player that does draws 5 cards.<em>Errata from FAQ v1.4</em>.<br><i>Someone
   * Always Tells.</i><br>
   **/
  ToGoForwardYouMustGoBackSat = "TO_GO_FORWARD_YOU_MUST_GO_BACK_SAT",
  /**
   * <h5>Host of the Boneway</h5>House
   * Martell.<br><b><i>Army.</i></b><br>Intimidate. No attachments.Host of the
   * Boneway gets +1 STR for each plot card in your used pile..<br><i>Someone
   * Always Tells.</i><br>
   **/
  HostOfTheBonewaySat = "HOST_OF_THE_BONEWAY_SAT",
  /**
   * <h5>Someone Always Tells</h5>House Martell.<br><b>Interrupt:</b> When the
   * effects of an opponent's event or triggered plot ability would initiate,
   * cancel those effects..<br><i>Someone Always Tells.</i><br>
   **/
  SomeoneAlwaysTellsSat = "SOMEONE_ALWAYS_TELLS_SAT",
  /**
   * <h5>Mya Stone</h5>Neutral.<br><b><i>Bastard.</i></b><br><b>Interrupt:</b> When
   * claim is applied for a [military] or [intrigue] challenge in which you are the
   * defending player, kneel Mya Stone to apply [power] claim
   * instead..<br><i>Someone Always Tells.</i><br>
   **/
  MyaStoneSat = "MYA_STONE_SAT",
  /**
   * <h5>The Great Sept of Baelor</h5>Neutral.<br><b><i>King's Landing. The
   * Seven.</i></b><br>Bestow (3).<b>Reaction:</b> After a character enters play,
   * kneel The Great Sept of Baelor and discard 1 gold from it to treat that
   * character’s printed text box as if it were blank (except for <i>Traits</i>)
   * until the end of the round..<br><i>Someone Always Tells.</i><br>
   **/
  TheGreatSeptOfBaelorSat = "THE_GREAT_SEPT_OF_BAELOR_SAT",
  /**
   * <h5>The Seven-Pointed Star</h5>Neutral.<br><b><i>Item. The
   * Seven.</i></b><br>Attached character gains <i>The Seven</i>
   * trait.<b>Marshaling Action:</b> Kneel attached character to reduce the cost of
   * the next <i>The Seven</i> card you marshal this phase by 2..<br><i>Someone
   * Always Tells.</i><br>
   **/
  TheSevenPointedStarSat = "THE_SEVEN_POINTED_STAR_SAT",
  /**
   * <h5>You Win Or You Die</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>When
   * Revealed:</b> Draw 2 cards..<br><i>Someone Always Tells.</i><br>
   **/
  YouWinOrYouDieSat = "YOU_WIN_OR_YOU_DIE_SAT",
  /**
   * <h5>Mace Tyrell (HoT)</h5>House
   * Tyrell.<br><b><i>Lord.</i></b><br><b>Reaction:</b> After a [tyrell] character
   * enters play under your control, pay 1 gold to have Mace Tyrell gain 1 power.
   * (Limit once per phase.)<b>Action:</b> Kneel your faction card to remove
   * another [tyrell] character you control from the game until the beginning of
   * the next phase..<br><i>House of Thorns.</i><br>
   **/
  MaceTyrellHoT = "MACE_TYRELL_HoT",
  /**
   * <h5>Brienne of Tarth (HoT)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br><b>Reaction:</b> After you win a challenge
   * in which Brienne of Tarth is participating, if her STR is: - 6 or higher, she
   * gains 1 power.- 10 or higher, choose another character. It gets +3 STR until
   * the end of the phase.- 15 or higher, stand her and draw 1 card..<br><i>House
   * of Thorns.</i><br>
   **/
  BrienneOfTarthHoT = "BRIENNE_OF_TARTH_HoT",
  /**
   * <h5>Ser Garlan Tyrell (HoT)</h5>House Tyrell.<br><b><i>Knight.
   * Lord.</i></b><br><b>Action:</b> During a challenge in which a <i>Knight</i>
   * character you control is attacking alone, discard 1 card from your hand to
   * raise the claim value on your revealed plot card by 1 until the end of the
   * challenge. (Limit once per challenge.).<br><i>House of Thorns.</i><br>
   **/
  SerGarlanTyrellHoT = "SER_GARLAN_TYRELL_HoT",
  /**
   * <h5>The Queen of Thorns (HoT)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br>Insight.<b>Reaction:</b> After The Queen of
   * Thorns is knelt, discard an event from your hand to search your deck for an
   * event, reveal it, and add it to your hand. Shuffle your deck..<br><i>House of
   * Thorns.</i><br>
   **/
  TheQueenOfThornsHoT = "THE_QUEEN_OF_THORNS_HoT",
  /**
   * <h5>Highgarden Honor Guard</h5>House Tyrell.<br><b><i>Army.
   * Guard.</i></b><br>Ambush (6). No attachments.Reduce the cost to ambush
   * Highgarden Honor Guard by 1 for each <i>The Reach</i> location you
   * control..<br><i>House of Thorns.</i><br>
   **/
  HighgardenHonorGuardHoT = "HIGHGARDEN_HONOR_GUARD_HoT",
  /**
   * <h5>Margaery Tyrell (HoT)</h5>House Tyrell.<br><b><i>Lady.
   * Queen.</i></b><br>While Margaery Tyrell is attacking, she gets +1 STR for each
   * defending character.<b>Reaction:</b> After Margaery Tyrell is declared as an
   * attacker, choose and kneel a character controlled by the defending player.
   * That character is participating in the challenge as a defender..<br><i>House
   * of Thorns.</i><br>
   **/
  MargaeryTyrellHoT = "MARGAERY_TYRELL_HoT",
  /**
   * <h5>The Knight of Flowers (HoT)</h5>House Tyrell.<br><b><i>Knight.
   * Lord.</i></b><br>Renown.<b>Reaction:</b> After you play an event, The Knight
   * of Flowers gets +2 STR until the end of the phase..<br><i>House of
   * Thorns.</i><br>
   **/
  TheKnightOfFlowersHoT = "THE_KNIGHT_OF_FLOWERS_HoT",
  /**
   * <h5>Willas Tyrell</h5>House Tyrell.<br><b><i>Lord.</i></b><br><b>Action:</b>
   * Kneel Willas Tyrell. Then, if you control:- Margaery Tyrell, stand her.- The
   * Knight of Flowers, he gains insight until the end of the phase.- Ser Garlan
   * Tyrell, he gains renown until the end of the phase..<br><i>House of
   * Thorns.</i><br>
   **/
  WillasTyrellHoT = "WILLAS_TYRELL_HoT",
  /**
   * <h5>Garth the Gross</h5>House Tyrell.<br><b><i>Lord. Steward.</i></b><br>While
   * you control another [tyrell] <i>Lord</i> character, Garth the Gross gains a
   * [military] icon and renown.While you control a [tyrell] <i>Lady</i> character,
   * Garth the Gross gains an [intrigue] icon and gets +2 STR..<br><i>House of
   * Thorns.</i><br>
   **/
  GarthTheGrossHoT = "GARTH_THE_GROSS_HoT",
  /**
   * <h5>The Blue Bard</h5>House
   * Tyrell.<br><b><i>Minstrel.</i></b><br><b>Interrupt:</b> When the Blue Bard
   * leaves play, search the top 10 cards of your deck for any number of
   * <i>Song</i> events, reveal them, and add them to your hand. Shuffle your
   * deck..<br><i>House of Thorns.</i><br>
   **/
  TheBlueBardHoT = "THE_BLUE_BARD_HoT",
  /**
   * <h5>Emissary of the Hightower</h5>House Tyrell.<br><b><i>House
   * Hightower.</i></b><br>Ambush (4).<b>Reaction:</b> After Emissary of the
   * Hightower enters play, choose an event in your discard pile. Until the end of
   * the phase, you may play that event as if it were in your hand. If you do,
   * remove it from the game instead of placing it into your discard
   * pile..<br><i>House of Thorns.</i><br>
   **/
  EmissaryOfTheHightowerHoT = "EMISSARY_OF_THE_HIGHTOWER_HoT",
  /**
   * <h5>Green-Apple Knight</h5>House
   * Tyrell.<br><b><i>Knight.</i></b><br>Green-Apple Knight gets +1 STR for each
   * other <i>Knight</i> character you control.While you control 2 or more other
   * <i>Knight</i> characters, Green-Apple Knight does not kneel when declared as
   * an attacker..<br><i>House of Thorns.</i><br>
   **/
  GreenAppleKnightHoT = "GREEN_APPLE_KNIGHT_HoT",
  /**
   * <h5>Desmera Redwyne</h5>House Tyrell.<br><b><i>House Redwyne.
   * Lady.</i></b><br><b>Reaction:</b> After a character is removed from a
   * challenge, pay 1 gold to give that character +2 STR or -1 STR until the end of
   * the phase..<br><i>House of Thorns.</i><br>
   **/
  DesmeraRedwyneHoT = "DESMERA_REDWYNE_HoT",
  /**
   * <h5>Maester Ballabar</h5>House
   * Tyrell.<br><b><i>Maester.</i></b><br><b>Action:</b> During a challenge in
   * which you control a participating character, kneel Maester Ballabar to choose
   * a character with the lowest STR among participating characters. Stand that
   * character and remove it from the challenge..<br><i>House of Thorns.</i><br>
   **/
  MaesterBallabarHoT = "MAESTER_BALLABAR_HoT",
  /**
   * <h5>Highgarden Courtier</h5>House
   * Tyrell.<br><b><i>Companion.</i></b><br><b>Reaction:</b> After another
   * character’s STR is increased by a card effect, kneel Highgarden Courtier to
   * stand that character. (Limit once per phase.).<br><i>House of Thorns.</i><br>
   **/
  HighgardenCourtierHoT = "HIGHGARDEN_COURTIER_HoT",
  /**
   * <h5>Jousting Knight</h5>House Tyrell.<br><b><i>Knight.</i></b><br>Jousting
   * Knight does not contribute its STR to a challenge unless it is attacking or
   * defending alone..<br><i>House of Thorns.</i><br>
   **/
  JoustingKnightHoT = "JOUSTING_KNIGHT_HoT",
  /**
   * <h5>The Hightower</h5>House Tyrell.<br><b><i>House Hightower.
   * Oldtown.</i></b><br><b>Reaction:</b> After a [tyrell] character enters play
   * under your control, gain 1 gold and draw 1 card. (Limit once per
   * phase.).<br><i>House of Thorns.</i><br>
   **/
  TheHightowerHoT = "THE_HIGHTOWER_HoT",
  /**
   * <h5>Redwyne Straits</h5>House Tyrell.<br><b><i>House
   * Redwyne.</i></b><br>Limited.+2 Income..<br><i>House of Thorns.</i><br>
   **/
  RedwyneStraitsHoT = "REDWYNE_STRAITS_HoT",
  /**
   * <h5>Jousting Pavilion</h5>House Tyrell.<br><b><i>The Reach.</i></b><br>Each
   * <i>Knight</i> character you control gets +1 STR while attacking or defending
   * alone..<br><i>House of Thorns.</i><br>
   **/
  JoustingPavilionHoT = "JOUSTING_PAVILION_HoT",
  /**
   * <h5>Queen of the Seven Kingdoms</h5>House
   * Tyrell.<br><b><i>Title.</i></b><br><i>Lady</i> character only.Attached
   * character gains the <i>Queen</i> trait.<b>Action</b> Stand attached character
   * and remove it from the challenge to choose a participating character. Stand
   * that character and remove it from the challenge. (Limit once per
   * phase.).<br><i>House of Thorns.</i><br>
   **/
  QueenOfTheSevenKingdomsHoT = "QUEEN_OF_THE_SEVEN_KINGDOMS_HoT",
  /**
   * <h5>Tourney Lance</h5>House Tyrell.<br><b><i>Weapon.</i></b><br><i>Knight</i>
   * character only.Attached character gets +1 STR.While attached character is
   * attacking alone, the defending player cannot declare more than 1 character as
   * a defender..<br><i>House of Thorns.</i><br>
   **/
  TourneyLanceHoT = "TOURNEY_LANCE_HoT",
  /**
   * <h5>Melee at Bitterbridge</h5>House Tyrell.<br><b>Action:</b> Choose X
   * participating characters. Each character with the highest STR among those
   * characters gains renown until the end of the challenge. Each other chosen
   * character does not contribute its STR to the challenge..<br><i>House of
   * Thorns.</i><br>
   **/
  MeleeAtBitterbridgeHoT = "MELEE_AT_BITTERBRIDGE_HoT",
  /**
   * <h5>"Six Maids in a Pool"</h5>House
   * Tyrell.<br><b><i>Song.</i></b><br><b>Action:</b> Draw 1 card for each
   * <i>Lady</i> character you control..<br><i>House of Thorns.</i><br>
   **/
  SixMaidsInAPoolHoT = "SIX_MAIDS_IN_A_POOL_HoT",
  /**
   * <h5>Hidden Thorns</h5>House Tyrell.<br><b>Reaction:</b> After you win an
   * [intrigue] challenge by 5 or more STR, the losing opponent chooses and
   * discards 2 cards from his or her hand. Then, if you control The Queen of
   * Thorns, return Hidden Thorns to your hand instead of placing it in your
   * discard pile. (Max 1 per challenge.).<br><i>House of Thorns.</i><br>
   **/
  HiddenThornsHoT = "HIDDEN_THORNS_HoT",
  /**
   * <h5>River Runner</h5>House Baratheon.<br><b><i>Ally.
   * Smuggler.</i></b><br>While River Runner is attacking, each character with
   * power cannot be declared as a defender..<br><i>House of Thorns.</i><br>
   **/
  RiverRunnerHoT = "RIVER_RUNNER_HoT",
  /**
   * <h5>Bend the Knee</h5>House Baratheon.<br>Play only if you control a standing
   * <i>King</i> character.<b>Action:</b> Choose and kneel a <i>Lord</i> or
   * <i>Lady</i> character..<br><i>House of Thorns.</i><br>
   **/
  BendTheKneeHoT = "BEND_THE_KNEE_HoT",
  /**
   * <h5>Drowned God's Apostle</h5>House Greyjoy.<br><b><i>Drowned God.
   * Ironborn.</i></b><br><b>Reaction:</b> After you win dominance, kill Drowned
   * God's Apostle to put a non-unique [greyjoy] character with printed cost 3 or
   * lower into play from your dead pile..<br><i>House of Thorns.</i><br>
   **/
  DrownedGodsApostleHoT = "DROWNED_GODS_APOSTLE_HoT",
  /**
   * <h5>Corpse Lake</h5>House Greyjoy.<br><b><i>Iron
   * Islands.</i></b><br><b>Reaction:</b> After a character is discarded from an
   * opponent's deck, Corpse Lake gains 1 power. (Limit 3 times per
   * round.).<br><i>House of Thorns.</i><br>
   **/
  CorpseLakeHoT = "CORPSE_LAKE_HoT",
  /**
   * <h5>The Hound (HoT)</h5>House Lannister.<br><b><i>House Clegane.
   * Kingsguard.</i></b><br>No attachments except <i>Weapon</i>.<b>Reaction:</b>
   * After The Hound enters play, choose a <i>Knight</i> character without
   * attachments and return it to its owner's hand..<br><i>House of Thorns.</i><br>
   **/
  TheHoundHoT = "THE_HOUND_HoT",
  /**
   * <h5>Lion's Tooth</h5>House Lannister.<br><b><i>Weapon.</i></b><br>Unique
   * [lannister] character only. Ambush (2).Attached character gets +1
   * STR.<b>Action:</b> During a challenge in which attached character is
   * participating, sacrifice Lion’s Tooth to choose a participating character with
   * printed cost 3 or lower and return it to its owner’s hand..<br><i>House of
   * Thorns.</i><br>
   **/
  LionsToothHoT = "LIONS_TOOTH_HoT",
  /**
   * <h5>The Bastard of Godsgrace</h5>House Martell.<br><b><i>Bastard.
   * Knight.</i></b><br>Renown.<b>Challenges Action:</b> Discard 1 power from The
   * Bastard of Godsgrace to reduce the cost of the next card you play or ambush
   * this phase by 2..<br><i>House of Thorns.</i><br>
   **/
  TheBastardOfGodsgraceHoT = "THE_BASTARD_OF_GODSGRACE_HoT",
  /**
   * <h5>Hellholt</h5>House Martell.<br><b><i>Dorne. House Uller.
   * Stronghold.</i></b><br><b>Reaction:</b> After you lose a challenge by 5 or
   * more STR, Hellholt gains 1 power..<br><i>House of Thorns.</i><br>
   **/
  HellholtHoT = "HELLHOLT_HoT",
  /**
   * <h5>Small Paul</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Interrupt:</b> When Small Paul is killed,
   * search the top X cards of your deck for any number of <i>Steward</i>
   * characters, reveal them, and add them to your hand. X is your reserve value.
   * Shuffle your deck..<br><i>House of Thorns.</i><br>
   **/
  SmallPaulHoT = "SMALL_PAUL_HoT",
  /**
   * <h5>Broken Vows</h5>The Night's Watch.<br><b>Marshaling Action:</b> Give
   * control of a [thenightswatch] character you control to an opponent. Then, take
   * control of a non-loyal character that player controls with a lower printed
   * cost..<br><i>House of Thorns.</i><br>
   **/
  BrokenVowsHoT = "BROKEN_VOWS_HoT",
  /**
   * <h5>Ser Dontos Hollard</h5>House Stark.<br><b><i>Fool. Knight.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Interrupt:</b> When a <i>Lady</i>
   * character would be killed or discarded from play, stand Ser Dontos Hollard to
   * save that character..<br><i>House of Thorns.</i><br>
   **/
  SerDontosHollardHoT = "SER_DONTOS_HOLLARD_HoT",
  /**
   * <h5>Last Hearth</h5>House Stark.<br><b><i>House Umber. The
   * North.</i></b><br><b>Action:</b> Kneel Last Hearth to give a participating
   * [stark] character +2 STR until the end of the challenge. (+3 STR instead if
   * there are fewer than 3 plot cards in your used pile.).<br><i>House of
   * Thorns.</i><br>
   **/
  LastHearthHoT = "LAST_HEARTH_HoT",
  /**
   * <h5>Qotho</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br><b>Action:</b> Discard 2 [targaryen] cards from your hand
   * to put Qotho into play from your hand..<br><i>House of Thorns.</i><br>
   **/
  QothoHoT = "QOTHO_HoT",
  /**
   * <h5>Tokar</h5>House Targaryen.<br><b><i>Item.</i></b><br>[targaryen] character
   * only.Attached character gets +1 STR for each attachment it has.While attached
   * character is participating in a challenge, each character without attachments
   * cannot gain power..<br><i>House of Thorns.</i><br>
   **/
  TokarHoT = "TOKAR_HoT",
  /**
   * <h5>Archmaester
   * Ebrose</h5>Neutral.<br><b><i>Maester.</i></b><br><b>Action:</b> Kneel a
   * <i>Maester</i> character to choose and stand another <i>Maester</i> character.
   * (Limit once per phase.).<br><i>House of Thorns.</i><br>
   **/
  ArchmaesterEbroseHoT = "ARCHMAESTER_EBROSE_HoT",
  /**
   * <h5>Faceless Man</h5>Neutral.<br>Ambush (4).<b>Challenges Action:</b> Choose a
   * character in a dead pile. Until the end of the phase, Faceless Man gains each
   * of that character's printed challenge icons, keywords, faction affiliations,
   * and <i>Traits</i>. (Limit once per phase.).<br><i>House of Thorns.</i><br>
   **/
  FacelessManHoT = "FACELESS_MAN_HoT",
  /**
   * <h5>Citadel Novice</h5>Neutral.<br><b><i>Maester.</i></b><br><b>Reaction:</b>
   * After Citadel Novice is knelt, reveal the top card of your deck. If it is an
   * attachment or a <i>Maester</i> character, draw it. (Limit once per
   * phase.).<br><i>House of Thorns.</i><br>
   **/
  CitadelNoviceHoT = "CITADEL_NOVICE_HoT",
  /**
   * <h5>The Citadel</h5>Neutral.<br><b><i>Citadel.
   * Oldtown.</i></b><br><b>Action:</b> Kneel The Citadel to search the top 10
   * cards of your deck for a <i>Maester</i> character, reveal it, and add it to
   * your hand. Shuffle your deck..<br><i>House of Thorns.</i><br>
   **/
  TheCitadelHoT = "THE_CITADEL_HoT",
  /**
   * <h5>Strangler</h5>Neutral.<br><b><i>Condition.
   * Poison.</i></b><br>Terminal.While attached character is participating in a
   * challenge, set its STR to 1. <em>(Other modifiers do not raise or lower its
   * STR.)</em>.<br><i>House of Thorns.</i><br>
   **/
  StranglerHoT = "STRANGLER_HoT",
  /**
   * <h5>Words Are Wind</h5>Neutral.<br><b>Interrupt:</b> When the effects of an
   * opponent's event would initiate, that opponent must choose, either: cancel
   * those effects, or you draw 2 cards..<br><i>House of Thorns.</i><br>
   **/
  WordsAreWindHoT = "WORDS_ARE_WIND_HoT",
  /**
   * <h5>The Conclave</h5>Neutral.<br><b><i>Citadel. Conclave.</i></b><br>Your deck
   * may include non-loyal <i>Maester</i> characters from any faction. Your deck
   * must include at least 12 <i>Maester</i> characters. Before placing setup
   * cards, place the top 7 cards of your deck facedown under this
   * agenda.<b>Reaction:</b> After you win a challenge in which you control a
   * participating <i>Maester</i> character, choose 1 card under this agenda and
   * switch it with the top card of your deck..<br><i>House of Thorns.</i><br>
   **/
  TheConclaveHoT = "THE_CONCLAVE_HoT",
  /**
   * <h5>Wardens of the South</h5>House
   * Tyrell.<br><b><i>Summer.</i></b><br><b>Reaction:</b> After a [tyrell]
   * character you control is declared as an attacker or defender, that character
   * gets +2 STR until the end of the challenge..<br><i>House of Thorns.</i><br>
   **/
  WardensOfTheSouthHoT = "WARDENS_OF_THE_SOUTH_HoT",
  /**
   * <h5>Besieged</h5>Neutral.<br><b><i>Siege. War.</i></b><br>At least one
   * character must be declared as a defender in each challenge, if
   * able..<br><i>House of Thorns.</i><br>
   **/
  BesiegedHoT = "BESIEGED_HoT",
  /**
   * <h5>Your King Commands It</h5>Neutral.<br><b><i>Edict. Noble.</i></b><br>Each
   * non-<i>King</i>, non-<i>Queen</i> character cannot gain power..<br><i>House of
   * Thorns.</i><br>
   **/
  YourKingCommandsItHoT = "YOUR_KING_COMMANDS_IT_HoT",
  /**
   * <h5>The Spider's Web</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>Reaction:</b>
   * After claim is applied for an [intrigue] challenge you won, you may initiate
   * an additional [intrigue] challenge this phase. Until the end of the phase,
   * raise the claim value on your revealed plot card by 1 during [intrigue]
   * challenges. (Limit once per phase.).<br><i>House of Thorns.</i><br>
   **/
  TheSpidersWebHoT = "THE_SPIDERS_WEB_HoT",
  /**
   * <h5>Now It Comes To War</h5>Neutral.<br><b><i>War.</i></b><br><b>Forced
   * Interrupt:</b> When claim is applied for an [intrigue] or [power] challenge,
   * the attacking player may choose to apply [military] claim
   * instead..<br><i>House of Thorns.</i><br>
   **/
  NowItComesToWarHoT = "NOW_IT_COMES_TO_WAR_HoT",
  /**
   * <h5>Trade Routes</h5>Neutral.<br><b><i>Kingdom. Summer.</i></b><br><b>When
   * Revealed:</b> Choose an opponent. Gain 1 gold for each location you control
   * and each location that opponent controls..<br><i>House of Thorns.</i><br>
   **/
  TradeRoutesHoT = "TRADE_ROUTES_HoT",
  /**
   * <h5>Nothing Burns Like The
   * Cold</h5>Neutral.<br><b><i>Winter.</i></b><br><b>When Revealed:</b> Each
   * player chooses an attachment and a non-limited location he or she controls, if
   * able, and discards each of those cards from play (cannot be
   * saved)..<br><i>House of Thorns.</i><br>
   **/
  NothingBurnsLikeTheColdHoT = "NOTHING_BURNS_LIKE_THE_COLD_HoT",
  /**
   * <h5>Doran Martell (SoD)</h5>House
   * Martell.<br><b><i>Lord.</i></b><br><b>Action:</b> Kneel your faction card to
   * choose a participating character with fewer than 2 challenge icons and remove
   * it from the challenge.<b>Reaction:</b> After you lose a challenge, choose a
   * character. Until the end of the phase, that character gains or loses a
   * challenge icon of your choice..<br><i>Sands of Dorne.</i><br>
   **/
  DoranMartellSoD = "DORAN_MARTELL_SoD",
  /**
   * <h5>Ellaria Sand (SoD)</h5>House Martell.<br><b><i>Bastard.
   * Companion.</i></b><br><b>Reaction:</b> After Ellaria Sand is declared as an
   * attacker, choose up to 3 characters controlled by the defending player. Each
   * of those characters must be declared as a defender for this challenge, if
   * able..<br><i>Sands of Dorne.</i><br>
   **/
  EllariaSandSoD = "ELLARIA_SAND_SoD",
  /**
   * <h5>The Red Viper (SoD)</h5>House
   * Martell.<br><b><i>Lord.</i></b><br>Intimidate.The Red Viper gets +1 STR for
   * each power he has.<b>Reaction:</b> After you win a challenge in which you
   * control an attacking <i>Bastard</i> character, The Red Viper gains 1
   * power..<br><i>Sands of Dorne.</i><br>
   **/
  TheRedViperSoD = "THE_RED_VIPER_SoD",
  /**
   * <h5>Darkstar (SoD)</h5>House Martell.<br><b><i>House Dayne.
   * Knight.</i></b><br>Intimidate.<b>Action:</b> During a challenge in which
   * Darkstar is attacking, sacrifice him to return each participating character to
   * its owner's hand..<br><i>Sands of Dorne.</i><br>
   **/
  DarkstarSoD = "DARKSTAR_SoD",
  /**
   * <h5>Obara Sand (SoD)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Challenges Action:</b> Return a <i>Sand Snake</i>
   * character to your hand to put a [martell] character with lower printed cost
   * into play from your hand. (Limit once per phase.).<br><i>Sands of Dorne.</i><br>
   **/
  ObaraSandSoD = "OBARA_SAND_SoD",
  /**
   * <h5>Areo Hotah (SoD)</h5>House Martell.<br><b><i>Guard.</i></b><br>Ambush
   * (6).Reduce the cost to ambush Areo Hotah by 1 for each plot in your used
   * pile.<b>Reaction:</b> After you win a challenge in which Areo Hotah is
   * defending, return him to your hand to raise the claim value on your revealed
   * plot by 1 until the end of the phase..<br><i>Sands of Dorne.</i><br>
   **/
  AreoHotahSoD = "AREO_HOTAH_SoD",
  /**
   * <h5>Nymeria Sand (SoD)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Reaction:</b> After you lose dominance, discard 1 card at
   * random from the winning opponent's hand and draw 1 card..<br><i>Sands of Dorne.</i><br>
   **/
  NymeriaSandSoD = "NYMERIA_SAND_SoD",
  /**
   * <h5>Tyene Sand (SoD)</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br>Stealth.<b>Reaction:</b> After you lose a challenge as the
   * defending player, kneel a <i>Sand Snake</i> character to put Tyene Sand into
   * play from your hand..<br><i>Sands of Dorne.</i><br>
   **/
  TyeneSandSoD = "TYENE_SAND_SoD",
  /**
   * <h5>Nymeria's Guard</h5>House Martell.<br><b><i>Army. Guard.</i></b><br>No
   * attachments.<b>Challenges Action:</b> Pay 4 gold and stand a <i>Sand Snake</i>
   * character to put Nymeria's Guard into play from your hand..<br><i>Sands of Dorne.</i><br>
   **/
  NymeriasGuardSoD = "NYMERIAS_GUARD_SoD",
  /**
   * <h5>Obella Sand</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Reaction:</b> After Obella Sand is discarded for
   * [intrigue] claim or killed for [military] claim, move 1 power from the winning
   * opponent's faction card to your own. Shuffle Obella Sand from your discard or
   * dead pile into your deck..<br><i>Sands of Dorne.</i><br>
   **/
  ObellaSandSoD = "OBELLA_SAND_SoD",
  /**
   * <h5>Quentyn Martell (SoD)</h5>House Martell.<br><b><i>Knight.
   * Lord.</i></b><br>Renown.<b>Forced Reaction:</b> After the challenges phase
   * begins, if there are fewer than 3 plot cards in your used pile, kneel Quentyn
   * Martell..<br><i>Sands of Dorne.</i><br>
   **/
  QuentynMartellSoD = "QUENTYN_MARTELL_SoD",
  /**
   * <h5>Ser Cletus Yronwood</h5>House Martell.<br><b><i>House Yronwood.
   * Knight.</i></b><br>No attachments except <i>Weapon</i>.Increase the initiative
   * value on your revealed plot card by 1 for each plot card in your used
   * pile..<br><i>Sands of Dorne.</i><br>
   **/
  SerCletusYronwoodSoD = "SER_CLETUS_YRONWOOD_SoD",
  /**
   * <h5>Loreza Sand</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br><b>Interrupt:</b> When a unique [martell] character you
   * control is killed, draw 1 card. (Limit once per phase.).<br><i>Sands of Dorne.</i><br>
   **/
  LorezaSandSoD = "LOREZA_SAND_SoD",
  /**
   * <h5>Maester Kedry</h5>House
   * Martell.<br><b><i>Maester.</i></b><br><b>Action:</b> Kneel Maester Kedry to
   * reduce the gold cost of the next event you play this phase by 2..<br><i>Sands
   * of Dorne.</i><br>
   **/
  MaesterKedrySoD = "MAESTER_KEDRY_SoD",
  /**
   * <h5>House Dayne Escort</h5>House Martell.<br><b><i>Ally. House
   * Dayne.</i></b><br>While there are 3 or more plot cards in your used pile, you
   * may marshal House Dayne Escort from your discard pile as if it were in your
   * hand..<br><i>Sands of Dorne.</i><br>
   **/
  HouseDayneEscortSoD = "HOUSE_DAYNE_ESCORT_SoD",
  /**
   * <h5>Shadow City Bastard</h5>House Martell.<br><b><i>Bastard.</i></b><br>Ambush
   * (3).<b>Challenges Action:</b> Sacrifice Shadow City Bastard to choose a
   * character with printed cost 5 or lower. Until the end of the phase, that
   * characters loses a [military], an [intrigue], and a [power] icon..<br><i>Sands
   * of Dorne.</i><br>
   **/
  ShadowCityBastardSoD = "SHADOW_CITY_BASTARD_SoD",
  /**
   * <h5>Dorne</h5>House Martell.<br><b><i>Dorne.</i></b><br><b>Reaction:</b> After
   * you lose a challenge, look at the top 2 cards of your deck. Add 1 to your
   * hand, and place the other on the bottom of your deck.+1 Reserve..<br><i>Sands
   * of Dorne.</i><br>
   **/
  DorneSoD = "DORNE_SoD",
  /**
   * <h5>Starfall</h5>House Martell.<br><b><i>Dorne. House
   * Dayne.</i></b><br><b>Challenges Action:</b> Kneel Starfall to choose a
   * character. Until the end of the phase, that character loses a challenge icon
   * of your choice..<br><i>Sands of Dorne.</i><br>
   **/
  StarfallSoD = "STARFALL_SoD",
  /**
   * <h5>Hotah's Axe</h5>House Martell.<br><b><i>Weapon.</i></b><br>Attached
   * character gets +3 STR.<b>Reaction:</b> After a [martell] character enters play
   * during the challenges phase, put Hotah's Axe into play from your hand,
   * attached to that character..<br><i>Sands of Dorne.</i><br>
   **/
  HotahsAxeSoD = "HOTAHS_AXE_SoD",
  /**
   * <h5>Patience</h5>House Martell.<br><b><i>Skill.</i></b><br>Character you
   * control only.<b>Challenges Action:</b> Return attached character to its
   * owner's hand..<br><i>Sands of Dorne.</i><br>
   **/
  PatienceSoD = "PATIENCE_SoD",
  /**
   * <h5>Beguiled</h5>House
   * Martell.<br><b><i>Condition.</i></b><br>Terminal.<b>Challenges Action:</b>
   * Kneel Beguiled to have attached character lose a challenge icon of your choice
   * until the end of the phase..<br><i>Sands of Dorne.</i><br>
   **/
  BeguiledSoD = "BEGUILED_SoD",
  /**
   * <h5>No Use For Grief</h5>House Martell.<br>Play only if a [martell] character
   * was killed under your control this round.<b>Action:</b> Search your deck for a
   * <i>Sand Snake</i> character with printed cost 3 or lower, put it into play,
   * and shuffle your deck. (Printed cost 6 or lower instead if The Red Viper is in
   * your dead pile.).<br><i>Sands of Dorne.</i><br>
   **/
  NoUseForGriefSoD = "NO_USE_FOR_GRIEF_SoD",
  /**
   * <h5>False Plans</h5>House Martell.<br><b>Challenges Action:</b> Choose an
   * opponent. That player discards 1 card at random from his or her
   * hand.<b>Reaction:</b> After False Plans is discarded for [intrigue] claim, the
   * winning opponent discards 2 cards at random from his or her hand..<br><i>Sands
   * of Dorne.</i><br>
   **/
  FalsePlansSoD = "FALSE_PLANS_SoD",
  /**
   * <h5>To The Spears!</h5>House Martell.<br>Play only if there are 3 or more plot
   * cards in your used pile.<b>Challenges Action:</b> Each [martell] character you
   * control does not kneel when declared as an attacker in the next challenge you
   * initiate this phase..<br><i>Sands of Dorne.</i><br>
   **/
  ToTheSpearsSoD = "TO_THE_SPEARS_SoD",
  /**
   * <h5>Ser Cortnay Penrose</h5>House
   * Baratheon.<br><b><i>Knight.</i></b><br><b>Reaction:</b> After you win a
   * [power] challenge in which Ser Cortnay Penrose is participating, stand
   * him..<br><i>Sands of Dorne.</i><br>
   **/
  SerCortnayPenroseSoD = "SER_CORTNAY_PENROSE_SoD",
  /**
   * <h5>Sea Dragon Tower</h5>House
   * Baratheon.<br><b><i>Dragonstone.</i></b><br><b>Challenges Action:</b> Kneel
   * Sea Dragon Tower to choose a character. Until the end of the phase, that
   * character gains a [power] icon..<br><i>Sands of Dorne.</i><br>
   **/
  SeaDragonTowerSoD = "SEA_DRAGON_TOWER_SoD",
  /**
   * <h5>Fleet From Pyke</h5>House Greyjoy.<br><b><i>Army.</i></b><br>No
   * attachments. Pillage.<b>Reaction:</b> After a character you control discards a
   * location or attachment using pillage, Fleet From Pyke gains a challenge icon
   * of your choice until the end of the phase..<br><i>Sands of Dorne.</i><br>
   **/
  FleetFromPykeSoD = "FLEET_FROM_PYKE_SoD",
  /**
   * <h5>Plundered</h5>House Greyjoy.<br><b><i>Condition.</i></b><br>Opponent's
   * location only. Terminal.<b>Reaction:</b> After attached location's controller
   * loses a challenge as the defending player, kneel attached location. Then, you
   * may sacrifice Plundered to gain 3 gold..<br><i>Sands of Dorne.</i><br>
   **/
  PlunderedSoD = "PLUNDERED_SoD",
  /**
   * <h5>Myrcella Baratheon (SoD)</h5>House
   * Lannister.<br><b><i>Lady.</i></b><br>Myrcella Baratheon does not kneel when
   * declared as an attacker against an opponent with fewer cards in his or her
   * hand than you..<br><i>Sands of Dorne.</i><br>
   **/
  MyrcellaBaratheonSoD = "MYRCELLA_BARATHEON_SoD",
  /**
   * <h5>Extortion</h5>House Lannister.<br><b>Reaction:</b> After you win an
   * [intrigue] challenge as the attacking player, gain 3 gold and return up to 3
   * gold from the losing opponent's gold pool to the treasury..<br><i>Sands of Dorne.</i><br>
   **/
  ExtortionSoD = "EXTORTION_SoD",
  /**
   * <h5>Spare Boot</h5>The Night's
   * Watch.<br><b><i>Builder.</i></b><br><b>Challenges Action:</b> Choose an
   * attachment attached to a character you control. Stand that attachment and move
   * it to Spare Boot. (Limit once per phase.).<br><i>Sands of Dorne.</i><br>
   **/
  SpareBootSoD = "SPARE_BOOT_SoD",
  /**
   * <h5>Turncloak</h5>The Night's Watch.<br><b><i>Condition.</i></b><br>Non-loyal
   * character only. Terminal.<b>Reaction:</b> After you win a challenge in which
   * attached character is participating, take control of attached character. (Any
   * player may initiate this ability.).<br><i>Sands of Dorne.</i><br>
   **/
  TurncloakSoD = "TURNCLOAK_SoD",
  /**
   * <h5>Greatjon Umber</h5>House Stark.<br><b><i>House Umber.
   * Lord.</i></b><br>Intimidate.<b>Reaction:</b> After you win a [military]
   * challenge in which Greatjon Umber is attacking, if there are fewer than 3 plot
   * cards in your used pile, stand him..<br><i>Sands of Dorne.</i><br>
   **/
  GreatjonUmberSoD = "GREATJON_UMBER_SoD",
  /**
   * <h5>Taste For Flesh</h5>House Stark.<br><b>Reaction:</b> After you win a
   * challenge in which you control an attacking <i>Direwolf</i> character or an
   * attacking character with a <i>Direwolf</i> attachment, choose and kill a
   * defending character..<br><i>Sands of Dorne.</i><br>
   **/
  TasteForFleshSoD = "TASTE_FOR_FLESH_SoD",
  /**
   * <h5>Missandei</h5>House
   * Targaryen.<br><b><i>Companion.</i></b><br><b>Interrupt:</b> When Missandei is
   * discarded from your hand or deck, put her into play instead of placing her in
   * your discard pile..<br><i>Sands of Dorne.</i><br>
   **/
  MissandeiSoD = "MISSANDEI_SoD",
  /**
   * <h5>Qarth</h5>House Targaryen.<br><b><i>Essos.
   * Qarth.</i></b><br><b>Action:</b> Kneel Qarth and pay 1 gold to choose an
   * attachment attached to a card you control and discard it from
   * play..<br><i>Sands of Dorne.</i><br>
   **/
  QarthSoD = "QARTH_SoD",
  /**
   * <h5>Leyton Hightower</h5>House Tyrell.<br><b><i>House Hightower.
   * Lord.</i></b><br><b>Action:</b> Kneel Leyton Hightower to put a non-limited
   * [tyrell] card with printed cost 4 or lower into play from your hand
   * knelt..<br><i>Sands of Dorne.</i><br>
   **/
  LeytonHightowerSoD = "LEYTON_HIGHTOWER_SoD",
  /**
   * <h5>Beacon of the South</h5>House Tyrell.<br><b><i>Title.</i></b><br>[tyrell]
   * character only.<b>Reaction:</b> After you win a challenge by 5 or more STR in
   * which attached character is attacking, it gains 1 power..<br><i>Sands of Dorne.</i><br>
   **/
  BeaconOfTheSouthSoD = "BEACON_OF_THE_SOUTH_SoD",
  /**
   * <h5>Val</h5>Neutral.<br><b><i>Wildling.</i></b><br><b>Reaction:</b> After Val
   * is declared as an attacker, put a <i>Wildling</i> character with printed cost
   * 4 or lower into play from your hand knelt, participating as an
   * attacker..<br><i>Sands of Dorne.</i><br>
   **/
  ValSoD = "VAL_SoD",
  /**
   * <h5>Septon Meribald</h5>Neutral.<br><b><i>The Seven.</i></b><br><b>Action:</b>
   * Kneel Septon Meribald to choose and stand up to 3 characters with printed STR
   * 1 or lower. (Limit once per round.).<br><i>Sands of Dorne.</i><br>
   **/
  SeptonMeribaldSoD = "SEPTON_MERIBALD_SoD",
  /**
   * <h5>Oldtown Scholar</h5>Neutral.<br><b><i>Maester.</i></b><br><b>Reaction:</b>
   * After an opponent draws 1 or more cards, if it is not the draw phase, kneel
   * Oldtown Scholar to draw that many cards..<br><i>Sands of Dorne.</i><br>
   **/
  OldtownScholarSoD = "OLDTOWN_SCHOLAR_SoD",
  /**
   * <h5>Jade Sea Dromond</h5>Neutral.<br><b><i>Warship.</i></b><br>Limited.<b>Dominance
   * Action:</b> Kneel and sacrifice Jade Sea Dromond to choose a non-limited
   * location with printed cost 3 or lower and discard it from play.+1
   * Income..<br><i>Sands of Dorne.</i><br>
   **/
  JadeSeaDromondSoD = "JADE_SEA_DROMOND_SoD",
  /**
   * <h5>Brother's Robes</h5>Neutral.<br><b><i>The Seven.</i></b><br><i>The
   * Seven</i> character only.<b>Reaction:</b> After attached character is knelt,
   * choose a location or attachment. Until the end of the phase, treat that card
   * as if its printed text box were blank (except for <i>Traits</i>)..<br><i>Sands
   * of Dorne.</i><br>
   **/
  BrothersRobesSoD = "BROTHERS_ROBES_SoD",
  /**
   * <h5>"Off To Gulltown"</h5>Neutral.<br><b><i>Song.</i></b><br><b>Challenges
   * Action:</b> Choose a character. Until the end of the phase, that character
   * gains a [military], an [intrigue], and a [power] icon. Draw 1
   * card..<br><i>Sands of Dorne.</i><br>
   **/
  OffToGulltownSoD = "OFF_TO_GULLTOWN_SoD",
  /**
   * <h5>The Wars To Come</h5>Neutral.<br><b><i>Omen.</i></b><br>Your plot deck
   * must be exactly 10 cards. You may include a second copy of up to 2 different
   * cards in your plot deck..<br><i>Sands of Dorne.</i><br>
   **/
  TheWarsToComeSoD = "THE_WARS_TO_COME_SoD",
  /**
   * <h5>At Prince Doran's Behest</h5>House
   * Martell.<br><b><i>Edict.</i></b><br><b>When Revealed:</b> Choose and reveal a
   * new plot card. (Cannot be canceled.).<br><i>Sands of Dorne.</i><br>
   **/
  AtPrinceDoransBehestSoD = "AT_PRINCE_DORANS_BEHEST_SoD",
  /**
   * <h5>Peace and Prosperity</h5>Neutral.<br><b><i>Kingdom.</i></b><br>Reduce the
   * cost of the first character you marshal this round by 3, the first location
   * your marshal this round by 2, and the first attachment you marshal this round
   * by 1..<br><i>Sands of Dorne.</i><br>
   **/
  PeaceAndProsperitySoD = "PEACE_AND_PROSPERITY_SoD",
  /**
   * <h5>Forced March</h5>Neutral.<br><b><i>Edict. War.</i></b><br><b>When
   * Revealed:</b> Each opponent kneels 1 character he or she controls with a
   * [military] icon. Then, you may kneel a character with a [military] icon to
   * initiate this effect again..<br><i>Sands of Dorne.</i><br>
   **/
  ForcedMarchSoD = "FORCED_MARCH_SoD",
  /**
   * <h5>Beyond Reproach</h5>Neutral.<br><b><i>The Seven.</i></b><br><b>When
   * Revealed:</b> Each player sacrifices each attachment that is attached to a
   * character he or she does not control..<br><i>Sands of Dorne.</i><br>
   **/
  BeyondReproachSoD = "BEYOND_REPROACH_SoD",
  /**
   * <h5>Breaking Ties</h5>Neutral.<br><b><i>House Frey.
   * Scheme.</i></b><br><b>Action:</b> Sacrifice a loyal character to choose a
   * non-loyal character or location and return it to its owner's hand. (Limit
   * twice per round.).<br><i>Sands of Dorne.</i><br>
   **/
  BreakingTiesSoD = "BREAKING_TIES_SoD",
  /**
   * <h5>Grand Melee</h5>Neutral.<br><b><i>Summer.</i></b><br>Each character that
   * is attacking or defending alone does not contribute its STR to the
   * challenge..<br><i>Sands of Dorne.</i><br>
   **/
  GrandMeleeSoD = "GRAND_MELEE_SoD",
  /**
   * <h5>False Spring</h5>Neutral.<br><b><i>Winter.</i></b><br><b>When
   * Revealed:</b> Each opponent chooses and reveals 3 cards from his or her hand,
   * if able. You may choose and discard 1 revealed card from any number of those
   * hands..<br><i>Sands of Dorne.</i><br>
   **/
  FalseSpringSoD = "FALSE_SPRING_SoD",
  /**
   * <h5>Varamyr Sixskins</h5>Neutral.<br><b><i>Wildling.</i></b><br><b>Reaction:</b> After the
   * challenges phase begins, until the end of the phase, Varamyr Sixskins gains
   * (choose one):- the <i>Bear</i> trait and gets +5 STR.- the <i>Eagle</i> trait,
   * an [intrigue] icon, and insight.- the <i>Cat</i> trait, a [power] icon, and
   * stealth.- the <i>Wolf</i> trait and intimidate, and gets +2 STR..<br><i>The
   * Shadow City.</i><br>
   **/
  VaramyrSixskinsTsc = "VARAMYR_SIXSKINS_TSC",
  /**
   * <h5>Bolton Flayer</h5>House Stark.<br><b><i>Ally. House
   * Bolton.</i></b><br>Shadow (2).<b>Forced Interrupt:</b> When the challenges
   * phase ends, choose and kill a character with the lowest printed cost (cannot
   * be saved)..<br><i>The Shadow City.</i><br>
   **/
  BoltonFlayerTsc = "BOLTON_FLAYER_TSC",
  /**
   * <h5>Northern Armory</h5>House Stark.<br><b><i>The North.</i></b><br>Northern
   * Armory cannot stand.<b>Action:</b> Kneel Northern Armory to choose and stand a
   * [stark] character.+1 Income..<br><i>The Shadow City.</i><br>
   **/
  NorthernArmoryTsc = "NORTHERN_ARMORY_TSC",
  /**
   * <h5>Scheming Septon</h5>House Tyrell.<br><b><i>The Seven.</i></b><br>Shadow
   * (2).<b>Challenges Action:</b> Draw 1 card and gain 2 gold. Then, place
   * Scheming Septon on top of your deck. (Limit once per phase.).<br><i>The Shadow City.</i><br>
   **/
  SchemingSeptonTsc = "SCHEMING_SEPTON_TSC",
  /**
   * <h5>Margaery's Influence</h5>House
   * Tyrell.<br><b><i>Condition.</i></b><br>Terminal.<b>Action:</b> While attached
   * character is participating in a challenge, kneel Margaery's Influence and pay
   * 1 gold to stand attached character and remove it from the
   * challenge..<br><i>The Shadow City.</i><br>
   **/
  MargaerysInfluenceTsc = "MARGAERYS_INFLUENCE_TSC",
  /**
   * <h5>Janos Slynt (TSC)</h5>The Night's Watch.<br><b><i>Ally.</i></b><br>Shadow
   * (0).<b>Forced Reaction:</b> After Janos Slynt comes out of shadows, sacrifice
   * a [thenightswatch] character..<br><i>The Shadow City.</i><br>
   **/
  JanosSlyntTsc = "JANOS_SLYNT_TSC",
  /**
   * <h5>Fresh Recruits</h5>The Night's Watch.<br><b>Action:</b> Search your deck
   * for a <i>Ranger</i> character, a <i>Builder</i> character, and a
   * <i>Steward</i> character, reveal them, and add them to your hand. Shuffle your
   * deck..<br><i>The Shadow City.</i><br>
   **/
  FreshRecruitsTsc = "FRESH_RECRUITS_TSC",
  /**
   * <h5>Shadow Priestess</h5>House Baratheon.<br><b><i>Ally.
   * R'hllor.</i></b><br>Shadow (3).<b>Reaction:</b> After Shadow Priestess comes
   * out of shadows, choose and kneel a character without attachments..<br><i>The
   * Shadow City.</i><br>
   **/
  ShadowPriestessTsc = "SHADOW_PRIESTESS_TSC",
  /**
   * <h5>Stormlands Fiefdom</h5>House
   * Baratheon.<br><b><i>Westeros.</i></b><br><b>Action:</b> Kneel Stormlands
   * Fiefdom to move 1 power from a character or location to its owner's faction
   * card.+1 Income..<br><i>The Shadow City.</i><br>
   **/
  StormlandsFiefdomTsc = "STORMLANDS_FIEFDOM_TSC",
  /**
   * <h5>Ser Robert Strong</h5>House Lannister.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Shadow (5).<b>Reaction:</b> After Ser Robert Strong comes
   * out of shadows, choose and kill a kneeling character with printed cost 5 or
   * lower..<br><i>The Shadow City.</i><br>
   **/
  SerRobertStrongTsc = "SER_ROBERT_STRONG_TSC",
  /**
   * <h5>Beneath the Bridge of Dream</h5>House Lannister.<br>Shadow
   * (0).<b>Interrupt:</b> When you choose a plot card to reveal in the plot phase,
   * instead shuffle your used pile into your plot deck and choose a plot card to
   * reveal at random. Until the end of the round, increase the gold value on your
   * revealed plot card by 2..<br><i>The Shadow City.</i><br>
   **/
  BeneathTheBridgeOfDreamTsc = "BENEATH_THE_BRIDGE_OF_DREAM_TSC",
  /**
   * <h5>Nighttime Marauders</h5>House
   * Greyjoy.<br><b><i>Raider.</i></b><br>Pillage. Shadow (3).<b>Reaction:</b>
   * After Nighttime Marauders comes out of shadows, choose a card in an opponent's
   * discard pile. That player reveals his or her hand and discards from it each
   * card with the same printed cost as the chosen card..<br><i>The Shadow City.</i><br>
   **/
  NighttimeMaraudersTsc = "NIGHTTIME_MARAUDERS_TSC",
  /**
   * <h5>Seize the Initiative</h5>House Greyjoy.<br>X is the number of opponents
   * you have.<b>Interrupt:</b> When the marshaling phase ends, you become the
   * first player..<br><i>The Shadow City.</i><br>
   **/
  SeizeTheInitiativeTsc = "SEIZE_THE_INITIATIVE_TSC",
  /**
   * <h5>Aegon Targaryen</h5>House Targaryen.<br><b><i>Lord.</i></b><br>Shadow
   * (3).<b>Reaction:</b> After Aegon Targaryen enters play, search your deck for
   * an <i>Army</i> or <i>Mercenary</i> character, put it into play, and shuffle
   * your deck. At the end of the phase, if that card is still in play, return it
   * to your hand..<br><i>The Shadow City.</i><br>
   **/
  AegonTargaryenTsc = "AEGON_TARGARYEN_TSC",
  /**
   * <h5>Unexpected Return</h5>House Targaryen.<br><b>Challenges Action:</b> Choose
   * a character in your discard pile and put it into play..<br><i>The Shadow City.</i><br>
   **/
  UnexpectedReturnTsc = "UNEXPECTED_RETURN_TSC",
  /**
   * <h5>Ser Gerris Drinkwater</h5>House
   * Martell.<br><b><i>Knight.</i></b><br>Renown. Shadow (5).<b>Reaction:</b> After
   * Ser Gerris Drinkwater comes out of shadows, choose a card in your plot deck
   * and switch it with a card in your used pile..<br><i>The Shadow City.</i><br>
   **/
  SerGerrisDrinkwaterTsc = "SER_GERRIS_DRINKWATER_TSC",
  /**
   * <h5>The Shadow City</h5>House Martell.<br><b><i>Dorne.</i></b><br>Shadow
   * (2).Reduce the cost to marshal each of your cards into shadows by
   * 1.<b>Challenges Action:</b> Kneel The Shadow City and discard 1 card from
   * shadows to draw 2 cards..<br><i>The Shadow City.</i><br>
   **/
  TheShadowCityTsc = "THE_SHADOW_CITY_TSC",
  /**
   * <h5>Nefarious Acolyte</h5>Neutral.<br><b><i>Maester.</i></b><br>Shadow
   * (2).<b>Action:</b> Kneel Nefarious Acolyte and pay 1 gold to choose a plot
   * card. Until the end of the phase, treat it as if its printed text box were
   * blank (except for <i>Traits</i>)..<br><i>The Shadow City.</i><br>
   **/
  NefariousAcolyteTsc = "NEFARIOUS_ACOLYTE_TSC",
  /**
   * <h5>Burning the Dead</h5>Neutral.<br><b>Action:</b> Remove each non-unique
   * character in each player's dead pile from the game. Draw 1 card..<br><i>The
   * Shadow City.</i><br>
   **/
  BurningTheDeadTsc = "BURNING_THE_DEAD_TSC",
  /**
   * <h5>Exchange of Information</h5>Neutral.<br><b><i>Kingdom.
   * Summer.</i></b><br><b>When Revealed:</b> Choose an opponent and reveal the top
   * 10 cards of your deck. That opponent chooses 1 character, 1 location, 1
   * attachment, and 1 event revealed this way, if able, and adds them to your
   * hand. Shuffle your deck..<br><i>The Shadow City.</i><br>
   **/
  ExchangeOfInformationTsc = "EXCHANGE_OF_INFORMATION_TSC",
  /**
   * <h5>Wyman Manderly</h5>House Stark.<br><b><i>House Manderly.
   * Lord.</i></b><br><b>Action:</b> Sacrifice a character.<b>Reaction:</b> After 1
   * or more characters you control are sacrificed or killed, stand Wyman Manderly
   * and draw 1 card. (Limit 3 times per round.).<br><i>The March on
   * Winterfell.</i><br>
   **/
  WymanManderlyTMoW = "WYMAN_MANDERLY_TMoW",
  /**
   * <h5>Honor-Bound</h5>House Stark.<br><b><i>Condition.</i></b><br>During
   * [military] challenges, attached character gets +2 STR.Attached character
   * cannot be declared as an attacker or defender in [intrigue]
   * challenges..<br><i>The March on Winterfell.</i><br>
   **/
  HonorBoundTMoW = "HONOR_BOUND_TMoW",
  /**
   * <h5>The Queen of Thorns (TMoW)</h5>House
   * Tyrell.<br><b><i>Lady.</i></b><br>Shadow (4). Stealth.<b>Reaction:</b> After
   * you win a challenge in which The Queen of Thorns is participating, choose a
   * card you control in shadows and put it into play..<br><i>The March on
   * Winterfell.</i><br>
   **/
  TheQueenOfThornsTMoW = "THE_QUEEN_OF_THORNS_TMoW",
  /**
   * <h5>Oldtown Undercity</h5>House Tyrell.<br><b><i>Oldtown.</i></b><br>Shadow
   * (2).<b>Reaction:</b> After a card you control comes out of shadows, look at
   * the top 3 cards of your deck. Add 1 to your hand, place 1 on the bottom of
   * your deck, and place the other on top of your deck. (Limit once per
   * phase.).<br><i>The March on Winterfell.</i><br>
   **/
  OldtownUndercityTMoW = "OLDTOWN_UNDERCITY_TMoW",
  /**
   * <h5>Cunning Steward</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>Shadow
   * (3).While you are the defending player, Cunning Steward gains a [military] and
   * a [power] icon..<br><i>The March on Winterfell.</i><br>
   **/
  CunningStewardTMoW = "CUNNING_STEWARD_TMoW",
  /**
   * <h5>The Wall (TMoW)</h5>The Night's Watch.<br><b><i>The North.</i></b><br>Each
   * character you control gains the [thenightswatch] affiliation and loses all
   * other faction affiliations.<b>Action:</b> Kneel The Wall to choose an
   * opponent. Put an eligible character of that player’s choice from his or her
   * discard pile into play under your control..<br><i>The March on
   * Winterfell.</i><br>
   **/
  TheWallTMoW = "THE_WALL_TMoW",
  /**
   * <h5>Ser Justin Massey</h5>House Baratheon.<br><b><i>Knight.</i></b><br>While
   * you control a <i>King</i> character, Ser Justin Massey gains
   * renown.<b>Reaction:</b> After a [baratheon] character gains power, stand it.
   * (Limit once per phase.).<br><i>The March on Winterfell.</i><br>
   **/
  SerJustinMasseyTMoW = "SER_JUSTIN_MASSEY_TMoW",
  /**
   * <h5>March on Winterfell</h5>House Baratheon.<br>Play only during a challenge
   * you initiated.<b>Action:</b> End the challenge with no winner or loser. You
   * may initiate an additional [power] challenge this phase..<br><i>The March on
   * Winterfell.</i><br>
   **/
  MarchOnWinterfellTMoW = "MARCH_ON_WINTERFELL_TMoW",
  /**
   * <h5>Penny</h5>House Lannister.<br><b><i>Fool.</i></b><br>Shadow (1).While you
   * control more cards in shadows than each opponent, Penny gains an [intrigue]
   * icon and stealth..<br><i>The March on Winterfell.</i><br>
   **/
  PennyTMoW = "PENNY_TMoW",
  /**
   * <h5>Bowels of Casterly Rock</h5>House Lannister.<br><b><i>The
   * Westerlands.</i></b><br><b>Reaction:</b> After a card you control comes out of
   * shadows, either: gain 2 gold, or draw 1 card. (Limit once per
   * phase.).<br><i>The March on Winterfell.</i><br>
   **/
  BowelsOfCasterlyRockTMoW = "BOWELS_OF_CASTERLY_ROCK_TMoW",
  /**
   * <h5>Hagen's Daughter</h5>House Greyjoy.<br><b><i>Ironborn.</i></b><br>Shadow
   * (2).<b>Interrupt:</b> When Hagen’s Daughter would be killed, save her and
   * return her to shadows..<br><i>The March on Winterfell.</i><br>
   **/
  HagensDaughterTMoW = "HAGENS_DAUGHTER_TMoW",
  /**
   * <h5>"Steel Rain"</h5>House Greyjoy.<br><b><i>Song.</i></b><br>Shadow
   * (2).<b>Action:</b> Sacrifice any number of [greyjoy] locations. For each
   * location sacrificed, search your deck for a different [greyjoy] location with
   * equal or lower printed cost and put it into play. Shuffle your
   * deck..<br><i>The March on Winterfell.</i><br>
   **/
  SteelRainTMoW = "STEEL_RAIN_TMoW",
  /**
   * <h5>Hizdahr zo Loraq</h5>House
   * Targaryen.<br><b><i>King.</i></b><br><b>Action:</b> Discard 1 card from your
   * hand to reduce the cost of the next card you marshal, ambush, or bring out of
   * shadows this phase by 3. (Limit once per phase.).<br><i>The March on
   * Winterfell.</i><br>
   **/
  HizdahrZoLoraqTMoW = "HIZDAHR_ZO_LORAQ_TMoW",
  /**
   * <h5>Meereen</h5>House Targaryen.<br><b><i>Meereen.</i></b><br><b>Action:</b>
   * Kneel Meereen to place each card in your hand facedown under Meereen and draw
   * 3 cards. At the end of the phase, or if Meereen leaves play, discard your hand
   * and return each card you placed under Meereen to your hand..<br><i>The March
   * on Winterfell.</i><br>
   **/
  MeereenTMoW = "MEEREEN_TMoW",
  /**
   * <h5>Maiden of Poisons</h5>House Martell.<br><b><i>Bastard. Sand
   * Snake.</i></b><br>Shadow (2).<b>Reaction:</b> After you lose a challenge in
   * which Maiden of Poisons is participating, sacrifice it to choose a
   * participating character with fewer than 2 challenge icons and return it to its
   * owner’s hand..<br><i>The March on Winterfell.</i><br>
   **/
  MaidenOfPoisonsTMoW = "MAIDEN_OF_POISONS_TMoW",
  /**
   * <h5>Serve. Obey. Protect.</h5>House Martell.<br>Play only if you have lost a
   * challenge as the defending player this phase.<b>Reaction:</b> After an
   * opponent initiates a challenge against you, return a [martell] character to
   * your hand to put a different [martell] character with printed cost 5 or lower
   * into play from your hand..<br><i>The March on Winterfell.</i><br>
   **/
  ServeObeyProtectTMoW = "SERVE_OBEY_PROTECT_TMoW",
  /**
   * <h5>Tycho Nestoris</h5>Neutral.<br><b><i>Ally.</i></b><br>You cannot win the
   * game.<b>Action:</b> Pay 6 gold to treat Tycho Nestoris’s printed text box as
   * if it were blank (except for <i>Traits</i>) until the end of the phase.+3
   * Income..<br><i>The March on Winterfell.</i><br>
   **/
  TychoNestorisTMoW = "TYCHO_NESTORIS_TMoW",
  /**
   * <h5>City Gates</h5>Neutral.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Action:</b> Pay 1 gold and discard City Gates
   * from your hand to draw 1 card.+1 Income..<br><i>The March on
   * Winterfell.</i><br>
   **/
  CityGatesTMoW = "CITY_GATES_TMoW",
  /**
   * <h5>Trading With Qohor</h5>Neutral.<br><b><i>Banner.</i></b><br>While you
   * control no attachments, increase the gold value on each opponent’s revealed
   * plot card by 1.<b>Reaction:</b> After claim is applied for a challenge you
   * won, sacrifice an attachment to search your deck for a different attachment
   * with equal or lower printed cost and put it into play..<br><i>The March on
   * Winterfell.</i><br>
   **/
  TradingWithQohorTMoW = "TRADING_WITH_QOHOR_TMoW",
  /**
   * <h5>The Bloody Flux</h5>Neutral.<br><b><i>Omen.</i></b><br>Characters cannot
   * be saved..<br><i>The March on Winterfell.</i><br>
   **/
  TheBloodyFluxTMoW = "THE_BLOODY_FLUX_TMoW",
  /**
   * <h5>Umber Loyalist</h5>House Stark.<br><b><i>House
   * Umber.</i></b><br><b>Reaction:</b> After Umber Loyalist enters play, draw 2
   * cards.<b>Forced Interrupt:</b> When Umber Loyalist leaves play, choose and
   * discard 2 cards from your hand..<br><i>Streets of King's Landing.</i><br>
   **/
  UmberLoyalistSoKl = "UMBER_LOYALIST_SoKL",
  /**
   * <h5>White Harbor</h5>House Stark.<br><b><i>House Manderly. The
   * North.</i></b><br><b>Reaction:</b> After you win a challenge, reveal the top 2
   * cards of your deck. The losing opponent chooses 1 of those cards. Add that
   * card to your hand, and place the other on the bottom of your
   * deck..<br><i>Streets of King's Landing.</i><br>
   **/
  WhiteHarborSoKl = "WHITE_HARBOR_SoKL",
  /**
   * <h5>Lazy Leo</h5>House Tyrell.<br><b><i>Maester.</i></b><br>Shadow
   * (2).<b>Reaction:</b> After Lazy Leo comes out of shadows, choose a player.
   * Shuffle any number of events from that player's discard pile into his or her
   * deck..<br><i>Streets of King's Landing.</i><br>
   **/
  LazyLeoSoKl = "LAZY_LEO_SoKL",
  /**
   * <h5>Growing Ambition</h5>House Tyrell.<br>Shadow (X).<b>Challenges Action:</b>
   * Search your deck for X different cards and place them in your discard pile.
   * Shuffle your deck. Then, choose an opponent. Return X cards of that opponent's
   * choice from your discard pile to your hand..<br><i>Streets of King's
   * Landing.</i><br>
   **/
  GrowingAmbitionSoKl = "GROWING_AMBITION_SoKL",
  /**
   * <h5>Naive Scout</h5>The Night's Watch.<br><b><i>Ally. Ranger.</i></b><br>No
   * attachments except <i>Weapon</i>.While there is a card in shadows, Naive Scout
   * cannot be declared as a defender..<br><i>Streets of King's Landing.</i><br>
   **/
  NaiveScoutSoKl = "NAIVE_SCOUT_SoKL",
  /**
   * <h5>Miner's Pick</h5>The Night's Watch.<br><b><i>Item.
   * Weapon.</i></b><br><i>Builder</i> or <i>Steward</i> character only.Attached
   * character gets +1 STR.+1 Income..<br><i>Streets of King's Landing.</i><br>
   **/
  MinersPickSoKl = "MINERS_PICK_SoKL",
  /**
   * <h5>Valyrian's Crew</h5>House Baratheon.<br><b><i>Mercenary.
   * Smuggler.</i></b><br>Stealth.You may marshal or play facedown cards attached
   * to Valyrian's Crew as if they were in your hand.<b>Reaction:</b> After you win
   * a challenge in which Valyrian's Crew is attacking, attach the top card of the
   * losing opponent's deck to Valyrian's Crew facedown under your control, as an
   * attachment with terminal..<br><i>Streets of King's Landing.</i><br>
   **/
  ValyriansCrewSoKl = "VALYRIANS_CREW_SoKL",
  /**
   * <h5>Blackwater Bay</h5>House
   * Baratheon.<br><b><i>Westeros.</i></b><br><b>Reaction:</b> After the challenges
   * phase begins, kneel Blackwater Bay to choose an opponent. Draw 1 card for each
   * kneeling character that player controls..<br><i>Streets of King's
   * Landing.</i><br>
   **/
  BlackwaterBaySoKl = "BLACKWATER_BAY_SoKL",
  /**
   * <h5>Catspaw</h5>House Lannister.<br><b><i>Ally.</i></b><br>Shadow
   * (2).<b>Reaction:</b> After Catspaw comes out of shadows, pay X gold to choose
   * another character with printed cost X or lower and return it to its owner's
   * hand..<br><i>Streets of King's Landing.</i><br>
   **/
  CatspawSoKl = "CATSPAW_SoKL",
  /**
   * <h5>Gold Mine</h5>House Lannister.<br><b><i>The
   * Westerlands.</i></b><br><b>Action:</b> Kneel Gold Mine and discard 1 card from
   * your hand to draw 1 card.+1 Income..<br><i>Streets of King's Landing.</i><br>
   **/
  GoldMineSoKl = "GOLD_MINE_SoKL",
  /**
   * <h5>Drowned God Fanatic</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Action:</b> Kill a character to put Drowned God Fanatic
   * into play from your dead pile. (Max once per round.)<b>Interrupt:</b> When the
   * effects of an opponent's triggered character ability would initiate, place
   * Drowned God Fanatic into your dead pile from your hand to cancel those
   * effects..<br><i>Streets of King's Landing.</i><br>
   **/
  DrownedGodFanaticSoKl = "DROWNED_GOD_FANATIC_SoKL",
  /**
   * <h5>Dragonbinder</h5>House Greyjoy.<br><b><i>Item.</i></b><br>Character you
   * control only.Attached character gains intimidate.<b>Reaction:</b> After you
   * win dominance, kill attached character to, either: choose and take control of
   * a <i>Dragon</i> character, or search the top 10 cards of your deck for a
   * [greyjoy] character, put into play, and shuffle your deck..<br><i>Streets of
   * King's Landing.</i><br>
   **/
  DragonbinderSoKl = "DRAGONBINDER_SoKL",
  /**
   * <h5>Hired Assassin</h5>House Targaryen.<br><b><i>Mercenary.</i></b><br>Shadow
   * (2).<b>Reaction:</b> After Hired Assassin comes out of shadows, look at a card
   * in shadows. If it is a character, you may place it in its owner's dead
   * pile..<br><i>Streets of King's Landing.</i><br>
   **/
  HiredAssassinSoKl = "HIRED_ASSASSIN_SoKL",
  /**
   * <h5>Queensguard</h5>House
   * Targaryen.<br><b><i>Title.</i></b><br>Non-<i>Lady</i> character only. Shadow
   * (2).<b>Action:</b> Discard 1 card from your hand to stand attached character.
   * (Limit 3 times per round.).<br><i>Streets of King's Landing.</i><br>
   **/
  QueensguardSoKl = "QUEENSGUARD_SoKL",
  /**
   * <h5>Ser Archibald Yronwood</h5>House Martell.<br><b><i>House Yronwood.
   * Knight.</i></b><br>Shadow (4). No attachments except
   * <i>Weapon</i>.<b>Reaction:</b> After you lose dominance, the winning opponent
   * must choose and kill a character he or she controls..<br><i>Streets of King's
   * Landing.</i><br>
   **/
  SerArchibaldYronwoodSoKl = "SER_ARCHIBALD_YRONWOOD_SoKL",
  /**
   * <h5>Summer Sea Port</h5>House Martell.<br><b><i>Dorne.</i></b><br>+1 Income.
   * +1 Reserve..<br><i>Streets of King's Landing.</i><br>
   **/
  SummerSeaPortSoKl = "SUMMER_SEA_PORT_SoKL",
  /**
   * <h5>Poor Fellows</h5>Neutral.<br><b><i>Army. The Seven.</i></b><br>No
   * attachments.<b>Reaction:</b> After you win a challenge in which Poor Fellows
   * is attacking, the losing opponent chooses, either: Poor Fellows gains 1 power,
   * or you draw 1 card..<br><i>Streets of King's Landing.</i><br>
   **/
  PoorFellowsSoKl = "POOR_FELLOWS_SoKL",
  /**
   * <h5>King's Landing</h5>Neutral.<br><b><i>King's Landing.</i></b><br>Once per
   * marshaling phase, you may marshal a location from your discard pile as if it
   * were in your hand.<b>Challenges Action:</b> Kneel King's Landing and discard 1
   * location from your hand to draw 1 card..<br><i>Streets of King's
   * Landing.</i><br>
   **/
  KingsLandingSoKl = "KINGS_LANDING_SoKL",
  /**
   * <h5>Glass Candle</h5>Neutral.<br><b><i>Item. The Citadel.</i></b><br>Character
   * you control only.If attached character has the <i>Maester</i> trait, it gains
   * insight.<b>Challenges Action:</b> Kneel Glass Candle to look at the top card
   * of any player's deck. You may discard that card..<br><i>Streets of King's
   * Landing.</i><br>
   **/
  GlassCandleSoKl = "GLASS_CANDLE_SoKL",
  /**
   * <h5>Uneasy Truce</h5>Neutral.<br><b><i>Edict.</i></b><br>Each player cannot
   * gain power for his or her faction except during challenges.<b>Forced
   * Reaction:</b> After a challenge is initiated, move 1 power from the attacking
   * player's faction card to the defending player's faction card..<br><i>Streets
   * of King's Landing.</i><br>
   **/
  UneasyTruceSoKl = "UNEASY_TRUCE_SoKL",
  /**
   * <h5>Meera Reed</h5>House Stark.<br><b><i>House Reed. Lady.</i></b><br>Shadow
   * (1). Stealth.<b>Reaction:</b> After a [stark] character you control is
   * sacrificed, return Meera Reed to shadows.<b>Reaction:</b> After Meera Reed
   * comes out of shadows, choose a character. Until the end of the phase, treat it
   * as if its printed text box were blank (except for <i>Traits</i>)..<br><i>Music
   * of Dragons.</i><br>
   **/
  MeeraReedMoD = "MEERA_REED_MoD",
  /**
   * <h5>Shaggydog (MoD)</h5>House Stark.<br><b><i>Direwolf.</i></b><br>[stark]
   * character you control only.<b>Reaction:</b> After you win a challenge in which
   * attached character is attacking, the losing opponent must choose and kill a
   * defending character.<b>Action:</b> Pay 1 gold to attach Shaggydog to a
   * different character. (Limit once per phase.).<br><i>Music of Dragons.</i><br>
   **/
  ShaggydogMoD = "SHAGGYDOG_MoD",
  /**
   * <h5>Ser Mark Mullendore</h5>House
   * Tyrell.<br><b><i>Knight.</i></b><br><b>Reaction:</b> After you win a challenge
   * in which Ser Mark Mullendore is participating, reveal the top card of your
   * deck. You may put that card into play. If you do, place Ser Mark Mullendore on
   * top of your deck (cannot be saved)..<br><i>Music of Dragons.</i><br>
   **/
  SerMarkMullendoreMoD = "SER_MARK_MULLENDORE_MoD",
  /**
   * <h5>Bonds of Chivalry</h5>House Tyrell.<br><b>Action:</b> Choose a
   * participating <i>Knight</i> character you control. Stand it and remove it from
   * the challenge. Then, you may kneel another <i>Knight</i> character you control
   * to have it participate in the challenge on your side..<br><i>Music of
   * Dragons.</i><br>
   **/
  BondsOfChivalryMoD = "BONDS_OF_CHIVALRY_MoD",
  /**
   * <h5>Jon Snow (MoD)</h5>The Night's Watch.<br><b><i>Bastard. Commander.
   * Lord.</i></b><br>While you control a:- <i>Builder</i> character, Jon Snow
   * gains stealth.- <i>Ranger</i> character, Jon Snow gains intimidate.-
   * <i>Steward</i> character, Jon Snow gains insight..<br><i>Music of
   * Dragons.</i><br>
   **/
  JonSnowMoD = "JON_SNOW_MoD",
  /**
   * <h5>Lord Commander</h5>The Night's
   * Watch.<br><b><i>Title.</i></b><br>[thenightswatch] character with printed cost
   * 5 or higher only.<b>Reaction:</b> After you win a challenge in which you
   * control a participating [thenightswatch] character, attached character gains 1
   * power..<br><i>Music of Dragons.</i><br>
   **/
  LordCommanderMoD = "LORD_COMMANDER_MoD",
  /**
   * <h5>Shireen Baratheon (MoD)</h5>House
   * Baratheon.<br><b><i>Lady.</i></b><br>Shadow (3).<b>Action:</b> During a
   * challenge in which Shireen Baratheon is participating, choose a participating
   * character. That character and Shireen Baratheon do not contribute their STR to
   * the challenge. (Limit once per challenge.).<br><i>Music of Dragons.</i><br>
   **/
  ShireenBaratheonMoD = "SHIREEN_BARATHEON_MoD",
  /**
   * <h5>Privileged Position</h5>House Baratheon.<br>Play only if you have not lost
   * a [power] challenge this round.<b>Interrupt:</b> When the effects of an
   * opponent's event or triggered location ability would initiate, cancel those
   * effects..<br><i>Music of Dragons.</i><br>
   **/
  PrivilegedPositionMoD = "PRIVILEGED_POSITION_MoD",
  /**
   * <h5>Tithe Collector</h5>House Lannister.<br><b><i>Ally. The
   * Seven.</i></b><br><b>Reaction:</b> After you collect income, pay 2 gold to
   * have Tithe Collector gain 1 power.+1 Income..<br><i>Music of Dragons.</i><br>
   **/
  TitheCollectorMoD = "TITHE_COLLECTOR_MoD",
  /**
   * <h5>Clever Feint</h5>House Lannister.<br><b>Action:</b> Kneel your faction
   * card to choose any number of cards you control with shadow. Return each of
   * those cards to shadows..<br><i>Music of Dragons.</i><br>
   **/
  CleverFeintMoD = "CLEVER_FEINT_MoD",
  /**
   * <h5>Victarion Greyjoy (MoD)</h5>House Greyjoy.<br><b><i>Captain. Ironborn.
   * Lord.</i></b><br><b>Challenges Action:</b> Kneel a <i>Warship</i> location to
   * (choose 1):- choose and kneel a location.- stand Victarion Greyjoy.- have
   * Victarion Greyjoy gain renown until the end of the challenge..<br><i>Music of
   * Dragons.</i><br>
   **/
  VictarionGreyjoyMoD = "VICTARION_GREYJOY_MoD",
  /**
   * <h5>Grey Ghost</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>Shadow
   * (2).<b>Action:</b> Kneel Grey Ghost to choose 1 character (up to 2 characters
   * instead if Grey Ghost came out of shadows this phase). Until the end of the
   * phase, each chosen character cannot be declared as a defender..<br><i>Music of
   * Dragons.</i><br>
   **/
  GreyGhostMoD = "GREY_GHOST_MoD",
  /**
   * <h5>Rhaegal (MoD)</h5>House Targaryen.<br><b><i>Dragon.</i></b><br>Ambush (5).
   * No attachments.<b>Reaction:</b> After an opponent's character is killed by a
   * card effect, stand Rhaegal..<br><i>Music of Dragons.</i><br>
   **/
  RhaegalMoD = "RHAEGAL_MoD",
  /**
   * <h5>Meereenese Market</h5>House
   * Targaryen.<br><b><i>Meereen.</i></b><br><b>Action:</b> Kneel Meereenese Market
   * to choose a card in a discard pile and place it on the bottom of its owner's
   * deck.+1 Income..<br><i>Music of Dragons.</i><br>
   **/
  MeereeneseMarketMoD = "MEEREENESE_MARKET_MoD",
  /**
   * <h5>House Manwoody Guard</h5>House Martell.<br><b><i>Guard. House
   * Manwoody.</i></b><br>While you are not the first player, each <i>Guard</i>
   * character you control does not kneel when declared as a defender..<br><i>Music
   * of Dragons.</i><br>
   **/
  HouseManwoodyGuardMoD = "HOUSE_MANWOODY_GUARD_MoD",
  /**
   * <h5>A Mission in Essos</h5>House Martell.<br>Shadow (2).<b>Action:</b> Remove
   * all but the bottom card of your deck from the game facedown. Then, shuffle
   * your discard pile into your deck and draw 3 cards..<br><i>Music of
   * Dragons.</i><br>
   **/
  AMissionInEssosMoD = "A_MISSION_IN_ESSOS_MoD",
  /**
   * <h5>Wun Wun</h5>Neutral.<br><b><i>Giant. Wildling.</i></b><br>No attachments
   * except <i>Weapon</i>.<b>Action:</b> Kneel Wun Wun to have him participate in a
   * challenge in which you control a participating <i>Wildling</i>
   * character..<br><i>Music of Dragons.</i><br>
   **/
  WunWunMoD = "WUN_WUN_MoD",
  /**
   * <h5>Poisoned Coin</h5>Neutral.<br>Shadow (0).<b>Reaction:</b> After you win an
   * unopposed challenge in which you control an attacking character with shadow,
   * place a poison token on a character without shadow controlled by the losing
   * opponen. At the end of the phase, if that character still has that poison
   * token, remove it and kill that character. (Max 1 per challenge.).<br><i>Music
   * of Dragons.</i><br>
   **/
  PoisonedCoinMoD = "POISONED_COIN_MoD",
  /**
   * <h5>The Free Folk</h5>Neutral.<br>Your plot deck and draw deck can only
   * include neutral cards.<b>Reaction:</b> After claim is applied for a challenge
   * in which you control an attacking <i>Wildling</i> character, kneel your
   * faction card to apply the claim of another challenge type..<br><i>Music of
   * Dragons.</i><br>
   **/
  TheFreeFolkMoD = "THE_FREE_FOLK_MoD",
  /**
   * <h5>Winter Reserves</h5>Neutral.<br><b><i>Kingdom. Winter.</i></b><br>While
   * Winter Reserves is in your used pile, increase the gold value and reserve
   * value on your revealed <i>Winter</i> plot card by 1..<br><i>Music of
   * Dragons.</i><br>
   **/
  WinterReservesMoD = "WINTER_RESERVES_MoD",
  /**
   * <h5>Bear Island Scout</h5>House Stark.<br><b><i>House
   * Mormont.</i></b><br><b>Reaction:</b> After you marshal Bear Island Scout, if
   * each character you control has the [stark] affiliation, search your deck for a
   * <i>House Mormont</i> card, reveal it, and add it to your hand. Shuffle your
   * deck..<br><i>In Daznak's Pit.</i><br>
   **/
  BearIslandScoutIdp = "BEAR_ISLAND_SCOUT_IDP",
  /**
   * <h5>Skagos</h5>House Stark.<br><b><i>The North.</i></b><br>Shadow
   * (1).<b>Action:</b> Kneel Skagos and sacrifice a standing [stark] card to
   * search your deck for a card with the same title as the sacrificed card and put
   * it into play. Shuffle your deck..<br><i>In Daznak's Pit.</i><br>
   **/
  SkagosIdp = "SKAGOS_IDP",
  /**
   * <h5>Brightwater Host</h5>House Tyrell.<br><b><i>Army. House
   * Florent.</i></b><br>No attachments.<b>Reaction:</b> After you win a challenge
   * in which Brightwater Host is attacking, choose 1 card in shadows and return it
   * to its owner's hand. Then, a unique [tyrell] character you control gains 2
   * power..<br><i>In Daznak's Pit.</i><br>
   **/
  BrightwaterHostIdp = "BRIGHTWATER_HOST_IDP",
  /**
   * <h5>The Might of the Reach</h5>House Tyrell.<br><b>Challenges Action:</b>
   * Choose a participating character. Until the end of the challenge, that
   * character gets +10 STR..<br><i>In Daznak's Pit.</i><br>
   **/
  TheMightOfTheReachIdp = "THE_MIGHT_OF_THE_REACH_IDP",
  /**
   * <h5>Three-Finger Hobb</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Reaction:</b> After you check reserve, if
   * your hand size is lower than your reserve value, draw 2 cards..<br><i>In
   * Daznak's Pit.</i><br>
   **/
  ThreeFingerHobbIdp = "THREE_FINGER_HOBB_IDP",
  /**
   * <h5>Hardhome</h5>The Night's Watch.<br><b><i>The North.</i></b><br>Shadow
   * (2).<b>Dominance Action:</b> Kneel and sacrifice Hardhome to choose an
   * opponent. That player sacrifices a standing character..<br><i>In Daznak's Pit.</i><br>
   **/
  HardhomeIdp = "HARDHOME_IDP",
  /**
   * <h5>Storm's End Maester</h5>House
   * Baratheon.<br><b><i>Maester.</i></b><br><b>Challenges Action:</b> Kneel
   * Storm's End Maester to choose an opponent. If you have more power on your
   * faction card than that player, draw 1 card..<br><i>In Daznak's Pit.</i><br>
   **/
  StormsEndMaesterIdp = "STORMS_END_MAESTER_IDP",
  /**
   * <h5>Glamor</h5>House Baratheon.<br><b><i>Item. R'hllor.</i></b><br>Character
   * you control only. Shadow (2). Terminal.Attached character gets +2
   * STR.<b>Action:</b> Kill attached character to choose a character in your dead
   * pile that was killed this phase. Return the chosen character to
   * play..<br><i>In Daznak's Pit.</i><br>
   **/
  GlamorIdp = "GLAMOR_IDP",
  /**
   * <h5>Painted Dogs</h5>House Lannister.<br><b><i>Clansman.</i></b><br>Ambush
   * (4).<b>Challenges Action:</b> Return Painted Dogs to your hand to choose and
   * stand a <i>Clansman</i> character or Tyrion Lannister..<br><i>In Daznak's Pit.</i><br>
   **/
  PaintedDogsIdp = "PAINTED_DOGS_IDP",
  /**
   * <h5>Walk of Atonement</h5>House Lannister.<br><b><i>The
   * Seven.</i></b><br><b>Dominance Action:</b> Discard any amount of power from a
   * character you control. For each power discarded, discard 1 card at random from
   * each opponent's hand and draw 1 card..<br><i>In Daznak's Pit.</i><br>
   **/
  WalkOfAtonementIdp = "WALK_OF_ATONEMENT_IDP",
  /**
   * <h5>Iron Victory's Crew</h5>House Greyjoy.<br><b><i>Ironborn.
   * Raider.</i></b><br>No attachments.<b>Reaction:</b> After Iron Victory's Crew
   * enters play, search your deck for a <i>Warship</i> location, reveal it, and
   * add it to your hand (put it into play instead if it is Iron Victory). Shuffle
   * your deck..<br><i>In Daznak's Pit.</i><br>
   **/
  IronVictorysCrewIdp = "IRON_VICTORYS_CREW_IDP",
  /**
   * <h5>Refurbished Hulk</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>+1
   * Income.+1 Initiative..<br><i>In Daznak's Pit.</i><br>
   **/
  RefurbishedHulkIdp = "REFURBISHED_HULK_IDP",
  /**
   * <h5>Drogon (IDP)</h5>House Targaryen.<br><b><i>Dragon.</i></b><br>Ambush (6).
   * No attachments.<b>Reaction:</b> After you win a challenge in which Drogon is
   * attacking, choose a character controlled by the losing opponent. Until the end
   * of the phase, that character gets -4 STR and is killed if its STR is
   * 0..<br><i>In Daznak's Pit.</i><br>
   **/
  DrogonIdp = "DROGON_IDP",
  /**
   * <h5>In Daznak's Pit</h5>House Targaryen.<br>Shadow (3).<b>Interrupt:</b> When
   * the challenges phase ends, stand each character. Following this phase, there
   * is an additional challenges phase. (Max 1 per round.).<br><i>In Daznak's Pit.</i><br>
   **/
  InDaznaksPitIdp = "IN_DAZNAKS_PIT_IDP",
  /**
   * <h5>Maester Myles</h5>House
   * Martell.<br><b><i>Maester.</i></b><br><b>Challenges Action:</b> Kneel Maester
   * Myles to choose a character with printed cost equal to or lower than the
   * number of plot cards in your used pile. Until the end of the phase, that
   * character loses a challenge icon of your choice..<br><i>In Daznak's Pit.</i><br>
   **/
  MaesterMylesIdp = "MAESTER_MYLES_IDP",
  /**
   * <h5>He Calls It Thinking</h5>House Martell.<br><b>Interrupt:</b> When the
   * effects of an opponent's non-agenda, non-plot triggered ability would
   * initiate, cancel those effects unless that player pays 1 gold..<br><i>In
   * Daznak's Pit.</i><br>
   **/
  HeCallsItThinkingIdp = "HE_CALLS_IT_THINKING_IDP",
  /**
   * <h5>Old Bill Bone</h5>Neutral.<br><b><i>Mercenary.</i></b><br>Shadow
   * (1).<b>Reaction:</b> After Old Bill Bone comes out of shadows, kneel each
   * opponent's faction card..<br><i>In Daznak's Pit.</i><br>
   **/
  OldBillBoneIdp = "OLD_BILL_BONE_IDP",
  /**
   * <h5>The Inn at the
   * Crossroads</h5>Neutral.<br><b><i>Riverlands.</i></b><br>Shadow
   * (1).<b>Dominance Action:</b> Kneel The Inn at the Crossroads to draw 3 cards
   * and choose an opponent. Give control of The Inn at the Crossroads to that
   * player..<br><i>In Daznak's Pit.</i><br>
   **/
  TheInnAtTheCrossroadsIdp = "THE_INN_AT_THE_CROSSROADS_IDP",
  /**
   * <h5>A Pinch of Powder</h5>Neutral.<br><b><i>Item. Weapon.</i></b><br>Shadow
   * (1).<b>Reaction:</b> After you win an [intrigue] or [power] challenge by 5 or
   * more STR as the attacking player, return attached character to its owner's
   * hand..<br><i>In Daznak's Pit.</i><br>
   **/
  APinchOfPowderIdp = "A_PINCH_OF_POWDER_IDP",
  /**
   * <h5>Double-Dealing</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>Plot
   * Action:</b> Choose a plot card in an opponent's used pile. Double-Dealing
   * gains that plot card's printed text box (except for <i>Traits</i>) until you
   * reveal a new plot card. (Limit once per round.).<br><i>In Daznak's Pit.</i><br>
   **/
  DoubleDealingIdp = "DOUBLE_DEALING_IDP",
  /**
   * <h5>Ser Jason Mallister</h5>House Stark.<br><b><i>House Tully. Knight.
   * Lord.</i></b><br>While there are no cards in shadows, Ser Jason Mallister
   * gains renown.<b>Reaction:</b> After you win a challenge in which Ser Jason
   * Mallister is attacking, choose a card in shadows controlled by the losing
   * opponent, and discard it..<br><i>Daggers in the Dark.</i><br>
   **/
  SerJasonMallisterDitD = "SER_JASON_MALLISTER_DitD",
  /**
   * <h5>The Bastard's Letter</h5>House Stark.<br><b><i>House
   * Bolton.</i></b><br>Shadow (3).<b>Reaction:</b> After an opponent initiates a
   * [military] challenge against you, stand any number of characters you control
   * with a [military] icon. If you win the challenge, kill each attacking
   * character..<br><i>Daggers in the Dark.</i><br>
   **/
  TheBastardsLetterDitD = "THE_BASTARDS_LETTER_DitD",
  /**
   * <h5>Shrewd Diplomat</h5>House Tyrell.<br><b><i>Ally. Spy.</i></b><br>Ambush
   * (5). Shadow (3).<b>Reaction:</b> After Shrewd Diplomat enters play during a
   * challenge, choose a participating character. Stand that character and remove
   * it from the challenge..<br><i>Daggers in the Dark.</i><br>
   **/
  ShrewdDiplomatDitD = "SHREWD_DIPLOMAT_DitD",
  /**
   * <h5>Arbor Marketplace</h5>House Tyrell.<br><b><i>House
   * Redwyne.</i></b><br><b>Challenges Action:</b> Kneel Arbor Marketplace to
   * choose a participating character. Until the end of the challenge, that
   * character gets +1 STR.+1 Income..<br><i>Daggers in the Dark.</i><br>
   **/
  ArborMarketplaceDitD = "ARBOR_MARKETPLACE_DitD",
  /**
   * <h5>Nightfort Builder</h5>The Night's
   * Watch.<br><b><i>Builder.</i></b><br><b>Reaction:</b> After Nightfort Builder
   * is knelt, reveal the top card of your deck. If it is a [thenightswatch]
   * location or attachment, draw it..<br><i>Daggers in the Dark.</i><br>
   **/
  NightfortBuilderDitD = "NIGHTFORT_BUILDER_DitD",
  /**
   * <h5>Daggers in the Dark</h5>The Night's Watch.<br>Shadow (2).<b>Reaction:</b>
   * After you win a challenge as the defending player, choose and kill an
   * attacking character. The attacking player may sacrifice 2 characters to cancel
   * this effect..<br><i>Daggers in the Dark.</i><br>
   **/
  DaggersInTheDarkDitD = "DAGGERS_IN_THE_DARK_DitD",
  /**
   * <h5>Red Ronnet</h5>House Baratheon.<br><b><i>House Connington.
   * Knight.</i></b><br>No attachments except <i>Weapon</i>.While Red Ronnet is
   * attacking, if the defending player controls a card in shadows, raise the claim
   * value on your revealed plot card by 1..<br><i>Daggers in the Dark.</i><br>
   **/
  RedRonnetDitD = "RED_RONNET_DitD",
  /**
   * <h5>Banished from the Light</h5>House Baratheon.<br>Shadow
   * (2).<b>Reaction:</b> After you win a [power] challenge, choose a character.
   * Place it in shadows with a shadow token on it. While that card is in shadows,
   * it gains shadow (X). X is its printed cost..<br><i>Daggers in the Dark.</i><br>
   **/
  BanishedFromTheLightDitD = "BANISHED_FROM_THE_LIGHT_DitD",
  /**
   * <h5>Cersei Lannister (DitD)</h5>House
   * Lannister.<br><b><i>Lady.</i></b><br>Shadow (5).<b>Reaction:</b> After a card
   * you control comes out of shadows during the challenges phase, each opponent
   * discards 1 card at random from his or her hand. (Limit 3 times per
   * phase.).<br><i>Daggers in the Dark.</i><br>
   **/
  CerseiLannisterDitD = "CERSEI_LANNISTER_DitD",
  /**
   * <h5>Underhanded Methods</h5>House Lannister.<br><b><i>Skill.</i></b><br>Shadow
   * (0).Attached character gets +1 STR for each card you control in
   * shadows..<br><i>Daggers in the Dark.</i><br>
   **/
  UnderhandedMethodsDitD = "UNDERHANDED_METHODS_DitD",
  /**
   * <h5>Moqorro</h5>House Greyjoy.<br><b><i>Ally. R'hllor.</i></b><br>Shadow
   * (5).<b>Reaction:</b> After Moqorro comes out of shadows during a challenge,
   * choose a defending character and place it on top of its owner's
   * deck..<br><i>Daggers in the Dark.</i><br>
   **/
  MoqorroDitD = "MOQORRO_DitD",
  /**
   * <h5>Rhymes With Meek</h5>House Greyjoy.<br>Shadow (0).<b>Reaction:</b> After
   * you win an unopposed challenge, draw 2 cards (3 cards instead if you played
   * this event from shadows)..<br><i>Daggers in the Dark.</i><br>
   **/
  RhymesWithMeekDitD = "RHYMES_WITH_MEEK_DitD",
  /**
   * <h5>Brazen Beast</h5>House Targaryen.<br><b><i>Guard.</i></b><br>No
   * attachments. Shadow (3).<b>Marshaling Action:</b> Pay 3 gold to put Brazen
   * Beast into shadows from your discard pile..<br><i>Daggers in the Dark.</i><br>
   **/
  BrazenBeastDitD = "BRAZEN_BEAST_DitD",
  /**
   * <h5>Gifts for the Widow</h5>House Targaryen.<br><b>Action:</b> Search your
   * deck for an attachment with printed cost X or lower and put it into play
   * attached to a character you control. Shuffle your deck..<br><i>Daggers in the Dark.</i><br>
   **/
  GiftsForTheWidowDitD = "GIFTS_FOR_THE_WIDOW_DitD",
  /**
   * <h5>Starfall Spy</h5>House Martell.<br><b><i>House Dayne.
   * Spy.</i></b><br>Shadow (3).<b>Reaction:</b> After you win a challenge in which
   * Starfall Spy is participating, return it to shadows to choose another card you
   * control in shadows and put it into play..<br><i>Daggers in the Dark.</i><br>
   **/
  StarfallSpyDitD = "STARFALL_SPY_DitD",
  /**
   * <h5>Blood of the Viper</h5>House Martell.<br><b><i>Legacy.</i></b><br><i>Sand
   * Snake</i> character only. Ambush (2).<b>Reaction:</b> After you lose a
   * challenge in which attached character is participating, stand
   * it..<br><i>Daggers in the Dark.</i><br>
   **/
  BloodOfTheViperDitD = "BLOOD_OF_THE_VIPER_DitD",
  /**
   * <h5>"On a Misty Morn"</h5>Neutral.<br><b><i>Song.</i></b><br><b>Action:</b>
   * Choose up to 2 non-unique characters in your dead pile and return them to your
   * hand..<br><i>Daggers in the Dark.</i><br>
   **/
  OnAMistyMornDitD = "ON_A_MISTY_MORN_DitD",
  /**
   * <h5>Assault from the Shadows</h5>Neutral.<br>Reduce the gold value on your
   * revealed plot card by 1.<b>Marshaling Action:</b> Kneel your faction card to
   * choose 1 card in your hand and place it facedown in shadows with a shadow
   * token on it. While that card is in shadows, if it does not have the printed
   * shadow keyword, it gains shadow (X). X is its printed cost..<br><i>Daggers in
   * the Dark.</i><br>
   **/
  AssaultFromTheShadowsDitD = "ASSAULT_FROM_THE_SHADOWS_DitD",
  /**
   * <h5>Varys (DitD)</h5>Neutral.<br><b><i>Ally. Lord.</i></b><br>Shadow (8).
   * Stealth.Reduce the cost to bring Varys out of shadows by 1 for each other card
   * in shadows.<b>Reaction:</b> After Varys comes out of shadows, choose and kill
   * a character with power..<br><i>Daggers in the Dark.</i><br>
   **/
  VarysDitD = "VARYS_DitD",
  /**
   * <h5>Ravages of War</h5>Neutral.<br><b><i>War.</i></b><br><b>When Revealed:</b>
   * Each player sacrifices a character or location, chooses and discards 1 card
   * from his or her hand, and chooses and discards 1 card from his or her shadows
   * area, if able..<br><i>Daggers in the Dark.</i><br>
   **/
  RavagesOfWarDitD = "RAVAGES_OF_WAR_DitD",
  /**
   * <h5>Balon Greyjoy (KotI)</h5>House Greyjoy.<br><b><i>Ironborn.
   * Lord.</i></b><br>Pillage. Renown.<b>Action:</b> Kneel your faction card to
   * choose a card in an opponent's discard pile and put it into play under your
   * control. At the end of the phase, if that card is still in play, shuffle it
   * into its owner's deck.<em>Errata from FAQ v2.0</em>.<br><i>Kings of the Isles.</i><br>
   **/
  BalonGreyjoyKotI = "BALON_GREYJOY_KotI",
  /**
   * <h5>Euron Crow's Eye (KotI)</h5>House Greyjoy.<br><b><i>Captain. Ironborn.
   * Lord. Raider.</i></b><br>Intimidate.<b>Reaction:</b> After you marshal Euron
   * Crow's Eye, search your hand, deck, and discard pile for Silence and put it
   * into play. Shuffle your deck..<br><i>Kings of the Isles.</i><br>
   **/
  EuronCrowsEyeKotI = "EURON_CROWS_EYE_KotI",
  /**
   * <h5>Asha Greyjoy (KotI)</h5>House Greyjoy.<br><b><i>Captain. Ironborn.
   * Lady.</i></b><br>Pillage. Stealth.Each other unique <i>Ironborn</i> character
   * you control gains stealth..<br><i>Kings of the Isles.</i><br>
   **/
  AshaGreyjoyKotI = "ASHA_GREYJOY_KotI",
  /**
   * <h5>The Knight</h5>House Greyjoy.<br><b><i>House Harlaw. Knight.</i></b><br>No
   * attachments except <i>Weapon</i>.While The Knight is attacking alone, he gains
   * stealth and renown..<br><i>Kings of the Isles.</i><br>
   **/
  TheKnightKotI = "THE_KNIGHT_KotI",
  /**
   * <h5>Aeron Damphair (KotI)</h5>House Greyjoy.<br><b><i>Drowned God. Ironborn.
   * Lord.</i></b><br>Insight.<b>Reaction:</b> After another <i>Drowned God</i>
   * character you control is killed, draw 1 card. (Limit once per
   * phase.).<br><i>Kings of the Isles.</i><br>
   **/
  AeronDamphairKotI = "AERON_DAMPHAIR_KotI",
  /**
   * <h5>The Drumm</h5>House Greyjoy.<br><b><i>Captain. Lord.</i></b><br>While The
   * Drumm is attacking in a [military] or [power] challenge, each character with
   * an [intrigue] icon cannot be declared as a defender..<br><i>Kings of the Isles.</i><br>
   **/
  TheDrummKotI = "THE_DRUMM_KotI",
  /**
   * <h5>Gwynesse Harlaw</h5>House Greyjoy.<br><b><i>House Harlaw.
   * Lady.</i></b><br><b>Action:</b> Choose 3 cards in an opponent's discard pile
   * and place them on the bottom of his or her deck in any order. Then, gain 1
   * gold and draw 1 card. (Limit once per round.).<br><i>Kings of the Isles.</i><br>
   **/
  GwynesseHarlawKotI = "GWYNESSE_HARLAW_KotI",
  /**
   * <h5>Andrik the Unsmiling</h5>House Greyjoy.<br><b><i>Ironborn.
   * Raider.</i></b><br>Pillage.<b>Reaction:</b> After Andrik the Unsmiling
   * discards a card using pillage, choose a non-limited location or attachment in
   * the losing opponent's discard pile. Discard 1 copy of that card from
   * play..<br><i>Kings of the Isles.</i><br>
   **/
  AndrikTheUnsmilingKotI = "ANDRIK_THE_UNSMILING_KotI",
  /**
   * <h5>Qarl the Maid</h5>House
   * Greyjoy.<br><b><i>Ironborn.</i></b><br><b>Reaction:</b> After you win a
   * challenge in which Qarl the Maid is participating, either: stand a
   * <i>Warship</i> location, or stand Asha Greyjoy..<br><i>Kings of the Isles.</i><br>
   **/
  QarlTheMaidKotI = "QARL_THE_MAID_KotI",
  /**
   * <h5>Maester Murenmure</h5>House
   * Greyjoy.<br><b><i>Maester.</i></b><br><b>Interrupt:</b> When the effects of a
   * triggered location ability would initiate, kneel Maester Murenmure to cancel
   * those effects..<br><i>Kings of the Isles.</i><br>
   **/
  MaesterMurenmureKotI = "MAESTER_MURENMURE_KotI",
  /**
   * <h5>Old Grey Gull</h5>House Greyjoy.<br><b><i>Drowned God.
   * Ironborn.</i></b><br><b>Action:</b> Kneel Old Grey Gull to kill another
   * [greyjoy] character you control. Then, you may return that character from your
   * dead pile to your hand..<br><i>Kings of the Isles.</i><br>
   **/
  OldGreyGullKotI = "OLD_GREY_GULL_KotI",
  /**
   * <h5>Priest of Old Wyk</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br>While there is a <i>Drowned God</i> character in your dead
   * pile, Priest of Old Wyk contributes its STR to your total for dominance even
   * while kneeling..<br><i>Kings of the Isles.</i><br>
   **/
  PriestOfOldWykKotI = "PRIEST_OF_OLD_WYK_KotI",
  /**
   * <h5>Drowned Prophet</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Interrupt:</b> When Drowned Prophet is killed, search the
   * top 5 cards of your deck for a [greyjoy] character and place it in your dead
   * pile. Shuffle your deck..<br><i>Kings of the Isles.</i><br>
   **/
  DrownedProphetKotI = "DROWNED_PROPHET_KotI",
  /**
   * <h5>Eager Deckhand</h5>House Greyjoy.<br><b><i>Ally.
   * Raider.</i></b><br><b>Reaction:</b> After a <i>Warship</i> location enters
   * play under your control, put Eager Deckhand into play from your
   * hand..<br><i>Kings of the Isles.</i><br>
   **/
  EagerDeckhandKotI = "EAGER_DECKHAND_KotI",
  /**
   * <h5>Orkmont Reaver</h5>House Greyjoy.<br><b><i>Ironborn.
   * Raider.</i></b><br>Pillage.While an opponent has 10 or more cards in his or
   * her discard pile, Orkmont Reaver gains stealth..<br><i>Kings of the Isles.</i><br>
   **/
  OrkmontReaverKotI = "ORKMONT_REAVER_KotI",
  /**
   * <h5>Silence</h5>House Greyjoy.<br><b><i>Warship.</i></b><br><b>Challenges
   * Action:</b> Kneel Silence to put a <i>Warship</i> location into play from your
   * hand. Then, if you control Euron Crow's Eye, stand him.+2
   * Initiative..<br><i>Kings of the Isles.</i><br>
   **/
  SilenceKotI = "SILENCE_KotI",
  /**
   * <h5>Great Wyk</h5>House Greyjoy.<br><b><i>Drowned God. Iron
   * Islands.</i></b><br><b>Reaction:</b> After a character enters play from your
   * dead pile, each opponent chooses and discards 1 card from his or her hand.
   * (Limit once per phase.).<br><i>Kings of the Isles.</i><br>
   **/
  GreatWykKotI = "GREAT_WYK_KotI",
  /**
   * <h5>Golden Storm</h5>House
   * Greyjoy.<br><b><i>Warship.</i></b><br><b>Reaction:</b> After you win a
   * [military] challenge as the attacking player, kneel Golden Storm to choose and
   * kill a participating character. Then, if you control a participating
   * <i>Raider</i> character, stand Golden Storm..<br><i>Kings of the Isles.</i><br>
   **/
  GoldenStormKotI = "GOLDEN_STORM_KotI",
  /**
   * <h5>Maiden's Bane</h5>House
   * Greyjoy.<br><b><i>Warship.</i></b><br><b>Reaction:</b> After you win an
   * unopposed challenge, kneel Maiden's Bane to choose and stand an attacking
   * character. Then, if that character is a <i>Captain</i>, stand Maiden's
   * Bane..<br><i>Kings of the Isles.</i><br>
   **/
  MaidensBaneKotI = "MAIDENS_BANE_KotI",
  /**
   * <h5>Scouting Vessel</h5>House
   * Greyjoy.<br><b><i>Warship.</i></b><br><b>Interrupt:</b> When a character you
   * control discards a card using pillage, kneel and sacrifice Scouting Vessel to
   * discard 3 cards instead..<br><i>Kings of the Isles.</i><br>
   **/
  ScoutingVesselKotI = "SCOUTING_VESSEL_KotI",
  /**
   * <h5>Red Rain</h5>House Greyjoy.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>Unique [greyjoy] character only.If attached character is
   * The Drumm, he gains stealth.<b>Reaction:</b> After you win an unopposed
   * challenge in which attached character is attacking, it gains 2 power. (Limit
   * once per phase.).<br><i>Kings of the Isles.</i><br>
   **/
  RedRainKotI = "RED_RAIN_KotI",
  /**
   * <h5>Fleet Captain</h5>House Greyjoy.<br><b><i>Title.</i></b><br>Attached
   * character gains the <i>Captain</i> trait and gets +1 STR. (+3 STR instead if
   * you control 3 or more <i>Warship</i> locations.).<br><i>Kings of the Isles.</i><br>
   **/
  FleetCaptainKotI = "FLEET_CAPTAIN_KotI",
  /**
   * <h5>What Is Dead May Never Die</h5>House Greyjoy.<br><b><i>Drowned
   * God.</i></b><br><b>Reaction:</b> After you win dominance, choose a [greyjoy]
   * character in your dead pile and put it into play..<br><i>Kings of the Isles.</i><br>
   **/
  WhatIsDeadMayNeverDieKotI = "WHAT_IS_DEAD_MAY_NEVER_DIE_KotI",
  /**
   * <h5>Nighttime Raid</h5>House Greyjoy.<br><b>Action:</b> Choose up to 3
   * characters with pillage and/or the <i>Raider</i> trait. Until the end of the
   * phase, each of those characters gains stealth..<br><i>Kings of the Isles.</i><br>
   **/
  NighttimeRaidKotI = "NIGHTTIME_RAID_KotI",
  /**
   * <h5>Khorane Sathmantes</h5>House Baratheon.<br><b><i>Captain. Raider.
   * Smuggler.</i></b><br><b>Action:</b> Kneel Khorane Sathmantes and a
   * <i>Warship</i> location to choose and kneel 1 character and 1
   * location..<br><i>Kings of the Isles.</i><br>
   **/
  KhoraneSathmantesKotI = "KHORANE_SATHMANTES_KotI",
  /**
   * <h5>Fury</h5>House Baratheon.<br><b><i>Warship.</i></b><br>While you control
   * Stannis Baratheon, he gains intimidate.<b>Reaction:</b> After you win a
   * [power] challenge, kneel Fury to choose a character or location. Move 1 power
   * from that card to your faction card..<br><i>Kings of the Isles.</i><br>
   **/
  FuryKotI = "FURY_KotI",
  /**
   * <h5>Gunthor Son of Gurn</h5>House
   * Lannister.<br><b><i>Clansman.</i></b><br>Ambush (4).<b>Reaction:</b> After you
   * win a challenge in which Gunthor Son of Gurn is attacking, the losing opponent
   * must choose and discard 1 card from his or her hand..<br><i>Kings of the Isles.</i><br>
   **/
  GunthorSonOfGurnKotI = "GUNTHOR_SON_OF_GURN_KotI",
  /**
   * <h5>My Mind Is My Weapon</h5>House Lannister.<br><b>Action:</b> During a
   * [military] challenge, choose a character you control with an [intrigue] icon
   * and have it participate in the challenge on your side..<br><i>Kings of the Isles.</i><br>
   **/
  MyMindIsMyWeaponKotI = "MY_MIND_IS_MY_WEAPON_KotI",
  /**
   * <h5>Desert Raider</h5>House Martell.<br><b><i>Ally. House Dayne.
   * Raider.</i></b><br><b>Reaction:</b> After you lose a challenge, put Desert
   * Raider into play from your dead pile and choose a character controlled by the
   * winning opponent. That character gains 1 power. Until the end of the phase,
   * that character loses an [intrigue] or [power] icon and Desert Raider gains
   * that icon..<br><i>Kings of the Isles.</i><br>
   **/
  DesertRaiderKotI = "DESERT_RAIDER_KotI",
  /**
   * <h5>The Bloodroyal</h5>House Martell.<br><b><i>House Yronwood.
   * Title.</i></b><br>[martell] character only.While you are not the first player,
   * attached character gains stealth and renown..<br><i>Kings of the Isles.</i><br>
   **/
  TheBloodroyalKotI = "THE_BLOODROYAL_KotI",
  /**
   * <h5>Vindictive Ranger</h5>The Night's
   * Watch.<br><b><i>Ranger.</i></b><br><b>Reaction:</b> After you lose a challenge
   * as the defending player, Vindictive Ranger gains stealth and a challenge icon
   * of your choice until the end of the phase..<br><i>Kings of the Isles.</i><br>
   **/
  VindictiveRangerKotI = "VINDICTIVE_RANGER_KotI",
  /**
   * <h5>Westwatch-by-the-Bridge</h5>The Night's Watch.<br><b><i>The
   * North.</i></b><br><b>Action:</b> Kneel Westwatch-by-the-Bridge to choose and
   * stand another [thenightswatch] location with printed cost 1 or lower. (Printed
   * cost 4 or lower instead if you control a <i>Ranger</i> character, a
   * <i>Steward</i> character, and a <i>Builder</i> character.).<br><i>Kings of the Isles.</i><br>
   **/
  WestwatchByTheBridgeKotI = "WESTWATCH_BY_THE_BRIDGE_KotI",
  /**
   * <h5>Maester Vyman</h5>House Stark.<br><b><i>House Tully.
   * Maester.</i></b><br><b>Reaction:</b> After you win a [military] or [power]
   * challenge, kneel Maester Vyman to choose another character that shares a
   * <i>Trait</i> with him. That character gains 1 power..<br><i>Kings of the Isles.</i><br>
   **/
  MaesterVymanKotI = "MAESTER_VYMAN_KotI",
  /**
   * <h5>Karhold</h5>House Stark.<br><b><i>The North.</i></b><br>While a player
   * does not have a <i>Winter</i> plot card revealed, characters and locations he
   * or she controls cannot gain power..<br><i>Kings of the Isles.</i><br>
   **/
  KarholdKotI = "KARHOLD_KotI",
  /**
   * <h5>Cohollo</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br>Intimidate.<b>Action:</b> Kneel Cohollo and discard 1
   * card from your hand to have him participate in a challenge on your
   * side..<br><i>Kings of the Isles.</i><br>
   **/
  CoholloKotI = "COHOLLO_KotI",
  /**
   * <h5>"Dance of the Dragons"</h5>House
   * Targaryen.<br><b><i>Song.</i></b><br><b>Action:</b> Choose a non-event card
   * with printed cost 3 or lower in your discard pile and return it to your
   * hand..<br><i>Kings of the Isles.</i><br>
   **/
  DanceOfTheDragonsKotI = "DANCE_OF_THE_DRAGONS_KotI",
  /**
   * <h5>Ser Talbert Serry</h5>House Tyrell.<br><b><i>Knight.</i></b><br>No
   * attachments except <i>Weapon</i>.<b>Reaction:</b> After an opponent triggers a
   * location ability, Ser Talbert Serry gets +2 STR until the end of the phase.
   * (Limit 3 times per phase.).<br><i>Kings of the Isles.</i><br>
   **/
  SerTalbertSerryKotI = "SER_TALBERT_SERRY_KotI",
  /**
   * <h5>The Shield Islands</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br>Increase the number of cards each player draws in the draw
   * phase by 1..<br><i>Kings of the Isles.</i><br>
   **/
  TheShieldIslandsKotI = "THE_SHIELD_ISLANDS_KotI",
  /**
   * <h5>Bronze Yohn Royce</h5>Neutral.<br><b><i>House Arryn.
   * Lord.</i></b><br>Renown.<b>Reaction:</b> After you win a challenge in which
   * Bronze Yohn Royce is defending, kneel a neutral location with printed cost 1
   * or higher to stand him. (Limit twice per phase.).<br><i>Kings of the Isles.</i><br>
   **/
  BronzeYohnRoyceKotI = "BRONZE_YOHN_ROYCE_KotI",
  /**
   * <h5>Rogue Wildling</h5>Neutral.<br><b><i>Raider. Wildling.</i></b><br>Ambush
   * (5).<b>Reaction:</b> After Rogue Wildling enters play, choose and stand a
   * <i>Wildling</i> character you control..<br><i>Kings of the Isles.</i><br>
   **/
  RogueWildlingKotI = "ROGUE_WILDLING_KotI",
  /**
   * <h5>Citadel Archivist</h5>Neutral.<br><b><i>Maester.</i></b><br><b>Reaction:</b> After
   * Citadel Archivist enters your discard pile, each player shuffles his or her
   * discard pile into his or her deck..<br><i>Kings of the Isles.</i><br>
   **/
  CitadelArchivistKotI = "CITADEL_ARCHIVIST_KotI",
  /**
   * <h5>The Starry Sept</h5>Neutral.<br><b><i>Oldtown. The
   * Seven.</i></b><br><b>Action:</b> Move 1 power from The Starry Sept to a
   * character. Until the end of the phase, treat that character as if its printed
   * text box were blank (except for <i>Traits</i>).<b>Reaction:</b> After you win
   * a [power] challenge, The Starry Sept gains 1 power..<br><i>Kings of the Isles.</i><br>
   **/
  TheStarrySeptKotI = "THE_STARRY_SEPT_KotI",
  /**
   * <h5>Reckless</h5>Neutral.<br><b><i>Condition.</i></b><br>Terminal.Attached
   * character must be declared as an attacker or defender in each challenge, if
   * able..<br><i>Kings of the Isles.</i><br>
   **/
  RecklessKotI = "RECKLESS_KotI",
  /**
   * <h5>When I Woke...</h5>Neutral.<br><b>Reaction:</b> After a player loses a
   * [military] challenge, that player chooses a participating character and places
   * it on top of its owner's deck. (Max 1 per challenge.).<br><i>Kings of the Isles.</i><br>
   **/
  WhenIWokeKotI = "WHEN_I_WOKE_KotI",
  /**
   * <h5>Sea of Blood</h5>Neutral.<br><b><i>Prophecy.</i></b><br>During [military]
   * challenges, reduce the cost of each event you play by 1 for each blood token
   * on Sea of Blood. You cannot play events during [intrigue] or [power]
   * challenges.<b>Reaction:</b> After you win a [military] challenge by 5 or more
   * STR, kneel your faction card to place a blood token on Sea of Blood. Then,
   * search your deck for an event, reveal it, and add it to your hand. Shuffle
   * your deck..<br><i>Kings of the Isles.</i><br>
   **/
  SeaOfBloodKotI = "SEA_OF_BLOOD_KotI",
  /**
   * <h5>We Take Westeros!</h5>House Greyjoy.<br><b><i>War.</i></b><br><b>When
   * Revealed:</b> Choose a location in a discard pile and put it into play under
   * your control..<br><i>Kings of the Isles.</i><br>
   **/
  WeTakeWesterosKotI = "WE_TAKE_WESTEROS_KotI",
  /**
   * <h5>Return to the Fields</h5>Neutral.<br><b><i>Edict.</i></b><br><b>When
   * Revealed:</b> You may sacrifice up to 3 characters. For each character
   * sacrificed this way, draw 1 card and gain 1 gold..<br><i>Kings of the Isles.</i><br>
   **/
  ReturnToTheFieldsKotI = "RETURN_TO_THE_FIELDS_KotI",
  /**
   * <h5>Heir to the Iron Throne</h5>Neutral.<br><b><i>Kingdom.</i></b><br><b>When
   * Revealed:</b> Search the top 10 cards of your deck for a <i>Lord</i> or
   * <i>Lady</i> character and put it into play. Shuffle your deck. Then, sacrifice
   * a <i>Lord</i> or <i>Lady</i> character..<br><i>Kings of the Isles.</i><br>
   **/
  HeirToTheIronThroneKotI = "HEIR_TO_THE_IRON_THRONE_KotI",
  /**
   * <h5>Coordinated Attack</h5>Neutral.<br><b><i>War.</i></b><br><b>Reaction:</b>
   * After you win a challenge as the attacking player, choose a different
   * challenge type. You may initiate an additional challenge of the chosen type
   * this phase. (Limit once per phase.).<br><i>Kings of the Isles.</i><br>
   **/
  CoordinatedAttackKotI = "COORDINATED_ATTACK_KotI",
  /**
   * <h5>Stolen Message</h5>Neutral.<br><b><i>Scheme.</i></b><br>Each opponent
   * plays with the top card of his or her deck revealed.<b>Action:</b> Pay 1 gold
   * to place the top card of an opponent's deck on the bottom of that player's
   * deck. (Limit 3 times per round.).<br><i>Kings of the Isles.</i><br>
   **/
  StolenMessageKotI = "STOLEN_MESSAGE_KotI",
  /**
   * <h5>Secrets of the Conclave</h5>Neutral.<br><b><i>Conclave.
   * Kingdom.</i></b><br><b>Reaction:</b> After the challenges phase begins, look
   * at the top 5 cards of your deck. Add 1 to your hand, discard 1, and put the
   * others back on top of your deck in any order..<br><i>Kings of the Isles.</i><br>
   **/
  SecretsOfTheConclaveKotI = "SECRETS_OF_THE_CONCLAVE_KotI",
  /**
   * <h5>Vanquish the Unbelievers</h5>Neutral.<br><b><i>Edict.</i></b><br><b>Forced
   * Reaction:</b> After the challenges phase begins, choose a <i>Trait</i>. Kill
   * each character you control that does not have that <i>Trait</i> (cannot be
   * saved)..<br><i>Kings of the Isles.</i><br>
   **/
  VanquishTheUnbelieversKotI = "VANQUISH_THE_UNBELIEVERS_KotI",
  /**
   * <h5>Alysane Mormont</h5>House Stark.<br><b><i>House Mormont.
   * Lady.</i></b><br>No attachments except <i>Weapon</i>.While each character you
   * control has the [stark] affiliation, Alysane Mormont gains stealth during
   * [military] challenges and does not kneel when declared as an attacker in a
   * [military] challenge..<br><i>At the Gates.</i><br>
   **/
  AlysaneMormontAtG = "ALYSANE_MORMONT_AtG",
  /**
   * <h5>Old Gate</h5>House Stark.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If each character you
   * control has the [stark] affiliation, sacrifice Old Gate to draw 2 cards.+1
   * Income..<br><i>At the Gates.</i><br>
   **/
  OldGateAtG = "OLD_GATE_AtG",
  /**
   * <h5>The Knight of Flowers (AtG)</h5>House Tyrell.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Shadow (5). Renown.<b>Reaction:</b> After a card you
   * control comes out of shadows, choose and stand a <i>Kingsguard</i> character.
   * (Limit twice per round.).<br><i>At the Gates.</i><br>
   **/
  TheKnightOfFlowersAtG = "THE_KNIGHT_OF_FLOWERS_AtG",
  /**
   * <h5>Gate of the Gods</h5>House Tyrell.<br><b><i>King's Landing. The
   * Seven.</i></b><br>Limited.<b>Challenges Action:</b> If you control a character
   * with the highest STR in play, sacrifice Gate of the Gods to draw 2 cards.+1
   * Income..<br><i>At the Gates.</i><br>
   **/
  GateOfTheGodsAtG = "GATE_OF_THE_GODS_AtG",
  /**
   * <h5>Aged Craftsman</h5>The Night's Watch.<br><b><i>Builder.</i></b><br>No
   * attachments.<b>Reaction:</b> After Aged Craftsman enters play, search the top
   * 10 cards of your deck for a [thenightswatch] location with printed cost 2 or
   * lower and put it into play. Shuffle your deck..<br><i>At the Gates.</i><br>
   **/
  AgedCraftsmanAtG = "AGED_CRAFTSMAN_AtG",
  /**
   * <h5>Flea Bottom Alley</h5>The Night's Watch.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Marshaling Action:</b> Kneel and sacrifice Flea
   * Bottom Alley to put a [thenightswatch] character with printed cost 3 or lower
   * into play from your hand. Then, draw 1 card..<br><i>At the Gates.</i><br>
   **/
  FleaBottomAlleyAtG = "FLEA_BOTTOM_ALLEY_AtG",
  /**
   * <h5>R'hllor Infiltrator</h5>House Baratheon.<br><b><i>R'hllor.
   * Spy.</i></b><br><b>Dominance Action:</b> Kneel R'hllor Infiltrator to choose
   * an opponent. Give control of R'hllor Infiltrator to that player and gain 1
   * power for your faction..<br><i>At the Gates.</i><br>
   **/
  RhllorInfiltratorAtG = "RHLLOR_INFILTRATOR_AtG",
  /**
   * <h5>King's Gate</h5>House Baratheon.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If you have 5 or more
   * power on your faction card, sacrifice King's Gate to draw 2 cards.+1
   * Income..<br><i>At the Gates.</i><br>
   **/
  KingsGateAtG = "KINGS_GATE_AtG",
  /**
   * <h5>Ser Mandon Moore</h5>House Lannister.<br><b><i>Kingsguard.
   * Knight.</i></b><br>Shadow (3).<b>Reaction:</b> After Ser Mandon Moore comes
   * out of shadows, choose an opponent. That player must choose and kill a
   * character he or she controls unless he or she chooses and discards 2 cards
   * from his or her hand..<br><i>At the Gates.</i><br>
   **/
  SerMandonMooreAtG = "SER_MANDON_MOORE_AtG",
  /**
   * <h5>Lion Gate</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If you control 2 or more
   * cards in shadows, sacrifice Lion Gate to draw 2 cards.+1 Income..<br><i>At the Gates.</i><br>
   **/
  LionGateAtG = "LION_GATE_AtG",
  /**
   * <h5>Baelor Blacktyde</h5>House Greyjoy.<br><b><i>Captain. The
   * Seven.</i></b><br>Each opponent cannot play copies of events that are in his
   * or her discard pile..<br><i>At the Gates.</i><br>
   **/
  BaelorBlacktydeAtG = "BAELOR_BLACKTYDE_AtG",
  /**
   * <h5>Iron Gate</h5>House Greyjoy.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If you are the first
   * player, sacrifice Iron Gate to draw 2 cards.+1 Income..<br><i>At the Gates.</i><br>
   **/
  IronGateAtG = "IRON_GATE_AtG",
  /**
   * <h5>Viserion (AtG)</h5>House Targaryen.<br><b><i>Dragon.</i></b><br>Ambush
   * (5). No attachments.<b>Reaction:</b> After you win a challenge in which
   * Viserion is attacking, discard 1 card from your hand to have Viserion gain
   * intimidate until the end of the challenge..<br><i>At the Gates.</i><br>
   **/
  ViserionAtG = "VISERION_AtG",
  /**
   * <h5>Dragon Gate</h5>House Targaryen.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If you control 2 or more
   * attachments, sacrifice Dragon Gate to draw 2 cards.+1 Income..<br><i>At the Gates.</i><br>
   **/
  DragonGateAtG = "DRAGON_GATE_AtG",
  /**
   * <h5>Southron Escort</h5>House Martell.<br><b><i>Ally. Guard.</i></b><br>Shadow
   * (4).<b>Action:</b> Discard another card from shadows to put Southron Escort
   * into play from shadows..<br><i>At the Gates.</i><br>
   **/
  SouthronEscortAtG = "SOUTHRON_ESCORT_AtG",
  /**
   * <h5>River Gate</h5>House Martell.<br><b><i>King's
   * Landing.</i></b><br>Limited.<b>Challenges Action:</b> If you have lost 2 or
   * more challenges this phase, sacrifice River Gate to draw 2 cards.+1
   * Income..<br><i>At the Gates.</i><br>
   **/
  RiverGateAtG = "RIVER_GATE_AtG",
  /**
   * <h5>Littlefinger (AtG)</h5>Neutral.<br><b><i>Ally. Lord. Small
   * Council.</i></b><br>Shadow (6). Stealth.<b>Reaction:</b> After a character you
   * control comes out of shadows, place up to 3 cards from your hand on the bottom
   * of your deck in any order. Then, draw that many cards. (Limit once per
   * round.).<br><i>At the Gates.</i><br>
   **/
  LittlefingerAtG = "LITTLEFINGER_AtG",
  /**
   * <h5>White Sword Tower</h5>Neutral.<br><b><i>King's Landing.</i></b><br>Each
   * <i>Kingsguard</i> character you control gets +1 STR.Each player that does not
   * control a <i>Kingsguard</i> character cannot play more than 1 event each
   * phase..<br><i>At the Gates.</i><br>
   **/
  WhiteSwordTowerAtG = "WHITE_SWORD_TOWER_AtG",
  /**
   * <h5>City of Secrets</h5>Neutral.<br><b><i>City.</i></b><br><b>When
   * Revealed:</b> Each player draws 2 cards. Then, each player without a
   * <i>City</i> plot card in his or her used pile chooses and discards 2 cards
   * from his or her hand..<br><i>At the Gates.</i><br>
   **/
  CityOfSecretsAtG = "CITY_OF_SECRETS_AtG",
  /**
   * <h5>At the Gates</h5>Neutral.<br><b><i>City. Kingdom.</i></b><br><b>When
   * Revealed:</b> Search your deck for a limited location with printed cost 1 or
   * lower, reveal it, and add it to your hand (put it into play instead if there
   * are no <i>City</i> plot cards in your used pile). Shuffle your deck..<br><i>At
   * the Gates.</i><br>
   **/
  AtTheGatesAtG = "AT_THE_GATES_AtG",
  /**
   * <h5>Smalljon Umber</h5>House Stark.<br><b><i>House Umber.
   * Lord.</i></b><br>Renown.Smalljon Umber gets -1 STR for each plot card in your
   * used pile..<br><i>City of Secrets.</i><br>
   **/
  SmalljonUmberCoS = "SMALLJON_UMBER_CoS",
  /**
   * <h5>No Surprises</h5>House Stark.<br><b>Action:</b> Reveal your hand (of at
   * least 1 card). Then, until the end of the phase, each opponent cannot play
   * events or bring cards out of shadows..<br><i>City of Secrets.</i><br>
   **/
  NoSurprisesCoS = "NO_SURPRISES_CoS",
  /**
   * <h5>Arrogant Contender</h5>House Tyrell.<br><b><i>Knight.</i></b><br>While
   * Arrogant Contender is participating in a challenge, it gets +1 STR for each
   * participating character an opponent controls.<b>Reaction:</b> After you win a
   * challenge in which Arrogant Contender is attacking alone, it gains 1 power for
   * each defending character (to a maximum of 3 power)..<br><i>City of
   * Secrets.</i><br>
   **/
  ArrogantContenderCoS = "ARROGANT_CONTENDER_CoS",
  /**
   * <h5>Show of Strength</h5>House Tyrell.<br><b>Challenges Action:</b> Until the
   * end of the phase, treat each character with STR 3 or lower as if its printed
   * text box were blank (except for <i>Traits</i>)..<br><i>City of
   * Secrets.</i><br>
   **/
  ShowOfStrengthCoS = "SHOW_OF_STRENGTH_CoS",
  /**
   * <h5>Owen the Oaf</h5>The Night's Watch.<br><b><i>Steward.</i></b><br>No
   * attachments except <i>Weapon</i>.While Owen the Oaf is participating in a
   * challenge, each character with more than 1 challenge icon does not contribute
   * its STR to the challenge..<br><i>City of Secrets.</i><br>
   **/
  OwenTheOafCoS = "OWEN_THE_OAF_CoS",
  /**
   * <h5>Shadow of the Wall</h5>The Night's Watch.<br>Shadow (0).<b>Action:</b>
   * Choose and stand a character with 1 or fewer challenge icons. If there is a
   * <i>Winter</i> plot card revealed, return Shadow of the Wall to your hand
   * instead of placing it in your discard pile..<br><i>City of Secrets.</i><br>
   **/
  ShadowOfTheWallCoS = "SHADOW_OF_THE_WALL_CoS",
  /**
   * <h5>Red Keep Gaoler</h5>House Baratheon.<br><b><i>Ally.
   * Guard.</i></b><br>Shadow (4).<b>Action:</b> Move 2 power from your faction
   * card to a [baratheon] character to put Red Keep Gaoler into play from
   * shadows..<br><i>City of Secrets.</i><br>
   **/
  RedKeepGaolerCoS = "RED_KEEP_GAOLER_CoS",
  /**
   * <h5>The Black Cells</h5>House Baratheon.<br><b><i>King's
   * Landing.</i></b><br>Shadow (2).<b>Reaction:</b> After a card you control comes
   * out of shadows, kneel The Black Cells to choose an opponent's character. Until
   * the end of the phase, that character cannot kneel or stand..<br><i>City of
   * Secrets.</i><br>
   **/
  TheBlackCellsCoS = "THE_BLACK_CELLS_CoS",
  /**
   * <h5>The Regent's Guard</h5>House Lannister.<br><b><i>Ally.
   * Guard.</i></b><br>Shadow (4).<b>Action:</b> Return a [lannister]
   * non-<i>Ally</i> character with printed cost 4 or higher to your hand to put
   * The Regent's Guard into play from shadows..<br><i>City of Secrets.</i><br>
   **/
  TheRegentsGuardCoS = "THE_REGENTS_GUARD_CoS",
  /**
   * <h5>Pyromancer's Cache</h5>House Lannister.<br><b><i>Item.</i></b><br>Location
   * only.Treat attached location as if its printed text box were blank (except for
   * <i>Traits</i>).Attached location gains: "<b>Action:</b> Kneel this location to
   * draw 1 card.".<br><i>City of Secrets.</i><br>
   **/
  PyromancersCacheCoS = "PYROMANCERS_CACHE_CoS",
  /**
   * <h5>Alannys Greyjoy (CoS)</h5>House Greyjoy.<br><b><i>House Harlaw. Lady.
   * Queen.</i></b><br><b>Reaction:</b> After a [greyjoy] location enters play
   * under your control, draw 1 card. (Limit once per phase.).<br><i>City of
   * Secrets.</i><br>
   **/
  AlannysGreyjoyCoS = "ALANNYS_GREYJOY_CoS",
  /**
   * <h5>Nightflyer</h5>House Greyjoy.<br><b><i>Warship.</i></b><br>Shadow
   * (X).<b>Reaction:</b> After Nightflyer comes out of shadows, choose a location
   * with printed cost X or lower and discard it from play.+1
   * Initiative..<br><i>City of Secrets.</i><br>
   **/
  NightflyerCoS = "NIGHTFLYER_CoS",
  /**
   * <h5>Black Market Merchant</h5>House
   * Targaryen.<br><b><i>Merchant.</i></b><br>Shadow (2).<b>Reaction:</b> After
   * Black Market Merchant comes out of shadows, search the top 10 cards of your
   * deck for an attachment with printed cost 3 or lower and attach it to an
   * eligible character you control. Shuffle your deck..<br><i>City of
   * Secrets.</i><br>
   **/
  BlackMarketMerchantCoS = "BLACK_MARKET_MERCHANT_CoS",
  /**
   * <h5>Shadow of the East</h5>House Targaryen.<br>Shadow (0).<b>Action:</b>
   * Choose an attachment and discard it from play. If there is a <i>Summer</i>
   * plot card revealed, return Shadow of the East to your hand instead of placing
   * it in your discard pile..<br><i>City of Secrets.</i><br>
   **/
  ShadowOfTheEastCoS = "SHADOW_OF_THE_EAST_CoS",
  /**
   * <h5>The Fowler Twins</h5>House
   * Martell.<br><b><i>Companion.</i></b><br><b>Action:</b> Choose a character.
   * That character must be declared as an attacker or defender in the next
   * challenge initiated this phase, if able. (Limit once per phase.).<br><i>City
   * of Secrets.</i><br>
   **/
  TheFowlerTwinsCoS = "THE_FOWLER_TWINS_CoS",
  /**
   * <h5>Shadow of the South</h5>House Martell.<br>Shadow (1).<b>Action:</b> Choose
   * a character. Until the end of the phase, that character loses a challenge icon
   * of your choice. If there is a <i>Scheme</i> plot card revealed, return Shadow
   * of the South to your hand instead of placing it in your discard
   * pile..<br><i>City of Secrets.</i><br>
   **/
  ShadowOfTheSouthCoS = "SHADOW_OF_THE_SOUTH_CoS",
  /**
   * <h5>Ghost of High Heart</h5>Neutral.<br><b><i>Ally.
   * Brotherhood.</i></b><br>While you control no loyal characters, each character
   * you control gets +1 STR.<b>Challenges Action:</b> Kneel Ghost of High Heart to
   * look at a player's hand. Choose and discard 1 card from that hand. Then, that
   * player draws 1 card..<br><i>City of Secrets.</i><br>
   **/
  GhostOfHighHeartCoS = "GHOST_OF_HIGH_HEART_CoS",
  /**
   * <h5>Shadow Politics</h5>Neutral.<br>Shadow (1).<b>Action:</b> Choose one:-
   * Choose and discard 1 card from shadows.- Choose up to 5 cards in a single
   * discard pile and remove them from the game.- Look at an opponent's
   * hand..<br><i>City of Secrets.</i><br>
   **/
  ShadowPoliticsCoS = "SHADOW_POLITICS_CoS",
  /**
   * <h5>Knights of the Hollow Hill</h5>Neutral.<br>You cannot place cards during
   * setup. Your other cards do not provide a gold bonus.+3 Income. +2 Initiative.
   * +1 Reserve..<br><i>City of Secrets.</i><br>
   **/
  KnightsOfTheHollowHillCoS = "KNIGHTS_OF_THE_HOLLOW_HILL_CoS",
  /**
   * <h5>A City Besieged</h5>Neutral.<br><b><i>City. Siege.</i></b><br><b>When
   * Revealed:</b> Choose and kneel a location. (Up to 2 locations instead if there
   * is a <i>City</i> plot card in your used pile.).<br><i>City of Secrets.</i><br>
   **/
  ACityBesiegedCoS = "A_CITY_BESIEGED_CoS",
  /**
   * <h5>Eddard Stark (PoS)</h5>House Stark.<br><b><i>Lord. Small
   * Council.</i></b><br>Renown.<b>Dominance Action:</b> If each character you
   * control has the [stark] affiliation, kneel Eddard Stark to choose and kill a
   * character with printed cost 4 or lower. (Limit once per phase.).<br><i>Pit of
   * Snakes.</i><br>
   **/
  EddardStarkPoS = "EDDARD_STARK_PoS",
  /**
   * <h5>Malleon's Tome</h5>House Stark.<br><b><i>Citadel. Item.</i></b><br>Shadow
   * (1).Attached character gains an [intrigue] icon.<b>Reaction:</b> After you win
   * a challenge in which attached character is attacking, look at the losing
   * opponent's hand. If attached character is Eddard Stark or has the
   * <i>Maester</i> trait, stand it. (Limit once per phase.).<br><i>Pit of
   * Snakes.</i><br>
   **/
  MalleonsTomePoS = "MALLEONS_TOME_PoS",
  /**
   * <h5>Maester Gormon</h5>House Tyrell.<br><b><i>Maester.</i></b><br>You may look
   * at the top card of your deck.Once per phase, if the top card of your deck is a
   * non-[tyrell] card, you may marshal or play it as if it were in your
   * hand..<br><i>Pit of Snakes.</i><br>
   **/
  MaesterGormonPoS = "MAESTER_GORMON_PoS",
  /**
   * <h5>Unexpected Guile</h5>House Tyrell.<br><b><i>Skill.</i></b><br>Character
   * with shadow you control only. Shadow (1).Attached character gets +2 STR and
   * gains insight.<b>Forced Interrupt:</b> When a challenge ends in which attached
   * character is participating, return Unexpected Guile and attached character to
   * shadows..<br><i>Pit of Snakes.</i><br>
   **/
  UnexpectedGuilePoS = "UNEXPECTED_GUILE_PoS",
  /**
   * <h5>Maester Mullin</h5>The Night's
   * Watch.<br><b><i>Maester.</i></b><br><b>Action:</b> Kneel Maester Mullin to
   * choose a character and a challenge type. Until the end of the phase, that
   * character cannot be declared as an attacker in challenges of that
   * type..<br><i>Pit of Snakes.</i><br>
   **/
  MaesterMullinPoS = "MAESTER_MULLIN_PoS",
  /**
   * <h5>Guard Duty</h5>The Night's
   * Watch.<br><b><i>Condition.</i></b><br>[thenightswatch] character
   * only.<b>Reaction:</b> After attached character is declared as a defender,
   * kneel Guard Duty to stand attached character..<br><i>Pit of Snakes.</i><br>
   **/
  GuardDutyPoS = "GUARD_DUTY_PoS",
  /**
   * <h5>Ser Eldon Estermont</h5>House Baratheon.<br><b><i>Knight.
   * Lord.</i></b><br><b>Action:</b> Choose and stand a [baratheon] location.
   * (Limit once per round.).<br><i>Pit of Snakes.</i><br>
   **/
  SerEldonEstermontPoS = "SER_ELDON_ESTERMONT_PoS",
  /**
   * <h5>Shadow of the Throne</h5>House Baratheon.<br>Shadow (1).<b>Action:</b>
   * Choose and kneel any number of locations with total printed cost 3 or lower.
   * If there is a <i>Kingdom</i> plot card revealed, return Shadow of the Throne
   * to your hand instead of placing it in your discard pile..<br><i>Pit of
   * Snakes.</i><br>
   **/
  ShadowOfTheThronePoS = "SHADOW_OF_THE_THRONE_PoS",
  /**
   * <h5>Chiswyck</h5>House
   * Lannister.<br><b><i>Ally.</i></b><br>Pillage.<b>Reaction:</b> After you win a
   * challenge in which Chiswyck is participating, discard the top card of your
   * deck to draw 1 card..<br><i>Pit of Snakes.</i><br>
   **/
  ChiswyckPoS = "CHISWYCK_PoS",
  /**
   * <h5>"Hands of Gold"</h5>House
   * Lannister.<br><b><i>Song.</i></b><br><b>Reaction:</b> After you win an
   * [intrigue] challenge by 5 or more STR as the attacking player, choose a
   * character controlled by the losing opponent and return it to its owner's hand.
   * (Max 1 per challenge.).<br><i>Pit of Snakes.</i><br>
   **/
  HandsOfGoldPoS = "HANDS_OF_GOLD_PoS",
  /**
   * <h5>King's Landing Proselyte</h5>House Greyjoy.<br><b><i>Ally. Drowned
   * God.</i></b><br>Shadow (4).<b>Action:</b> Kill a standing [greyjoy] character
   * to put King's Landing Proselyte into play from shadows..<br><i>Pit of
   * Snakes.</i><br>
   **/
  KingsLandingProselytePoS = "KINGS_LANDING_PROSELYTE_PoS",
  /**
   * <h5>Outfitted for War</h5>House
   * Greyjoy.<br><b><i>Weapon.</i></b><br><i>Warship</i> location
   * only.<b>Action:</b> During a [military] challenge, kneel attached location to
   * give a participating [greyjoy] character +3 STR until the end of the
   * challenge..<br><i>Pit of Snakes.</i><br>
   **/
  OutfittedForWarPoS = "OUTFITTED_FOR_WAR_PoS",
  /**
   * <h5>Jon Connington</h5>House Targaryen.<br><b><i>House Connington.
   * Lord.</i></b><br>Shadow (5). Renown.<b>Reaction:</b> After Jon Connington
   * comes out of shadows, choose and reveal a card you control in shadows. If it
   * is a non-event card with printed cost 4 or lower, put it into play..<br><i>Pit
   * of Snakes.</i><br>
   **/
  JonConningtonPoS = "JON_CONNINGTON_PoS",
  /**
   * <h5>The Dragonpit</h5>House Targaryen.<br><b><i>King's
   * Landing.</i></b><br>Each character whose controller controls fewer cards in
   * shadows than you gets -1 STR..<br><i>Pit of Snakes.</i><br>
   **/
  TheDragonpitPoS = "THE_DRAGONPIT_PoS",
  /**
   * <h5>Arianne Martell (PoS)</h5>House Martell.<br><b><i>Lady.</i></b><br>Shadow
   * (5). Stealth.<b>Reaction:</b> After a card comes out of shadows under your
   * control, choose a character. Until the end of the phase, that character loses
   * a challenge icon of your choice. (Limit 3 times per round.).<br><i>Pit of
   * Snakes.</i><br>
   **/
  ArianneMartellPoS = "ARIANNE_MARTELL_PoS",
  /**
   * <h5>A Pit of Snakes</h5>House Martell.<br><b>Challenges Action:</b> Choose a
   * character with no challenge icons and place a poison token on it. At the end
   * of the phase, if that character still has that poison token, remove it and
   * kill that character. (Max 1 per phase.).<br><i>Pit of Snakes.</i><br>
   **/
  APitOfSnakesPoS = "A_PIT_OF_SNAKES_PoS",
  /**
   * <h5>The Most Devout</h5>Neutral.<br><b><i>The Seven.</i></b><br>No attachments
   * except <i>The Seven</i>.<b>Reaction:</b> After a character enters play under
   * an opponent's control, if another character entered play under that player's
   * control this phase, The Most Devout gains 1 power. (Limit once per
   * phase.).<br><i>Pit of Snakes.</i><br>
   **/
  TheMostDevoutPoS = "THE_MOST_DEVOUT_PoS",
  /**
   * <h5>Statue of Baelor</h5>Neutral.<br><b><i>King's Landing. The
   * Seven.</i></b><br><b>Action:</b> Kneel Statue of Baelor and discard 1 power
   * from another character or location you control to stand that character or
   * location..<br><i>Pit of Snakes.</i><br>
   **/
  StatueOfBaelorPoS = "STATUE_OF_BAELOR_PoS",
  /**
   * <h5>The Faith's Decree</h5>Neutral.<br><b><i>The Seven.</i></b><br>Play only
   * if you control a <i>The Seven</i> character or location.<b>Action:</b> Name a
   * non-agenda, non-plot card. Until the end of the phase, each opponent cannot
   * trigger card abilities of cards with that name..<br><i>Pit of Snakes.</i><br>
   **/
  TheFaithsDecreePoS = "THE_FAITHS_DECREE_PoS",
  /**
   * <h5>Manning the City Walls</h5>Neutral.<br><b><i>City. War.</i></b><br><b>When
   * Revealed:</b> Put a non-unique character with printed cost 3 or lower into
   * play from your hand. (Printed cost 6 or lower instead if there is a
   * <i>City</i> plot card in your used pile.).<br><i>Pit of Snakes.</i><br>
   **/
  ManningTheCityWallsPoS = "MANNING_THE_CITY_WALLS_PoS",
  /**
   * <h5>Tower of the Hand (BtRK)</h5>House Stark.<br><b><i>King's
   * Landing.</i></b><br><b>Reaction:</b> After a card you control comes out of
   * shadows, if there is a <i>Winter</i> plot card revealed, choose and stand a
   * [stark] character. (Limit once per phase.).<br><i>Beneath the Red Keep.</i><br>
   **/
  TowerOfTheHandBtRk = "TOWER_OF_THE_HAND_BtRK",
  /**
   * <h5>The Maidenvault</h5>House Tyrell.<br><b><i>King's
   * Landing.</i></b><br>Shadow (1).<b>Reaction:</b> After The Maidenvault comes
   * out of shadows, choose a participating <i>Lady</i> character. Stand it and
   * remove it from the challenge.<b>Interrupt:</b> When the challenges phase ends,
   * kneel The Maidenvault to return it to shadows..<br><i>Beneath the Red Keep.</i><br>
   **/
  TheMaidenvaultBtRk = "THE_MAIDENVAULT_BtRK",
  /**
   * <h5>Tunnels of the Red Keep</h5>House Lannister.<br><b><i>King's
   * Landing.</i></b><br>Shadow (2).<b>Action:</b> Kneel Tunnels of the Red Keep to
   * return it to shadows. Then, until the end of the phase, each character you
   * control gets +1 STR for each card you control in shadows. (Max 1 per
   * phase.).<br><i>Beneath the Red Keep.</i><br>
   **/
  TunnelsOfTheRedKeepBtRk = "TUNNELS_OF_THE_RED_KEEP_BtRK",
  /**
   * <h5>Shadow of the Isles</h5>House Greyjoy.<br>Shadow (1).<b>Action:</b> Each
   * player chooses a non-limited location he or she controls and discards it from
   * play. If there is a <i>War</i> plot card revealed, return Shadow of the Isles
   * to your hand instead of placing it in your discard pile..<br><i>Beneath the
   * Red Keep.</i><br>
   **/
  ShadowOfTheIslesBtRk = "SHADOW_OF_THE_ISLES_BtRK",
  /**
   * <h5>Kingdom of Shadows</h5>Neutral.<br>You may include non-loyal characters
   * with the printed shadow keyword from any faction in your deck.Increase the
   * cost of each character you marshal by 1. Reduce the cost of the first
   * character you bring out of shadows each round by 2..<br><i>Beneath the Red Keep.</i><br>
   **/
  KingdomOfShadowsBtRk = "KINGDOM_OF_SHADOWS_BtRK",
  /**
   * <h5>Shadow of the North</h5>House Stark.<br>Shadow (1). Play only during a
   * challenge.<b>Action:</b> Raise the claim value on your revealed plot card by 1
   * until the end of the challenge. If there is a <i>Winter</i> plot card
   * revealed, return Shadow of the North to your hand instead of placing it in
   * your discard pile. (Max 1 per challenge.).<br><i>The Blackwater.</i><br>
   **/
  ShadowOfTheNorthTb = "SHADOW_OF_THE_NORTH_TB",
  /**
   * <h5>Shadow of the Rose</h5>House Tyrell.<br>Shadow (2).<b>Action:</b> Search
   * the top 10 cards of your deck for a card with shadow, reveal it, and put it
   * into shadows. Shuffle your deck. If there is a <i>Summer</i> plot card
   * revealed, return Shadow of the Rose to your hand instead of placing it in your
   * discard pile..<br><i>The Blackwater.</i><br>
   **/
  ShadowOfTheRoseTb = "SHADOW_OF_THE_ROSE_TB",
  /**
   * <h5>Yoren (TB)</h5>The Night's Watch.<br><b><i>Wandering
   * Crow.</i></b><br><b>Reaction:</b> After Yoren enters play, choose a character
   * with printed cost 5 or lower. Take control of that character until Yoren
   * leaves play..<br><i>The Blackwater.</i><br>
   **/
  YorenTb = "YOREN_TB",
  /**
   * <h5>Blackwater Rush</h5>House Baratheon.<br><b><i>Westeros.</i></b><br>Shadow
   * (2).<b>Reaction:</b> After a card you control comes out of shadows, kneel
   * Blackwater Rush to choose a [baratheon] character. That character gains 1
   * power..<br><i>The Blackwater.</i><br>
   **/
  BlackwaterRushTb = "BLACKWATER_RUSH_TB",
  /**
   * <h5>Tyrion Lannister (TB)</h5>House Lannister.<br><b><i>Lord. Small
   * Council.</i></b><br>Shadow (5). Insight.<b>Reaction:</b> After a non-event
   * card you control comes out of shadows, place another card you control in
   * shadows with a shadow token on it. While that card is in shadows, it gains
   * shadow (X). X is its printed cost. (Limit once per round.).<br><i>The
   * Blackwater.</i><br>
   **/
  TyrionLannisterTb = "TYRION_LANNISTER_TB",
  /**
   * <h5>A Very Large Shadow</h5>House Lannister.<br>Shadow (0).<b>Action:</b>
   * Reduce the cost of the next card you bring out of shadows this phase by 3. If
   * there is a <i>Scheme</i> plot card revealed, return A Very Large Shadow to
   * your hand instead of placing it in your discard pile. (Max 1 per
   * phase.).<br><i>The Blackwater.</i><br>
   **/
  AVeryLargeShadowTb = "A_VERY_LARGE_SHADOW_TB",
  /**
   * <h5>The Mountain's Skull</h5>House Martell.<br><b><i>Item.</i></b><br>Attached
   * character gets +2 STR and gains renown.<b>Reaction:</b> After an opponent's
   * character with printed STR 6 or higher is killed, put The Mountain's Skull
   * into play from your hand or discard pile..<br><i>The Blackwater.</i><br>
   **/
  TheMountainsSkullTb = "THE_MOUNTAINS_SKULL_TB",
  /**
   * <h5>White Cloak</h5>Neutral.<br><b><i>Item.</i></b><br><i>Knight</i> character
   * you control only.Attached character gains the <i>Kingsguard</i>
   * trait.<b>Interrupt:</b> When a <i>King</i> or <i>Queen</i> character would be
   * killed, kneel attached character to save it..<br><i>The Blackwater.</i><br>
   **/
  WhiteCloakTb = "WHITE_CLOAK_TB",
  /**
   * <h5>Arya Stark (LMHR)</h5>House Stark.<br><b><i>Lady.</i></b><br>Shadow (4).
   * Stealth.<b>Reaction:</b> After Arya Stark enters play, place a prayer token on
   * up to 5 different characters you don't control. If Arya Stark leaves play,
   * discard those tokens.<b>Reaction:</b> After a character with a prayer token is
   * killed, stand Arya Stark and draw 1 card..<br><i>Long May He Reign.</i><br>
   **/
  AryaStarkLmhr = "ARYA_STARK_LMHR",
  /**
   * <h5>Blood of the First Men</h5>House Stark.<br><b><i>Legacy. Old
   * Gods.</i></b><br>Character you control only.Attached character gains the
   * <i>Old Gods</i> trait.<b>Action:</b> During a challenge in which you control a
   * participating [stark] character, kneel attached character to have it
   * participate in the challenge on your side..<br><i>Long May He Reign.</i><br>
   **/
  BloodOfTheFirstMenLmhr = "BLOOD_OF_THE_FIRST_MEN_LMHR",
  /**
   * <h5>Robert Baratheon (LMHR)</h5>House Baratheon.<br><b><i>Lord.
   * King.</i></b><br>Renown.<b>Reaction:</b> After Robert Baratheon gains power,
   * gain 1 power for your faction. (Limit twice per round.).<br><i>Long May He Reign.</i><br>
   **/
  RobertBaratheonLmhr = "ROBERT_BARATHEON_LMHR",
  /**
   * <h5>Long May He Reign</h5>House
   * Baratheon.<br><b><i>Legacy.</i></b><br><i>King</i> character only.Attached
   * character cannot be killed.<b>Forced Reaction:</b> After you lose a [power]
   * challenge as the defending player, sacrifice Long May He Reign..<br><i>Long
   * May He Reign.</i><br>
   **/
  LongMayHeReignLmhr = "LONG_MAY_HE_REIGN_LMHR",
  /**
   * <h5>Ser Jorah Mormont (LMHR)</h5>House Targaryen.<br><b><i>Companion.
   * Knight.</i></b><br>Shadow (4). No attachments except
   * <i>Weapon</i>.<b>Interrupt:</b> When Ser Jorah Mormont is discarded from your
   * hand, put him into shadows instead of placing him in your discard
   * pile..<br><i>Long May He Reign.</i><br>
   **/
  SerJorahMormontLmhr = "SER_JORAH_MORMONT_LMHR",
  /**
   * <h5>Mercenary Contract</h5>House Targaryen.<br><b><i>Item.</i></b><br>Attached
   * character gains the <i>Mercenary</i> trait.<b>Reaction:</b> After you win a
   * challenge in which attached character is attacking, pay 1 gold and kneel
   * Mercenary Contract to stand attached character..<br><i>Long May He Reign.</i><br>
   **/
  MercenaryContractLmhr = "MERCENARY_CONTRACT_LMHR",
  /**
   * <h5>Robert Baratheon (FotS)</h5>House Baratheon.<br><b><i>Lord.
   * King.</i></b><br>Renown.<b>Reaction:</b> After the standing phase begins
   * (choose one):- other characters with printed cost 5 or higher cannot stand
   * this phase.- characters with printed cost 4 or lower cannot stand this phase.-
   * locations cannot stand this phase..<br><i>Fury of the Storm.</i><br>
   **/
  RobertBaratheonFotS = "ROBERT_BARATHEON_FotS",
  /**
   * <h5>Stannis Baratheon (FotS)</h5>House Baratheon.<br><b><i>Lord. King.
   * R'hllor.</i></b><br>Immune to opponents' events.<b>Reaction:</b> After you win
   * a [power] challenge, draw X cards. X is the claim value on the attacking
   * player's revealed plot card..<br><i>Fury of the Storm.</i><br>
   **/
  StannisBaratheonFotS = "STANNIS_BARATHEON_FotS",
  /**
   * <h5>Melisandre (FotS)</h5>House Baratheon.<br><b><i>Lady.
   * R'hllor.</i></b><br>Stealth.<b>Reaction:</b> After you win an [intrigue]
   * challenge in which Melisandre is attacking, move 1 power from a character
   * controlled by the losing opponent to Melisandre. Then, if that character has
   * no power, kill it..<br><i>Fury of the Storm.</i><br>
   **/
  MelisandreFotS = "MELISANDRE_FotS",
  /**
   * <h5>Renly Baratheon (FotS)</h5>House Baratheon.<br><b><i>Lord.
   * King.</i></b><br>Renown.<b>Action:</b> Kneel your faction card to put a
   * non-[baratheon] character with printed cost X or lower into play from your
   * hand. X is Renly Baratheon's STR..<br><i>Fury of the Storm.</i><br>
   **/
  RenlyBaratheonFotS = "RENLY_BARATHEON_FotS",
  /**
   * <h5>Salladhor Saan (FotS)</h5>House Baratheon.<br><b><i>Captain.
   * Smuggler.</i></b><br><b>Reaction:</b> After you marshal a <i>Smuggler</i>
   * character, choose and kneel a location. Then, gain gold equal to that
   * location's printed cost. (Limit once per round.).<br><i>Fury of the Storm.</i><br>
   **/
  SalladhorSaanFotS = "SALLADHOR_SAAN_FotS",
  /**
   * <h5>Ser Davos Seaworth (FotS)</h5>House Baratheon.<br><b><i>Knight. Smuggler.
   * The Seven.</i></b><br>Stealth.<b>Reaction:</b> After you win a challenge in
   * which Ser Davos Seaworth is participating, discard 1 power from the losing
   * opponent's faction card. Then, you may have a <i>King</i> character you
   * control gain 1 power..<br><i>Fury of the Storm.</i><br>
   **/
  SerDavosSeaworthFotS = "SER_DAVOS_SEAWORTH_FotS",
  /**
   * <h5>Alester Florent</h5>House Baratheon.<br><b><i>House Florent. Lord.
   * R'hllor.</i></b><br><b>Reaction:</b> After a <i>House Florent</i> character
   * enters play, draw a card. (Limit once per round.)<b>Interrupt:</b> When
   * Alester Florent leaves play, if you control another <i>R'hllor</i> character,
   * choose and kneel a character an opponent controls..<br><i>Fury of the Storm.</i><br>
   **/
  AlesterFlorentFotS = "ALESTER_FLORENT_FotS",
  /**
   * <h5>Selyse Baratheon (FotS)</h5>House Baratheon.<br><b><i>House Florent. Lady.
   * Queen. R'hllor.</i></b><br>Reduce the cost of each <i>R'hllor</i> attachment
   * you marshal by 3..<br><i>Fury of the Storm.</i><br>
   **/
  SelyseBaratheonFotS = "SELYSE_BARATHEON_FotS",
  /**
   * <h5>Griffin's Roost Knight</h5>House Baratheon.<br><b><i>House Connington.
   * Knight.</i></b><br><b>Interrupt:</b> When the challenges phase ends, if you
   * have not lost a [power] challenge this phase, stand Griffin's Roost
   * Knight..<br><i>Fury of the Storm.</i><br>
   **/
  GriffinsRoostKnightFotS = "GRIFFINS_ROOST_KNIGHT_FotS",
  /**
   * <h5>Dale Seaworth</h5>House
   * Baratheon.<br><b><i>Captain.</i></b><br><b>Reaction:</b> After you marshal
   * Dale Seaworth, choose a [baratheon] location in your discard pile and return
   * it to your hand..<br><i>Fury of the Storm.</i><br>
   **/
  DaleSeaworthFotS = "DALE_SEAWORTH_FotS",
  /**
   * <h5>Ser Imry Florent</h5>House Baratheon.<br><b><i>House Florent.
   * Knight.</i></b><br><b>Action:</b> Kill Ser Imry Florent to choose an opponent.
   * You may sacrifice any number of locations. For each location sacrificed this
   * way, that opponent must choose and kneel a standing character he or she
   * controls..<br><i>Fury of the Storm.</i><br>
   **/
  SerImryFlorentFotS = "SER_IMRY_FLORENT_FotS",
  /**
   * <h5>Red Priest</h5>House
   * Baratheon.<br><b><i>R'hllor.</i></b><br><b>Reaction:</b> After Red Priest
   * enters play, look at an opponent's hand. Then, choose 1 card in that hand and
   * remove it from the game until Red Priest leaves play..<br><i>Fury of the Storm.</i><br>
   **/
  RedPriestFotS = "RED_PRIEST_FotS",
  /**
   * <h5>Shyra Errol</h5>House
   * Baratheon.<br><b><i>Lady.</i></b><br><b>Interrupt:</b> When a character is
   * killed, sacrifice Shyra Errol to move each power from that character to its
   * controller's faction card..<br><i>Fury of the Storm.</i><br>
   **/
  ShyraErrolFotS = "SHYRA_ERROL_FotS",
  /**
   * <h5>Acolyte of the Flame</h5>House Baratheon.<br><b><i>Ally.
   * R'hllor.</i></b><br><b>Reaction:</b> After the draw phase begins, kneel
   * Acolyte of the Flame to look at the top 2 cards of an opponent's deck. You may
   * put those cards on the bottom of that player's deck..<br><i>Fury of the Storm.</i><br>
   **/
  AcolyteOfTheFlameFotS = "ACOLYTE_OF_THE_FLAME_FotS",
  /**
   * <h5>Bastard of Robert</h5>House Baratheon.<br><b><i>Ally.
   * Bastard.</i></b><br>While you control Robert Baratheon, reduce the cost to
   * marshal Bastard of Robert by 2.<b>Reaction:</b> After Bastard of Robert enters
   * play, if you control a <i>King</i> character, draw a card..<br><i>Fury of the Storm.</i><br>
   **/
  BastardOfRobertFotS = "BASTARD_OF_ROBERT_FotS",
  /**
   * <h5>Wily Smuggler</h5>House
   * Baratheon.<br><b><i>Smuggler.</i></b><br><b>Action:</b> Choose 1 card from
   * your hand and place it on top of your deck. Then, at the end of the phase,
   * draw 1 card. (Limit once per round.).<br><i>Fury of the Storm.</i><br>
   **/
  WilySmugglerFotS = "WILY_SMUGGLER_FotS",
  /**
   * <h5>The Stormlands</h5>House Baratheon.<br><b><i>Westeros.</i></b><br>You may
   * initiate an additional [power] challenge during the challenges
   * phase.<b>Reaction:</b> After you win a [power] challenge, kneel The Stormlands
   * to choose and stand a participating <i>King</i> or <i>Queen</i>
   * character..<br><i>Fury of the Storm.</i><br>
   **/
  TheStormlandsFotS = "THE_STORMLANDS_FotS",
  /**
   * <h5>Cape Wrath</h5>House Baratheon.<br><b><i>Westeros.</i></b><br>During
   * [power] challenges in which you are the attacking or defending player, raise
   * the claim value on the attacking player's revealed plot card by 1..<br><i>Fury
   * of the Storm.</i><br>
   **/
  CapeWrathFotS = "CAPE_WRATH_FotS",
  /**
   * <h5>Lyseni Galley</h5>House
   * Baratheon.<br><b><i>Warship.</i></b><br><b>Action:</b> Kneel Lyseni Galley to
   * choose a character. Until the end of the phase, that character gets +1 STR. If
   * that character is a <i>Captain</i> or <i>Smuggler</i>, it gains stealth until
   * the end of the phase..<br><i>Fury of the Storm.</i><br>
   **/
  LyseniGalleyFotS = "LYSENI_GALLEY_FotS",
  /**
   * <h5>Azor Ahai Reborn</h5>House Baratheon.<br><b><i>Legacy.
   * R'hllor.</i></b><br>Unique character you control only. Terminal.Attached
   * character is considered to be participating in each challenge in which you
   * control an attacking <i>R'hllor</i> character..<br><i>Fury of the Storm.</i><br>
   **/
  AzorAhaiRebornFotS = "AZOR_AHAI_REBORN_FotS",
  /**
   * <h5>Hunting Accident</h5>House
   * Baratheon.<br><b><i>Condition.</i></b><br>Ambush (3). Terminal.Attached
   * character cannot stand..<br><i>Fury of the Storm.</i><br>
   **/
  HuntingAccidentFotS = "HUNTING_ACCIDENT_FotS",
  /**
   * <h5>Warhammer</h5>House Baratheon.<br><b><i>Weapon.</i></b><br>If attached
   * character's printed STR is 4 or lower, it gets +2 STR.If attached character's
   * printed STR is 5 or higher, it gains intimidate..<br><i>Fury of the Storm.</i><br>
   **/
  WarhammerFotS = "WARHAMMER_FotS",
  /**
   * <h5>"A Cask of Ale"</h5>House
   * Baratheon.<br><b><i>Song.</i></b><br><b>Reaction:</b> After you win a [power]
   * challenge, choose 2 cards controlled by the same player. Move up to 2 power
   * from one of those cards to the other..<br><i>Fury of the Storm.</i><br>
   **/
  ACaskOfAleFotS = "A_CASK_OF_ALE_FotS",
  /**
   * <h5>Nightfire Visions</h5>House Baratheon.<br><b><i>R'hllor.</i></b><br>Play
   * only if you control a <i>R'hllor</i> character.<b>Taxation Action:</b> Name a
   * <i>Trait</i>. If an opponent reveals a plot card with that <i>Trait</i> during
   * the next plot phase, draw 3 cards..<br><i>Fury of the Storm.</i><br>
   **/
  NightfireVisionsFotS = "NIGHTFIRE_VISIONS_FotS",
  /**
   * <h5>Botley Crew</h5>House Greyjoy.<br><b><i>House Botley.
   * Raider.</i></b><br><b>Reaction:</b> After an opponent collects income, return
   * 1 gold from that player's gold pool to the treasury..<br><i>Fury of the Storm.</i><br>
   **/
  BotleyCrewFotS = "BOTLEY_CREW_FotS",
  /**
   * <h5>Every Captain is a King</h5>House Greyjoy.<br><b>Action:</b> Until the end
   * of the phase, each <i>Captain</i> character you control gains the <i>King</i>
   * trait and does not kneel when declared as an attacker in [power]
   * challenges..<br><i>Fury of the Storm.</i><br>
   **/
  EveryCaptainIsAKingFotS = "EVERY_CAPTAIN_IS_A_KING_FotS",
  /**
   * <h5>Ser Gregor Clegane (FotS)</h5>House Lannister.<br><b><i>Knight. House
   * Clegane.</i></b><br>Intimidate. Pillage.<b>Forced Reaction:</b> After you win
   * a challenge in which Ser Gregor Clegane is participating, choose and kill a
   * character you control..<br><i>Fury of the Storm.</i><br>
   **/
  SerGregorCleganeFotS = "SER_GREGOR_CLEGANE_FotS",
  /**
   * <h5>Lionstar</h5>House Lannister.<br><b><i>Warship.</i></b><br><b>Action:</b>
   * Kneel Lionstar to put a [lannister] character with printed cost 4 or lower
   * into play from your hand. At the end of the phase, if that card is still in
   * play, discard it from play..<br><i>Fury of the Storm.</i><br>
   **/
  LionstarFotS = "LIONSTAR_FotS",
  /**
   * <h5>Prince's Attendant</h5>House
   * Martell.<br><b><i>Ally.</i></b><br><b>Marshaling Action:</b> Kneel Prince's
   * Attendant to reduce the cost of the next [martell] <i>Lord</i> or <i>Lady</i>
   * character you marshal this phase by 2..<br><i>Fury of the Storm.</i><br>
   **/
  PrincesAttendantFotS = "PRINCES_ATTENDANT_FotS",
  /**
   * <h5>Kingsgrave</h5>House Martell.<br><b><i>House
   * Manwoody.</i></b><br><b>Reaction:</b> After you lose a [power] challenge by 5
   * or more STR, kneel and sacrifice Kingsgrave to choose a participating
   * character and return it to its owner's hand. (You may kill that character
   * instead if it has the <i>King</i> trait.)<em>Errata from FAQ
   * v2.2</em>.<br><i>Fury of the Storm.</i><br>
   **/
  KingsgraveFotS = "KINGSGRAVE_FotS",
  /**
   * <h5>Protectors of the Realm (FotS)</h5>The Night's
   * Watch.<br><b><i>Army.</i></b><br>No attachments.X is your reserve
   * value..<br><i>Fury of the Storm.</i><br>
   **/
  ProtectorsOfTheRealmFotS = "PROTECTORS_OF_THE_REALM_FotS",
  /**
   * <h5>The Horn that Wakes the Sleepers</h5>The Night's
   * Watch.<br><b>Reaction:</b> After an opponent initiates a challenge against
   * you, choose and stand a <i>Builder</i> character, a <i>Ranger</i> character,
   * and a <i>Steward</i> character..<br><i>Fury of the Storm.</i><br>
   **/
  TheHornThatWakesTheSleepersFotS = "THE_HORN_THAT_WAKES_THE_SLEEPERS_FotS",
  /**
   * <h5>She-Bear</h5>House Stark.<br><b><i>House
   * Mormont.</i></b><br><b>Reaction:</b> After you marshal She-Bear, you may put a
   * [stark] character or attachment with printed cost 3 or lower into play from
   * your hand..<br><i>Fury of the Storm.</i><br>
   **/
  SheBearFotS = "SHE_BEAR_FotS",
  /**
   * <h5>Bearskin Cloak</h5>House Stark.<br><b><i>Item.</i></b><br>Attached
   * character gets +1 STR.If attached character has the <i>House Mormont</i>
   * trait, it gains stealth..<br><i>Fury of the Storm.</i><br>
   **/
  BearskinCloakFotS = "BEARSKIN_CLOAK_FotS",
  /**
   * <h5>Haggo</h5>House Targaryen.<br><b><i>Bloodrider.
   * Dothraki.</i></b><br><b>Reaction:</b> After you win a challenge in which Haggo
   * is participating, discard a card from your hand to choose a <i>Dothraki</i>
   * card in your discard pile and return it to your hand..<br><i>Fury of the Storm.</i><br>
   **/
  HaggoFotS = "HAGGO_FotS",
  /**
   * <h5>Dothraki Steed</h5>House Targaryen.<br><b><i>Warhorse.</i></b><br>Limit 1
   * copy per character.While attached character is attacking, it gets +1 STR (+3
   * STR instead if it has the <i>Dothraki</i> trait).<em>Errata from FAQ
   * v2.2</em>.<br><i>Fury of the Storm.</i><br>
   **/
  DothrakiSteedFotS = "DOTHRAKI_STEED_FotS",
  /**
   * <h5>Hightower Knight</h5>House Tyrell.<br><b><i>House Hightower.
   * Knight.</i></b><br><b>Action:</b> Kneel a non-[tyrell] <i>Knight</i> character
   * to put Hightower Knight into play from your hand..<br><i>Fury of the Storm.</i><br>
   **/
  HightowerKnightFotS = "HIGHTOWER_KNIGHT_FotS",
  /**
   * <h5>Fields of the Reach</h5>House Tyrell.<br><b><i>The
   * Reach.</i></b><br><b>Reaction:</b> After you win a [power] challenge, kneel 3
   * <i>The Reach</i> locations to raise the claim value on your revealed plot card
   * by 1 until the end of the challenge..<br><i>Fury of the Storm.</i><br>
   **/
  FieldsOfTheReachFotS = "FIELDS_OF_THE_REACH_FotS",
  /**
   * <h5>Lyn Corbray (FotS)</h5>Neutral.<br><b><i>House Arryn.
   * Knight.</i></b><br>Stealth.<b>Reaction:</b> After an opponent initiates a
   * [power] challenge against you, stand Lyn Corbray..<br><i>Fury of the Storm.</i><br>
   **/
  LynCorbrayFotS = "LYN_CORBRAY_FotS",
  /**
   * <h5>Unlikely Champion</h5>Neutral.<br><b><i>Knight.</i></b><br>While you
   * control a <i>Lord</i> or <i>Lady</i> character,  Unlikely Champion gains a
   * [power] icon..<br><i>Fury of the Storm.</i><br>
   **/
  UnlikelyChampionFotS = "UNLIKELY_CHAMPION_FotS",
  /**
   * <h5>Anguy the Archer</h5>Neutral.<br><b><i>Brotherhood.
   * R'hllor.</i></b><br>While you control no loyal characters, Anguy the Archer
   * does not kneel when declared as an attacker or defender in a [military]
   * challenge..<br><i>Fury of the Storm.</i><br>
   **/
  AnguyTheArcherFotS = "ANGUY_THE_ARCHER_FotS",
  /**
   * <h5>The Hollow Hill</h5>Neutral.<br><b><i>Brotherhood.
   * Westeros.</i></b><br><b>Dominance Action:</b> If you control no loyal
   * characters, kneel The Hollow Hill to search the top 10 cards of your deck for
   * a non-loyal character, reveal it, and add it to your hand. Shuffle your
   * deck..<br><i>Fury of the Storm.</i><br>
   **/
  TheHollowHillFotS = "THE_HOLLOW_HILL_FotS",
  /**
   * <h5>Lady Forlorn</h5>Neutral.<br><b><i>Valyrian Steel.
   * Weapon.</i></b><br>Attached character gets +1 STR for each neutral location
   * you control.If attached character is Lyn Corbray, he gains a [power]
   * icon..<br><i>Fury of the Storm.</i><br>
   **/
  LadyForlornFotS = "LADY_FORLORN_FotS",
  /**
   * <h5>Defiance</h5>Neutral.<br><b>Challenges Action:</b> Choose and stand a
   * character that has not participated in a challenge this phase. (Max 1 per
   * phase.).<br><i>Fury of the Storm.</i><br>
   **/
  DefianceFotS = "DEFIANCE_FotS",
  /**
   * <h5>The Prince that was
   * Promised</h5>Neutral.<br><b><i>Prophecy.</i></b><br>After all agendas are
   * announced, name a unique character.Other characters you control cannot gain
   * power.<b>Reaction:</b> After you win a [power] challenge by 5 or more STR,
   * kneel your faction card to, either: stand the named character and draw a card;
   * or, search your deck, discard pile,  and dead pile for the named character,
   * reveal it, add it to your hand, and shuffle your deck..<br><i>Fury of the Storm.</i><br>
   **/
  ThePrinceThatWasPromisedFotS = "THE_PRINCE_THAT_WAS_PROMISED_FotS",
  /**
   * <h5>Parley at Storm's End</h5>House Baratheon.<br><b><i>Siege.
   * War.</i></b><br><b>When Revealed:</b> Name a challenge type. Until you reveal
   * a new plot card, challenges of that type cannot be initiated..<br><i>Fury of
   * the Storm.</i><br>
   **/
  ParleyAtStormsEndFotS = "PARLEY_AT_STORMS_END_FotS",
  /**
   * <h5>Outwit</h5>Neutral.<br><b><i>Scheme.</i></b><br><b>Interrupt:</b> When the
   * effects of a when revealed ability would initiate, kneel your faction card and
   * a unique <i>Maester</i> character to cancel those effects..<br><i>Fury of the Storm.</i><br>
   **/
  OutwitFotS = "OUTWIT_FotS",
  /**
   * <h5>Siege Preparations</h5>Neutral.<br><b><i>Siege.</i></b><br><b>Dominance
   * Action:</b> Draw cards until your hand size is equal to your reserve value.
   * (Limit once per phase.).<br><i>Fury of the Storm.</i><br>
   **/
  SiegePreparationsFotS = "SIEGE_PREPARATIONS_FotS",
  /**
   * <h5>Rationing</h5>Neutral.<br><b><i>Edict. Winter.</i></b><br>Players cannot
   * trigger reactions to winning or losing challenges..<br><i>Fury of the Storm.</i><br>
   **/
  RationingFotS = "RATIONING_FotS",
  /**
   * <h5>Desperate Attack</h5>Neutral.<br><b><i>War.</i></b><br>While you are the
   * defending player, raise the claim value on the attacking player's revealed
   * plot card by 1..<br><i>Fury of the Storm.</i><br>
   **/
  DesperateAttackFotS = "DESPERATE_ATTACK_FotS",
  /**
   * <h5>The Hand's Tourney</h5>Neutral.<br><b><i>Kingdom.
   * Summer.</i></b><br><b>Forced Interrupt:</b> When claim is applied for a
   * [military] challenge, apply [power] claim instead..<br><i>Fury of the Storm.</i><br>
   **/
  TheHandsTourneyFotS = "THE_HANDS_TOURNEY_FotS",
  /**
   * <h5>The New Gods</h5>Neutral.<br><b><i>The Seven.</i></b><br>Each <i>The
   * Seven</i> character you control does not kneel when declared as an attacker in
   * the first challenge you initiate during the challenges phase..<br><i>Fury of
   * the Storm.</i><br>
   **/
  TheNewGodsFotS = "THE_NEW_GODS_FotS"
}

export type AgotChoice = {
  __typename?: "AgotChoice";
  choiceType?: Maybe<AgotChoiceType>;
  requestType?: Maybe<AgotRequestType>;
  cardId?: Maybe<Scalars["Long"]>;
  icon?: Maybe<AngIcon>;
  yesNoAnswer?: Maybe<Scalars["Boolean"]>;
  cardAction?: Maybe<AgotChoiceCardAction>;
  actionLabel?: Maybe<Scalars["String"]>;
  player?: Maybe<Scalars["String"]>;
};

export enum AgotChoiceCardAction {
  Marshall = "MARSHALL",
  Play = "PLAY",
  Action = "ACTION",
  Reaction = "REACTION",
  Interrupt = "INTERRUPT"
}

export type AgotChoiceInput = {
  icon?: Maybe<AngIcon>;
  yesNoAnswer?: Maybe<Scalars["Boolean"]>;
  cardId?: Maybe<Scalars["Long"]>;
  player?: Maybe<Scalars["String"]>;
  cardAction?: Maybe<AgotChoiceCardAction>;
  requestType?: Maybe<AgotRequestType>;
  actionLabel?: Maybe<Scalars["String"]>;
  choiceType?: Maybe<AgotChoiceType>;
};

export enum AgotChoiceType {
  SelectCard = "SELECT_CARD",
  SelectCardAction = "SELECT_CARD_ACTION",
  SelectPlayer = "SELECT_PLAYER",
  SelectIcon = "SELECT_ICON",
  Continue = "CONTINUE",
  Pass = "PASS",
  YesNo = "YES_NO"
}

export type AgotGame = {
  __typename?: "AgotGame";
  phase?: Maybe<AngPhase>;
  firstPlayer?: Maybe<AgotPlayer>;
  round?: Maybe<Scalars["String"]>;
  log?: Maybe<Array<Maybe<GameLogRow>>>;
  step?: Maybe<Scalars["String"]>;
  started: Scalars["Boolean"];
  allCards?: Maybe<Array<Maybe<Card>>>;
  allPlayers?: Maybe<Array<Maybe<AgotPlayer>>>;
};

export type AgotPlayer = {
  __typename?: "AgotPlayer";
  usedPlotPile?: Maybe<Array<Maybe<PlotCard>>>;
  discardPile?: Maybe<Array<Maybe<DrawCard_AngDrawCard>>>;
  agenda?: Maybe<AgendaCard>;
  revealedPlot?: Maybe<PlotCard>;
  deadPile?: Maybe<Array<Maybe<CharacterCard>>>;
  gold: Scalars["Int"];
  characters?: Maybe<Array<Maybe<CharacterCard>>>;
  faction?: Maybe<FactionCard>;
  drawDeckEmpty: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  locations?: Maybe<Array<Maybe<LocationCard>>>;
  plotDeck?: Maybe<Array<Maybe<PlotCard>>>;
  id?: Maybe<Scalars["String"]>;
  hand?: Maybe<Array<Maybe<DrawCard_AngDrawCard>>>;
};

export type AgotReduxAction_AgotReduxActionData = {
  __typename?: "AgotReduxAction_AgotReduxActionData";
  type?: Maybe<AgotReduxActionType>;
  payload?: Maybe<AgotReduxActionData>;
};

export type AgotReduxActionData =
  | AddAttachmentData
  | AddCardData
  | AddDuplicateData
  | AddLogData
  | EmptyDrawDeckData
  | RemoveAttachmentData
  | RemoveCardData
  | RemoveDuplicateData
  | SetCardKneelingData
  | SetCardPowerData
  | SetCardRevealedData
  | SetFirstPlayerData
  | SetGameStartedData
  | SetGoldData
  | SetPhaseData;

export type AgotReduxActionList = {
  __typename?: "AgotReduxActionList";
  actions?: Maybe<Array<Maybe<AgotReduxAction_AgotReduxActionData>>>;
};

export enum AgotReduxActionType {
  AddAttachment = "ADD_ATTACHMENT",
  AddCard = "ADD_CARD",
  AddDuplicate = "ADD_DUPLICATE",
  AddLog = "ADD_LOG",
  EmptyDrawDeck = "EMPTY_DRAW_DECK",
  RemoveAttachment = "REMOVE_ATTACHMENT",
  RemoveCard = "REMOVE_CARD",
  RemoveDuplicate = "REMOVE_DUPLICATE",
  SetCardKneeling = "SET_CARD_KNEELING",
  SetCardPower = "SET_CARD_POWER",
  SetCardRevealed = "SET_CARD_REVEALED",
  SetFirstPlayer = "SET_FIRST_PLAYER",
  SetGameStarted = "SET_GAME_STARTED",
  SetGold = "SET_GOLD",
  SetPhase = "SET_PHASE"
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
  Continue = "CONTINUE",
  YesNo = "YES_NO"
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

export enum AngIcon {
  Military = "MILITARY",
  Power = "POWER",
  Intrigue = "INTRIGUE"
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

export type Card = {
  __typename?: "Card";
  imageSource?: Maybe<Scalars["String"]>;
  revealed: Scalars["Boolean"];
  attachmentIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  power: Scalars["Int"];
  duplicateIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type CharacterCard = {
  __typename?: "CharacterCard";
  revealed: Scalars["Boolean"];
  imageSource?: Maybe<Scalars["String"]>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type DrawCard_AngDrawCard = {
  __typename?: "DrawCard_AngDrawCard";
  imageSource?: Maybe<Scalars["String"]>;
  revealed: Scalars["Boolean"];
  attachmentIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  duplicateIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type EmptyDrawDeckData = {
  __typename?: "EmptyDrawDeckData";
  player?: Maybe<Scalars["String"]>;
};

export type FactionCard = {
  __typename?: "FactionCard";
  imageSource?: Maybe<Scalars["String"]>;
  revealed: Scalars["Boolean"];
  attachmentIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  duplicateIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type GameLogRow = {
  __typename?: "GameLogRow";
  message?: Maybe<Scalars["String"]>;
  type?: Maybe<GameLogRowType>;
};

export enum GameLogRowType {
  Event = "EVENT",
  Round = "ROUND",
  Phase = "PHASE",
  Step = "STEP"
}

export type InputCardInput = {
  card?: Maybe<AgotCardSeed>;
  quantity: Scalars["Int"];
};

export type InputPlayerInput = {
  deck?: Maybe<Array<Maybe<InputCardInput>>>;
  id?: Maybe<Scalars["String"]>;
  faction?: Maybe<AngFaction>;
  name?: Maybe<Scalars["String"]>;
};

export type LocationCard = {
  __typename?: "LocationCard";
  revealed: Scalars["Boolean"];
  imageSource?: Maybe<Scalars["String"]>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type MotifToken = {
  __typename?: "MotifToken";
  token?: Maybe<Scalars["String"]>;
};

export type MotifTokenInput = {
  token?: Maybe<Scalars["String"]>;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  cheatDrawDeck: Scalars["Boolean"];
  createGame?: Maybe<AgotGame>;
  startGame: Scalars["Boolean"];
  login?: Maybe<MotifToken>;
  chooseAction: Scalars["Boolean"];
};

/** Mutation root */
export type MutationCheatDrawDeckArgs = {
  cardIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  token?: Maybe<MotifTokenInput>;
  playerId?: Maybe<Scalars["String"]>;
};

/** Mutation root */
export type MutationCreateGameArgs = {
  inputPlayers?: Maybe<Array<Maybe<InputPlayerInput>>>;
  token?: Maybe<MotifTokenInput>;
};

/** Mutation root */
export type MutationStartGameArgs = {
  token?: Maybe<MotifTokenInput>;
};

/** Mutation root */
export type MutationLoginArgs = {
  username?: Maybe<Scalars["String"]>;
};

/** Mutation root */
export type MutationChooseActionArgs = {
  choice?: Maybe<AgotChoiceInput>;
  token?: Maybe<MotifTokenInput>;
  playerId?: Maybe<Scalars["String"]>;
};

export type PlotCard = {
  __typename?: "PlotCard";
  imageSource?: Maybe<Scalars["String"]>;
  revealed: Scalars["Boolean"];
  attachmentIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  duplicateIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  power: Scalars["Int"];
  id: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

/** Query root */
export type Query = {
  __typename?: "Query";
  game?: Maybe<AgotGame>;
  requests?: Maybe<Array<Maybe<AAgotRequest>>>;
};

/** Query root */
export type QueryRequestsArgs = {
  token?: Maybe<MotifTokenInput>;
};

export type RemoveAttachmentData = {
  __typename?: "RemoveAttachmentData";
  fromCard: Scalars["Long"];
  cardId: Scalars["Long"];
};

export type RemoveCardData = {
  __typename?: "RemoveCardData";
  fromArea?: Maybe<Scalars["String"]>;
  fromPlayer?: Maybe<Scalars["String"]>;
  cardId: Scalars["Long"];
};

export type RemoveDuplicateData = {
  __typename?: "RemoveDuplicateData";
  fromCard: Scalars["Long"];
  cardId: Scalars["Long"];
};

export type SetCardKneelingData = {
  __typename?: "SetCardKneelingData";
  cardId: Scalars["Long"];
  kneeling: Scalars["Boolean"];
};

export type SetCardPowerData = {
  __typename?: "SetCardPowerData";
  cardId: Scalars["Long"];
  power: Scalars["Int"];
};

export type SetCardRevealedData = {
  __typename?: "SetCardRevealedData";
  revealed: Scalars["Boolean"];
  cardId: Scalars["Long"];
};

export type SetFirstPlayerData = {
  __typename?: "SetFirstPlayerData";
  player?: Maybe<Scalars["String"]>;
};

export type SetGameStartedData = {
  __typename?: "SetGameStartedData";
  started: Scalars["Boolean"];
};

export type SetGoldData = {
  __typename?: "SetGoldData";
  gold: Scalars["Int"];
  player?: Maybe<Scalars["String"]>;
};

export type SetPhaseData = {
  __typename?: "SetPhaseData";
  phase?: Maybe<Scalars["String"]>;
  step?: Maybe<Scalars["String"]>;
  round?: Maybe<Scalars["String"]>;
};

/** Subscription root */
export type Subscription = {
  __typename?: "Subscription";
  changes?: Maybe<AgotReduxActionList>;
  requests?: Maybe<Array<Maybe<AAgotRequest>>>;
};

/** Subscription root */
export type SubscriptionChangesArgs = {
  token?: Maybe<MotifTokenInput>;
};

/** Subscription root */
export type SubscriptionRequestsArgs = {
  token?: Maybe<MotifTokenInput>;
};

export type RequestFragmentFragment = { __typename?: "AAgotRequest" } & Pick<
  AAgotRequest,
  "instruction" | "type"
> & {
    player: Maybe<{ __typename?: "AgotPlayer" } & Pick<AgotPlayer, "id">>;
    choices: Maybe<
      Array<
        Maybe<
          { __typename?: "AgotChoice" } & Pick<
            AgotChoice,
            | "requestType"
            | "choiceType"
            | "cardId"
            | "icon"
            | "cardAction"
            | "player"
            | "yesNoAnswer"
            | "actionLabel"
          >
        >
      >
    >;
  };

export type GetGameQueryVariables = {};

export type GetGameQuery = { __typename?: "Query" } & {
  game: Maybe<
    { __typename?: "AgotGame" } & Pick<
      AgotGame,
      "round" | "phase" | "step" | "started"
    > & {
        allCards: Maybe<
          Array<
            Maybe<
              { __typename?: "Card" } & Pick<
                Card,
                | "id"
                | "imageSource"
                | "power"
                | "kneeling"
                | "revealed"
                | "attachmentIds"
                | "duplicateIds"
              >
            >
          >
        >;
        allPlayers: Maybe<
          Array<
            Maybe<
              { __typename?: "AgotPlayer" } & Pick<
                AgotPlayer,
                "id" | "name" | "gold" | "drawDeckEmpty"
              > & {
                  agenda: Maybe<
                    { __typename?: "AgendaCard" } & Pick<AgendaCard, "id">
                  >;
                  faction: Maybe<
                    { __typename?: "FactionCard" } & Pick<FactionCard, "id">
                  >;
                  hand: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "DrawCard_AngDrawCard" } & Pick<
                          DrawCard_AngDrawCard,
                          "id"
                        >
                      >
                    >
                  >;
                  characters: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "CharacterCard" } & Pick<
                          CharacterCard,
                          "id"
                        >
                      >
                    >
                  >;
                  locations: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "LocationCard" } & Pick<
                          LocationCard,
                          "id"
                        >
                      >
                    >
                  >;
                  discardPile: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "DrawCard_AngDrawCard" } & Pick<
                          DrawCard_AngDrawCard,
                          "id"
                        >
                      >
                    >
                  >;
                  plotDeck: Maybe<
                    Array<
                      Maybe<{ __typename?: "PlotCard" } & Pick<PlotCard, "id">>
                    >
                  >;
                  usedPlotPile: Maybe<
                    Array<
                      Maybe<{ __typename?: "PlotCard" } & Pick<PlotCard, "id">>
                    >
                  >;
                  deadPile: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "CharacterCard" } & Pick<
                          CharacterCard,
                          "id"
                        >
                      >
                    >
                  >;
                  revealedPlot: Maybe<
                    { __typename?: "PlotCard" } & Pick<PlotCard, "id">
                  >;
                }
            >
          >
        >;
        log: Maybe<
          Array<
            Maybe<
              { __typename?: "GameLogRow" } & Pick<
                GameLogRow,
                "message" | "type"
              >
            >
          >
        >;
        firstPlayer: Maybe<
          { __typename?: "AgotPlayer" } & Pick<AgotPlayer, "id">
        >;
      }
  >;
};

export type GetRequestsQueryVariables = {
  token: MotifTokenInput;
};

export type GetRequestsQuery = { __typename?: "Query" } & {
  requests: Maybe<
    Array<Maybe<{ __typename?: "AAgotRequest" } & RequestFragmentFragment>>
  >;
};

export type SubscribeToRequestsSubscriptionVariables = {
  token: MotifTokenInput;
};

export type SubscribeToRequestsSubscription = {
  __typename?: "Subscription";
} & {
  requests: Maybe<
    Array<Maybe<{ __typename?: "AAgotRequest" } & RequestFragmentFragment>>
  >;
};

export type SubscribeToChangesSubscriptionVariables = {
  token: MotifTokenInput;
};

export type SubscribeToChangesSubscription = { __typename?: "Subscription" } & {
  changes: Maybe<
    { __typename?: "AgotReduxActionList" } & {
      actions: Maybe<
        Array<
          Maybe<
            { __typename?: "AgotReduxAction_AgotReduxActionData" } & Pick<
              AgotReduxAction_AgotReduxActionData,
              "type"
            > & {
                payload: Maybe<

                    | ({ __typename?: "AddCardData" } & Pick<
                        AddCardData,
                        "cardId" | "index" | "toPlayer" | "toArea"
                      >)
                    | ({ __typename?: "AddLogData" } & {
                        log: Maybe<
                          { __typename?: "GameLogRow" } & Pick<
                            GameLogRow,
                            "message" | "type"
                          >
                        >;
                      })
                    | ({ __typename?: "EmptyDrawDeckData" } & Pick<
                        EmptyDrawDeckData,
                        "player"
                      >)
                    | ({ __typename?: "RemoveCardData" } & Pick<
                        RemoveCardData,
                        "cardId" | "fromPlayer" | "fromArea"
                      >)
                    | ({ __typename?: "SetFirstPlayerData" } & Pick<
                        SetFirstPlayerData,
                        "player"
                      >)
                    | ({ __typename?: "SetGoldData" } & Pick<
                        SetGoldData,
                        "gold" | "player"
                      >)
                    | ({ __typename?: "SetPhaseData" } & Pick<
                        SetPhaseData,
                        "phase" | "round" | "step"
                      >)
                    | ({ __typename?: "SetCardKneelingData" } & Pick<
                        SetCardKneelingData,
                        "kneeling" | "cardId"
                      >)
                    | ({ __typename?: "SetCardPowerData" } & Pick<
                        SetCardPowerData,
                        "power" | "cardId"
                      >)
                    | ({ __typename?: "SetCardRevealedData" } & Pick<
                        SetCardRevealedData,
                        "revealed" | "cardId"
                      >)
                    | ({ __typename?: "AddAttachmentData" } & Pick<
                        AddAttachmentData,
                        "cardId" | "toCard"
                      >)
                    | ({ __typename?: "RemoveAttachmentData" } & Pick<
                        RemoveAttachmentData,
                        "cardId" | "fromCard"
                      >)
                    | ({ __typename?: "RemoveDuplicateData" } & Pick<
                        RemoveDuplicateData,
                        "cardId" | "fromCard"
                      >)
                    | ({ __typename?: "AddDuplicateData" } & Pick<
                        AddDuplicateData,
                        "cardId" | "toCard"
                      >)
                    | ({ __typename?: "SetGameStartedData" } & Pick<
                        SetGameStartedData,
                        "started"
                      >)
                >;
              }
          >
        >
      >;
    }
  >;
};

export type MutateGameMutationVariables = {
  inputPlayers: Array<Maybe<InputPlayerInput>>;
  token: MotifTokenInput;
};

export type MutateGameMutation = { __typename?: "Mutation" } & {
  createGame: Maybe<
    { __typename?: "AgotGame" } & Pick<AgotGame, "phase" | "round" | "step">
  >;
};

export type StartGameMutationVariables = {
  token: MotifTokenInput;
};

export type StartGameMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "startGame"
>;

export type ChooseActionMutationVariables = {
  choice?: Maybe<AgotChoiceInput>;
  playerId?: Maybe<Scalars["String"]>;
  token: MotifTokenInput;
};

export type ChooseActionMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "chooseAction"
>;

export type CheatDrawDeckMutationVariables = {
  cardIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  playerId?: Maybe<Scalars["String"]>;
  token: MotifTokenInput;
};

export type CheatDrawDeckMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "cheatDrawDeck"
>;

export type LoginMutationVariables = {
  username: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: Maybe<{ __typename?: "MotifToken" } & Pick<MotifToken, "token">>;
};
