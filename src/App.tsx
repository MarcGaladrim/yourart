import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import ArtworkPage from '~/views/ArtworkPage';
import NotFound from '~/views/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={{}}>
        <Routes>
          <Route path="/" element={<Navigate to="/artwork/0" />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
