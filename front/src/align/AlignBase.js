import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {Route, Switch} from 'react-router-dom'
import Loader from '../misc/Loader'

const AsyncSW = Loadable({
    loader: () => import('./subalign/SundayWorship'),
    loading() {
        return <Loader/>
    }
})
const AsyncWP = Loadable({
    loader: () => import('./subalign/WeekdayPractice'),
    loading() {
        return <Loader/>
    }
})
const AsyncFormation = Loadable({
    loader: () => import('./subalign/Formation'),
    loading() {
        return <Loader/>
    }
})

export default class AlignBase extends Component {
    render() {
        return (
            <div className="filler">
                <Switch>
                    <Route path='/align/sunday-worship' component={AsyncSW}/>
                    <Route path='/align/weekday-practice' component={AsyncWP}/>
                    <Route path='/align/formation' component={AsyncFormation}/>
                </Switch>
            </div>
        )
    }
}
