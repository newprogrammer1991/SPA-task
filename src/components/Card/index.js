import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {DragSource} from 'react-dnd'
import {connect} from 'react-redux'
import './style.less'
import {deleteFromDragSource, setActiveCard, showInfo} from '../../AC/index'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        const {setActiveCard, showInfo, card} = this.props;
        showInfo(card);
        setActiveCard(card.id);
    };

    render() {
        const {card, connectDragSource, activeCard} = this.props;
        return connectDragSource(
            <div className={card.id == activeCard ? 'card active' : 'card'} onClick={this.handleClick}>
                <div className="name">{card.name}</div>
                <div className="flags">
                    {card.flags.map((flag, index) => <span className="flag" key={index}><img
                        src={`/src/img/${flag}.svg`}/></span>)}
                </div>
            </div>
        )
    }
}

const spec = {
    beginDrag(props){
        return {
            card: props.card,
            type: props.type
        }
    },
    endDrag(props, monitor){
        const {deleteFromDragSource,} = props;
        const item = monitor.getItem();
        monitor.getDropResult() && deleteFromDragSource(item);
    }
};
const collect = (connect) => ({
    connectDragSource: connect.dragSource()
});

Card.propTypes = {
    //from props
    card: PropTypes.object.isRequired,
    //from connect
    deleteFromDragSource: PropTypes.func.isRequired,
    setActiveCard: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired
};

export default connect(state => ({activeCard: state.cards.activeCard}), {
    deleteFromDragSource,
    setActiveCard,
    showInfo
})(DragSource('card', spec, collect)(Card))

