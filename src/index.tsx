import * as React from 'react'
import PaperSnackbar from './Components/Snackbar'

var emitter = require('tiny-emitter/instance')

const Snackbar = () => {
  const [snackbar, setSnackbar] = React.useState({})

  React.useEffect(() => {
    emitter.on('Show_Snackbar', function (payload: Object) {
      setSnackbar(payload)
    })
  }, [])

  function onDismiss() {
    setSnackbar({})
  }
  return <PaperSnackbar snackbar={snackbar} onDismiss={onDismiss} />
}

const showSnackbar = (payload: Object) => {
  emitter.emit('Show_Snackbar', payload)
}

export { Snackbar, showSnackbar }
