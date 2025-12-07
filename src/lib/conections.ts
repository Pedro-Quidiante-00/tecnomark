// DECLARE UNA VARIABLE DE TIPO CONST PARA CONSUMIR LA URL DE STRAPI

const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || 'https://astro-backend-yryd.onrender.com/api';

// La vamos usar para las images
export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');
export const PUBLIC_STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slug: string) => {
    try {
        const response = await fetch(`${PUBLIC_STRAPI_URL}/${slug}?populate=*`);
        const json = await response.json();

        if(!response.ok) {
            throw new Error('El error', json.message);
        }
        // Si tiene results, es una lista, si no, es un objeto individual
        return json.data;
    } catch (error) {
        console.error(error);
    }
};