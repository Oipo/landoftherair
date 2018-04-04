import { GameState } from '../../shared/models/gamestate';
import { PartyManager } from '../helpers/party/party-manager';
import { ItemCreator } from '../helpers/world/item-creator';
import { TeleportHelper } from '../helpers/world/teleport-helper';
import { Spawner } from '../base/Spawner';
import { SubscriptionHelper } from '../helpers/account/subscription-helper';
import { Client } from 'colyseus.js';
import { NPC } from '../../shared/models/npc';
import { Player } from '../../shared/models/player';
import { Character } from '../../shared/models/character';
import { Locker } from '../../shared/models/container/locker';
import { Item } from '../../shared/models/item';
import { VisualEffect } from '../helpers/world/visual-effects';
import { CombatEffect } from './GameWorld';
import * as NRP from 'node-redis-pubsub';
import Timer from '@gamestdio/timer';

export interface World {
  // Room<T>
  state: GameState;
  clock: Timer;

  // GameWorld
  dropTables: {region: any, map: any};
  partyManager: PartyManager;
  itemCreator: ItemCreator;
  teleportHelper: TeleportHelper;
  readonly groundItemCount: number;
  totalCreaturesInWorld: number;
  readonly allSpawners: Spawner[];
  readonly mapWidth: number;
  readonly mapHeight: number;
  readonly mapRegion: string;
  readonly mapName: string;
  readonly maxSkill: number;
  readonly maxCreatures: number;
  readonly disableCreatureSpawn: boolean;
  readonly canSpawnCreatures: boolean;
  readonly decayRateHours: number;
  readonly decayChecksMinutes: number;
  readonly maxItemsOnGround: number;
  readonly mapRespawnPoint: { map: string, x: number, y: number };
  readonly mapSubscriberOnly: boolean;
  readonly script: string;
  readonly subscriptionHelper: SubscriptionHelper;
  readonly maxTeleportLocations: number;
  readonly canMemorize: boolean;
  readonly exitPoint: { kickMap: number, kickX: number, kickY: number } | null;
  readonly redisClient: NRP;

  onInit(opts): Promise<void>;

  onDispose(): Promise<void>;

  onJoin(client: Client, options): Promise<boolean>;

  onLeave(client: Client): Promise<void>;

  onMessage(client: Client, data);

  saveGround(): Promise<any>;

  addNPC(npc: NPC);

  syncNPC(npc: NPC);

  removeNPC(npc: NPC);

  sendMessageToUsernames(usernames: string[], message: string | any);

  sendPlayerLogMessage(player: Player, messageData, rootCharacter?: Character);

  updateLogSettings(player: Player, logSettings);

  sendClientLogMessage(client, messageData, rootCharacter?: Character);

  showGroundWindow(player: Player);

  showTrainerWindow(player: Player, npc: NPC);

  showShopWindow(player: Player, npc: NPC);

  showBankWindow(player: Player, npc: NPC, banks: any);

  showAlchemyWindow(player: Player, npc: NPC);

  showSpellforgingWindow(player: Player, npc: NPC);

  showMetalworkingWindow(player: Player, npc: NPC);

  showLockerWindow(player: Player, lockers, lockerId);

  openLocker(player: Player, lockerName, lockerId);

  updateLocker(player: Player, locker: Locker);

  openBank(player: Player, npc: NPC);

  depositBankMoney(player: Player, region: string, amount: number): boolean | number;

  withdrawBankMoney(player: Player, region: string, amount: number): boolean | number;

  setPlayerXY(player, x, y);

  teleport(player: Player, opts: { newMap: string, x: number, y: number, zChange?: number, zSet?: number }): Promise<void>;

  addItemToGround(ref, item);

  removeItemFromGround(item, fromGH?: boolean);

  executeCommand(player: Player, command, args: string);

  createDarkness(startX: number, startY: number, radius: number, durationInMinutes: number): void;

  removeDarkness(startX: number, startY: number, radius: number);

  createSpawner(spawnerOpts, locRef);

  addSpawner(spawner: Spawner);

  removeSpawner(spawner: Spawner);

  dropCorpseItems(corpse: Item, searcher?: Player);

  dropChestItems(chest: any, searcher?: Player);

  removeCorpse(corpseRef: Item): void;

  drawEffect(player: Character, center: any, effect: VisualEffect, radius: number);

  combatEffect(player: Character, effect: CombatEffect, enemyUUID: string);

  updatePos(player: Character);

  updateFOV(player: Character);

  resetMacros(player: Player);

  calcAdjustedGoldGain(gold: number): number;

  calcAdjustedSkillGain(skill: number): number;

  calcAdjustedXPGain(xp: number): number;

  calcAdjustedTraitTimer(timerValue: number): number;

  calcAdjustedTraitGain(traitValue: number): number;

  calcAdjustedPartyXPGain(xpGain: number): number;

  getRandomStatInformation(): { numberOfRandomStatsForItems: number, randomStatMaxValue: number, randomStatChance: number };

  savePlayerPouch(player: Player);

  getInteractableByName(name: string): any;

  getSpawnerByName(name: string): Spawner;

  addEvent(name: string, callback: (args: any) => void);

  dispatchEvent(name: string, args: any);
}
