import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { apiAxiosInstance } from '~/plugins/axios';
import artworkKeys from './artwork.query-keys';
import { ArtworkInfo } from '~/types/artwork.types';

type ArtworkQueryKey = ReturnType<typeof artworkKeys.detail>;

const getArtwork = async (
  ctx: QueryFunctionContext<ArtworkQueryKey, number>
) => {
  const { queryKey } = ctx;
  const id = queryKey[2];

  return apiAxiosInstance<ArtworkInfo>({
    url: `/${id}.json`,
    method: 'get',
  });
};

const useArtwork = (id: ArtworkQueryKey[2]) => {
  return useQuery({
    queryFn: getArtwork,
    queryKey: artworkKeys.detail(id),
  });
};

export default useArtwork;
