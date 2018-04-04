
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';
import { TesterHelper } from '../../../helpers/tester/tester-helper';

export class TesterSetHP extends Command {

  public name = '^hp';
  public format = 'HP';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player) && !subscriptionHelper.isTester(player)) return;

    const hp = Math.floor(+args);
    if(hp < 1 || isNaN(hp)) return false;

    TesterHelper.setHP(player, hp);
  }

}
