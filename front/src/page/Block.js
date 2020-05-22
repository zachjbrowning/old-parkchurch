import React from 'react'
import SubHeader from './SubHeader'
import PropTypes from 'prop-types'

export default function Block(props) {
    let stuff;
    if ('text' in props.block) {
        stuff = (props.block['text'].map((text, index) => (
            <div key={index}>
                <br/>
                {text}
            </div>
        )))
    } else if ('img' in props.block) {
        stuff = <div className="img-holder">
                <img className="img" src={'../../public/' + props.block['img'][0]}/>
                <div className="img-text">
                    {props.block['img'][1]}
                </div>
            </div>
    }
    
    
    
    return (
        <div className="block" >
            {'header' in props.block ? <SubHeader header={props.block['header']}/> : ''}
            {stuff}
        </div>
    )
}


Block.propTypes = {
    block: PropTypes.object
}