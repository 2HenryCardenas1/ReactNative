import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";


export default function SiteCard(props) {
  const { site } = props;
  const navigation = useNavigation();

  const goToSite = () => {
    navigation.navigate("SitesDetails", { id: site.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToSite}>
       <View style={styles.card}>
                    <View style={styles.spacing}>

                        <View style={styles.bgStyles}>
                            <Image source={{ uri: site.thumbnail }} style={styles.image} />
                            <Text style={styles.name}>{capitalize(site.name)}</Text>
                           
                        </View>
                    </View>
                </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
      flex: 1,
      height: 180,
      width: 200,
  },
  spacing: {
      flex: 1,
      padding: 5,
      marginTop: 20
  },
  bgStyles: {
      backgroundColor: '#ececeb',
      minHeight: 150,
      borderRadius:20,
      overflow: 'hidden',
  },

  name: {
      fontSize: 12,
      paddingTop: 10,
     
  },
  image: {
      width: 190,
      height: 80,

  }

})