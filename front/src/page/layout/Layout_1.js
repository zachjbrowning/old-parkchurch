import React from 'react'
import Block from '../Block'

export default function Layout_1(props) {
    return ( 
        <div className="content-frame" style={props.style}>
            <div className="container">
                <Block block={props.section['first']}/>
            </div>
        </div>
    )
}
