import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Header from "../components/SiteDetail/Header";
import { getSiteByIdApi } from "../api/Site";
import Detail from "../components/SiteDetail/Detail";

export default function SiteScreen() {
 
  const [site, setSite] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getSiteByIdApi(149);
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