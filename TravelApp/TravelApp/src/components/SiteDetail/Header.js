import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { capitalize } from "lodash";

export default function Header(props) {
    const { image } = props;
   
    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={{ uri: image }} s resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 250,
    },
   
});