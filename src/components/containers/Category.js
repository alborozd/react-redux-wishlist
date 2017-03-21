import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { loadCategory } from "../../actions/categories";

class Category extends Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired,
        loading: PropTypes.bool,
        category: PropTypes.object,
        loadCategory: PropTypes.func,
        error: PropTypes.any
    }

    componentDidMount() {
        this.props.loadCategory(this.props.categoryId)
    }
    

    render() {
        let { loading, category } = this.props;

        let loadingBlock = loading ? <div>LOADING....</div> : null;        
        let categoryBlock = category ? JSON.stringify(category) : null;

        return (
            <div>
                {loadingBlock}
                {categoryBlock}
            </div>
        );
    }
}

export default connect((state, props) => {

    let { categories } = state;

    return {
        loading: categories.loading,
        category: categories.currentCategory,
        error: categories.error
    }

}, {
    loadCategory
})(Category);