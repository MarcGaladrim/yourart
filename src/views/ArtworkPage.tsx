import { Loader } from '@mantine/core';
import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useArtwork from '~/api/artworks/getArtwork.api';
import ArtworkAccordion from '~/components/ArtworkAccordion';
import ArtworkCarousel from '~/components/ArtworkCarousel';
import ImageViewer from '~/components/ArtworkViewer';
import Breadcrumbs from '~/components/Breadcrumbs';
import OrderArtwork from '~/components/OrderArtwork';

const ArtworkPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id ?? '');

  if (Number.isNaN(parsedId)) return <Navigate to="/" />;

  const { data: artwork, isFetching } = useArtwork(parsedId.toString());

  if (isFetching) return <Loader size="xl" className="mx-auto mt-12" />;
  if (!artwork) return <Navigate to="/404" />;

  const breadcrumbs = [
    'home',
    'painting',
    'Madeleine Eister Artworks',
    artwork.title,
  ];

  return (
    <div className="flex flex-col gap-y-6 p-7">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex flex-row gap-x-7">
        <div className="flex-[3]">
          <ImageViewer imageURL={artwork.imageUrl} />
          <ArtworkAccordion artwork={artwork} />
        </div>

        <div className="flex-1">
          <OrderArtwork artwork={artwork} />
        </div>
      </div>
      <ArtworkCarousel artworks={artwork.otherArtworkImages} />
    </div>
  );
};

export default ArtworkPage;
