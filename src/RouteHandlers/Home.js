import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../store";
import  { Link } from "react-router";
import CategoriesList from "../components/containers/CategoriesList";


class Home extends Component {

    render() {
        return (
            <div>
                <CategoriesList />   
            </div>
        );
    }
}

export default Home;