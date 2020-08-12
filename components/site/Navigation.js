import React from 'react';

import Logo from 'components/site/Logo'
import Hamburger from 'components/site/Hamburger'
import SearchInput from 'components/site/SearchInput'
import NavigationLinks from 'components/site/NavigationLinks'
import AccountButton from 'components/site/AccountButton'

export default function Navigation() {
    return (
        <header className="items-center sm:flex sm:justify-between">
            
            <div className="flex justify-between px-4 py-3 xl:w-72 xl:bg-white xl:justify-left xl:py-3">{/*Logo and Hamburger on Smallest*/}
                <div>{/*Logo*/}
                    <Logo/>
                </div>
                <div className="flex sm:hidden">{/*Hamburger*/}
                    <Hamburger/>
                </div>
            </div>

            <nav className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                <SearchInput/>
                <div className="sm:flex sm:items-center">
                    <NavigationLinks />
                    <AccountButton />
                </div>
            </nav>

        </header>
    )
}