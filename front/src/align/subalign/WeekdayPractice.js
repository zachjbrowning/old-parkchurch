import React from 'react'
import Header from '../../page/Header'

export default function WeekdayPractice() {
    const info = require('./WeekdayPractice.json')

    return (
        <div className="content container">
            <Header title={info['title']}/>
        </div>
    )
}
