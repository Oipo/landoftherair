import { SpellEffect } from '../../base/Effect';
import { Character } from '../../../shared/models/character';

export class MinerFever extends SpellEffect {
  iconData = {
    name: 'screaming',
    color: '#f00',
    tooltipDesc: 'Temporarily lost some regenerative capacity.'
  };

  cast(caster: Character, target: Character, skillRef?) {
    this.duration = 15;
    this.potency = 10;
    target.applyEffect(this);
  }

  effectStart(char: Character) {
    char.sendClientMessage('You feel a bit woozy.');
    this.loseStat(char, 'hpregen', this.potency);
    this.loseStat(char, 'mpregen', this.potency);
  }

  effectEnd(char: Character) {
    char.sendClientMessage('Your headache has cleared.');
  }
}
