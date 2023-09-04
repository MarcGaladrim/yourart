import React, { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ArtworkPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id ?? '');

  if (Number.isNaN(parsedId)) return <Navigate to="/" />;

  return <div>ArtworkPage page {parsedId}</div>;
};

export default ArtworkPage;
