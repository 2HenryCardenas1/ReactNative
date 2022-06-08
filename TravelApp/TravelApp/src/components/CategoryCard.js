import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { capitalize } from "lodash"
import { useNavigation } from '@react-navigation/native'

export default function CategoryCard(props) {

    const { category } = props;
   
    const navigation = useNavigation();
    

    const goToSiteByCategory = () => {
        console.log(`Vamos a los sitios con categoria: ${category.id}`)
        //MANDAMOS EL ID POR NAVIGATE PARA QUE NOS LLEVE A LA PAGINA DE LA CATEGORIA
        navigation.navigate('Sites', { id: category.id })
    }
    
    return (


        <TouchableWithoutFeedback onPress={goToSiteByCategory}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Text style={styles.name}>{capitalize(category.name)}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        width: 200,
        marginTop: 60,
    },
    spacing: {
        flex: 1,
        padding: 10,
    },
    bgStyles: {
        backgroundColor: 'grey',
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 80,
        height: 80
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 15,
        textAlign: "center",


    },

    bgStyle: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 15,
        padding: 10
    }
})