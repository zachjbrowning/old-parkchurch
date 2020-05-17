import React, { Component } from 'react'
import {Link, Route, Switch} from 'react-router-dom'

export default class NavItem extends Component {
    render() {
        let item;
        if (this.props.dropdown) {
            item = <div className="dropdown">
                <Switch>
                    <Route path={'/' + this.props.addr} render={() => (
                        <div className='nav-link active'>{this.props.name}</div>
                    )}/>
                    <Route render={() => (
                        <div className='nav-link'>{this.props.name}</div>
                    )}/>
                
                </Switch>
                <ul className="dropdown-menu nav-item">
                    {this.props.dropdown.map((out, index) => <li key={index} className="nav-item">
                        <Switch>
                            <Route path={'/' + this.props.addr + '/' + out[1]} render={() => (
                                <Link className='nav-link active' to={"/" + this.props.addr + "/" + out[1]}>{out[0]}</Link>
                            )}/>
                            <Route render={() => (
                                <Link className='nav-link' to={"/" + this.props.addr + "/" + out[1]}>{out[0]}</Link>
                            )}/>
                        </Switch>

                    </li>)}
                </ul>
            </div>
        } else {
            item = <Switch>
                    <Route path={'/' + this.props.addr} render={() => (
                        <Link to={'/' + this.props.addr} className='nav-link active'>{this.props.name}</Link>
                    )}/>
                    <Route render={() => (
                        <Link to={'/' + this.props.addr} className='nav-link'>{this.props.name}</Link>
                    )}/>
                
                </Switch>
        }
        return (
            <li className="nav-item">
                {item}
            </li>
        )
    }
}

