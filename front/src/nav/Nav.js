import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import NavLogo from './NavLogo'
import NavItem from './NavItem'

export default class Nav extends Component {

    

    componentDidMount() {
        document.addEventListener('scroll', this.shadowScroll)
    }
    
    shadowScroll() {
        if (document.documentElement.scrollTop !== 0) {
            document.getElementById('navbar').classList.add('nav-fade')
        } else {
            document.getElementById('navbar').classList.remove('nav-fade')
        }
    }
    render() {
        return (
            <header>
                <nav id="navbar" className="fixed-top navbar nav-holder navbar-expand-sm navbar-light">
                    <Link to="/welcome" className="mr-auto navbar-brand">
                        <div className="nav-logo align-bottom d-inline-block">
                            <NavLogo/>
                        </div>{' '}
                        <span className="nav-brand-title">Park Church</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navo" aria-controls="navo" aria-expanded="false" aria-label="Toggle navigation">
                        <svg width='30' height='30' viewBox='0 0 30 30'><path className="burger-tint" strokeMiterlimit='10' strokeLinecap='round' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22'/></svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navo">
                        <ul className="nav navbar-nav ml-auto">
                            <NavItem name="Welcome" addr="welcome"/>
                            <NavItem name="Align" addr="align" dropdown={[['Sunday Worship','sunday-worship'],['Weekday Practice','weekday-practice'],['Formation','formation']]}/>
                            <NavItem name="Us-Our" addr="us-our" dropdown={[['Common Tables', 'common-tables'],['Common Rule', 'common-rule'],['Common Feasts', 'common-feasts'],['Common Good','common-good'],['Creative Commons','creative-commons']]}/>
                            <NavItem name="Resources" addr="resources" dropdown={[['Story Web', 'story-web']]}/>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
