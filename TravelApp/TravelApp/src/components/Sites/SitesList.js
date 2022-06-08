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
import { SiteCard } from "./SiteCard";

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
                <View style={styles.nameContainer}>
                <Text style={styles.name}>{capitalize(item.name)}</Text>
                </View>
              </View>
            </View>

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
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
  card: {
    flex:1,
    height: 130,
    minWidth:200
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#E3AF20",
  },
  nameContainer:{
    maxWidth: 80
  },
  name: {
    color: "#fefefe",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    right: 0,
    width: 85,
    height: 120,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    overflow: "hidden",
  },
});