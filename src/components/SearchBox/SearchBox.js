import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        value: ''
    }


timeout = null;

doSearch = (e) => {
    const {callback} = this.props;

    this.setState({value: e.target.value})
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
        callback(this.state.value);
    }, 700)
}

render() {
    const { value } = this.state;

    return (
        <div className="search">
        <input 
            className="input"
            type="text" 
            placeholder="Wyszukaj film"
            onChange={this.doSearch}
            value ={value}
        />
    </div>
    )
}
}

SearchBox.propTypes = {
    callback: PropTypes.func
}

export default SearchBox;