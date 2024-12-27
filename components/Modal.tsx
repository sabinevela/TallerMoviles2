import { Button, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Modal(props: any) {
    console.log(props);
    const [visible, setvisible] = useState(false)
    return (
        <TouchableOpacity onPress={()=>setvisible(true)}>
            <Text style={{ fontSize: 30 }}>{props.datos.name.first}</Text>
            <Modal visible={visible} 
            transparent={true}
            style={styles.modal}>
                <View style={styles.modal}>
                    <Image source={{uri:props.datos.image.main}} style={styles.img}/>
                    <Text style={styles.txtTitulo}>{props.datos.name.first} {props.datos.name.last}</Text>
                    <Button title='REGRESAR' onPress={()=>setvisible(false)}/>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#f9cbfb',
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