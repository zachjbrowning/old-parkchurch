import React from 'react'
import Page from '../../page/Page'

export default function JsonExplain() {
    const info = require('./JsonExplain.json')
    
    
    return (
        <Page info={info}/>
    )
}
