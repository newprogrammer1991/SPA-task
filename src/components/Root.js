import React, {Component} from 'react'
import {Provider} from 'react-redux'
import App from './App'
import {DragDropContextProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import store from '../store'
class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <App/>
                </DragDropContextProvider>
            </Provider>
        )
    }
}

export default Root
