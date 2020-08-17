import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './siteSettings'
import villa from './villa'
import mainImage from './mainImage'
import imageArray from './imageArray'
import review from './review'
import globalVariables from './globalVariables'

export default createSchema({
    name: 'mySchema',
    types: schemaTypes.concat([
        siteSettings,
        villa,
        mainImage,
        imageArray,
        review,
        globalVariables
    ])
})
