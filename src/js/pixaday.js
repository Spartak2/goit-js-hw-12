import axios from 'axios';

const apiKey = '43280076-efaf032a147c4a401dc5ab87e';
export async function searchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
