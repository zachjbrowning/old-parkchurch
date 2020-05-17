import React, { Component } from 'react'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import {Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from './misc/Loader'
const AsyncWelcome = Loadable({
    loader: () => import('./welcome/WelcomeBase'),
    loading() {
        return <Loader/>
    }
})
const AsyncAlign = Loadable({
    loader: () => import('./align/AlignBase'),
    loading() {
        return <Loader/>
    }
})
const AsyncUsOur = Loadable({
    loader: () => import('./usour/UsOurBase'),
    loading() {
        return <Loader/>
    }
})
const AsyncResources = Loadable({
    loader: () => import('./resources/ResourcesBase'),
    loading() {
        return <Loader/>
    }
})

export default class Base extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <main>
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
