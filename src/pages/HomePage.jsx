import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ALL_COUNTRIES } from '../config';

import { Controls } from '../components/Controls';
import {List} from '../components/List';
import { Card } from '../components/Card';


export const HomePage = (props) => {
    const {push} = useHistory();
    const {countries = [], setCountries} = props;
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (search, {value: region} = {}) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(
              ({data}) => (setCountries(data))
            );
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        handleSearch();

        // eslint-disable-next-line
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country) => {
                    const countryCard = {
                        img: country.flags.png,
                        title: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: country.region
                            },
                            {
                                title: 'Capital',
                                description: country.capital
                            }
                        ]
                    }
                    return (
                        <Card
                            key={country.name}
                            onClick={() => push(`/country/${country.name}`)}
                            {...countryCard}
                        />
                    )
                })}
            </List>
        </>
    )
}
