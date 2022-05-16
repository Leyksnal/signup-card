import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {FcGoogle} from 'react-icons/fc'

export default function Signup() {
  return (
    <Container>
        <Left>
            <Blur>
                <TopT>
                    <Logo>We are Africans</Logo>
                    <Line />
                    <H5>We are</H5>
                    <Topic>Only inviting you to shore</Topic>
                    <Info>Over 10 Million people have joined our network, <br /> we invite you to join the tribe now</Info>
                </TopT>
                <DownT>
                    Already have an account? <br />
                    <Navlink to='/'><span>Sign in</span></Navlink>
                </DownT>
            </Blur>
        </Left>
        <Right>
            <Form>
                <Title>Sign Up</Title>
                <Inputs>
                    <Inputholer>
                        <Label>Email Address</Label>
                        <Input placeholder='Enter Email Address' type='email'/>
                    </Inputholer>
                    <Inputholer>
                        <Label>Password</Label>
                        <Input placeholder='Enter Password' type="password"/>
                    </Inputholer>
                </Inputs>
                <Checkbox>
                    <Check>
                        <MdOutlineCheckBoxOutlineBlank/>
                    </Check>
                    <Span>Show Password</Span>
                </Checkbox>
                <Btns>
                    <Button>
                        <span>Sign Up</span>
                        <HiOutlineArrowSmRight size='1.7rem'/>
                    </Button>
                    <Or>
                        <OrLine></OrLine>
                        <span>Or</span>
                    </Or>
                    <GButton>
                        <span>Continue with Google</span>
                        <FcGoogle/>
                    </GButton>
                </Btns>
            </Form>
        </Right>
    </Container>
  )
}


const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
`;
const Left = styled.div`
flex: 0.5;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0 30px 30px 0;
background-image: url(/ar2.jpg);
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`;
const Right = styled.div`
flex: 0.5;
display: flex;
justify-content: center;
align-items: center;
`;
const Blur = styled.div`
width: 70%;
height: 80%;
/* background-color: brown; */
border-radius: 10px;
background: rgba( 0, 0, 0, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11px );
-webkit-backdrop-filter: blur( 11px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
color: #fff;
padding: 30px 25px;
display: flex;
flex-direction: column;
justify-content: space-between;

`;
const TopT = styled.div``;
const Logo = styled.div`
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
width: 100px;
text-transform: uppercase;
text-align: center;
padding: 3px 0;
`;
const Line = styled.div`
width: 30px;
height: 1px;
background-color: #fff;
margin-top: 30px;
opacity: 0.5;
`;
const H5 = styled.p`
font-size: 1.1rem;
`;
const Topic = styled.div`
font-weight: 300;
font-size: 1.7rem;
`;
const Info = styled.p`
opacity: 0.5;
font-size: 0.9rem;
`;
const DownT = styled.div`
font-size: 1.1rem;
span{
    font-weight: 500;
    cursor: pointer;
}
`;

const Navlink = styled(Link)`
text-decoration: none;
color: #fff;
`;


const Form = styled.div`
width: 70%;
height: 80%;
`;
const Title = styled.h2`
font-size: 1.9rem;
`;
const Inputs = styled.div``;
const Inputholer = styled.div`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
width: 94%;
padding: 0 10px;
height: 45px;
border: solid 1px rgba(0, 0, 0, 0.4);
box-shadow: 0 0 3px rgba(0 , 0, 0, 0.4);
font-size: 1rem;
border-radius: 10px;
margin-top: 10px;

:focus{
    outline: 1px solid rgba(0, 0, 0, 0.4)
}
`;
const Checkbox = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
`;
const Check = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
const Span = styled.div`
margin-left: 5px;
`;
const Btns = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Label = styled.div`
margin-top: 10px;
font-weight: 700;
`;


const Button = styled.div`
background-color: red;
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 1.2rem;
color: #fff;
margin-bottom: 20px;
span{
    margin-right: 10px;
}
`;
const Or = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top: 20px;
margin-bottom: 20px;
span{
    position: absolute;
    background-color: #fff;
    padding: 0 30px;
}
`;
const OrLine = styled.div`
width: 70%;
height: 1px;
background-color: black;
opacity: 0.5;
`;
const GButton = styled.div`
background-color: transparent;
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 1.2rem;
color: green;
border: solid 2px green;
margin-top: 20px;
span{
    margin-right: 10px;
}
`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;