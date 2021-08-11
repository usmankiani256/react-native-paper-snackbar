import React, { useEffect } from 'react'
import { showSnackbar, Snackbar } from 'react-native-paper-snackbar'

const snackbar = {
  title: 'I am a Snackbar',
  action: {
    label: 'Action',
    onPress: () => console.log('Action was pressed'),
  },
  duration: 7000,
}

const App = () => {
  useEffect(() => {
    showSnackbar(snackbar)
  }, [])
  return <Snackbar />
}

export default App
