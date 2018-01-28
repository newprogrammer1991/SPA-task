import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkedChange, searchItems} from '../../../AC/index'
import PropTypes from 'prop-types'
import './style.less'
class FilterLeft extends Component {

    handleChange = (event) => {
        const {checkedChange} = this.props;
        checkedChange(event.target.checked);
    }
    handleSearch = (event) => {
        const {searchItems} = this.props;
        searchItems(event.target.value)
    }

    render() {
        const {checked, searchTerm} = this.props;
        console.log('searchTerm', searchTerm);
        return (
            <div className="filter-left">
                <div className="item">
                    <input className="sort" type='checkbox' onChange={this.handleChange} id="sort"
                           checked={checked}/>
                    <label htmlFor="sort"> Sort by {checked ? 'z-A' : 'A-z'}</label>
                </div>
                <div className="item">
                    <input className="search" placeholder="Please enter something" type='text' value={searchTerm}
                           onChange={this.handleSearch}/>
                </div>
            </div>)
    }
}

FilterLeft.propTypes = {
    //from connect
    checked: PropTypes.bool.isRequired,
    searchItem: PropTypes.string,
    checkedChange: PropTypes.func.isRequired,
    searchItems: PropTypes.func.isRequired
};

export default connect(state => ({
            checked: state.filter.checked,
            searchTerm: state.filter.searchTerm
        }
    ),
    {checkedChange, searchItems})(FilterLeft)
