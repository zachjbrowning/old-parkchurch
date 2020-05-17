import React, { Component } from 'react'
import Loadable from 'react-loadable'
import {Route, Switch} from 'react-router-dom'
import Loader from '../misc/Loader'

const AsyncTables = Loadable({
    loader: () => import('./subusour/CommonTables'),
    loading() {
        return <Loader/>
    }
})
const AsyncRule = Loadable({
    loader: () => import('./subusour/CommonRule'),
    loading() {
        return <Loader/>
    }
})
const AsyncFeasts = Loadable({
    loader: () => import('./subusour/CommonFeasts'),
    loading() {
        return <Loader/>
    }
})
const AsyncGood = Loadable({
    loader: () => import('./subusour/CommonGood'),
    loading() {
        return <Loader/>
    }
})
const AsnycCommons = Loadable({
    loader: () => import('./subusour/CreativeCommons'),
    loading() {
        return <Loader/>
    }
})

export default class UsOurBase extends Component {
    render() {
        return (
            <div className="filler">
                <Switch>
                    <Route path={'/us-our/common-tables'} component={AsyncTables}/>
                    <Route path={'/us-our/common-rule'} component={AsyncRule}/>
                    <Route path={'/us-our/common-feasts'} component={AsyncFeasts}/>
                    <Route path={'/us-our/common-good'} component={AsyncGood}/>
                    <Route path={'/us-our/creative-commons'} component={AsnycCommons}/>
                </Switch>
            </div>
        )
    }
}
