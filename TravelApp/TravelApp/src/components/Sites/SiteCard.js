import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import {useNavigation} from "@react-navigation/native";

export default function SiteCard(props) {
   const { site } = props;
   const navigation = useNavigation();
   
   const goToSite = () => {
    navigation.navigate("SitesDetails", {id:site.id});
  };

  return (
    <TouchableWithoutFeedback onPress={goToSite}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.name}>{capitalize(site.name)}</Text>
            <Image source={{ uri: site.thumbnail }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor:"#FA6C6C"
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 50,
    height: 50,
  },
});