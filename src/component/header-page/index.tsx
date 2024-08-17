'use client';
import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  styled,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
} from '@mui/material';
import { Search as SearchIcon, Twitter, Facebook } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typography } from '@/app/style/common';
import { headerTitles } from '@/utils/contents';
import _map from 'lodash/map';
import LoginIcon from '@mui/icons-material/Login';

const StyledBox = styled(Box)`
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 12px;
  transition: transform 1s ease;
  backface-visibility: hidden;
`;

const StyledNacBox = styled(Box)`
 && p{
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 500;
    margin-left: 44px;
    transition: transform 1s ease;
    }

    a{
      color: black;
      text-decoration: none;
    }
    a:hover{
      color: lightblue;
      transition: transform 1s ease;
    }
 }
`;

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#e0e0e0',
  '&:hover': {
    backgroundColor: '#d5d5d5',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;
      setIsScrolled(currentScrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position={isScrolled ? 'fixed' : 'static'}
      style={{ marginTop: '16px' }}
      color='inherit'
      elevation={0}
      className='header-page'
    >
      <Box p='0px 16px 0px 16px'>
        <StyledBox>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Box
                display='flex'
                maxHeight={'50px'}
                minHeight={'50px'}
                position='relative'
                alignItems='center'
              >
                <Image
                  src='/logo/logo.gif'
                  alt='Tech Hacker'
                  width={110}
                  height={98}
                  unoptimized
                />
                <Typography size={24} color='black' weight={600}>
                  Tech Hacker
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <StyledNacBox display='flex' alignItems='center'>
                {_map(headerTitles, (item: any, index: any) => (
                  <Typography size={18} weight={600} key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </Typography>
                ))}
              </StyledNacBox>
            </Grid>

            <Grid item>
              <Box display='flex' alignItems='center'>
                <StyledSearch>
                  <StyledInputBase
                    placeholder='Search…'
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton aria-label='search'>
                    <SearchIcon />
                  </IconButton>
                </StyledSearch>
                <Button
                  variant='outlined'
                  color='primary'
                  endIcon={<LoginIcon />}
                  style={{ marginLeft: '12px' }}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </StyledBox>
      </Box>
    </AppBar>
  );
};

export default HeaderPage;
