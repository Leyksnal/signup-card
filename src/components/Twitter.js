import React from 'react'
import styled from 'styled-components'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple, AiOutlineTwitter} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Twitter() {
  return (
    <Container>
        <Wrapper1>
            <Img src="/twitter.jpg" alt="" />
        </Wrapper1>
        <Wrapper2>
            <Icon />
            <Hp>Happening now</Hp>
            <Sub>Join Twitter Today</Sub>
            <Inputs>
                <Input>
                    <Span>sign in with Google</Span>
                    <Cong />
                </Input>
                <Input>
                    <Con2 />
                    <Span>sign in with Apple</Span>
                </Input>
            </Inputs>
            <Or>
                <OrLine></OrLine>
                <span>Or</span>
            </Or>
            <Input3>
                <Span>sign in with phone or email</Span>
            </Input3>
            <Pan>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including Cookie Use.</Pan>
            <Bot>
                <Acc>Already have an account?</Acc>
                <Input4>
                    <SpanF to="/twitterLogin">Sign in</SpanF>
                </Input4>
            </Bot>
        </Wrapper2>
    </Container>
  )
}


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Acc = styled.div`
font-size: 1.2rem;
margin-bottom: 20px;
font-weight: 700;
`;
const Bot = styled.div`
margin-top: 30px;

`;
const Wrapper1 = styled.div`
flex: 1.3;
height: 100vh;
`;
const Wrapper2 = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: column;
background-color: #000000;
color: #fff;
padding: 20px 20px;
`;
const Icon = styled(AiOutlineTwitter)`
font-size: 3rem;
`;
const Hp = styled.h1`
font-weight: 700;
font-size: 4rem;
`;
const Sub = styled.h1`

`;
const Inputs = styled.div`
/* background-color: red; */
height: 100px;
display: flex;
justify-content: space-between;
flex-direction: column;
`;
const Cong = styled(FcGoogle)`
margin-left: 10px;
font-size: 1.2rem;
`;
const Con = styled.div``;
const Con2 = styled(AiFillApple)`
font-size: 1.3rem;
margin-right: 10px;
`;
const Or = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top: 20px;
margin-bottom: 20px;
span{
    position: absolute;
    background-color: #000;
    padding: 0 20px;
}
`;
const OrLine = styled.div`
width: 70%;
height: 1px;
background-color: #fff;
opacity: 0.5;
`;
const Input = styled.div`
width: 270px;
height: 40px;
border-radius: 20px;
background-color: #fff;
color: black;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
`;
const Pan = styled.div`
margin-top: 10px;
font-size: 0.7rem;
`;

const Span = styled.div`
`;
const SpanF = styled(Link)`
color: #1D9BF0;
text-decoration: none;
cursor: pointer;
`;
const Input4 = styled.div`
width: 270px;
height: 40px;
border-radius: 30px;
background-color: transparent;
border: 2px solid #fff;
color: #fff;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
`;
const Input3 = styled.div`
width: 270px;
height: 40px;
border-radius: 20px;
background-color: #1D9BF0;
color: #fff;
padding: 0 20px;
display: flex;
justify-content: center;
align-items: center;
`;