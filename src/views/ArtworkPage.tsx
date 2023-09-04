import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useArtwork from '~/api/artworks/getArtwork.api';

const ArtworkPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id ?? '');

  if (Number.isNaN(parsedId)) return <Navigate to="/" />;

  const { data: artwork, isFetching } = useArtwork(parsedId.toString());

  return (
    <div>
      <div>ArtworkPage page {parsedId}</div>
    </div>
  );
};

export default ArtworkPage;
