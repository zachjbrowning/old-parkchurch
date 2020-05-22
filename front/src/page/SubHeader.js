import React from 'react'

export default function Header(props) {
    return (
        <div className="content-sub-header" style={{'color':props.header['color']}}>
            {props.header['text']}
        </div>
    )
}