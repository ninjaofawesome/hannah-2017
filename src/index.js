import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../src/components/form/form';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data';
import CountriesData from '../src/components/description/vacation_data';

import './index.css';

ReactDOM.render(

  <div className="main" >
    <Description
      items={JobData}
      className="jobs-sidebar"
    />
    <Description
      items={CountriesData}
      className="countries-sidebar"
    />

  </div>,
  document.getElementById('root')
);
