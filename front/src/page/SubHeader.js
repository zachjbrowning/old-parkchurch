import React from 'react'

export default function Header(props) {
    return (
        <div className="content-sub-header"  style={'style' in props.header ? props.header['style'] : {}}>
            {props.header['text']}
        </div>
    )
}