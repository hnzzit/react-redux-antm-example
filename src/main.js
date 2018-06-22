
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './menu'
import { view as userCenter } from './userCenter'
import { view as buyTicket } from './buyTicket'
import { view as register } from './register'
import { view as order } from './order'
import { view as site } from './site'
import { view as linkman, passenger } from './linkman'
import { view as standbus } from './standbus'
import { view as booking } from './booking'
import { view as FamiliarQuestion } from './FamiliarQuestion'
import { view as payment } from './payment'

const main = () => (
    <div style={{ backgroundColor: 'rgb(245, 245, 249)', textAlign: 'center' }}>
        <div>
            <Switch>
                <Route path='/userCenter' component={userCenter}></Route>
                <Route path='/buyTicket' component={buyTicket}></Route>
                <Route path='/register' component={register}></Route>
                <Route path='/order' component={order}></Route>
                <Route path='/site' component={site}></Route>
                <Route path='/linkMan' component={linkman}></Route>
                <Route path='/standbus' component={standbus}></Route>
                <Route path='/booking' component={booking}></Route>
                <Route path='/passenger' component={passenger}></Route>
                <Route path='/FamiliarQuestion' component={FamiliarQuestion}></Route>
                <Route path='/payment' component={payment}></Route>
            </Switch>
        </div>
        <Menu />
    </div>
)

export default main;