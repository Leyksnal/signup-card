import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Signin = () => {
  return (
      
    <div>
        <Cont>
           
            <Card>
                <ImSvg>
                    <img src='/images/wave.svg'/>
                </ImSvg>
                <Text>
             
                    <h1>
                   Hello there,<br/>
                   welcome back
                    </h1>

                </Text>
                <Inp>

                <Meracle>
                <input placeholder='E-mail'/>
                </Meracle>

                <Meracle>
                <input placeholder='Enter Password'/>
                </Meracle>


    
                </Inp>
             

                <Forgot>
                    Forgot your password
                </Forgot>
                <Button>Sign in</Button>
                <Alr>new here? <span>sign up instead</span></Alr>
            </Card>
         
        </Cont>
    </div>
  )
}

export default Signin

const Cont = styled.div`
height: 100%;
width: 100%;
/* background-color: #e66465; */
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;



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
margin-left: 150px;
margin-top: 30px;


:hover{

transform: scale(0.97);
cursor: pointer;
}
`


const Inp = styled.div`
      margin-top: 60px;

    width: 80%;
       margin: 0px 10;
        display: flex;

margin-left: 30px;
        flex-direction: column;

`



const Meracle = styled.div`
/* background-color:red; */
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
margin-left: 5px;

span{
    color: red;
}
`