import React from "react"
import { graphql } from "gatsby"

import LayoutHome from "components/layouts/LayoutHome"
import Filters from "components/site/Filters"
import SegmentKohSamui from "../comps/SegmentKohSamui"
import SegmentMaldives from "../comps/SegmentMaldives"
import SegmentPhuket from "../comps/SegmentPhuket"
import SegmentSriLanka from "../comps/SegmentSriLanka"

export default function Home({data}) {
    return (
        <LayoutHome>
            <Filters/>
            <SegmentKohSamui/>
            <SegmentPhuket/>
            <SegmentSriLanka/>
            <SegmentMaldives/>
        </LayoutHome>
    )
}

export const query = graphql`
    query {
        allSanityVilla(limit:4) {
            edges {
                node {
                    villaName
                    villaHeadline
                    bedrooms
                    bathrooms
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
                                _type
                                muted {
                                    background
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
`