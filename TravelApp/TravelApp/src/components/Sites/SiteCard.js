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
      <View style={styles.bgStyles}>
        <ImageBackground source={{ uri: site.thumbnail }} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        <Text style={styles.text}>{capitalize(site.name)}</Text>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 
  bgStyles: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#e2e2e2",
    marginLeft:10,
    marginBottom:20,
    paddingBottom:10,
  },
  
  image: {
    borderRadius: 15,
    height:100,
    flex: 1,
    justifyContent: "center"
  },

  text: {
    marginTop:5,
 marginLeft:7,
    fontSize: 12,
    justifyContent:"center",

  }
});