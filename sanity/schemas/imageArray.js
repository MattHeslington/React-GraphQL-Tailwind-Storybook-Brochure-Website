export default {
    title: 'More Images',
    name: 'imageArray',
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
                    isHighlighted: true
                }
            },
            {
                title: 'Alternative text',
                name: 'alt',
                type: 'string',
                options: {
                    isHighlighted: true
                }
            },
        ]

    }
