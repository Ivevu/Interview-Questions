import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import asyncLoad from './Bundle'


const Loading = function () {
    return <div>Loading...</div>
};
const Home = asyncLoad(() => import('pages/Home/Home'), <Loading />);
const Page1 = asyncLoad(() => import('pages/Page1/Page1'), <Loading />);
const Counter = asyncLoad(() => import('pages/Counter/Counter'), <Loading />);
const UserInfo = asyncLoad(() => import('pages/UserInfo/UserInfo'), <Loading />);

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/counter" component={Counter} />
                <Route path="/userinfo" component={UserInfo} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;