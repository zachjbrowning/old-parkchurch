import React from 'react'
import SubHeader from '../SubHeader'
import Block from '../Block'

export default function Layout_2(props) {
    return (
        <div className="content-frame" style={props.style}>
            <div className="container">
                {'header' in props.section ? <SubHeader header={props.section['header']}/> : ''}
                <div className="block-2">
                    <Block block={props.section['first']}/>
                    <Block block={props.section['second']}/>
                </div>
            </div>
        </div>
    )
}
