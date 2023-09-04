import React, { FC } from 'react';
import { ArtworkInfo } from '~/types/artwork.types';
import { Carousel } from '@mantine/carousel';

type ArtworkCarouselProps = {
  artworks: ArtworkInfo['otherArtworkImages'];
};

const ArtworkCarousel: FC<ArtworkCarouselProps> = ({ artworks }) => {
  return (
    <Carousel
      height={200}
      slideSize="20%"
      slidesToScroll={5}
      slideGap="0"
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      {artworks.map((artwork) => (
        <Carousel.Slide key={artwork}>
          <img
            src={artwork}
            alt="artwork"
            className="aspect-square h-[200px]"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ArtworkCarousel;
