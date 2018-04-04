
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMAllegiance extends Command {

  public name = '@allegiance';
  public format = 'Allegiance';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;
    if(!args) return false;

    player.allegiance = args;
    player.sendClientMessage(`Your allegiance is now "${args}".`);
  }
}
