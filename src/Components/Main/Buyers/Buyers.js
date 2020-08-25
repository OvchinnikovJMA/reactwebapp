import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AllBuyers from './AllBuyers'
import Buyer from './Buyer'
const Buyers = (props) => {
    return(
        <Switch>
            <Route exact path='/buyers' render={() => <AllBuyers data={props.data}/>}/>
            <Route path='/buyers/:ID' component={Buyer}/>
            <Route component={props.NoMatchPage}/>
        </Switch>
    )
}

export default Buyers