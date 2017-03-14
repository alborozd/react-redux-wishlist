import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../store";
import  { Link } from "react-router";

class Home extends Component {

    render() {
        return (
            <div>
                I'm Admin!

                <Link to="home">Go to Home</Link>
            </div>
        );
    }
}

export default Home;