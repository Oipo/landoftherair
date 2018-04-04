
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { MessageHelper } from '../../../helpers/world/message-helper';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMSummon extends Command {

  public name = '@summon';
  public format = 'PlayerName';

  async execute(player: Player, { room, args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const playerName = args;
    if(!playerName) return false;

    let found = false;

    room.state.players.forEach(checkTarget => {
      if(found || !MessageHelper.doesTargetMatchSearch(checkTarget, args)) return;
      room.setPlayerXY(checkTarget, player.x, player.y);
      checkTarget.z = player.z;

      found = true;

      player.sendClientMessage(`Summoning ${checkTarget.name}...`);
    });

    if(!found) {
      player.sendClientMessage(`No target matches "${playerName}"`);
    }

  }
}
