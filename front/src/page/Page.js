import React from 'react'
import Header from './Header'
import Section from './Section'
import PropTypes from 'prop-types'


export default function Page(props) {
    var sec;
    if ('sections' in props.info) {
        sec = props.info['sections'].map((item, index) => (
            <Section key={index} section={item}/>
        ))
    }
    
    return (
        <div className="content" style={'style' in props.info ? props.info['style'] : {}}>
            <Header title={props.info['title']}/>
            {sec}
        </div>
    )
}

Page.propTypes = {
    info: PropTypes.object
}