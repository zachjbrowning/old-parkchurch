import React from 'react'
import Base from './Base'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '../src/css/general.css'

ReactDom.render(<BrowserRouter><Base/></BrowserRouter>, document.getElementById('root'));
