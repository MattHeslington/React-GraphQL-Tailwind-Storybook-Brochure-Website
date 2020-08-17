export default {
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
}