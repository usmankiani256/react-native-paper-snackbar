import * as React from 'react'
import { View } from 'react-native'
import { Snackbar as PaperSnackbar } from 'react-native-paper'
import styles from './styles'

const Snackbar = (props) => {
  const { snackbar, onDismiss } = props

  if (JSON.stringify(snackbar) === '{}') {
    return null
  }

  let title = snackbar.title || ''
  let action = snackbar.action || null
  let duration = snackbar.duration || 30 * 1000

  return (
    <View style={styles.container}>
      <PaperSnackbar
        visible={true}
        onDismiss={onDismiss}
        action={action}
        duration={duration}
      >
        {title}
      </PaperSnackbar>
    </View>
  )
}

export default Snackbar
