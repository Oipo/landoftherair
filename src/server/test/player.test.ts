import test from 'ava-ts';
import { Player } from '../../shared/models/player';
import { TestWorld } from './TestWorld';

let testPlayer: Player;

test.before(() => {
  testPlayer = new Player({});
  testPlayer.$$room = new TestWorld();
  testPlayer.init();
});

test('Player has empty hand', t => {
  t.true(testPlayer.hasEmptyHand() === true);
});


