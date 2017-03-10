import React, {Component} from 'react';
import { connect } from "react-redux"
import CategoriesList from "../components/containers/CategoriesList";
import WishesList from "../components/containers/WishesList";

class Root extends Component {

    render() {
        return (
            <div>
                <CategoriesList />
                <WishesList />
            </div>
        );
    }
}

export default connect()(Root);