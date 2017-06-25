
// 2388 - vertical cave wall
// 2399 - horizontal cave wall

import { invert } from 'lodash';

export const TrueSightMap = {
  62: 1076,
  63: 1075
};

export const TrueSightMapReversed = invert(TrueSightMap);
