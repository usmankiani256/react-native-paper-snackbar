import React, { useEffect } from 'react'
import PaperSnackbarModule, { Counter } from 'react-native-paper-snackbar'

const App = () => {
  useEffect(() => {
    console.log(PaperSnackbarModule)
  })

  return <Counter />
}

export default App
