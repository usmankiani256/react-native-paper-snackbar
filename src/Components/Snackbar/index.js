import * as React from 'react'
import { View } from 'react-native'
import { Button, Snackbar as PaperSnackbar } from 'react-native-paper'
import styles from './styles'

const Snackbar = () => {
  const [visible, setVisible] = React.useState(true)

  const onToggleSnackbar = () => setVisible(!visible)

  const onDismissSnackbar = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackbar}>{visible ? 'Hide' : 'Show'}</Button>
      <PaperSnackbar
        visible={visible}
        onDismiss={onDismissSnackbar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </PaperSnackbar>
    </View>
  )
}

export default Snackbar
