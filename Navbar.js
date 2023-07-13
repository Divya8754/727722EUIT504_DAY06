import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />
		<NavMenu>
		
		<NavLink to='/about' activeStyle>
			AboutUs
		</NavLink>
		<NavLink to='/events' activeStyle>
			Book
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Flights
		</NavLink>
		<NavLink to='/team' activeStyle>
			Cards
		</NavLink>
		{/* <NavLink to='/blogs' activeStyle>
			
		</NavLink> */}
		<NavLink to='/sign-up' activeStyle>
			My Profile
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/createac'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>

);
};

export default Navbar;