// import App from './App';
import React, { Component } from 'react'; 
import {render} from 'react-dom';
import Container from './Container'
import './index.css';

class Index extends Component {
  render(){
    return (
      <Container />
); }
}

render(<Index />, document.getElementById('root'));