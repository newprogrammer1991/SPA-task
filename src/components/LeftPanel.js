import React, {Component} from 'react'
import Cards from './Cards/index'
import FilterLeft from './Form/FilterLeft'
import {addToDropTarget} from '../AC'
import {mapToArr} from '../helpers'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DropTarget} from 'react-dnd'
class LeftPanel extends Component {

    render() {
        const {cards, type, connectDropTarget, canDrop, hover} = this.props;
        const dropStyle = {
            border: `${canDrop ? '1px solid black' : ''}`,
            backgroundColor: `${hover && canDrop ? 'green' : ''}`
        };
        return connectDropTarget(
            <div className="container-panel" style={dropStyle}>
                <FilterLeft/>
                <Cards cards={cards} type={type}/>
            </div>
        )
    }
}

LeftPanel.propTypes = {
    //from connect
    cards: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
}


const spec = {
    drop(props, monitor){
        const {card} = monitor.getItem();
        const {addToDropTarget, type} = props;
        addToDropTarget({card, type});
        return {
            dropped: true
        }
    },
    canDrop(props, monitor){
        const sourceObj = monitor.getItem();
        const {type} = props;
        return type !== sourceObj.type
    }
};
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
        hover: monitor.isOver()
    }
};


export default connect(({cards, filter}) => {
    const {checked, searchTerm} = filter;
    cards = mapToArr(cards.items.left);
    const sorted = checked ? cards.sort((a, b) => a.name > b.name) : cards.sort((a, b) => a.name < b.name);
    const filtered = searchTerm ? sorted.filter(item => item.name.includes(searchTerm)) : sorted;
    return {
        cards: filtered
    }
}, {addToDropTarget}, null, {pure: false})(DropTarget(['card'], spec, collect)(LeftPanel))