import { ArtworkInfo } from '~/types/artwork.types';

export const formatDimensions = (dimensions: ArtworkInfo['dimensions']) => {
  return `${dimensions.width} W x ${dimensions.height} H x ${dimensions.depth} D in`;
};
