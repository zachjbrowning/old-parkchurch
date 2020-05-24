import React from 'react'
import Page from '../../page/Page'

export default function JsonExplain() {
    const info = require('./Documentation.json')
    
    
    return (
        <Page info={info}/>
    )
}
