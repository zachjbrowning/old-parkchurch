import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavItem extends Component {
    render() {
        let item;
        if (this.props.dropdown) {
            item = <div className="dropdown">
                <div className={'nav-link' + (window.location.pathname.indexOf('/' + this.props.addr) !== -1 ? ' active' : '')}>{this.props.name}</div>
                <ul className="dropdown-menu nav-item">
                    {this.props.dropdown.map((out, index) => <li key={index} className="nav-item">
                        <Link className={'nav-link' + (window.location.pathname.indexOf('/' + out[1]) !== -1 ? ' active' : '')} to={"/" + this.props.addr + "/" + out[1]}>
                            {out[0]}
                        </Link>

                    </li>)}
                </ul>
            </div>
        } else {
            item = <Link to={'/' + this.props.addr} className={'nav-link' + (window.location.pathname.indexOf('/' + this.props.addr) !== -1 ? ' active' : '')}>{this.props.name}</Link>
        }
        return (
            <li className="nav-item">
                {item}
            </li>
        )
    }
}

