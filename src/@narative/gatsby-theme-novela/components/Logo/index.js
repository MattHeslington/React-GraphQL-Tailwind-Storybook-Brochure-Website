import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
    return (
        <svg width="212px" height="23px" viewBox="0 0 212 23" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="28" letter-spacing="-1.1">
                <g id="ultimatevillasdevlogo" transform="translate(-1.000000, 0.000000)" fill="#02020B">
                    <g id="Group" transform="translate(0.000000, -12.000000)">
                        <text id="ultimatevillas" font-family="Inter-Bold, Inter" font-weight="bold">
                            <tspan x="0" y="34">ultimatevillas</tspan>
                        </text>
                        <text id="dev" font-family="Inter-Regular, Inter" font-weight="normal">
                            <tspan x="91" y="34">dev</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
    );
}