import axios from 'axios';

const baseUrl = 'https://localhost:7010/api/Estate';

export const getEstates = async () => {
    const { data } = await axios.get(baseUrl);
    return data;
}

export const getEstate = async (id) => {
    const { data } = await axios.get(`${baseUrl}${id}`);
    return data;
}

export const createEstate = async (CreateEstateDto) => {
    const { data } = await axios.post(baseUrl, CreateEstateDto);
    return data;
}

export const updateEstate = async (updateEstateDto) => {
    const { data } = await axios.put(baseUrl, updateEstateDto);
    return data;
}

export const filterEstates = async (filterEstate) => {
    const { data } = await axios.get(`${baseUrl}FilterEstates/${filterEstate.ExpirationDateFrom}/${filterEstate.ExpirationDateTo}/${filterEstate.PriceFrom}/${filterEstate.PriceTo}`);
    return data;
}

export const deleteEstate = async (id) => {
    const { data } = await axios.delete(`${baseUrl}/${id}`);
    return data;
}