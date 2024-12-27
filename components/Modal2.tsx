import { Button, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Modal(props: any) {
    console.log(props);
    const [visible, setvisible] = useState(false)
    return (
        <TouchableOpacity onPress={()=>setvisible(true)}>
            <Text style={{ fontSize: 30 }}>{props.datos.title}</Text>
            <Modal visible={visible} 
            transparent={true}
            style={styles.modal}>
                <View style={styles.modal}>
                    <Image source={{uri:props.datos.image}} style={styles.img}/>
                    <Text style={styles.txtTitulo}>{props.datos.title} {props.datos.year} {props.datos.year}{props.datos.episodes}</Text>
                    <Button title='REGRESAR' onPress={()=>setvisible(false)}/>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#b7f3ff',
        flex: 1
    },
    txtTitulo:{
        fontSize:50
    },
    img:{
        width:50,
        height:50
    }
})