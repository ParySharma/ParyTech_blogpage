import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Main_page = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Image
            src='/images/heropage.gif'
            alt='Picture of the author'
            width={490}
            height={450}
            style={{ width: '100%', height: '100%', marginTop: '-46px' }}
            unoptimized
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main_page;
