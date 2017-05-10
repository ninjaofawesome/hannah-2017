import React, { Component, PropTypes } from 'react';

class TextBlock extends Component {
  render() {
    const copy = this.props.copy.content;
    const section = this.props.section;

    if(!copy) {
      return null;
    }

    if (section === "intro") {
      return(
        <div className={`textblock__${section}`}>
          {copy.introCopy}
        </div>
      );
    }

    if (section === "other") {
      return(
        <div className={`textblock__${section}`}>
          {copy.otherCopy}
        </div>
      );
    }
    if (section === "work") {
      return(
        <div className={`textblock__${section}`}>
          {copy.workCopy}
        </div>
      );
    }

    return null;
  }
}

TextBlock.propTypes = {
  copy: PropTypes.object,
  section: PropTypes.string,
  data: PropTypes.shape({})
}

export default TextBlock;