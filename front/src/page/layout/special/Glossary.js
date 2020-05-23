import React from 'react'
import SubHeader from '../../SubHeader'

export default function Glossary(props) {
    return (
        <div className={"content-frame " + props.section['class']}>
            <div className="container">
                <SubHeader header={props.section['header-text']}/> 
            </div>
        </div>
    )
}
