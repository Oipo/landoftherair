
import { Spawner } from '../../../../base/Spawner';

const npcIds = [
  'Catacombs Skeleton 2F'
];

export class CatacombsSkeleton2FSpawner extends Spawner {

  constructor(room, opts) {
    super(room, opts, {
      respawnRate: 15,
      initialSpawn: 2,
      maxCreatures: 5,
      spawnRadius: 1,
      randomWalkRadius: 15,
      leashRadius: 25,
      npcIds
    });
  }

}
