import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import styled, { css } from 'styled-components';

const SiteLogo = styled.h2`
  text-align: center;
  border: 2px solid #ccc;
  width: 100px;
  padding: 10px;
  margin: 20px auto;
  a{
      text-decoration: none;
      color: #333;
  }
`
const Nav = styled.nav`
  text-align: center;
  a{
      margin: 0 1rem;
  }
`

class Navigation extends Component {
    render() {
        return (
            <header>
                <SiteLogo><Link to="/">My App</Link></SiteLogo>
                <Nav>
                    
                    <Link to="/author">Autor</Link>
                    <Link to="/contact">Kontakt</Link>
                </Nav>
            </header>
            
        )
    }
}

export default Navigation;