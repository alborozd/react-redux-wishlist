import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class WishesList extends Component {

    static defaultProps = {
        wishes: []
    }

    render() {

        let loading = this.props.loading ? <div>WISHES LOADING</div> : null;
        let wishes = this.props.wishes.map(item => <div>{item.name}</div>);

        return (
            <div>
                <hr />
                {loading}
                {wishes}
            </div>           
          );
    }
}

export default connect((state, props) => {

    const { wishes } = state;
    console.log("WISHES CONNECT", state);
    return {
        wishes: wishes.entities,
        loading: wishes.loading
    };    
})(WishesList);