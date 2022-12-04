import axios from 'axios';
import { useEffect, useState } from 'react';
import { filterByCode } from '../../config';

import {Wrapper} from './Wrapper';
import {Img} from './Img';
import {Title} from './Title';
import {List, ListItem, ListGroup} from './List';
import {Meta, Tag, TagsGroup} from './Meta';


export const Details = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders = [],
        push,
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
      axios.get(filterByCode(borders)).then(
        ({data}) => setNeighbors(data)
      )
    }, [borders]);

    return (
        <Wrapper>
            <Img src={flag} alt={name}/>
            <div>
                <Title>{name}</Title>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b>: {population}
                        </ListItem>
                        <ListItem>
                            <b>Region</b>: {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capiital</b>: {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain:</b> {topLevelDomain.map(d => (<span key={d}>{d} </span>))}
                        </ListItem>
                        <ListItem>
                           <b>Currency</b>: {currencies.map(c => (<span key={c.code}>{c.name} </span>))}
                        </ListItem>
                        <ListItem>
                            <b>Languages</b>: {languages.map(l => (<span key={l.name}>{l.name} </span>))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                    <span>There is no border country</span>
                    ) : (
                        <TagsGroup>
                            {!neighbors.length ? (<span>Loading...</span>) : neighbors.map(b => (
                                <Tag key={b.name} onClick={() => push(b.name)}>{b.name}</Tag>
                            ))}
                        </TagsGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}
