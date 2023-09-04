const artworkKeys = {
  all: ['artwork'] as const,
  lists: () => [...artworkKeys.all, 'lists'] as const,
  details: () => [...artworkKeys.all, 'details'] as const,
  detail: (id: string) => [...artworkKeys.details(), id] as const,
};

export default artworkKeys;
