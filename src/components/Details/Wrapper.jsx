import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
        gap: 5rem;
    }
`;
