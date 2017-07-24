import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';


class Description extends Component {

  createMarkup(finalCopy) {
    return {__html: finalCopy}
  }

  render() {
    const {
      data,
      type
    } = this.props;

    const copy = data.copy;
    const items = [data.jobs, data.countries].filter(( element ) => {
       return element !== undefined;
    });

    return(
      <div className={`${type}__description-container`}>
       <div className={`${type}__text-area`} dangerouslySetInnerHTML={this.createMarkup(copy)} />
        <Sidebar
        data={items}
        className={type}
        type={type}
        title={data.title}
        />
      </div>
    );
  }

}

export default Description;