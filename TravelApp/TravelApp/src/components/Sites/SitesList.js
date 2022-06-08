import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { SiteCard }  from "./SiteCard";

export default function SitesList(props) {
  const { sites } = props;


  return (
    <FlatList
    data={sites}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(site) => String(site.id)}
    renderItem={({ item }) => 
    <TouchableWithoutFeedback>
    <View style={styles.card}>
      <View style={styles.spacing}>
        <View style={styles.bgStyles}>
         
          <Image source={{ uri: item.thumbnail }} style={styles.image} />

        </View>
      </View>
      <Text style={styles.name}>{capitalize(item.name)}</Text>
          
    </View>
  </TouchableWithoutFeedback>
  
     }
    contentContainerStyle={styles.flatListContentContainer}
    
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner:{
    marginTop:20,
    marginBottom:60,
  }, 
  card: {
    flex: 1,
    height: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor:"#B8A038",
  },

  name: {
<<<<<<< HEAD
    color: "#B8A038",
=======
    color: "#fff",
>>>>>>> 88e164971423c6b993e18723664638001f72f0ce
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 70,
    height: 70,
  },
});