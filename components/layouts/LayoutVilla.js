import React from "react";
import { Title, Link, Meta } from "react-head";
import Navigation from 'components/site/Navigation'

const LayoutVilla = ({
    
    children,
    title='villa name | ultimatevillas',
    globalTitle='This And That'

    }) => (
        <div>
            <Title>{globalTitle}</Title>
            <Meta name="description" content="Lorem ipsum dolor sit amet." />
            <Link rel="canonical" content="https://canonicalLink.net/" />
            
            <div className="min-h-screen antialiased xl:flex xl:flex-col xl:h-screen">
                <Navigation className="xl:flex-shrink-0"/>
                <div style={{ maxWidth:"1120px", marginLeft:"auto", marginRight:"auto" }}>
                    {children}
                </div>
            </div>
        </div>
    );

export default LayoutVilla;