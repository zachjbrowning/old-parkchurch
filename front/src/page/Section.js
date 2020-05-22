import React from 'react'

///CHANGE TO LAZY LOAD
import Layout_1 from './layout/Layout_1';
import Layout_2 from './layout/Layout_2';

export default function Section(props) {
    var styles = {
        "color": props.section['color'],
        "backgroundColor": props.section['background-color']
    };

    
    if (props.section['layout'] == 1) {
        return <Layout_1 style={styles} section={props.section}/>
    } else if (props.section['layout'] == 2) {
        return <Layout_2 style={styles} section={props.section}/>
    } else {
        return <div className="content-frame">BRUHHH</div>
    }
    
}
