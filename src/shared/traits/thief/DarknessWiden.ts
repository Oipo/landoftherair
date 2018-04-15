
import { Trait } from '../../models/trait';

export class DarknessWiden extends Trait {

  static baseClass = 'Thief';
  static traitName = 'DarknessWiden';
  static description = 'Your Darkness spell range is lengthened.';
  static icon = 'dust-cloud';

  static upgrades = [
    { cost: 15, capstone: true }
  ];

}
