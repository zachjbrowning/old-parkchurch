import React from 'react'
import Header from '../../page/Header'

export default function SundayWorship() {
    const info = require('./SundayWorship.json')

    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
