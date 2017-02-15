import React from 'react'

const Generic = ({body}) => (
    <div
        className="generic"
        dangerouslySetInnerHTML={{__html: body}}
    />
)

export default Generic;