import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../src/components/form/form';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data.json';
import CountriesData from '../src/components/description/vacation_data.json';
import CopyData from '../src/components/text_block/text_data.json';
import TextArea from '../src/components/text_block/text_block';

import './index.css';

ReactDOM.render(
  <div className="main" >
    <TextArea
      copy={CopyData}
      className="intro-info"
    />
    <Description
      data={JobData}
      type="jobs"
    />
    <Description
      data={CountriesData}
      type="countries"
    />
  </div>,
  document.getElementById('root')
);
