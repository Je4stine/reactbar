import React from 'react';
import {Nav, NavBarContainer, NavBarLogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <>
        <Nav>
            <NavBarContainer>
                <NavBarLogo to='/'>
                    Logo
                </NavBarLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='about'>About</NavLink>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </Nav>
    </>
  )
};
