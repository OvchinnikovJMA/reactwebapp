import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
 
import SideBar from './SideBar/SideBar';
import Buyers from './Buyers/Buyers';
import Terminals from './Terminals/Terminals';
import AuthAndSideBar from './Auth/Auth';

const Main = (props) => {
    const data = [
        {ID: 123, name: 'Василий', AverageCheck: 587.23, Purchases: 39, TotalProfit: 15243},
        {ID: 124, name: 'Екатерина', AverageCheck: 645.29, Purchases: 60, TotalProfit: 35123},
        {ID: 125, name: 'Виктор', AverageCheck: 247.27, Purchases: 56, TotalProfit: 14253},
        {ID: 129, name: 'Мария', AverageCheck: 487.23, Purchases: 45, TotalProfit: 16354},
        {ID: 269, name: 'Зурап', AverageCheck: 1057.77, Purchases: 132, TotalProfit: 83254},
        {ID: 110, name: 'Юлия', AverageCheck: 237.64, Purchases: 20, TotalProfit: 4523},
        {ID: 380, name: 'Артемий', AverageCheck: 787.26, Purchases: 38, TotalProfit: 20368},
        {ID: 12, name: 'Вася', AverageCheck: 538.13, Purchases: 45, TotalProfit: 19863},
        {ID: 34, name: 'Василий', AverageCheck: 367.38, Purchases: 35, TotalProfit: 10230},
        {ID: 127, name: 'Станислав', AverageCheck: 987.00, Purchases: 28, TotalProfit: 17289},
        {ID: 56, name: 'Ольга', AverageCheck: 1297.13, Purchases: 96, TotalProfit: 78369},
        {ID: 57, name: 'Виктор', AverageCheck: 2357.23, Purchases: 186, TotalProfit: 150124},
        {ID: 58, name: 'Владимир', AverageCheck: 687.59, Purchases: 57, TotalProfit: 38962},
        {ID: 19, name: 'Ольга', AverageCheck: 1257.23, Purchases: 144, TotalProfit: 134265},
        {ID: 10, name: 'Ольга', AverageCheck: 457.20, Purchases: 9, TotalProfit: 3582},
    ];
    const NoMatchPage = () => {return (<div class="Error"><h3 >404 - Not found</h3></div>);};
    const [login, SetLogin] = useState('');
    const handleLogin = (event) => {
        SetLogin(event.target.value);
    } 
    const [Auth, Authenticate] = useState(false);
    const handleAuth = (a) => {
        Authenticate(a);
        localStorage.setItem("1", login);
    } 
    return (
        <React.Fragment>
            {(Auth || localStorage.length !== 0) && <SideBar login={localStorage.getItem("1")} handleAuth={handleAuth}/>}
            <div className="Main">
                <Switch>
                    <Route exact path="/" render={ () => 
                        (localStorage.length === 0 ? <AuthAndSideBar login={login} handleLogin={handleLogin} handleAuth={handleAuth}/> : <Redirect to="/buyers"/>)}/>
                    <Route path="/buyers" render={() => <Buyers NoMatchPage={NoMatchPage} data={data}/>}/>
                    <Route path="/terminals" component={Terminals}/>
                    <Route component={NoMatchPage}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}
export default Main