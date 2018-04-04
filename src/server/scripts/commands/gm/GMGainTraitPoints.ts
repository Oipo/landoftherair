
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMGainTraitPoints extends Command {

  public name = '@tp';
  public format = 'Amount';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const traitGain = +args;
    player.gainTraitPoints(traitGain);
  }
}
