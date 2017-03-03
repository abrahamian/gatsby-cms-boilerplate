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
        mapDataToMd : ({title, date, description, image}) => {
            if(image){console.log(image.file.url());}

            var md = {
                frontmatter: {
                    title: title,
                    date: date
                },

                content: description
            }

            if(image){ md['frontmatter']['imageUrl'] = image.file.url(); }

            return md;

        }
    }

}