
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';
import { SubscriptionHelperImplementation } from '../../../helpers/account/subscription-helper-implementation';

export class GMGainSkill extends Command {

  public name = '@skill';
  public format = 'SkillName Amount';

  async execute(player: Player, { args }) {
    const subscriptionHelper = new SubscriptionHelperImplementation();
    if(!subscriptionHelper.isGM(player)) return;

    const [skillname, amount] = args.split(' ');
    if(!player.isValidSkill(skillname)) return false;

    const skillGain = +amount;
    player._gainSkill(skillname, skillGain);
  }
}
