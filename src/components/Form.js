import React, { Component } from 'react';

class Form extends Component {
  state = {};

  render() {
    return (
      <form>
        <div>
          <label>What is your team size?</label>
          <input type='number' name='size' id='size' value='1' min='1' />
        </div>
      </form>
    );
  }
}

export default Form;
