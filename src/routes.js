import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

registerServiceWorker();

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('./routes/Home'),
    loading: Loading,
});

const Movie = Loadable({
    loader: () => import('./routes/Movie'),
    loading: Loading,
});

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
        </Switch>
    </Router>
)

