import { NPC } from '../../../../models/npc';

export const setup = (npc: NPC) => {
  npc.hostility = 'Never';

  const vendorItems = [
    'Antanian Tunic',
    'Antanian Studded Tunic',
    'Antanian Scalemail Tunic',
    'Antanian Ringmail Tunic',
    'Antanian Breastplate',
    'Antanian Cloak'
  ];

  npc.loadVendorItems(vendorItems);
};

export const responses = (npc: NPC) => {

};
