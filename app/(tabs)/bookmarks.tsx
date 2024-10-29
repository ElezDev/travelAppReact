
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const bookmarks = () => {
  return (
   <View style={styles.container}>
    <Text>
        bOOKS
    </Text>
   </View>
  )
}

export default bookmarks

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})