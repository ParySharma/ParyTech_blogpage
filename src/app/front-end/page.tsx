import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Main_page = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <h1>start</h1>
          <p>hello world</p>
        </Grid>
        <Grid item xs={6} textAlign='center'>
          <Image
            src='/images/blog.gif'
            alt='Picture of the author'
            width={490}
            height={450}
            style={{ marginTop: '50px' }}
            unoptimized
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main_page;
