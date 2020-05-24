import React from 'react'
import Header from '../../page/Header'

export default function CommonTables() {
    const info = require('./CommonTables.json')
    
    
    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
