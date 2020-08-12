import React from "react";
import { Title, Link, Meta } from "react-head";
import Navigation from 'components/site/Navigation'

const LayoutHome = ({
    
    children,
    globalTitle='default globaltitle',
    title='default title'

    }) => (
        <div>
            <Title>{globalTitle}</Title>
            <Meta name="description" content="Lorem ipsum dolor sit amet." />
            <Link rel="canonical" content="https://canonicalLink.net/" />
            
            <div className="min-h-screen antialiased xl:flex xl:flex-col xl:h-screen">
                <Navigation className="xl:flex-shrink-0"/>
                <div className="container mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );

export default LayoutHome;