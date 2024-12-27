import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function Pagina5Screen() {
   const [datos, setdatos] = useState()

   useEffect(()=>{
    async function leer(){
        const resp=await fetch
    }
   })
  return (
    <View>
      <Text>Pagina5Screen</Text>
      <FlatList
      data={datos}
      renderItem={({item})=>
    <Text>{item.name.first}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})