import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { capitalize } from "lodash"



export default function Header(props) {
    const { name, id } = props;
    console.log(props);

    return (
        <>
            <SafeAreaView >
            
                <ImageBackground
                    source={require("../../assets/extreme.jpg")}
                    style={styles.background}
                    resizeMode="contain">
                    <View style={styles.container}>
                        <Text style={styles.text}>{capitalize(name)}</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        margin: 6,
        width: 400,
        height: 400,
        marginTop: -20,
        opacity: 0.9,
    },
    container: {
        flex: 1,
        marginTop:60,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FF421A',
        

    },
})