import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Share your story
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/signin" activeStyle>
			Sign In
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
