import React, { useState} from "react"
import ReactMapGL, {Marker, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl'
import { graphql } from "gatsby"

import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../client-config'

import LayoutVilla from 'components/layouts/LayoutVilla'
import EnquiryForm from 'components/villa/EnquiryForm'
import PhotoGrid from 'components/villa/PhotoGrid'
import IconTick from 'components/icons/IconTick'
import Glasses from 'components/icons/Glasses'
import Star from 'components/site/Star'

const builder = imageUrlBuilder(clientConfig.sanity)

function urlFor(source) {
    return builder.image(source)
}

const fullscreenControlStyle = {
    position: 'absolute',
    top: 6,
    left: 0,
    padding: '10px'
};

    const navStyle = {
    position: 'absolute',
    top: 44,
    left: 0,
    padding: '10px'
};

    const scaleControlStyle = {
    position: 'absolute',
    bottom: 36,
    left: 0,
    padding: '10px'
};


export const query = graphql`
  query($slug: String) {
    sanityVilla(slug: { current: { eq: $slug } }) {
        id
        villaName
        villaHeadline
        villaLocation
        bathrooms
        bedrooms
        price
        slug {
            current
        }
        mainImage {
            asset {
                url
                metadata {
                lqip
                palette {
                    vibrant {
                        foreground
                        background
                    }
                }
            }
        }
        }
        imageArray {
        asset {
            url
            metadata {
            lqip
            palette {
                vibrant {
                    foreground
                    background
                }
            }
            }
        }
        }
        guests
        featuredHome
        facilities
        bullet
        mapCoords {
            lat
            lng
        }
        _rawVillaDescription
        reviewArray {
            reviewName
            reviewDate
            reviewAvatar
            reviewRating
            villaReview
        }
    }
  }
`;

export default ({ data }) => {

    const [viewport, setViewport] = useState ({
        latitude:data.sanityVilla.mapCoords.lat,
        longitude:data.sanityVilla.mapCoords.lng,
        width:800,
        height:440,
        zoom:16
    });

    return (
        <LayoutVilla>
            <div className="mt-12">

                <PhotoGrid
                    mainImage={urlFor(data.sanityVilla.mainImage).width(560).height(560).url()}
                    gridImage0={urlFor(data.sanityVilla.imageArray[0]).width(280).height(280).url()}
                    gridImage1={urlFor(data.sanityVilla.imageArray[1]).width(280).height(280).url()}
                    gridImage2={urlFor(data.sanityVilla.imageArray[2]).width(280).height(280).url()}
                    gridImage3={urlFor(data.sanityVilla.imageArray[3]).width(280).height(280).url()}
                />

                <div className="flex mt-6">
                    <div className="w-9/12 pr-12 mt-4">
                        <div className="flex items-center">
                            <div>
                                <h1 className="text-2xl font-semibold tracking-tight">{data.sanityVilla.villaName}</h1>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div id="svg">
                                        <svg className="w-6 h-6 fill-current text-uvPink">
                                            <Star/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold">4.7</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>4-Bedroom Villa, Phuket, Thailand</h2>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-3xl font-bold tracking-tight text-uvBlack">{data.sanityVilla.villaHeadline}</p>
                        </div>

                        <div className="flex items-start mt-8">

                            <div className="w-2/3 pr-8">
                                <h3 className="text-base font-semibold uppercase text-uvBlack">why you should book {data.sanityVilla.villaName}</h3>
                                <ul>
                                    {data.sanityVilla.bullet.map(bullets =>
                                        <li><Glasses/><span className="ml-1">{bullets}</span></li>
                                    )}
                                </ul>
                            </div>


                            <div className="w-1/3">
                                <h3 className="text-base font-semibold uppercase text-uvBlack">facilites</h3>
                                <ul>
                                    {data.sanityVilla.facilities.map(facility =>
                                        <li><IconTick/><span className="ml-1">{facility}</span></li>
                                    )}
                                </ul>
                            </div>


                        </div>


                        <div className="mt-8">
                            <h3 className="text-base font-semibold uppercase text-uvBlack">villa description</h3>
                            <BlockContent blocks={data.sanityVilla._rawVillaDescription} />
                        </div>

                        <div className="mt-8">
                            <div>
                                <h2 className="text-base font-semibold uppercase text-uvBlack">Villa Location</h2>
                            </div>
                            <div className="mt-4 border border-gray-400 rounded-lg">
                                <ReactMapGL
                                    {...viewport}
                                    mapboxApiAccessToken={"pk.eyJ1IjoibWF0dHVsdGltYXRldmlsbGFzIiwiYSI6ImNrNjUwdXd1aTAxMXAzZm1pYXRmcmdhNjUifQ.U8EyYMwjYptgTVoAPJXNiw"}
                                    mapStyle="mapbox://styles/mattultimatevillas/ckcw32r3311ex1imgkwzc91ks"
                                    onViewportChange={viewport => {
                                        setViewport(viewport);
                                    }}
                                >
                                    <Marker
                                        key={data.sanityVilla.id}
                                        latitude={data.sanityVilla.mapCoords.lat}
                                        longitude={data.sanityVilla.mapCoords.lng}
                                    >
                                        <div>
                                            <svg className="w-8 h-8 fill-current text-uvPink" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,12.7l-3,3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.2,0.1-0.5,0.1-0.8,0c-0.1,0-0.2-0.1-0.3-0.2l-3-3c0,0,0,0,0,0c-0.4-0.4-0.4-1,0-1.4c0,0,0,0,0,0c0.4-0.4,1-0.4,1.4,0l1.3,1.3V9c0-0.6,0.4-1,1-1s1,0.4,1,1v3.6l1.3-1.3c0.4-0.4,1-0.4,1.4,0C16.1,11.7,16.1,12.3,15.7,12.7z"/></svg>
                                        </div>
                                    </Marker>
                                    <div style={fullscreenControlStyle}>
                                        <FullscreenControl />
                                    </div>
                                    <div style={navStyle}>
                                        <NavigationControl />
                                    </div>
                                    <div style={scaleControlStyle}>
                                        <ScaleControl />
                                    </div>
                                </ReactMapGL>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-base font-semibold uppercase text-uvBlack">Reviews for {data.sanityVilla.villaName}</h3>
                            {data.sanityVilla.reviewArray.map(review =>
                                <>
                                    <span>{review.reviewName}</span>
                                    <span>{review.villaReview}</span>
                                    <img src={review.reviewAvatar} alt="{review.reviewName}"/>
                                </>
                            )}

                        </div>

                    </div>



                    <div className="w-3/12">
                        <EnquiryForm/>
                    </div>


                </div>
            </div>
        </LayoutVilla>
    )
};