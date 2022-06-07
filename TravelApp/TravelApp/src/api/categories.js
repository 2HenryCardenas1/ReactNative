import { API_CATEGORIES } from "../utils/constants";

export async function getCategoriesApi() {
    try {
        const url = `${API_CATEGORIES}`;
        const response = await fetch(url);
        const result = await response.json();
        return result


    } catch (error) {
        throw error
    }
}


export async function getCategoryDetailsApi(id) {
    try {
        const url = `${API_CATEGORIES}/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch (error) {
        throw error
    }
}