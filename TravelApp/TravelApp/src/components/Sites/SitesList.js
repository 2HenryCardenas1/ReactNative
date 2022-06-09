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
import  SiteCard  from './SiteCard';

export default function SitesList(props) {
  const { sites } = props;


  return (
    <FlatList
      data={sites}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(site) => String(site.id)}
      renderItem={({ item }) =><SiteCard site={item}/>  }
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
  }
});