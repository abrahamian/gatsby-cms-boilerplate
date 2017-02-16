const pagesDirPrefix = "pages/"
const ItemTypes = require('./config/ItemTypes.js');
const _ = require('underscore');

module.exports = (dato, root, i18n) => {

    // TODO: make an array of where data.itemTypes intersects with locally defined ItemTypes.

    ItemTypes.forEach( ({ directory, mapDataToFileName, mapDataToMd }) => {

        root.directory( (pagesDirPrefix + directory), dir => {
            dato[directory].forEach( item => { dir.createPost( mapDataToFileName(item), 'yaml', mapDataToMd(item)) } )
        })

    })

};