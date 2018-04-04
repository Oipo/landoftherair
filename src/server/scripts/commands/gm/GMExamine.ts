
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { get } from 'lodash';
import { MessageHelper } from '../../../helpers/world/message-helper';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMExamine extends Command {

  public name = '@examine';
  public format = 'Target? Prop?';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    if(!args && player.rightHand) {
      player.sendClientMessage(JSON.stringify(player.rightHand));
      return;
    }

    const [npcish, prop] = args.split(' ');
    const possTargets = MessageHelper.getPossibleMessageTargets(player, npcish);
    if(!possTargets.length) return player.youDontSeeThatPerson(npcish);

    const target = possTargets[0];
    if(!target) return false;

    let targetJSON = target.toSaveObject ? target.toSaveObject() : target;
    if(prop) {
      targetJSON = get(targetJSON, prop);
    }

    try {
      player.sendClientMessage(JSON.stringify(targetJSON));
    } catch(e) {
      player.sendClientMessage('Examine failed, be more specific?');
    }
  }
}
