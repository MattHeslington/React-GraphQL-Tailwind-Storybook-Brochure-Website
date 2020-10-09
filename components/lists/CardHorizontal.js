import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import Star from 'components/site/Star'


const CardHorizontal = () => {
    return (
        <div className="flex h-48">

            <div>
                <div className="w-64 h-56">
                    <img src="/villa-sample-2.jpg"/>
                </div>
            </div>

            <div className="flex flex-col justify-between ml-2">
                <div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center">
                                <div>
                                    <svg className="w-4 h-4 fill-current text-uvPink" viewBox="0 0 24 24">
                                        <Star/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm"><span>&nbsp;4.7</span><span>&nbsp;(24)</span></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="px-2 mr-2 text-xs text-white border rounded border-uvBlack bg-uvBlack">LUX</span>
                            <span className="px-2 text-xs text-white border rounded border-uvPink bg-uvPink">OFFER</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Villa Name</h2>
                    <p className="text-lg tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm">4 Beds | 5 Baths</p>
                    </div>

                    <div>
                        <p className="text-xs"><span className="text-base font-bold text-uvBlack">$870</span> / night</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardHorizontal;