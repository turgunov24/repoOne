import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import './style.css'
import Foods from "../objectdata"
import { useState } from 'react';
import MultiActionAreaCard from './card';



function Tablar() {
  const [data, setData] = useState([])
  let allCategories = []
  Foods.map((food) => {
    allCategories.push(food.foodType)
  })
  let settedCategories = new Set(allCategories)
  let categories = [...settedCategories]
  let change = (e) => {
    setData(Foods.filter((ovqat) => (ovqat.foodType == e.target.textContent)));
  }

  return (
    <>
      <AppBar className='appbar' position='static'>
        <Tabs textColor='grey'>
          {
            categories && categories.map((e, i) => (
              <Tab className='Tab1' onClick={change} label={e} />
            ))
          }

        </Tabs>

      </AppBar>
      <div className='foodWrapper'>
        {data && data.map((e, i) => (
          <div key={i} >
            <MultiActionAreaCard title={e.title} img={e.img} price={e.money} />
          </div>
        ))}
      </div>

    </>
  );
}

export default Tablar;