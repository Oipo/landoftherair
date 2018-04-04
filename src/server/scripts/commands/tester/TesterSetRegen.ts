
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';
import { TesterHelper } from '../../../helpers/tester/tester-helper';

export class TesterSetRegen extends Command {

  public name = '^regen';
  public format = 'Regen';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player) && !subscriptionHelper.isTester(player)) return;

    const regen = Math.floor(+args);
    if(regen < 1 || isNaN(regen)) return false;

    TesterHelper.setRegen(player, regen);
  }

}
