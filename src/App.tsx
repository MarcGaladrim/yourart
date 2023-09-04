import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Index from '~/views/Index';
import NotFound from '~/views/NotFound';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={{}}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
