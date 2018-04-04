
import { find, includes } from 'lodash';

import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMRespawn extends Command {

  public name = '@respawn';
  public format = 'LairName';

  async execute(player: Player, { room, args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;
    if(!args) return false;

    const spawner = find(room.allSpawners, checkSpawner => includes(checkSpawner.npcIds, args));
    if(!spawner) return player.sendClientMessage('That lair does not exist.');

    spawner.createNPC();
    spawner.currentTick = 0;
  }
}
