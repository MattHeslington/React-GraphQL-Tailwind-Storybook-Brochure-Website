export default {
    title: "Villa",
    name: "villa",
    type: "document",
    fields: [
        {
            title: "Villa Name",
            name: "villaName",
            type: "string",
        },
        {
            title: "Featured on Homepage",
            name: "featuredHome",
            type: "boolean",
        },
        {
            title: "Location",
            name: "villaLocation",
            type: "string",
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
        },
        {
            title: "Price",
            name: "price",
            type: "number",
        },
        {
            title: "Villa Headline",
            name: "villaHeadline",
            type: 'string',
        },
        {
            title: "Bedrooms",
            name: "bedrooms",
            type: "number",
        },
        {
            title: "Guests",
            name: "guests",
            type: "number",
        },
        {
            title: "Bathrooms",
            name: "bathrooms",
            type: "number",
        },
        {
            title: 'Bullet Points',
            name: 'bullet',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true, // <-- Defaults to false
                metadata: ['lqip', 'palette']
            },
            fields: [
                {
                    title: 'Caption',
                    name: 'caption',
                    type: 'string',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    title: 'Alternative text',
                    name: 'alt',
                    type: 'string',
                    description: 'Important for SEO and accessiblity.',
                    options: {
                        isHighlighted: true
                    }
                },
            ]
        },
        {
            name: 'imageArray',
            type: 'array',
            description: 'First image in list is used as main image',
            title: 'More Images',
            of: [
                {
                    type: 'image',
                    options: {
                        metadata: ['lqip', 'palette']
                    },
                    fields: [
                        {
                            title: 'Caption',
                            name: 'caption',
                            type: 'string',
                            options: {
                                isHighlighted: true // <-- make this field easily accessible
                            }
                        },
                        {
                            title: 'Alternative text',
                            name: 'alt',
                            type: 'string',
                            description: 'Important for SEO and accessiblity.',
                            options: {
                                isHighlighted: true
                            }
                        },
                    ]

                },
            ]
        },
        {
            title: 'Facilities',
            name: 'facilities',
            type: 'array',
            description: 'List all of the villas facilites and services.',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            }
        },
        {
            title: 'Map Coordinates',
            name: 'mapCoords',
            type: 'geopoint'
        },
        {
            title: "Villa Description",
            name: "villaDescription",
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'reviewArray',
            type: 'array',
            description: 'Add lots of great reviews',
            title: 'Villa Reviews',
            of: [
                {
                    type: 'review'
                },
            ]
        },
        {
            name: 'myAwesomeTable',
            type: 'table',
            title: 'Pricing Table'
        }
    ]
}