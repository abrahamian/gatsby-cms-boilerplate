const pagesDirPrefix = "pages/"
const ItemTypes = require('./config/ItemTypes.js');
const _ = require('underscore');

module.exports = (dato, root, i18n) => {

	var itemTypes = dato.itemTypes.reduce(
		(memo, {name, fields}) => (
			_(memo).extend(
				{
					[name] : {
						"fields" : fields.reduce(
							(m, {label, fieldType}) => _(m).extend({ [label]: { 'type' : fieldType} }), {}
						)
					}
				}
			)
		),
		{}
	);

	root.directory('dato', dir => {
		dir.createDataFile(
			'itemTypes' + '.json',
			'json',
			itemTypes
		)
	})

    _(ItemTypes).keys().forEach( key => {
		let { directory, mapDataToFileName, mapDataToMd } = ItemTypes[key];

        root.directory( (pagesDirPrefix + directory), dir => {
            dato[directory].forEach( item => { dir.createPost( mapDataToFileName(item), 'yaml', mapDataToMd(item)) } )
        })

    })

};