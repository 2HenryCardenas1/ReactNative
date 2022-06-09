import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { capitalize } from "lodash";

export default function Header(props) {
    const { image } = props;

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerOptions}>
                    <View style={styles.containerOptions}>
                        <View style={styles.perfil} ></View>
                        <Text>user</Text>
                    </View>
                    <Text >icono </Text>
                </View>


                <Text style={styles.textoLugar}>¿A cuál lugar deseas ir?</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",

    },
    textoLugar: {
        fontSize: 38,

    },
    perfil: {
        borderColor: "#dbdbce",
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: "90",
        backgroundColor: "#fe9345",
    
    },
    containerOptions: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        gap:"2"
    }


});