import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeComponents from '../components/HomeComponents'
import { getCategoriesApi } from '../api/categories';
import { getAllSitesApi } from '../api/Site';
import SitesList from '../components/Sites/SitesList';
import SearchSite from "../components/Search/SearchSite"
import Header from '../components/Home/Header';


export default function HomeScreen() {
  const [category, setcategory] = useState([]);
  const [sites, setSites] = useState([]);

  //El useEffect se ejecuta cuando el componente se monta, y se ejecuta solo una vez(no se descarga el componente cada vez qeu se llame)
  useEffect(() => {
    (async () => {
      await loadCategories();
      await loadSites();
    })();
  }, []);

  const loadSites = async () => {
    try {
      const response = await getAllSitesApi();
      setSites(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const loadCategories = async () => {
    try {
      const response = await getCategoriesApi();

      const categoryArray = []
      for await (const category of response.data) {
        //Le agregamos los datos que queremos capturar
        categoryArray.push({
          id: category.id,
          name: category.name,
          description: category.description,
        });
      }

      setcategory([...category, ...categoryArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <Header />
        <SearchSite />
        <Text style={styles.textCat}>Categorias</Text>
        <HomeComponents category={category} loadCategories={loadCategories} />
        <Text style={styles.textCat}>Sitios</Text>
        <SitesList sites={sites} />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    width: "88%",

},
  textCat: {
    fontSize: 22,
    marginTop: 15
  },

  textSite: {
    fontWeight: "bold",
    fontSize: 20,
  }
})