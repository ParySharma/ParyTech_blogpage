'use client';
import React, { useState } from 'react';
import Main_page from './front-end/page';
import { set } from 'lodash';
import HeaderPage from '@/component/header-page';
import Image from 'next/image';
import { Box } from '@mui/material';

const Firstpage = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div style={{ minHeight: '1000vh', marginTop: '16px' }}>
      {loading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          style={{ height: '80vh' }}
        >
          <Image
            src='/logo/logo.gif'
            alt='loading'
            width={170}
            height={150}
            unoptimized
          />
        </Box>
      ) : (
        <>
          <HeaderPage />
          <div>
            <Main_page />
          </div>
        </>
      )}
    </div>
  );
};

export default Firstpage;
