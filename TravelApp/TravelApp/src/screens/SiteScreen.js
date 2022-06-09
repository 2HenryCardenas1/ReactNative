import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Header from "../components/SiteDetail/Header";
import { getSiteByIdApi } from "../api/Site";
import Detail from "../components/SiteDetail/Detail";
import Icon from "react-native-vector-icons/FontAwesome5";


export default function SiteScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;

  
  const [site, setSite] = useState(null);

  useEffect(()=>{
    navigation.setOptions({
      headerRight:()=>null,
      headerLeft:()=>  (
       <Icon 
           name="arrow-left" 
           color="#fff" 
           size={20} 
           style={{marginLeft:20}} 
            onPress={()=>navigation.goBack()}
          />
       ),
    })
  },[navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getSiteByIdApi(params.id);
        setSite(response.site);
      } catch (error) {
       // navigation.goBack();
      }
    })();
  }, []);

  if (!site) return null;

  return (
    <ScrollView>
      <Header
        image={site.thumbnail}
       />
       <Detail site={site}/>
      
    </ScrollView>
  );
}