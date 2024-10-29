import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const  ListingsDetails =()=>   {

const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>id que llega {id}</Text>
    </View>
  )
}
export default ListingsDetails 

const styles = StyleSheet.create({})