import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './siteSettings'
import villa from './villa'
import review from './review'
import globalVariables from './globalVariables'

export default createSchema({
    name: 'mySchema',
    types: schemaTypes.concat([
        siteSettings,
        villa,
        review,
        globalVariables
    ])
})
