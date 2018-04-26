import React , {Component} from 'react';
import styled from 'styled-components';

const HeaderCenter = styled.h1`
  text-align: center;
`;

class Header extends Component {
  render(){
    return(
      <HeaderCenter>Luv Gashapon</HeaderCenter>
    );
  }
}
export default Header;
