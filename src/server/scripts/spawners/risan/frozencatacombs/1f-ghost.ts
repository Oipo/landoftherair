
import { Spawner } from '../../../../base/Spawner';

const npcIds = [
  'Catacombs Ghost 1F'
];

export class CatacombsGhost1FSpawner extends Spawner {

  constructor(room, opts) {
    super(room, opts, {
      respawnRate: 40,
      initialSpawn: 2,
      maxCreatures: 3,
      spawnRadius: 1,
      randomWalkRadius: 15,
      leashRadius: 25,
      eliteTickCap: 45,
      npcIds
    });
  }

}
