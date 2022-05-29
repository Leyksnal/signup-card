import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div>
        <Cont>
            <Card>
                <ImSvg>
                    <img src='/images/wave.svg'/>
                </ImSvg>
                <Text>
             
                    <h1>
                    Get on Board
                    </h1>

                </Text>
                <Inp>

                <Meracle>
                <input placeholder='Name'/>
                </Meracle>

                <Meracle>
                <input placeholder='E-mail'/>
                </Meracle>

                <Meracle>
                <input placeholder='Enter Password'/>
                </Meracle>

                <Meracle>
                <input placeholder='Confirm Password'/>
                </Meracle>

    
                </Inp>
             

                <Forgot>
                    By creating an account,you agree to the<br/>
                    Terms and use and privacy and policy
                </Forgot>

                <Link to="/sign">
                <Button>Sign up</Button>
                
                </Link>
                <Alr>I am already a member</Alr>
            </Card>
        </Cont>
    </div>
  )
}

export default Signup

const Cont = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`

const Card = styled.div`
width: 400px;
height: 650px;

background-color: black;
border-radius: 15px;

`


const Button = styled.button`
padding: 10px 35px;
margin: 0 5px;
border-radius: 5px;
background-color: #0099ff;
outline: none;
border: 1px solid;
margin-left: 140px;
margin-top: 30px;


:hover{

transform: scale(0.97);
cursor: pointer;
}
`


const Inp = styled.div`

    width: 90%;
       margin: 0px 10;
        display: flex;
        /* background-color:red; */
/* background-color:blue; */
margin-left: 20px;
        flex-direction: column;

`



const Meracle = styled.div`

flex: 1;
      border-bottom: 1px solid gray;

input {
    border: 0;
    outline: none;

    background-color: transparent;
    width: 80%;
  padding: 12px 3px;
  margin: 8px 0;
  box-sizing: border-box;
  
 
}
`
const ImSvg = styled.div`
object-fit: contain;
`


const Text = styled.div`

h1{

    margin-left: 50px;
color: white;

}

`


const Forgot = styled.div`
color: white;
text-align: center;
font-size: 14px;
margin-top: 30px;
`

const Alr = styled.div`
color: white;
text-align: center;
font-size: 12px;
margin-top: 20px;
`