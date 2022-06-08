import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { capitalize } from "lodash";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

export default function Detail(props) {
    const site = props.site;

    return (
        <>
            <View style={styles.container}>

                <View style={styles.item}>
                    <Text style={styles.title} >{capitalize(site.name)}</Text>
                    <View style={styles.block}>
                        <View style={styles.blockInfo}>
                            <FontAwesome name="star" size={30} color={"#fe9345"} style={styles.icon} />
                            <Text>valoraciones</Text>
                        </View>
                        <View style={styles.blockInfo} >
                            <Text>Duración</Text>
                        </View>

                    </View>
                    <Text style={styles.description} >{capitalize(site.description)} </Text>
                </View>
                <View style={styles.button} >
                    <Text style={styles.textButton} >Ver Ruta</Text>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
    },
    block: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 20
    },
    blockInfo: {
        width: "49%",

    },
    icon: {
        backgroundColor: "#e5e5e5",
        borderRadius: 20,
    },


    item: {
        paddingTop: 10,
        width: "85%",

    },
    title: {
        fontSize: 25,
        paddingVertical: 10,
        fontWeight: "600",
    },
    description: {
        fontSize: 16,


    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: "#fe9345"
    },
    textButton: {
        color: "#fff",
        fontSize: 15,
        paddingVertical: 10,
    }


});