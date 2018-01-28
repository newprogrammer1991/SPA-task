import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Info from './Info'
import Loader from "./Loader/index";
import {loadAllItems} from '../AC'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import {TYPES} from '../constants'
import '../less/style.less'
class App extends Component {

    componentDidMount() {
        const {loadAllItems, loaded, sortedByBackwards} = this.props;
        loadAllItems();
    }

    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }
    getBody = () => {
        const {loading, loaded} = this.props;
        if (loading && !loaded) return <Loader/>;
        return (<div className="main">
            <LeftPanel type={TYPES.left}/>
            <Info/>
            <RightPanel type={TYPES.right}/>
        </div>)
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired
};

export default connect(state => ({
    loading: state.cards.loading,
    loaded: state.cards.loaded
}), {loadAllItems})(App)