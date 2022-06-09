import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function SearchSite() {
    return (
        <View style={styles.card}>
            <TextInput
                style={styles.textInput}
                placeholder="Buscar Sitio"
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom:15
    },
    
    textInput: {
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 15,
        paddingBottom:15,
        paddingLeft: 15,
        backgroundColor: '#eeeeee',
        borderRadius: 20,
        
    }
})