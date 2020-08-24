import React from "react"
import ReactMapGL, {Marker, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl'

import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../client-config'

import LayoutHome from "components/layouts/LayoutHome"



const builder = imageUrlBuilder(clientConfig.sanity)

function urlFor(source) {
    return builder.image(source)
}

const resultsTemplate = () => {

    return(
        <LayoutHome>
            <h1>Results Page</h1>
        </LayoutHome>
    )
}

export default resultsTemplate