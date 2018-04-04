
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';
import { TesterHelper } from '../../../helpers/tester/tester-helper';

export class TesterGainGold extends Command {

  public name = '^gold';
  public format = 'Gold';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player) && !subscriptionHelper.isTester(player)) return;

    const gold = Math.floor(+args);
    if(gold < 1 || isNaN(gold)) return false;

    TesterHelper.gainGold(player, gold);
  }

}
