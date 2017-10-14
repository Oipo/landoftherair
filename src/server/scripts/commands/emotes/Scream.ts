
import { Command } from '../../../base/Command';
import { Player } from '../../../../shared/models/player';

export class Scream extends Command {

  public name = 'scream';
  public format = 'Target?';

  async execute(player: Player, { room, gameState, args }) {
    const possTargets = room.getPossibleMessageTargets(player, args);

    if(possTargets && possTargets[0]) {
      const target = possTargets[0];

      player.sendClientMessage(`You scream at ${target.name}!`);
      target.sendClientMessage(`${player.name} screams at you!`);
      player.sendClientMessageToRadius(`${player.name} screams at ${target.name}!`, 4, [player.uuid, target.uuid]);
      target.addAgro(player, 1);
      return;
    }

    player.sendClientMessage('You scream!');
    player.sendClientMessageToRadius(`${player.name} screams!`, 4, [player.uuid]);

  }
}
