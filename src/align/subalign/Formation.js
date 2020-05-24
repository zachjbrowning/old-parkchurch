import React from 'react'
import Header from '../../page/Header'

export default function Formation() {
    const info = require('./Formation.json')

    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
