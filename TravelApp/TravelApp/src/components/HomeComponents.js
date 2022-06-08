import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

export default function HomeComponents(props) {

  const { category, loadCategories } = props;



  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={category}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(category) => String(category.id)}
      renderItem={({ item }) => <CategoryCard category={item} />}
      contentContainerStyle={styles.container}

      onEndReachedThreshold={0.1}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    padding: 10,
    marginTop: Platform.OS === 'android' ? 100 : 0,
  
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }

})