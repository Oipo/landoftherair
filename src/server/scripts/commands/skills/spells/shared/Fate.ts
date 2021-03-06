
import { Skill } from '../../../../../base/Skill';
import { Character } from '../../../../../../shared/models/character';
import { Fate as CastEffect } from '../../../../../effects';
import { Player } from '../../../../../../shared/models/player';

export class Fate extends Skill {

  static macroMetadata = {
    name: 'Fate',
    macro: 'cast fate',
    icon: 'solar-time',
    color: '#000',
    mode: 'autoActivate',
    tooltipDesc: '???'
  };

  public targetsFriendly = true;

  public name = ['fate', 'cast fate'];
  public format = '';
  public unableToLearnFromStealing = true;

  // it would be funny to have an enemy that can cast fate, though.
  canUse(user: Character, target: Character) {
    return false;
  }

  mpCost() { return 0; }
  range(attacker: Character) { return 0; }

  execute(user: Player, { args, effect }) {
    if(user.level < 15) return user.sendClientMessage('Hmmm... maybe you should be more experienced first.');
    this.use(user, user, effect);
  }

  use(user: Player, target: Player, baseEffect = {}) {
    const effect = new CastEffect(baseEffect);
    effect.cast(user, target);
  }

}
