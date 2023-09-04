import { Accordion } from '@mantine/core';
import React, { FC } from 'react';
import { ArtworkInfo } from '~/types/artwork.types';

type ArtworkAccordionProps = {
  artwork: ArtworkInfo;
};

const ArtworkAccordion: FC<ArtworkAccordionProps> = ({ artwork }) => {
  const tableData = [
    ['Subject', artwork.subjects],
    ['Style', artwork.styles],
    ['Medium', artwork.mediums],
    ['Materials', artwork.materials],
  ] as const;

  return (
    <Accordion>
      <Accordion.Item value="description">
        <Accordion.Control className="uppercase">Description</Accordion.Control>
        <Accordion.Panel>{artwork.description}</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="subject">
        <Accordion.Control className="uppercase">
          Subject, Medium, Style, Materials
        </Accordion.Control>
        <Accordion.Panel>
          <table className="border-separate border-spacing-3">
            <tbody>
              {tableData.map(([key, value]) => (
                <tr key={key}>
                  <td className="font-semibold uppercase text-gray-500">
                    {key}
                  </td>
                  <td className="capitalize">{value.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ArtworkAccordion;
