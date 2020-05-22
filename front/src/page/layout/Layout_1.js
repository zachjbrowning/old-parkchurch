import React from 'react'
import Block from '../Block'
import PropTypes from 'prop-types'
import SubHeader from '../SubHeader'

export default function Layout_1(props) {
    return ( 
        <div className="content-frame" style={'style' in props.section ? props.section['style'] : {}}>
            <div className="container">
                {'header' in props.section ? <SubHeader header={props.section['header']}/> : ''}
                <Block block={props.section['first']}/>
            </div>
        </div>
    )
}

Layout_1.propTypes = {
    section: PropTypes.object
}