import { CombatEffect, World } from '../rooms';
import { Spawner } from '../base/Spawner';
import Timer from '@gamestdio/timer';
import { ItemCreator } from '../helpers/world/item-creator';
import { PartyManager } from '../helpers/party/party-manager';
import { GameState } from '../../shared/models/gamestate';
import { SubscriptionHelper } from '../helpers/account/subscription-helper';
import { TeleportHelper } from '../helpers/world/teleport-helper';
import { NPC } from '../../shared/models/npc';
import { Character } from '../../shared/models/character';
import { Player } from '../../shared/models/player';
import { VisualEffect } from '../helpers/world/visual-effects';
import { Item } from '../../shared/models/item';
import { Client } from 'colyseus.js';
import { Locker } from '../../shared/models/container/locker';
import { TestSubscriptionHelper } from './TestSubscriptionHelper';

export class TestWorld implements World {
  readonly allSpawners: Spawner[];
  readonly canMemorize: boolean;
  readonly canSpawnCreatures: boolean;
  clock: Timer;
  readonly decayChecksMinutes: number;
  readonly decayRateHours: number;
  readonly disableCreatureSpawn: boolean;
  dropTables: { region: any; map: any };
  readonly exitPoint: { kickMap: number; kickX: number; kickY: number } | null;
  readonly groundItemCount: number;
  itemCreator: ItemCreator;
  readonly mapHeight: number;
  readonly mapName: string;
  readonly mapRegion: string;
  readonly mapRespawnPoint: { map: string; x: number; y: number };
  readonly mapSubscriberOnly: boolean;
  readonly mapWidth: number;
  readonly maxCreatures: number;
  readonly maxItemsOnGround: number;
  readonly maxSkill: number;
  readonly maxTeleportLocations: number;
  partyManager: PartyManager;
  readonly redisClient;
  readonly script: string;
  state: GameState;
  readonly subscriptionHelper: SubscriptionHelper;
  teleportHelper: TeleportHelper;
  totalCreaturesInWorld: number;

  constructor() {
    this.subscriptionHelper = new TestSubscriptionHelper();
  }

  addEvent(name: string, callback: (args: any) => void) {
  }

  addItemToGround(ref, item) {
  }

  addNPC(npc: NPC) {
  }

  addSpawner(spawner: Spawner) {
  }

  calcAdjustedGoldGain(gold: number): number {
    return 0;
  }

  calcAdjustedPartyXPGain(xpGain: number): number {
    return 0;
  }

  calcAdjustedSkillGain(skill: number): number {
    return 0;
  }

  calcAdjustedTraitGain(traitValue: number): number {
    return 0;
  }

  calcAdjustedTraitTimer(timerValue: number): number {
    return 0;
  }

  calcAdjustedXPGain(xp: number): number {
    return 0;
  }

  combatEffect(player: Character, effect: CombatEffect, enemyUUID: string) {
  }

  createDarkness(startX: number, startY: number, radius: number, durationInMinutes: number): void {
  }

  createSpawner(spawnerOpts, locRef) {
  }

  depositBankMoney(player: Player, region: string, amount: number): boolean | number {
    return undefined;
  }

  dispatchEvent(name: string, args: any) {
  }

  drawEffect(player: Character, center: any, effect: VisualEffect, radius: number) {
  }

  dropChestItems(chest: any, searcher?: Player) {
  }

  dropCorpseItems(corpse: Item, searcher?: Player) {
  }

  executeCommand(player: Player, command, args: string) {
  }

  getInteractableByName(name: string): any {
  }

  getRandomStatInformation(): { numberOfRandomStatsForItems: number; randomStatMaxValue: number; randomStatChance: number } {
    return undefined;
  }

  getSpawnerByName(name: string): Spawner {
    return undefined;
  }

  onDispose(): Promise<void> {
    return undefined;
  }

  onInit(opts): Promise<void> {
    return undefined;
  }

  onJoin(client: Client, options): Promise<boolean> {
    return undefined;
  }

  onLeave(client: Client): Promise<void> {
    return undefined;
  }

  onMessage(client: Client, data) {
  }

  openBank(player: Player, npc: NPC) {
  }

  openLocker(player: Player, lockerName, lockerId) {
  }

  removeCorpse(corpseRef: Item): void {
  }

  removeDarkness(startX: number, startY: number, radius: number) {
  }

  removeItemFromGround(item, fromGH?: boolean) {
  }

  removeNPC(npc: NPC) {
  }

  removeSpawner(spawner: Spawner) {
  }

  resetMacros(player: Player) {
  }

  saveGround(): Promise<any> {
    return undefined;
  }

  savePlayerPouch(player: Player) {
  }

  sendClientLogMessage(client, messageData, rootCharacter?: Character) {
  }

  sendMessageToUsernames(usernames: string[], message: string | any) {
  }

  sendPlayerLogMessage(player: Player, messageData, rootCharacter?: Character) {
  }

  setPlayerXY(player, x, y) {
  }

  showAlchemyWindow(player: Player, npc: NPC) {
  }

  showBankWindow(player: Player, npc: NPC, banks: any) {
  }

  showGroundWindow(player: Player) {
  }

  showLockerWindow(player: Player, lockers, lockerId) {
  }

  showMetalworkingWindow(player: Player, npc: NPC) {
  }

  showShopWindow(player: Player, npc: NPC) {
  }

  showSpellforgingWindow(player: Player, npc: NPC) {
  }

  showTrainerWindow(player: Player, npc: NPC) {
  }

  syncNPC(npc: NPC) {
  }

  teleport(player: Player, opts: { newMap: string; x: number; y: number; zChange?: number; zSet?: number }): Promise<void> {
    return undefined;
  }

  updateFOV(player: Character) {
  }

  updateLocker(player: Player, locker: Locker) {
  }

  updateLogSettings(player: Player, logSettings) {
  }

  updatePos(player: Character) {
  }

  withdrawBankMoney(player: Player, region: string, amount: number): boolean | number {
    return undefined;
  }

}
