import React from 'react'
import Page from '../../page/Page'

export default function JsonExplain() {
    const info = require('./CssExplain.json')
    
    
    return (
        <Page info={info}/>
    )
}
