import React from "react";
import { Title, Link, Meta } from "react-head";
import Navigation from 'components/site/Navigation'

const LayoutSearch = ({

    children,
    globalTitle='default globaltitle',
    title='Search Results',


    }) => (
        <div>
            <Title>{title}</Title>
            <Meta name="description" content="Lorem ipsum dolor sit amet." />
            <Link rel="canonical" content="https://canonicalLink.net/" />

            <div className="min-h-screen antialiased xl:flex xl:flex-col xl:h-screen">
                <Navigation className="xl:flex-shrink-0"/>
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );

export default LayoutSearch;