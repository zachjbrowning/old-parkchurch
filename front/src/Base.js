import React, { Component } from 'react'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import {Route} from 'react-router-dom'
import Loadable from 'react-loadable'

const AsyncWelcome = Loadable({
    loader: () => import('./welcome/WelcomeBase'),
    loading() {
        return <div className="filler">Loading...</div>
    }
})
const AsyncAlign = Loadable({
    loader: () => import('./align/AlignBase'),
    loading() {
        return <div className="filler">Loading...</div>
    }
})
const AsyncUsOur = Loadable({
    loader: () => import('./usour/UsOurBase'),
    loading() {
        return <div className="filler">Loading...</div>
    }
})
const AsyncResources = Loadable({
    loader: () => import('./resources/ResourcesBase'),
    loading() {
        return <div className="filler">Loading...</div>
    }
})

export default class Base extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <main className="main-frame">
                    <Route path='/welcome' component={AsyncWelcome}/>
                    <Route path='/align' component={AsyncAlign}/>
                    <Route path='/us-our' component={AsyncUsOur}/>
                    <Route path='/resources' component={AsyncResources}/>
                </main>

                <Footer/>
            </div>
        )
    }
}
