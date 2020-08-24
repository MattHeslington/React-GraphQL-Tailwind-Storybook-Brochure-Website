import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

import imageUrlBuilder from '@sanity/image-url'
import clientConfig from '../../client-config'

import CardDynamic from "components/lists/CardDynamic"



const builder = imageUrlBuilder(clientConfig.sanity)

function urlFor(source) {
    return builder.image(source)
}

export default function SegmentMaldives() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allSanityVilla(limit: 4, sort: {fields: villaName}, filter: {villaLocation: {eq: "Maldives"}, featuredHome: {eq: true}}) {
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
            `}
            render={data => (
                <div>
                    <h2 className="text-4xl font-extrabold tracking-tight">
                        <Link to="/">Villas in Maldives
                            <span className="text-base font-normal tracking-normal">Click here to see all our Maldives villas</span>
                        </Link>
                    </h2>
                    <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
                        <div className="sm:inline-flex sm:pt-2 xl:space-x-4">
                            {data.allSanityVilla.edges.map(({ node }) => (
                                <div class="sm:mt-0 sm:w-76 sm:flex-shrink-0">
                                    <CardDynamic
                                        key={node.id}
                                        name={node.villaName}
                                        headline={node.villaHeadline}
                                        price={node.price}
                                        beds={node.bedrooms}
                                        baths={node.bathrooms}
                                        slug={node.slug.current}
                                        imgUrl={urlFor(node.mainImage).width(320).height(260).url()}
                                        imgBg={node.mainImage.asset.metadata.lqip}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        />
    )
}
