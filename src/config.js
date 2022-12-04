const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,alpha3Code';
export const searchByCountry = (name) => BASE_URL + 'name/' + name;
export const filterByRegion = (region) => BASE_URL + 'region/' + region;
export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
