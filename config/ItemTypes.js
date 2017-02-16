module.exports = [
    {
        directory: "articles",
        plural : "articles",
        singular : "article",
        mapDataToFileName: ({slug}) => (`${slug}.md`),
        mapDataToMd : ({title, content}) => ({

            frontmatter: {
                title: title,
            },

            content: content
        })
    }

    ,{
        directory: "events",
        plural : "events",
        singular : "event",
        mapDataToFileName: ({slug}) => (`${slug}.md`),
        mapDataToMd : ({title, date, description}) => ({

            frontmatter: {
                title: title,
                date: date
            },

            content: description
        })
    }
]