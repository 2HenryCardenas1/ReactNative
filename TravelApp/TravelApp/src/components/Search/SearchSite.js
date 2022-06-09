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
        marginTop: 130,
        marginBottom:15
    },
    
    textInput: {
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 15,
        textAlign: "center",
        backgroundColor: '#e2e2e2',
        borderRadius: 20,


    }
})