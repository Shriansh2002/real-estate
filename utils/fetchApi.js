import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '535007e754msh03ca26c636c947bp1b1591jsnc83eba5279bb',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
};