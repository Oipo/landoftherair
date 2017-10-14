
import { find, each } from 'lodash';

import { Command } from '../../../../base/Command';
import { Player } from '../../../../../shared/models/player';

export class GroundToBelt extends Command {

  public name = '~GtB';
  public format = 'ItemType ItemId';

  execute(player: Player, { room, gameState, args }) {
    const splitArgs = args.split(' ');
    if(splitArgs.length < 1) return false;

    const [itemType, itemId] = splitArgs;

    if(itemId) {
      const item = this.getItemFromGround(player, itemType, itemId);
      if(!item) return;

      if(!player.addItemToBelt(item)) return;
      room.removeItemFromGround(item);

    } else {
      const items = this.getItemsFromGround(player, itemType);
      if(!items) return;

      each(items, item => {
        if(!player.addItemToBelt(item)) return false;
        room.removeItemFromGround(item);
      });
    }
  }

}
