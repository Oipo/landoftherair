import { NPC } from '../../../../../shared/models/npc';
import { VendorResponses } from '../../common-responses';
import { Currency } from '../../../../../shared/helpers/holiday-helper';

export const setup = async (npc: NPC) => {
  npc.hostility = 'Never';
  npc.affiliation = 'Token Vendor';

  const vendorItems = [
    { name: 'Rune Scroll - Slow Digestion I' },
    { name: 'Rune Scroll - Slow Digestion II' },
    { name: 'Rune Scroll - Slow Digestion III' },
    { name: 'Rune Scroll - Slow Digestion IV' },
    { name: 'Rune Scroll - Slow Digestion V' },
    { name: 'Halloween Gem' },
    { name: 'Halloween Pumpkin Shield' },
    { name: 'Halloween Moon Boots' }
  ];

  npc.$$vendorCurrency = Currency.Halloween;
  npc.$$room.npcLoader.loadVendorItems(npc, vendorItems);

  npc.rightHand = await npc.$$room.npcLoader.loadItem('Halloween Gem');
  npc.gear.Armor = await npc.$$room.npcLoader.loadItem('Risan Breastplate');

  npc.recalculateStats();
};

export const responses = (npc: NPC) => {
  VendorResponses(npc);
};
