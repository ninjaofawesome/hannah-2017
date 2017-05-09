import React from 'react';
import ReactDOM from 'react-dom';
// import Form from '../src/components/form/form';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data.json';
import CountriesData from '../src/components/description/vacation_data.json';
import CopyData from '../src/components/text_block/text_data.json';
import TextBlock from '../src/components/text_block/text_block';
import Contact from '../src/components/contact/contact';

import './index.css';

ReactDOM.render(
  <div className="main" >
    <TextBlock
      copy={CopyData}
      section="intro"
    />
    <Description
      data={JobData}
      type="jobs"
    />
    <TextBlock
      copy={CopyData}
      section="other"
    />
    <Description
      data={CountriesData}
      type="countries"
    />
    <TextBlock
      copy={CopyData}
      section="work"
    />
    <Contact />
  </div>,
  document.getElementById('root')
);
