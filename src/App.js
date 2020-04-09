import React from 'react';
import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';
import sampleEmployee from './components/sampleEmployee';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
      };
      this.getEmployee = this.getEmployee.bind(this)
      }
      
      getEmployee() {
        // Send the request
        axios.get('https://randomuser.me/api?nat=fr')
          // Extract the DATA from the received response
          .then(response => response.data)
          // Use this data to update the state
          .then(data => {
            console.log(data)
            this.setState({
            employee: data.results[0],
            });
        });
      }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
  );}
}


export default App;


