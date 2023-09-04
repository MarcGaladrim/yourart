import { Button } from '@mantine/core';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-3 items-center justify-center">
      <p className="pt-96">404 Page not found!</p>
      <Button onClick={() => navigate('/')}>Go back to homepage</Button>
    </div>
  );
};

export default NotFound;
