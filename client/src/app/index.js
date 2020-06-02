import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar, Footer } from '../components';
import { MoviesList } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/custom.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/movies" exact component={MoviesList} />
                {/* <Route path="/series" exact component={SeriesList} /> */}
                {/* <Route path="/movies/create" exact component={MovieCreate} /> */}
                {/* <Route path="/series/create" exact component={SeriesCreate} /> */}
                {/* <Route path="/movie/edit/:id" exact component={MovieUpdate} /> */}
                {/* <Route path="/series/edit/:id" exact component={SeriesUpdate} /> */}
                {/* <Route path="/user/register" exact component={UserRegister} /> */}
                {/* <Route path="/user/login" exact component={UserLogin} /> */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
