import { Loader } from '@mantine/core';
import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useArtwork from '~/api/artworks/getArtwork.api';
import Breadcrumbs from '~/components/Breadcrumbs';

const ArtworkPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id ?? '');

  if (Number.isNaN(parsedId)) return <Navigate to="/" />;

  const { data: artwork, isFetching } = useArtwork(parsedId.toString());

  if (isFetching) return <Loader size="xl" className="mx-auto mt-12" />;
  if (!artwork) return <Navigate to="/404" />;

  const { otherArtworkImages, ...restArtwork } = artwork;

  const breadcrumbs = [
    'home',
    'painting',
    `${artwork.artistShort.country} Artworks`,
    artwork.title,
  ];

  return (
    <div className="flex flex-col gap-y-4 p-7">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p className="absolute bottom-0 right-0">
        {Object.entries(restArtwork).map(([key, value]) => (
          <p key={key}>
            {key} : {JSON.stringify(value)}
          </p>
        ))}
      </p>
    </div>
  );
};

export default ArtworkPage;
