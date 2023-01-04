import React from 'react';
import GridProducts from '../components/Gridproducts';

const Test: React.FC = () => {
  return (
    <div style={{
      margin: '0 auto',
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

        <GridProducts></GridProducts>
      </div>
    </div>
  )
}

export default Test;