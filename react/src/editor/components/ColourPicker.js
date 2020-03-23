import React from 'react';
import { ChromePicker  } from 'react-color';

class ColourPicker extends React.Component {
  state = {
    background: '#fff',
  };

  handleOnChange = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <ChromePicker
        color={ this.state.background }
        onChange ={ this.handleOnChange  }
      />
    );
  }
}

export default ColourPicker;  