import React, {Component} from 'react'
import Card from '../Card'
import PropTypes from 'prop-types'
import './style.less'
class Cards extends Component {

    render() {
        console.log('cards');
        const {cards, type} = this.props;
        const listCards = cards.map((card, index) => <li key={card.id}><Card type={type} card={card}/></li>)
        return (
            <ul className="list-items">{listCards}</ul>
        )
    }
}
Cards.propTypes = {
    //from props
    cards: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
}

export default Cards