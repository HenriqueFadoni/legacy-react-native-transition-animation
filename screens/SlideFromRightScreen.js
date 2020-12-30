import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SlideFromRightScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text
      onPress={() => { navigation.goBack() }}
      style={styles.textButton}
    >
      SCREEN
    </Text>
  </View>
)

export default SlideFromRightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c0392b'
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 15
  }
})