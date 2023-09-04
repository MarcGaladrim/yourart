import { Button, Select, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCheck,
  IconHourglass,
  IconMapPin,
  IconStar,
  IconTruck,
} from '@tabler/icons-react';
import React, { FC, useMemo, useState } from 'react';
import { ArtworkInfo } from '~/types/artwork.types';
import { getDeliveryPrice } from '~/utils/delivery';
import { formatDimensions } from '~/utils/dimensions';
import { formatPrice } from '~/utils/price';
import IconText from './IconText';

const fakeCountries = [
  'France',
  'Germany',
  'United Kingdom',
  'United States',
  'Spain',
  'Italy',
];

type OrderArtworkProps = {
  artwork: ArtworkInfo;
};

const OrderArtwork: FC<OrderArtworkProps> = ({ artwork }) => {
  const [country, setCountry] = useState(fakeCountries[0]);
  const [isFavorite, { toggle: toggleFavorite }] = useDisclosure(false);

  const price = useMemo(() => {
    return getDeliveryPrice(country);
  }, [country]);

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

      <p>
        <span className="font-semibold text-orange-400">Madeleine Eister</span>
        <span className="font-medium text-gray-400">, France</span>
      </p>

      <p className="capitalize">
        {artwork.category.toLowerCase()}, {artwork.creationYear}
      </p>

      <p className="text-sm">{formatDimensions(artwork.dimensions)}</p>

      <p className="text-2xl font-extrabold">{formatPrice(artwork.price)}</p>

      <Button color="dark" radius="xl">
        Acquire
      </Button>
      <Button
        color="gray.0"
        radius="xl"
        className="border border-black"
        classNames={{ inner: 'text-black' }}
      >
        Make an offer
      </Button>

      <IconText
        icon={<IconHourglass />}
        label="Pre-reserve for 24 hours"
        labelClassname="uppercase"
        center
      />

      <IconText
        icon={<IconCheck stroke="4" />}
        label="131 &euro; estimated delivery fee for France"
        labelClassname="text-sm"
        center
      />

      <p className="font-medium">
        In order to obtain an accurate delivery fee, please enter your country
        of residence and zip code:
      </p>

      <div className="flex flex-row gap-x-2">
        <Select
          data={fakeCountries}
          className="flex-1"
          value={country}
          onChange={(value) => {
            if (!value) return;
            setCountry(value);
          }}
        />

        <TextInput className="flex-1" placeholder="Zip code" />
      </div>

      <IconText icon={<IconTruck />} label={`Delivery fee is ${price} €`} />

      <IconText
        icon={<IconMapPin />}
        label={
          <p>
            Free pickup in <span className="font-semibold">{country}</span>
          </p>
        }
      />

      <IconText
        icon={<IconCheck stroke="3" />}
        label="Try 14 days at home for free"
      />
    </div>
  );
};

export default OrderArtwork;
