import React from 'react'
import styled from 'styled-components'
import {FaAngleDown} from 'react-icons/fa'

export default function Header() {
  return (
    <Container>
        <Logo>
            Fago
            {/* <img src="" alt="" /> */}
        </Logo>
        <Ilustration>
            <span>Illustration</span> <Icon1 />
        </Ilustration>
        <Nav>Artist</Nav>
        <Searchin>
            <Icon />
            <Input />
        </Searchin>
        <Button>Try free prom</Button>
        <Menu>M</Menu>
    </Container>
  )
}

// const Container = styled.div``;
const Icon1 = styled(FaAngleDown)`
cursor: pointer;
font-size: 20px;
`;
const Nav = styled.div`
margin-right: 15px;
`;
const Menu = styled.div``;
const Button = styled.button`
outline: none;
border: 1px solid;
margin: 0 5px;
border-radius: 5px;
padding: 6px 20px;
/* background-color: ${({bg})  => ( bg ? "#fff" : "#005EFF")};
color: ${({bg})  => ( bg ? "#000" : "#fff")};
background-color: ${({bg})  => ( bg ? "#transparent" : "gray")}; */
transition: all 350ms;

:hover{
    border-color: ${({bg})  => ( bg1 ? "#transparent" : "#005EFF")};
    transform: scale(1);
}
`;
const Input = styled.div``;
const Icon = styled.div``;
const Searchin = styled.div``;
const Ilustration = styled.div`
margin: 0 15px;
span{
    font-size: 20px;
    font-weight: 600;
}
`;
const Logo = styled.div`
margin-left: 20px;
font-size: 25px;
font-weight: 800;

`;
const Container = styled.div`
height: 70px;
width: 100%;
border-bottom: solid 2px lightgray;
display: flex;
align-items: center;
`;