import React from 'react';
import IconSearch from 'components/site/IconSearch'

export default function SearchInput() {
    return (
        <div className="hidden xl:block xl:relative xl:w-full xl:max-w-sm xl:px-4">
            <div className="absolute inset-y-0 flex items-center left-4">
                
                <IconSearch/>

            </div>
            <input className="block w-full py-2 pl-10 pr-4 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none" placeholder="Search by keywords" />
        </div>
    )
}
