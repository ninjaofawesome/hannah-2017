import React, { Component, PropTypes } from 'react';
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

    console.log(data);

    return(
      <div className={`${type}__description-container`}>
        { data.jobs ? <div className={`${type}__text-area`} dangerouslySetInnerHTML={this.createMarkup(copy)} /> : '' }
        <Sidebar
        data={items}
        className={type}
        type={type}
        title={data.title}
        />
        { data.countries ? <div className={`${type}__text-area`} dangerouslySetInnerHTML={this.createMarkup(copy)} /> : '' }
      </div>
    );
  }

}

Description.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array,
    copy: PropTypes.string,
    title: PropTypes.string
  }),
  type: PropTypes.string
}

export default Description;