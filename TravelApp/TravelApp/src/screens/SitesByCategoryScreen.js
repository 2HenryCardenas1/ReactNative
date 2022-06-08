import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getSitesByCategoryApi } from "../api/categories"
import SitesListByCategory from '../components/Sites/SitesListByCategory'

export default function SitesByCategoryScreen(props) {

  const { navigation,route : {params} } = props

  const [sites, setSite] = useState([]);
  


  //El useEffect se ejecuta cuando el componente se monta, y se ejecuta solo una vez(no se descarga el componente cada vez qeu se llame)

  useEffect(() => {
    (async () => {
      try {
        await loadSites();
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])

  const loadSites = async () => {
    try {
      const response = await getSitesByCategoryApi(params.id);  
      const sitesArray = [];
      for await (const site of response.sites) {
        // const sitesDetails = await getSitesByCategoryApi(site.category_id);
        //Le agregamos los datos que queremos capturar
        sitesArray.push({
          id: site.id,
          name: site.name,
          category_id: site.category_id,
          description: site.description,
          thumbnail: site.thumbnail,
        });
      }

      setSite([...sites, ...sitesArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <SitesListByCategory loadSites={loadSites} sites={sites} />
    </SafeAreaView>
  )
}