
import React from 'react';

class Template extends React.Component {

  render() {
    return (
      <div className="template">
        {this.props.header}
        {this.props.body}
        {this.props.footer}
      </div>
    );
  }
}

export default Template;
