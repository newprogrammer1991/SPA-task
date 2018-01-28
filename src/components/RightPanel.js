import React, {Component} from 'react'
import FilterRight from './Form/FilterRight'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addToDropTarget} from '../AC'
import {mapToArr} from '../helpers'
import Cards from './Cards'
import {DropTarget} from 'react-dnd'
class RightPanel extends Component {
    render() {
        const {cards, connectDropTarget, hover, canDrop, type} = this.props;
        const dropStyle = {
            border: `${canDrop ? '1px solid black' : ''}`,
            backgroundColor: `${hover && canDrop ? 'green' : ''}`
        };
        return connectDropTarget(
            <div className="container-panel" style={dropStyle}>
                <FilterRight/>
                <Cards cards={cards} type={type}></Cards>
            </div>
        )
    }
}

RightPanel.propTypes = {
    //from connect
    cards: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

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
    const items = mapToArr(cards.items.right);
    const isFilter = filter.isCheckedSun.checked || filter.isCheckedHeart.checked || filter.isCheckedFlower.checked || filter.isCheckedFlash.checked;
    const sun = filter.isCheckedSun.value;
    const heart = filter.isCheckedHeart.value;
    const flash = filter.isCheckedFlash.value;
    const flower = filter.isCheckedFlower.value;
    const filtered = isFilter ?
        items.filter(item => {
            return (!filter.isCheckedSun.checked || item.flags.includes(sun)) &&
                (!filter.isCheckedHeart.checked || item.flags.includes(heart)) &&
                (!filter.isCheckedFlower.checked || item.flags.includes(flower)) &&
                (!filter.isCheckedFlash.checked || item.flags.includes(flash))
        })
        : items;
    return {
        cards: filtered
    }
}, {addToDropTarget})(DropTarget(['card'], spec, collect)(RightPanel))