import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { getCategoryDetailsApi } from "../api/categories"
import Header from '../components/Categories/Header'

export default function CategoriesScreen(props) {

  const { navigation, route: { params } } = props

  const [category, setCategory] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategoryDetailsApi(params.id);
        console.info(response);
        setCategory(response.category);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])

  if (!category) return null

  return (
    <ScrollView>
      <Header id={category.ID} name={category.Name}/>
    </ScrollView>
  )
}