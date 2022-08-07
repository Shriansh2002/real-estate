import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8abf5a9b8mshe8f3291e6813cf7p15d8c2jsn572466fb404d'
        }
    });

    return data;
};