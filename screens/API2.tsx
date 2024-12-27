import { useEffect, useState } from "react"; 
import { FlatList, Text, View, StyleSheet } from "react-native"; 
import Modal from "../components/Modal";
import Modal2 from "../components/Modal2";
 
 
export default function API2() { 
    const [datos, setdatos] = useState([]); 
 
    useEffect(() => { 
        async function leerArchivo() { 
            const resp = await fetch('https://api.sampleapis.com/cartoons/cartoons2D'); 
            const json = await resp.json(); 
            setdatos(json); 
            console.log(datos); 
        } 
 
        leerArchivo(); 
    }, []); 
 
    return ( 
        <View> 
            <FlatList 
                data={datos} 
                renderItem={({ item }) => <Modal2 datos={item} />} 
            /> 
        </View> 
    ); 
} 
 
const styles = StyleSheet.create({})