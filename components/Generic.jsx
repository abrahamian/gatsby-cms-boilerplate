import React from 'react'
import 'less/markdown-styles.less'

const GenericMarkdown = ({body}) => (
    <div
        className="generic"
        dangerouslySetInnerHTML={{__html: body}}
    />
)

export default GenericMarkdown;