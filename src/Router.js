import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import todosList from './components/todosList/todosList'

const appRouter = () => (
  <Router>
    <Stack key='root' hideNavBar='true'>
      <Scene initial key='home' component={ todosList } />
    </Stack>
  </Router>
)

export default appRouter