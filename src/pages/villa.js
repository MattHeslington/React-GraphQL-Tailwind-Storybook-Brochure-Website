import React, { Component } from 'react'

import LayoutVilla from 'components/layouts/LayoutVilla'
import EnquiryForm from 'components/villa/EnquiryForm'
import PhotoGrid from 'components/villa/PhotoGrid'
import Star from 'components/site/Star'

export class villa extends Component {
    render() {
        return (
            <LayoutVilla>
                <div className="mt-12">

                    <PhotoGrid
                        mainImage={'villa-sample.jpg'}
                        gridImage0={'villa-sample-2.jpg'}
                        gridImage1={'villa-sample-3.jpg'}
                        gridImage2={'villa-sample-4.jpg'}
                        gridImage3={'villa-sample.jpg'}
                    />

                    <div className="flex">

                        <div className="w-9/12 pr-12 mt-4">

                            <div className="flex">

                                <div>
                                    <h1>Villa Akuvara</h1>
                                </div>

                                <div>
                                    
                                    <div className="flex items-center">
                                        <div id="svg">
                                            <svg className="w-6 h-6 fill-current text-uvPink">
                                                <Star/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">4.7<span className="text-sm font-thin">&#40; 4 &#41;</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <h2>4-Bedroom Villa, Phuket, Thailand</h2>
                                </div>
                            </div>

                            <div>
                                <p className="font-bold tracking-tight text3-xl text-uvBlack">Gorgeous four-bedroom beach-front villa in Phuket's trendy Big Buddha district</p>
                            </div>

                            <div>
                                <h3 className="text-base uppercase text-uvBlack">why you should book villa akuvara</h3>
                                <ul>
                                    <li>The villa has a twenty-five metre swimming pool</li>
                                    <li>There's a twenty-four-hour maid service</li>
                                    <li>The villa is close to lots of great restaurants</li>
                                    <li>The is a billiard table in the kids' room</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base uppercase text-uvBlack">facilities</h3>
                                <ul>
                                    <li>Sonos sound system</li>
                                    <li>Real duckdown bedding</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base uppercase text-uvBlack">description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Habitant morbi tristique senectus et netus et malesuada fames. Interdum posuere lorem ipsum dolor sit. Accumsan sit amet nulla facilisi morbi. Sit amet purus gravida quis blandit turpis cursus in. Sed vulputate odio ut enim blandit volutpat maecenas.</p>
                                <p>Non diam phasellus vestibulum lorem. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Habitant morbi tristique senectus et netus et malesuada fames. Interdum posuere lorem ipsum dolor sit. Accumsan sit amet nulla facilisi morbi. Sit amet purus gravida quis blandit turpis cursus in.</p>
                            </div>

                        </div>
                        


                        <div className="w-3/12">
                            <EnquiryForm/>
                        </div>


                    </div>
                </div>
            </LayoutVilla>
        )
    }
}

export default villa
