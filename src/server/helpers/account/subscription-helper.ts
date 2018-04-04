import { Account, SilverPurchase } from '../../../shared/models/account';
import { Lobby } from '../../rooms';
import { Player } from '../../../shared/models/player';

export interface SubscriptionHelper {
  buyWithStripe(account: Account, purchaseInfo): Promise<void>;

  subscribe(account: Account, months: number): Promise<Account>;

  unsubscribe(account: Account): Promise<Account>;

  startTrial(account: Account, expirationDays, tier?): Promise<Account>;

  giveSilver(account: Account, silver): Promise<Account>;

  purchaseWithSilver(account: Account, purchase: SilverPurchase, lobbyInstance: Lobby): Promise<boolean>;

  checkAccountForExpiration(account: Account): Promise<Account>;

  isGM(player: Player): boolean;

  isTester(player: Player): boolean;

  isSubscribed(player: Player): boolean;

  getSilverPurchase(account: Account, purchase: SilverPurchase): number;

  subscriptionTier(player: Player): number;

  subscriptionTierMultiplier(player: Player): number;

  calcPotionMaxSize(player: Player, basePotionSize: number): number;

  calcMaxSmithRepair(player: Player, baseSmithRepair: number): number;

  modifyDocPrice(player: Player, basePrice: number): number;

  bonusMaterialStorageSlots(player: Player): number;

  modifyXPGainForSubscription(player: Player, xp: number): number;

  modifySkillGainForSubscription(player: Player, skill: number): number;

  modifyTraitPointTimerForSubscription(player: Player, timer: number): number;

  modifyPartyXPGainForSubscription(player: Player, xp: number): number;

  calcActionQueueSize(player: Player): number;

  bonusSackSlots(player: Player): number;

  bonusBeltSlots(player: Player): number;

  bonusPouchSlots(player: Player): number;
}
