import React from 'react'
import styled from 'styled-components'
import { AiOutlineTwitter} from 'react-icons/ai'


export default function TwitterLog() {
  return (
    <Container>
        <Wrapprer>
            <Icon />
            <Sub>Join Twitter Today</Sub>
        </Wrapprer>
    </Container>
  )
}

const Container = styled.div`
background-color: #242D34;
width: 100%;
height: calc(100vh - 73px);
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapprer = styled.div`
width: 600px;
height: 500px;
background-color: #000;
border-radius: 20px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Icon = styled(AiOutlineTwitter)`
font-size: 3rem;
`;
const Sub = styled.h1`

`;