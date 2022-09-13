import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e084e8b5a1msh4fcde72b64a08adp1bb9b9jsn8d7dfdd564da',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}
