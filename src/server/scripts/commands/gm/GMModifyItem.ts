
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { merge } from 'lodash';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMModifyItem extends Command {

  public name = '@itemmod';
  public format = 'Props...';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    if(!player.rightHand) return player.sendClientMessage('Hold an item in your right hand to modify.');

    const mergeObj = this.getMergeObjectFromArgs(args);

    merge(player.rightHand, mergeObj);

  }
}
