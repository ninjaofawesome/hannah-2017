import React, { Component } from 'react';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data.json';
import CountriesData from '../src/components/description/vacation_data.json';
import CopyData from '../src/components/text_block/text_data.json';
import TextBlock from '../src/components/text_block/text_block';
import Contact from '../src/components/contact/contact';
import { isEmpty } from '../src/utils/empty_state';

class App extends Component {

  render (){

    return(
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
      </div>
    );
  }
}

export default App;