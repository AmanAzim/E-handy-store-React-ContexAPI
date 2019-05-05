import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../logo.svg';
import styled from 'styled-components';

//This is how to create a component without any efffort using "styled-component"
const ButtonContainer = styled.button`
    background:transparent;
    font-size:1.2rem;
    border:0.05rem solid var(--mainWhite);
    border-radius:0.5rem;
    color:var(--mainWhite);
    margin:0.2rem 0.5rem;
    padding:0.2rem 0.5rem;
    transition: all 0.5 ease-in-out;
    &:hover{
        background:var(--mainWhite);
        color:red;
    }
    &:focus{
        outline:none;
    }      
`;

export default class Navbar extends Component {

    render() {
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-danger px-sm-5">
              {/*
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
              <NavLink to="/" ><img src={logo} alt="E-Handy Shop" className="navbar-brand"/></NavLink>

              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                      <NavLink to="/" className="nav-link">Products</NavLink>
                  </li>
              </ul>

              <NavLink to="/cart" className="ml-auto">
                  <ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"/></span> My Cart</ButtonContainer>
              </NavLink>
          </nav>
        );
    }
}


