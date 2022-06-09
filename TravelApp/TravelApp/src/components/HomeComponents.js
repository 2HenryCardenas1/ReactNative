import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

export default function HomeComponents(props) {

  const { category, loadCategories } = props;



  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => String(category.id)}
      data={category}
      numColumns={1}
      showsVerticalScrollIndicator={false}
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
    marginTop: 5
  
  },
  spinner: {
    marginTop: 20,
    marginBottom: 10
  }

})