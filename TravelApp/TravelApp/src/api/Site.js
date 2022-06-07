import { API_HOST } from "../utils/constants";

export async function getAllSitesApi() {
  try {
    const url = `${API_HOST}/sites`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getFilterSitesApi(name) {
    
   const params={
        method: 'POST', 
        body: JSON.stringify({
            "name":name
        }), 
        headers:{
          'Content-Type': 'application/json'
        }
      };
    try {
      const url = `${API_HOST}/sites/filter`;
      const response = await fetch(url,params);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  export async function getSiteByIdApi(id) {
    try {
      const url = `${API_HOST}/sites/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }