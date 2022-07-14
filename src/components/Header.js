import React from 'react';
// import Image from "next/image";
// import { NavLink } from 'react-router-dom';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline"; 
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
        <h1>Hacker News App</h1>
        {/* <Image  className="object-contain" src="https://links.papareact.com/ua6" width={'200'} height={'100'}/> */}
    </header>
  );
};

export default Header;