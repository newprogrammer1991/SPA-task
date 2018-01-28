import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './style.less'
class Info extends Component {

    getBody = () => {
        const {isShow, card} = this.props;
        if (!isShow) return false;
        return (
            <div className="info">
                <table className="info_table">
                    <caption className="info_table-title">Info</caption>
                    <tr className="row">
                        <td className="cell">Name:</td>
                        <td>{card.name}</td>
                    </tr>
                    <tr className="row">
                        <td className="cell">Flags:</td>
                        <td>{card.flags.map(flag => <img className="info_table-item"
                                                         src={`/src/img/${flag}.svg`}/>)}</td>
                    </tr>
                </table>
            </div>
        )
    };

    render() {
        return this.getBody()
    };
}
;

Info.propTypes = {
    //from connect
    card: PropTypes.object.isRequired,
    isShow: PropTypes.bool.isRequired
};

export default connect(state => ({
    card: state.cards.showInfoItem,
    isShow: state.cards.isShow
}))(Info)
