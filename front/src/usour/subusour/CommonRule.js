import React from 'react'
import Header from '../../page/Header'

export default function CommonRule() {
    const info = require('./CommonRule.json')
    
    
    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
