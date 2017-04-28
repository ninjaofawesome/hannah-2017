import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../src/components/form/form';
import Description from '../src/components/description/description';
import countriesData from '../src/components/description/vacation_data';
import './index.css';

ReactDOM.render(

  <div className="main" >
    <Description items={countriesData} />
  </div>,
  document.getElementById('root')
);
