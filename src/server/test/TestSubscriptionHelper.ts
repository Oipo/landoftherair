import { SubscriptionHelper } from '../helpers/account/subscription-helper';
import { Player } from '../../shared/models/player';
import { Account, SilverPurchase } from '../../shared/models/account';
import { Lobby } from '../rooms';

export class TestSubscriptionHelper implements SubscriptionHelper {
  bonusBeltSlots(player: Player): number {
    return 0;
  }

  bonusMaterialStorageSlots(player: Player): number {
    return 0;
  }

  bonusPouchSlots(player: Player): number {
    return 0;
  }

  bonusSackSlots(player: Player): number {
    return 0;
  }

  buyWithStripe(account: Account, purchaseInfo): Promise<void> {
    return undefined;
  }

  calcActionQueueSize(player: Player): number {
    return 0;
  }

  calcMaxSmithRepair(player: Player, baseSmithRepair: number): number {
    return 0;
  }

  calcPotionMaxSize(player: Player, basePotionSize: number): number {
    return 0;
  }

  checkAccountForExpiration(account: Account): Promise<Account> {
    return undefined;
  }

  getSilverPurchase(account: Account, purchase: SilverPurchase): number {
    return 0;
  }

  giveSilver(account: Account, silver): Promise<Account> {
    return undefined;
  }

  isGM(player: Player): boolean {
    return false;
  }

  isSubscribed(player: Player): boolean {
    return false;
  }

  isTester(player: Player): boolean {
    return false;
  }

  modifyDocPrice(player: Player, basePrice: number): number {
    return 0;
  }

  modifyPartyXPGainForSubscription(player: Player, xp: number): number {
    return 0;
  }

  modifySkillGainForSubscription(player: Player, skill: number): number {
    return 0;
  }

  modifyTraitPointTimerForSubscription(player: Player, timer: number): number {
    return 0;
  }

  modifyXPGainForSubscription(player: Player, xp: number): number {
    return 0;
  }

  purchaseWithSilver(account: Account, purchase: SilverPurchase, lobbyInstance: Lobby): Promise<boolean> {
    return undefined;
  }

  startTrial(account: Account, expirationDays, tier?): Promise<Account> {
    return undefined;
  }

  subscribe(account: Account, months: number): Promise<Account> {
    return undefined;
  }

  subscriptionTier(player: Player): number {
    return 0;
  }

  subscriptionTierMultiplier(player: Player): number {
    return 0;
  }

  unsubscribe(account: Account): Promise<Account> {
    return undefined;
  }

}
