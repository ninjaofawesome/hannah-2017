import React, { Component } from 'react';
import Description from '../src/components/description/description';
import JobData from '../src/components/description/job_data.json';
import CountriesData from '../src/components/description/vacation_data.json';
import CopyData from '../src/components/text_block/text_data.json';
import TextBlock from '../src/components/text_block/text_block';
import Contact from '../src/components/contact/contact';
import ContactData from '../src/components/contact/contact_data.json';

class App extends Component {
  constructor() {
    super();

    this.toggleText = this.toggleText.bind(this);
    this.addData = this.addData.bind(this);

    this.state = { confirm : []}
  }

  toggleText(){
    this.setState({ confirm: ContactData.contact })
  }

  addData(confirmData) {
    const confirm = {...this.state.confirm};
    const timestamp = Date.now();
    confirm[`confirm-${timestamp}`] = confirmData;
    this.setState({ confirm })
  }

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

        <Description
          data={CountriesData}
          type="countries"
        />
        <TextBlock
          copy={CopyData}
          section="work"
        />

        <Contact
          addData={this.addData}
          allData={this.state.confirm}
        />
      </div>
    );
  }
}

export default App;