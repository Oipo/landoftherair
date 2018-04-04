
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { CombatHelper } from '../../../helpers/world/combat-helper';
import { MessageHelper } from '../../../helpers/world/message-helper';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMKill extends Command {

  public name = '@kill';
  public format = 'Target';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const possTargets = MessageHelper.getPossibleMessageTargets(player, args);
    if(!possTargets.length) return player.youDontSeeThatPerson(args);

    const target = possTargets[0];
    if(!target) return false;
    if(target.hostility === 'Never') return player.sendClientMessage('That target is not killable.');

    CombatHelper.dealDamage(player, target, {
      defenderDamageMessage: `${player.name} forced your insides outside.`,
      attackerDamageMessage: `You GM-killed ${target.name}.`,
      damage: target.hp.maximum,
      damageClass: 'gm'
    });
  }
}
