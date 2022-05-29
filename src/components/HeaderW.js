import React from 'react'
import styled from 'styled-components'

export default function HeaderW() {
  return (
    <Main>
        <Logo />
        <Navigators>
            <Nav>Home</Nav>
            <Nav>How it works</Nav>
            <Nav>Portfolio</Nav>
            <Nav>Services</Nav>
            <Nav>About</Nav>
            <Button>Get Started</Button>
        </Navigators>
    </Main>
  )
}


const Main = styled.div`
display: flex;

`;
const Logo = styled.div``;
const Navigators = styled.div`
display: flex;
`;
const Nav = styled.div``;
const Button = styled.div``;
// const Main = styled.div``;