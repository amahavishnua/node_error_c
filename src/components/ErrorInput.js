import React from 'react';

import NodeComp from './nodeComponent';
class ErrorInput extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        
        
      alert('A name was submitted: ' + this.state.value);
      
      event.preventDefault();
    }
  
    render() {
        const ErrInput=this.state.value;
      return (
          <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <NodeComp dataA={ErrInput} />
</>
      );
    }
  }
  export default ErrorInput;