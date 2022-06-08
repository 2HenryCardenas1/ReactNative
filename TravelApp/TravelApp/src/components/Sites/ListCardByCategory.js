import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { capitalize } from "lodash"

export default function ListCardByCategory(props) {

    const { sites } = props;

    const navigation = useNavigation();

    const goToDetails = () => {
        console.log(`Vamos al sitio: ${sites.id}`)
        //MANDAMOS EL ID POR NAVIGATE 
        navigation.navigate('SitesDetails', { id: sites.id })
    }

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={goToDetails}>
                <View style={styles.card}>
                    <View style={styles.spacing}>

                        <View style={styles.bgStyles}>
                            <Image source={{ uri: sites.thumbnail }} style={styles.image} />
                            <Text style={styles.name}>{capitalize(sites.name)}</Text>
                           
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 200,
        width: 200,
    },
    spacing: {
        flex: 1,
        padding: 5,
        marginTop: 20
    },
    bgStyles: {
        backgroundColor: '#fe9345',
        minHeight: 150,
       borderRadius:30,
        overflow: 'hidden',
    },

    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
        textAlign: "center",
    },
    image: {
        width: 190,
        height: 80,

    }

})