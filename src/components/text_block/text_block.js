import React, { Component, PropTypes } from 'react';

class TextBlock extends Component {

  createMarkup(finalCopy) {
    return {__html: finalCopy}
  }

  render() {
    const copy = this.props.copy.content;
    const section = this.props.section;
    let finalCopy;

    if(!copy) {
      return null;
    }

    if (section === "intro") {
      finalCopy = copy.introCopy;
    }


    if (section === "other") {
      finalCopy = copy.otherCopy;
    }

    if (section === "work") {
      finalCopy = copy.workCopy;
    }

    return(
      <div className={`text__${section}`} dangerouslySetInnerHTML={this.createMarkup(finalCopy)} />
    );
  }
}

TextBlock.propTypes = {
  copy: PropTypes.object,
  section: PropTypes.string,
  data: PropTypes.shape({})
}

export default TextBlock;