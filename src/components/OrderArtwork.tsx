import { useDisclosure } from '@mantine/hooks';
import { IconStar } from '@tabler/icons-react';
import React, { FC } from 'react';
import { ArtworkInfo } from '~/types/artwork.types';

type OrderArtworkProps = {
  artwork: ArtworkInfo;
};

const OrderArtwork: FC<OrderArtworkProps> = ({ artwork }) => {
  const [isFavorite, { toggle: toggleFavorite }] = useDisclosure(false);

  return (
    <div className="flex w-full flex-col gap-y-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-bold">{artwork.title}</p>
        <IconStar
          className="cursor-pointer"
          fill={isFavorite ? 'orange' : 'white'}
          onClick={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default OrderArtwork;
