import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

export const Controls = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        onSearch(search, region || {});
        // eslint-disable-next-line
    }, [search, region]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                onChange={setRegion}
                value={region}
            />
        </Wrapper>
    )
}
