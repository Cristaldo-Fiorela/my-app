import * as React from 'react'
import { Provider  as ProviderRedux } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { configureStore as createStore } from '@reduxjs/toolkit'

import mainReducer from './src/redux/reducers/mainReducer'
import MainContainer from './src/navigation/mainContainer'


  const reduxStore = createStore({reducer:mainReducer})

function App() {

  return (
    <ProviderRedux store={reduxStore}>
      <PaperProvider>
          <MainContainer>
          </MainContainer>
      </PaperProvider>
    </ProviderRedux>
  )
}

export default App
