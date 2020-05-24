import React from 'react'
import Header from '../../page/Header'

export default function StoryWeb() {
    const info = require('./StoryWeb.json')
    
    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
