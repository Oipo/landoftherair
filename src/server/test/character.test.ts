import test from 'ava-ts';
import { Character } from '../../shared/models/character';

let char: Character;

test.before(() => {
  char = new Character({});
});

test('Uninitialized character has empty hand', t => {
  t.true(char.hasEmptyHand() === true);
});
