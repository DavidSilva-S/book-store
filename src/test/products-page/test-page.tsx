import React from 'react';
import GridProducts from '../components/Gridproducts/Gridproducts';
import SideBarFilter from '../components/sideBarFilter/sideBarFilter';

const Test: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vmin',
    }}>
      <h1 style={{
        textAlign: 'center',
        height: '9vmin',
        border: '.4px solid red'
      }}>Test Page</h1>


      <div style={{
        width: '100%',
        height: '91vmin',
      }}>
        {/* Place yout teste component bellow */}

        <SideBarFilter categoriesName='Categories' />

        {/* <GridProducts /> */}
      </div>
    </div>
  )
}

export default Test;