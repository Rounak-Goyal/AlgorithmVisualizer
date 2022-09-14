import React, {Component} from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import Cards from "./cards";
import Footer from "./footer";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Greet/>
                <Cards/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;