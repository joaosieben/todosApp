/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {Platform, StyleSheet, Text, View} from 'react-native'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/Router'

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    
    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    )
  }
}

export default App