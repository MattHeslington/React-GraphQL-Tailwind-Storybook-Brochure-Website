import React from 'react';
import FilterButton from 'components/site/FilterButton'
import { Link } from "gatsby"

export default function Filters() {
    return (
        <div className="flex items-center w-full h-16 mt-8 border border-gray-200 rounded-lg shadow-md">

            <FilterButton heading="Locations" secondary="Where would you like to stay?"/>

            <FilterButton heading="Check-In" secondary="When would you like to arrive?"/>

            <FilterButton heading="Checkout" secondary="When would you like to depart?"/>

            <FilterButton heading="Bedrooms" secondary="How many bedrooms?"/>

            <div className="flex items-center justify-center w-64 h-full">
                <Link to="/search">
                    <button className="h-10 px-20 text-white rounded bg-uvPink hover:bg-uvPinkHover">Search</button>
                </Link>
            </div>
            
        </div>
    )
}
