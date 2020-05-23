import React from 'react'
import SubHeader from './SubHeader'
import PropTypes from 'prop-types'

export default function Block(props) {
    let stuff;
    if ('text' in props.block) {
        stuff = (props.block['text'].map((text, index) => {
            if (text[0] !== '<') {
                return text
            } else if (text[0] === '<' && text[2] === '>') {
                if (text[1] === 'b') {
                    return <strong key={index}>{text.slice(3)}</strong>
                } else if (text[1] === 'i') {
                    return <i key={index}>{text.slice(3)}</i>
                } else if(text[1] === 'z') {
                    return <strong key={index}><i>{text.slice(3)}</i></strong>
                } 
            } 
            return text
        }))
    } else if ('img' in props.block) {
        stuff = <div className="img-holder">
                <img className="img" src={'../../public/' + props.block['img'][0]}/>
                {props.block['img'].length > 1 ? <div className="img-text" >{props.block['img'][1]}</div> : ''}
            </div>
    }
    
    let head;
    if ('header-text' in props.block) {
        head = <SubHeader header={props.block['header-text']} style={props.block['header-style']}/>
    }
    
    return (
        <div className={"block " + ('class' in props.block ? props.block['class'] : '')} style={'style' in props.block ? props.block['style'] : {}}>
            {head}{stuff}
        </div>
    )
}


Block.propTypes = {
    block: PropTypes.object
}


