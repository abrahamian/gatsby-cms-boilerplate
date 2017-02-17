module.exports = {
    "article" : {
        directory: "articles",
        mapDataToFileName: ({slug}) => (`${slug}.md`),
        mapDataToMd : ({title, content}) => ({

            frontmatter: {
                title: title,
            },

            content: content
        })
    },

    "event": {
        directory: "events",
        mapDataToFileName: ({slug}) => (`${slug}.md`),
        mapDataToMd : ({title, date, description}) => ({

            frontmatter: {
                title: title,
                date: date
            },

            content: description
        })
    }
}