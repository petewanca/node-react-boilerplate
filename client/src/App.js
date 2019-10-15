import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  componentDidMount = () => {
    axios.get('/api/folks')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}

export default App