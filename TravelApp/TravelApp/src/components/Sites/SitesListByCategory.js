import {  StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import ListCardByCategory from './ListCardByCategory';




export default function SitesListByCategory(props) {
  const { sites } = props;
 

  return (

    <FlatList
      data={sites}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(site) => String(site.id)}
      renderItem={({ item }) => <ListCardByCategory sites={item} />}
      contentContainerStyle={styles.container}
      /*onEndReached={isNext && loadSites}*/
      onEndReachedThreshold={0.1}
      /*ListFooterComponent={
        <ActivityIndicator
          size="large" style={styles.spinner} color="#aeaeae" />}*/
    />

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }

}
)