import React from 'react';
// import requests from '../utils/requests';
// import { useRouter } from 'next/router';
import { NavLink } from 'react-router-dom';

function Nav() {
  // const router = useRouter();
  return (
    <React.Fragment>
    <nav className="relative">
        <div className="nav-link flex px-10 sm:px-20 text-2xl whitespace-nowrap space=x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          <NavLink to="/top" activeClassName="active">
            Top Stories
          </NavLink>
          <NavLink to="/new" activeClassName="active">
            Latest Stories
          </NavLink>
          <NavLink to="/best" activeClassName="active">
            Best Stories
          </NavLink>
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#9307f0] h-10 w-4/12" />
    </nav>
    </React.Fragment>
  )
}

export default Nav;

