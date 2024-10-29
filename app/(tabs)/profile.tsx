import colors from '@/constants/colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
   <View style={styles.container}>
    <Text>
    prfile
    </Text>
   </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.prymaryColor
  },

})