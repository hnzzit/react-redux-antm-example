import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom";

import Main from './main'

const router = () => (
    <Router>
        <Route path='/' component={Main}>

        </Route>
    </Router>
)


export default router;