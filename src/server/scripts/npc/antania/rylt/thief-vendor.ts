
import { filter, includes, every } from 'lodash';

import { NPC } from '../../../../../shared/models/npc';
import { NPCLoader } from '../../../../helpers/character/npc-loader';
import { VendorResponses } from '../../common-responses';
import { Player } from '../../../../../shared/models/player';

export const setup = async (npc: NPC) => {
  npc.hostility = 'Never';

  const vendorItems = [
    'Lockpick',
    'Antanian FireMist Thief Trap',
    'Antanian IceMist Thief Trap',
    'Antanian Poison Thief Trap',
    'Antanian MagicMissile Thief Trap',
    'Antanian Afflict Thief Trap',
    'Antanian Distraction Thief Trap',
    'Antanian Blind Thief Trap',
    'Antanian Snare Thief Trap',
    'Antanian Stun Thief Trap',
    'Antanian Darkness Thief Trap',
    'Weak Disease Potion (5oz)',
    'Weak Blind Potion (5oz)',
    'Weak BlurredVision Potion (5oz)'
  ];

  NPCLoader.loadVendorItems(npc, vendorItems);

  npc.rightHand = await NPCLoader.loadItem('Lockpick');
  npc.leftHand = await NPCLoader.loadItem('Antanian FireMist Thief Trap');
  npc.gear.Armor = await NPCLoader.loadItem('Antanian Tunic');
  npc.recalculateStats();
};

export const responses = (npc: NPC) => {

  const filterItems = (items, player: Player) => {
    if(player.getTraitLevel('AdvancedTraps')) return items;

    const trapNames = ['Distraction', 'Blind', 'Snare', 'Stun', 'Darkness'].map(x => `${x} Thief Trap`);
    return filter(items, item => every(trapNames, name => !includes(item.name, name)));
  };

  VendorResponses(npc, { classRestriction: 'Thief', filter: filterItems });
};
