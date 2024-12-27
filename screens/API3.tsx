import { useEffect, useState } from "react"; 
import { FlatList, Text, View, StyleSheet } from "react-native"; 
import Modal3 from "../components/Modal3";
 
 
export default function API2() { 
    const [datos, setdatos] = useState([]); 
 
    useEffect(() => { 
        async function leerArchivo() { 
            const resp = await fetch('https://randomuser.me/api/?results=20'); 
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
                renderItem={({ item }) => <Modal3 datos={item} />} 
            /> 
        </View> 
    ); 
} 
 
const styles = StyleSheet.create({})