import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        let item;
        if (this.props.dropdown) {
            item = <div className="dropdown">
                <div className={'nav-link' + (window.location.pathname.indexOf('/' + this.props.addr) !== -1 ? ' active' : '')}>{this.props.name}</div>
                <ul className="dropdown-menu nav-item">
                    {this.props.dropdown.map((out, index) => <li key={index} className="nav-item">
                        <a className={'nav-link' + (window.location.pathname.indexOf('/' + out[1]) !== -1 ? ' active' : '')} href={"/" + this.props.addr + "/" + out[1]}>
                            {out[0]}
                        </a>

                    </li>)}
                </ul>
            </div>
        } else {
            item = <a href={'/' + this.props.addr} className={'nav-link' + (window.location.pathname.indexOf('/' + this.props.addr) !== -1 ? ' active' : '')}>{this.props.name}</a>
        }
        return (
            <li className="nav-item">
                {item}
            </li>
        )
    }
}

