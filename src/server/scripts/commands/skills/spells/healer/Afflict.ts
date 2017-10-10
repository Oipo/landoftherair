
import { startsWith } from 'lodash';

import { Skill } from '../../../../../base/Skill';
import { Character, SkillClassNames } from '../../../../../../models/character';
import { Afflict as CastEffect } from '../../../../../effects/Afflict';

export class Afflict extends Skill {

  static macroMetadata = {
    name: 'Afflict',
    macro: 'cast afflict',
    icon: 'bolas',
    color: '#bd5900',
    mode: 'lockActivation'
  };

  public name = 'cast afflict';
  public format = 'Target';

  flagSkills = [SkillClassNames.Restoration];

  mpCost = () => 10;
  range = () => 5;

  execute(user: Character, { gameState, args, effect }) {
    if(!args) return false;

    const target = this.getTarget(user, args);
    if(!target) return;

    if(!this.tryToConsumeMP(user, effect)) return;

    this.use(user, target, effect);
  }

  use(user: Character, target: Character, baseEffect = {}) {
    const effect = new CastEffect(baseEffect);
    effect.cast(user, target, this);
  }

}
