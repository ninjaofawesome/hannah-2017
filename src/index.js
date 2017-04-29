import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../src/components/form/form';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data';
import CountriesData from '../src/components/description/vacation_data';
import IntroData from '../src/components/description/intro_data';
import OtherData from '../src/components/description/other_data';

import './index.css';

ReactDOM.render(

  <div className="main" >
    <Description
      items={JobData}
      content={IntroData}
      className="jobs"
    />
    <Description
      items={CountriesData}
      content={OtherData}
      className="countries"
    />

  </div>,
  document.getElementById('root')
);
