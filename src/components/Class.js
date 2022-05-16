import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'

export default function Class() {
  return (
    <Container>
        <Wrapper>
            <Box1>
                <Head>Welcome Back</Head>
                <Info>Welcome back! Please enter your details</Info>
                <Form>
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
                </Form>
                <Check>
                    <One>
                        <MdOutlineCheckBoxOutlineBlank/>
                        <Span>Remember for 30 days</Span>
                    </One>
                    <Two>Forget password</Two>
                </Check>
                <Btns>
                    <Button>Sign Up</Button>
                    <GButton>
                        <FcGoogle/>
                        <span>Continue with Google</span>
                    </GButton>
                </Btns>
                <DownT>
                    Already have an account?
                    <Navlink to='/'><span> Sign in</span></Navlink>
                </DownT>
            </Box1>
            <Box2>
sss
            </Box2>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: space-between;
align-items: center;
`;

const Box1 = styled.div`
flex: 0.5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Box2 = styled.div`
flex: 0.5;
display: flex;
justify-content: center;
align-items: center;
background-color: yellow;
`;

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: space-between;
align-items: center;
margin-top: 10px;
`;
const Head = styled.h2`

`;
const Info = styled.div`
margin-top: -20px;

`;
const One = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Two = styled.div``;

// const GButton = styled.div``;
// const GButton = styled.div``;
// const GButton = styled.div``;

const DownT = styled.div`
font-size: 1.1rem;
margin-left: -150px;
margin-top: 10px;
span{
    font-weight: 500;
    cursor: pointer;
    color: black;
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
width: 65%;
padding: 0 10px;
height: 35px;
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
justify-content: space-between;
align-items: center;
cursor: pointer;
margin-top: 10px;
width: 50%;
margin-left: -150px;
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
width: 50%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 1.2rem;
color: #fff;
margin-bottom: 20px;
margin-left: -150px;
span{
    margin-right: 10px;
}
`;
const GButton = styled.div`
background-color: transparent;
width: 50%;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
font-size: 1.2rem;
color: black;
border: solid 2px black;
margin-top: 20px;
margin-left: -150px;
span{
    margin-left: 10px;
}
`;
