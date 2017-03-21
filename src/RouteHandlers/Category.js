import React, { Component } from 'react';
import CategoryContainer from "../components/containers/Category";

class Category extends Component {

    render() {
        return (
            <div>
                <CategoryContainer categoryId = {this.props.params.id}/>
            </div>
        );
    }
}

export default Category;