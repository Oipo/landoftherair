
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMGainXP extends Command {

  public name = '@xp';
  public format = 'XP';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const xpGain = +args;
    player.gainExp(xpGain);
  }
}
