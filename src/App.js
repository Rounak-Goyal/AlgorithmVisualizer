import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Sort from "./sortComponents/sort";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";



class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
