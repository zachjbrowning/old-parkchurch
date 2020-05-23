import React from 'react'
import Block from '../Block'
import PropTypes from 'prop-types'
import SubHeader from '../SubHeader'

export default function Layout_1(props) {
    return ( 
        <div className={"content-frame" + ('class ' in props.section ? props.section['class'] : '')} style={'style' in props.section ? props.section['style'] : {}}>
            <div className="container" style={'container' in props.section ? props.section['container'] : {}}>
                {'header' in props.section ? <SubHeader header={props.section['header']}/> : ''}
                {'first' in props.section ? <Block block={props.section['first']}/> : ''}
            </div>
        </div>
    )
}

Layout_1.propTypes = {
    section: PropTypes.object
}