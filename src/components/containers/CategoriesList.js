import React, { Component, PropTypes } from "react";
import { connect } from "react-redux"
import { loadCategories } from "../../actions/categories";
import { loadWishesByCategory } from "../../actions/wishes";
import { Link } from "react-router"

class CategoriesList extends Component {

    static defaultProps = {
        categories: []
    }

    loadCategories() {
        this.props.loadCategories();
    }

    render() {

        let loadingPanel = this.props.loading ? <div>LOADING...</div> : null;
        
        let categories = this.props.categories.map(item => <li key={item.id}> <Link to={`category/${item.id}`}>{item.name}</Link></li>);

        return (
               <div>
                   <button onClick={() => this.loadCategories()}>
                       LOAD CategoriesList
                    </button>
                    {loadingPanel}
                    <hr />
                    <ul>
                        {categories}
                    </ul>
               </div>
          );
    }
}

export default connect((state, props) => {

    console.log(state);
    const { categories } = state;

    return {
        loading: categories.loading,
        categories: categories.entities
    }
   
}, {
    loadCategories
})(CategoriesList);