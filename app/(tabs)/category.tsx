import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const category = () => {
  return (
   <View style={styles.container}>
    <Text>
        category
    </Text>
   </View>
  )
}

export default category

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})