import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, ImageBackground } from "react-native";
import { capitalize } from "lodash";

export default function Header(props) {
    const { image } = props;
   
    return (
        <>
            <View style={styles.container}>
                <View>
                <View><Text>user</Text></View>
                <View><Text>icono </Text></View>
                </View>
                <Text>¿A cuál lugar deseas ir?</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
   
});