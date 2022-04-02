import React from 'react'
import Card from '../components/ExpandableCard';
import styled from 'styled-components'

const HomePageDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const HomePageCard = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: inherit;
    justify-content: center;
` //display flex needs to be explicity specified/ inherited

const HomePage: React.VFC<{}> = () => {
    return (
        <HomePageDiv>
            {['jerica', 'luke', 'jereni'].map(person =>
                <HomePageCard>
                    <Card value={person} />
                </HomePageCard>
            )}

        </HomePageDiv>
    );
}

export default HomePage;