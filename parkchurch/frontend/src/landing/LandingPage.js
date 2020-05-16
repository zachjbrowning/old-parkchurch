import React, { Component } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <main className="filler">
                    BLAH BLAH BLAH FILLER CONTENT
                </main>
                <Footer/>
            </div>
        )
    }
}
