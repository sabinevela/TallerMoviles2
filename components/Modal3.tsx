import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Modal(props: any) {
    const [visible, setvisible] = useState(false);
    const [genero, setGenero] = useState(props.datos.gender); // Set the gender from props

    const generoPersonas = () => {
        if (genero === "male" || genero === "female") {
            return (
                <View style={styles.modal}>
                    <Image source={{ uri: props.datos.picture }} style={styles.img} />
                    <Text style={styles.txtTitulo}>
                        {props.datos.location} {props.datos.email}
                    </Text>
                    <Text style={styles.txtGenero}>Gender: {genero}</Text>
                    <Button title='REGRESAR' onPress={() => setvisible(false)} />
                </View>
            );
        } else {
            return (
                <View style={styles.modal}>
                    <Text style={styles.txtTitulo}>Unknown Gender</Text>
                    <Button title='REGRESAR' onPress={() => setvisible(false)} />
                </View>
            );
        }
    };

    return (
        <TouchableOpacity onPress={() => setvisible(true)}>
            <Text style={{ fontSize: 30 }}>{props.datos.name}</Text>
            {visible && (
                <View style={styles.overlay}>
                    {generoPersonas()}
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#f9cbfb',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitulo: {
        fontSize: 20,
        marginVertical: 10,
    },
    txtGenero: {
        fontSize: 18,
        marginVertical: 10,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});