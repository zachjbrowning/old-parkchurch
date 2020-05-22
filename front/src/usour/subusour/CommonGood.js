import React from 'react'
import Header from '../../page/Header'

export default function CommonGood() {
    const info = require('./CommonGood.json')
    
    
    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
