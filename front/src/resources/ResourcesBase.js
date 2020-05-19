import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {Route, Switch} from 'react-router-dom'
import Loader from '../misc/Loader'

const AsyncSW = Loadable({
    loader: () => import('./subresources/StoryWeb'),
    loading() {
        return <Loader/>
    }
})


export default class ResourcesBase extends Component {
    render() {
        return (
            <div className="filler">
                <Switch>
                    <Route path='/resources/story-web' component={AsyncSW}/>
                </Switch>
            </div>
        )
    }
}