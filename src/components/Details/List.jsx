import styled from 'styled-components';

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 1024px) {
        flex-direction: row;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    @media(min-width: 1024px) {
        &:not(:last-child) {
            margin-bottom: 0;
            margin-right: 2rem;
        }
    }
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

export {
  List,
  ListGroup,
  ListItem,
}
