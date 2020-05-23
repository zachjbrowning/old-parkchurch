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
const AsyncJSON = Loadable({
    loader: () => import('./subresources/JsonExplain'),
    loading() {
        return <Loader/>
    }
})
const AsyncCSS = Loadable({
    loader: () => import('./subresources/CssExplain'),
    loading() {
        return <Loader/>
    }
})
const AsyncDOC = Loadable({
    loader: () => import('./subresources/Documentation'),
    loading() {
        return <Loader/>
    }
})

export default class ResourcesBase extends Component {
    render() {
        return (
            <div className="second-base">
                <Switch>
                    <Route path='/resources/story-web' component={AsyncSW}/>
                    <Route path='/resources/json-explain' component={AsyncJSON}/>
                    <Route path='/resources/css-explain' component={AsyncCSS}/>
                    <Route path='/resources/documentation' component={AsyncDOC}/>
                    
                </Switch>
            </div>
        )
    }
}
