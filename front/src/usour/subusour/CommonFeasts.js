import React from 'react'
import Header from '../../page/Header'

export default function CommonFeasts() {
    const info = require('./CommonFeasts.json')
    
    
    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
