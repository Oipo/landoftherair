
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';
import { TesterHelper } from '../../../helpers/tester/tester-helper';

export class TesterSetLevel extends Command {

  public name = '^level';
  public format = 'Level';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player) && !subscriptionHelper.isTester(player)) return;

    const level = Math.floor(+args);
    if(level < 1 || isNaN(level)) return false;

    TesterHelper.setLevel(player, level);
  }

}
