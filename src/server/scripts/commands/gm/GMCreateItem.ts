
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMCreateItem extends Command {

  public name = '@item';
  public format = 'ItemName';

  async execute(player: Player, { room, args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const itemName = args;
    if(!itemName) return false;

    let item;
    try {
      item = await player.$$room.itemCreator.getItemByName(itemName, player.$$room);
    } catch(e) {
      player.sendClientMessage(`Warning: item "${itemName}" does not exist.`);
      return;
    }

    if(!player.rightHand) {
      player.setRightHand(item);
      return;
    }

    room.addItemToGround(player, item);
  }
}
