import React, { Component, PropTypes } from 'react';
import Sidebar from '../sidebar/sidebar';


class Description extends Component {
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
       <div className={`${type}__text-area`}>
          {copy}
        </div>
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

Description.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array,
    copy: PropTypes.string,
    title: PropTypes.string
  }),
  type: PropTypes.string
}

export default Description;