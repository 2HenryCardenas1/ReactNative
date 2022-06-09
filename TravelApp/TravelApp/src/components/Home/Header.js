import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { capitalize } from "lodash";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header(props) {
    const { image } = props;

    return (

        <>
            <View style={styles.containerOptions}>
                <View style={styles.containerOptions}>
                    <View style={styles.perfil} ></View>
                    <Text style={styles.textUser}>user</Text>
                </View>
                <View style={styles.notification}>
                    <Icon
                        name="bell"
                        color="#fe9345"
                        size={22}
                    />
                </View>
            </View>


            <Text style={styles.textoLugar}>¿A cuál lugar deseas ir?</Text>

        </>

    );
}

const styles = StyleSheet.create({
    
    textUser: {
        fontSize: 16,
        marginLeft: 7
    },
    textoLugar: {
        marginTop: 20,
        fontSize: 35,
    },
    perfil: {
        borderColor: "#dbdbce",
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: "90",
        backgroundColor: "#fe9345",

    },
    notification: {
        borderColor: "#dbdbce",
        borderWidth: 2,
        height: 40,
        width: 40,
        borderRadius: "90",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",

    },
    containerOptions: {
        flex: 1,
        marginTop:15,
        flexDirection: "row",
        alignItems: "center",
        gap: "2",

    }


});