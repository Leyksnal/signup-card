import React from 'react'
import styled from 'styled-components'
import {GiBirdTwitter} from 'react-icons/gi'
import { Link } from 'react-router-dom';

export default function HeaderHero1() {
  return (
    <Container>
        <Header>
            <Logo>
                <GiBirdTwitter size={'2rem'} color={'#EC6526'}/>
            </Logo>
            <Menu>
                <Span to='/twitter'>Page 1</Span>
                <Span to='/page2'>Page 2</Span>
                <Span to='/twitter'>Page 3</Span>
                <Span to='/twitter'>Page 4</Span>
            </Menu>
        </Header>
        <Hero>
            <Col>
                <Head>Secure your farm from <br /> virus crisis</Head>
                <Head2>Enjoy the best service from our company and secure your transactions we surpport all payment methods</Head2>
                <Button>Get in touch</Button>
            </Col>
            <Col2>
                <img src="ar2.jpg" alt="" />
            </Col2>
        </Hero>
    </Container>
  )
}


const Hero = styled.div`
background-color: #05153E;
width: 100%;
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
  }
`;
const Col = styled.div`
flex: 1;
margin-left: 80px;
color: #fff;


`;
const Col2 = styled.div`
width: 550px;
height: 350px;
margin-right: 80px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
`;
const Head = styled.div`
font-size: 2.5rem;
font-weight: 600;

`;
const Button = styled.button`
margin-top: 20px;
outline: none;
border: 0;
width: 150px;
padding: 10px 0;
border-radius: 8px;
font-weight: 500;
font-size: 0.9rem;
`;


const Head2 = styled.div`
font-size: 0.9rem;
width: 300px;
margin-top: 20px;
`;


const Span = styled(Link)`
text-decoration: none;
font-weight: 600;
font-size: 0.9rem;
margin: 0 5px;
border: solid 1.5px #EC6526;
border-radius: 5px;
width: max-content;
padding: 0 15px;
color: #000;
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`;
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 20px;
`;
const Logo = styled.div``;
const Header = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background-color: #a0a1e6;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
height: 100%;
`;