import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import './style.css'


function Tablar() {
  return (
    <>
        <AppBar className='appbar' position='static'>
            <Tabs textColor='white'>
                <Tab className='Tab1' label='Hot Dishes' />
                <Tab className='Tab1' label='Cold Dishes' />
                <Tab className='Tab1' label='Soup' />
                <Tab className='Tab1' label='Grill' />
                <Tab className='Tab1' label='Appetizer' />
                <Tab className='Tab1' label='Desert' />
            </Tabs>
        </AppBar>
    </>
  );
}

export default Tablar;