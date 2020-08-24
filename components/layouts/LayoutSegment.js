import React from "react";
import { Title, Link, Meta } from "react-head";

const LayoutSegment = ({props}) => (
    <>
        <h2 className="text-4xl font-extrabold tracking-tight">
            <Link to="/">Villas in {segment.place}
                <span className="text-base font-normal tracking-normal">Click here to see all our {segment.place} villas</span>
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
    </>
)