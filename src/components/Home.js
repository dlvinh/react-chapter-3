import React, { Component } from 'react';
import { Button } from '../styledComponents/StyledButton';
import ChangeThemePractise from './ChangeThemePractise';

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <h1>Styled Component Practise</h1>
            <h4>Practise with styled.button``</h4>
            <Button>CLick Me</Button>
            <ChangeThemePractise></ChangeThemePractise>
      </div>
      
    )
  }
}
