const path = require('path')

module.exports = {
    siteMetadata: {
        title: `ultimatevillas dev blog`,
        globalTitle: `ultimatevillas`,
        name: `ultimatevillas`,
        siteUrl: `http://localhost:8000/blog/development`,
        description: `This is my description that will be used in the meta tags and important for search results`,
        hero: {
            heading: `Welcome to the ultimatevillas dev blog.`,
            maxWidth: 652,
    },
    social: [
        {
            name: `twitter`,
            url: `https://twitter.com/narative`,
        },
        {
            name: `github`,
            url: `https://github.com/narative`,
        },
        {
            name: `instagram`,
            url: `https://instagram.com/narative.co`,
        },
        {
            name: `linkedin`,
            url: `https://www.linkedin.com/company/narative/`,
        },
        {
            name: `dribbble`,
            url: `https://dribbble.com/narativestudio`,
        },
    ],
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-head`,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                components: path.join(__dirname, 'components'),
                pages: path.join(__dirname, 'src/pages')
            }
        },
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/blog/development",
                sources: {
                    local: true,
                    contentful: false
                },
                authorsPage: true
            },
        },

    ]
}