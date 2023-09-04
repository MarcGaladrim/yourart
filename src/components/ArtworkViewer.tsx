import React, { FC } from 'react';
import IconText from './IconText';
import { IconEye, IconHexagon3d } from '@tabler/icons-react';

type ImageViewerProps = {
  imageURL: string;
};

const ImageViewer: FC<ImageViewerProps> = ({ imageURL }) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-4">
      <img
        src={imageURL}
        alt="Artwork"
        className="aspect-video w-full bg-gray-100 object-contain"
      />

      <div className="flex flex-row gap-x-4">
        <IconText
          icon={<IconEye />}
          label="View in a room"
          labelClassname="uppercase cursor-pointer"
        />
        <IconText
          icon={<IconHexagon3d />}
          label="AR view"
          labelClassname="uppercase cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
