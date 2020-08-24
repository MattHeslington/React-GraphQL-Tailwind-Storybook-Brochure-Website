import React, { useState} from "react"
import ReactMapGL, {Marker, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl'

import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../client-config'

import LayoutSearch from "components/layouts/LayoutSearch"



const builder = imageUrlBuilder(clientConfig.sanity)

function urlFor(source) {
    return builder.image(source)
}

export default () => {

    const [viewport, setViewport] = useState ({
        latitude:7.9700168,
        longitude:98.3051078,
        zoom:10
    });

    return(
        <LayoutSearch>
            <div className="flex h-full">
                <div className="w-1/2">
                    <header className="">
                        <span className="text-xs">300+ Villas, Sep 24 to Sep 31, 2 Bedrooms</span>
                        <h2 className="text-4xl font-extrabold tracking-tight">Villas in Phuket</h2>
                    </header>
                </div>
                <div className="w-1/2">
                    <ReactMapGL
                        {...viewport}
                        width="100%"
                        height="100%"
                        mapboxApiAccessToken={"pk.eyJ1IjoibWF0dHVsdGltYXRldmlsbGFzIiwiYSI6ImNrNjUwdXd1aTAxMXAzZm1pYXRmcmdhNjUifQ.U8EyYMwjYptgTVoAPJXNiw"}
                        mapStyle="mapbox://styles/mattultimatevillas/ckcw32r3311ex1imgkwzc91ks"
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                    ></ReactMapGL>
                </div>
            </div>
        </LayoutSearch>
    )
}
