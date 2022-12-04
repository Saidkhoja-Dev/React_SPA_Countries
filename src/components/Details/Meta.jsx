import styled from 'styled-components';

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items:flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media(min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagsGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

export {
  Meta,
  Tag,
  TagsGroup,
}
