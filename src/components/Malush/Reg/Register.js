import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import img from "./img/2.jpg"
import img1 from "./img/5.jpg"
import { FaUser } from 'react-icons/fa';
import { AiOutlineUserAdd, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Button, Select } from 'antd';
import { Option } from "antd/lib/mentions";
import { symbol } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment';
import "./datasty.css"
import { app } from "../../../base"
import { Link, useHistory } from "react-router-dom";



const useDate = app.firestore().collection("UserPick")

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Register() {
  const [toggle, setToggle] = useState(true)
  const [passTOg, setPassTog] = useState(false)
  const [DateofBirth, setDateofBirth] = useState("")
  const [firstname, setFirstname] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [surname, setSurname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setgender] = useState("")
  const [password, setpassword] = useState("")
  const [conpassword, setconpassword] = useState("")
  const hist = useHistory();

  const HandlePass = () => {
    setPassTog(!passTOg)
  }
  const HangleToggle = () => {
    setToggle(!toggle)
  }

  const signInUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password)
    hist.push("/load")
  }

  const SignUpUser = async () => {
    const newUsers = await app.auth().createUserWithEmailAndPassword(email, password)

    useDate.doc(newUsers.uid).set({
      firstname,
      middleName,
      surname,
      phone,
      email,
      DateofBirth,
      gender,
      password,
      conpassword

    })
    setFirstname("")
    setMiddleName("")
    setSurname("")
    setPhone("")
    setEmail("")
    setDateofBirth("")
    setgender("")
    setpassword("")
    setconpassword("")
    hist.push("/load")

  }


  return (


    <AllContainer>
      {
        toggle ?
          <div>
            <Container>
              <RegContainer>
                <RegHeader>
                  <RegCon>
                    <RegIcon>
                      <FaUser
                        style={{
                          fontSize: "30px",
                          height: "20px",
                          color: "#F7F8F9"
                        }}
                      />
                    </RegIcon>
                    <RegTitle>
                      USER LOGING
                    </RegTitle>
                  </RegCon>

                </RegHeader>
                <InputCon>
                  <InputC>
                    <label>Email</label>
                    <Input
                      style={{
                        height: "40px",
                      }}
                      placeholder="E-Mail"
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}

                    />
                    <label>Password</label>
                    <ConPass>
                      <Input
                        style={{
                          height: "40px",
                        }}
                        placeholder="Password"
                        type={passTOg ? "text" : "password"}

                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value)
                        }}

                      />
                      <EyeHolder>
                        {
                          passTOg ?
                            <div>
                              <AiFillEye
                                onClick={HandlePass}
                              />
                            </div> :
                            <div>
                              <AiFillEyeInvisible onClick={HandlePass} />
                            </div>
                        }
                      </EyeHolder>
                    </ConPass>
                  </InputC>

                </InputCon>
                <ConButton>
                  <ButtonHolder>
                    <Button
                      onClick={
                        () => {
                          signInUser()
                        }
                      }
                    >Log In</Button>
                  </ButtonHolder>
                </ConButton>

                <ConLog>
                  <ConDisplay>
                    <ConFog>
                      forget Password
                    </ConFog>
                    <ConAcct
                      onClick={HangleToggle}
                    >
                      <AiOutlineUserAdd
                        style={{
                          marginTop: "5px"
                        }}
                      />
                      Creat New Account
                    </ConAcct>
                  </ConDisplay>
                </ConLog>


              </RegContainer>
            </Container>


          </div> :
          <div>
            <Container2>
              <ConTrans>
                <SetAcct>
                  <RegHeader>
                    <RegCon>
                      <RegIcon>
                        <FaUser
                          style={{
                            fontSize: "30px",
                            height: "20px",
                            color: "#F7F8F9"
                          }}
                        />
                      </RegIcon>
                      <RegTitle2>
                        New User Sign Up
                      </RegTitle2>
                    </RegCon>

                  </RegHeader>
                  <InputCon2>

                    <InputC2>
                      <label>First Name</label>
                      <Input
                        style={{
                          height: "40px",
                          margin: "5px",
                          marginLeft: "0px"
                        }}
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value)
                        }
                        }
                        required
                        placeholder="First Name"
                        type="text"
                      />
                      <label>Middle Name</label>
                      <Input
                        style={{
                          height: "40px",
                          margin: "5px",
                          marginLeft: "0px"
                        }}
                        placeholder="Middle Name"
                        type="text"
                        value={middleName}
                        onChange={(e) => {
                          setMiddleName(e.target.value)
                        }
                        }
                      />
                      <label>SurName</label>
                      <Input
                        style={{
                          height: "40px",
                          margin: "5px",
                          marginLeft: "0px"
                        }}
                        placeholder="Surname"
                        type="text"
                        value={surname}
                        onChange={(e) => {
                          setSurname(e.target.value)
                        }}
                      />
                      <label>Mobile Number</label>
                      <Input
                        style={{
                          height: "40px",
                          margin: "5px",
                          marginLeft: "0px"
                        }}
                        placeholder="Mobile Number"
                        type="number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                      />
                      <label>E-mail Address</label>
                      <Input
                        style={{
                          height: "40px",
                          margin: "5px",
                          marginLeft: "0px"
                        }}
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={
                          (e) => {
                            setEmail(e.target.value)
                          }
                        }
                      />


                      <label>Date Of Birth</label>


                      <DatePicker
                        className="datsss"
                        value={DateofBirth}
                        selected={DateofBirth}
                        onChange={
                          data => setDateofBirth(data)
                        }
                        dateFormat='dd/MM/yyyy'
                        minDate={moment().subtract(150, "years")._d}
                        maxDate={moment().subtract(20, "years")._d}
                        isClearable
                        showYearDropdown
                        scrollableYearDropdown={true}
                        yearDropdownItemNumber={100}
                        showMonthDropdown
                        scrollableMonthYearDropdown
                        placeholder="Date Of Birth"
                      />


                      <label>Gender</label>
                      <ConPass>
                        <select
                          style={{
                            border: "1px solid grey"
                          }}
                          value={gender}
                          onChange={(e) => {
                            setgender(e.target.value)
                          }}
                        >
                          <option value="gender">Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </ConPass>

                      <label>Password</label>
                      <ConPass>
                        <Input
                          style={{
                            height: "40px",
                          }}
                          placeholder="Password"
                          type={passTOg ? "text" : "password"}
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value)
                          }}
                        />
                        <EyeHolder>
                          {
                            passTOg ?
                              <div>
                                <AiFillEye
                                  onClick={HandlePass}
                                />
                              </div> :
                              <div>
                                <AiFillEyeInvisible onClick={HandlePass} />
                              </div>
                          }
                        </EyeHolder>
                      </ConPass>

                    </InputC2>

                  </InputCon2>
                  <br />
                  <ConLog>
                    <ConDisplay>
                      <ConFog>
                        <ButtonHolder2>
                          <Button
                            onClick={() => {
                              SignUpUser()
                            }}
                          >Register</Button>
                        </ButtonHolder2>
                      </ConFog>
                      <ConAcct
                        onClick={HangleToggle}
                      >
                        <AiOutlineUserAdd
                          style={{
                            marginTop: "5px"
                          }}
                        />
                        Sign In Instead
                      </ConAcct>
                    </ConDisplay>
                  </ConLog>

                </SetAcct>

              </ConTrans>


            </Container2>
          </div>

      }


    </AllContainer >
  )
}

export default Register

const EyeHolder = styled.div`
cursor: pointer;
position: absolute;
left: 370px;

@media screen and (max-width:375px){
  left: 290px;
}

@media screen and (max-width:320px){
  left: 280px;
}
`

const ConPass = styled.div`
display: flex;
/* border: 1px solid gray; */
height: 45;
align-items: center;
position: relative;

Input{
  width: 400px;


@media screen and (max-width:320px){
    width: 320px;
}

}


select{
  width: 400px;
  height: 45px;
  border: 0px;

  @media screen and (max-width:320px){
    width: 320px;
}
}



}
`

const ButtonHolder2 = styled.div`

height: 50px;
width: 150px;
display: flex;
flex-direction: column;
justify-content: space-around;




Button{
 height: 45px;
 border-radius: 20px;
 background-color: #5A6167;
 color: white;
}

@media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
 flex-direction: column;
}






`
const InputC2 = styled.div`

height: auto;
width: 400px;
display: flex;
margin-top: 20px;
flex-direction: column;
justify-content: space-around;
color:#6C747C ;





@media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:320px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:300px;
  display: flex;
 flex-direction: column;
}


`


const InputCon2 = styled.div`

height: auto;

display: flex;
justify-content: center;
align-items: center;


`

const ConLable = styled.div`
height: 45px;
width: 150px;

display: flex;
justify-content: center;
align-items: center;
`

const MainInput = styled.div`

display: flex;

@media screen and (max-width:425px){
  
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
 
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  
  display: flex;
 flex-direction: column;
}



`

const ConTrans = styled.div`

height: 950px;
 width: 650px;
 margin-top: 20px;

 border-radius: 5px;
 display: flex;
 flex-direction: column;

 @media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
 flex-direction: column;
}


`


const Container2 = styled.div`


display: flex;
justify-content: center;
align-items: center;
background-image: url(${img1});
background-repeat: repeat-y;
background-size: cover;
`

const RegTitle2 = styled.div`

width: 200px;

 height: 60px;
 display: flex;
 font-weight: 700;
 justify-content: center;
 line-height: 50px;
 align-items: center;
 font-size: 16px;
 color: #F7F8F9;
`

const SetAcct = styled.div`
 height: 850px;
 width: 650px;
 background-color: #FFFFFF;
 border-radius: 5px;
 margin-top: 90px;
 display: flex;
 flex-direction: column;
 border:  1px solid white;

 @media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
 flex-direction: column;
}


`



const ConFog = styled.div`

display: flex;
cursor: pointer;

:hover{
 text-decoration: underline;
}
`

const ConAcct = styled.div`
display: flex;
cursor: pointer;

:hover{
 text-decoration: underline;
}
`

const ConDisplay = styled.div`
height: 30px;
width: 400px;
display: flex;

justify-content: space-between;
align-items: center;
margin-top: -10px;
color: #C39C8E;






@media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
 flex-direction: column;
}


`

const ConLog = styled.div`
 display: flex;
 height: 50px;
justify-content: center;
align-items: center;



`
const ButtonHolder = styled.div`
height: 50px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;




Button{
 height: 45px;
 border-radius: 20px;
 background-color: #5A6167;
 color: white;
}

@media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
 flex-direction: column;
}

`

const ConButton = styled.div`

height: 50px;

display: flex;
justify-content: center;
align-items: center;
`

const InputC = styled.div`

height: 150px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;



@media screen and (max-width:425px){
  width:390px;
  display: flex;

}
 @media screen and (max-width:375px){
  width:320px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:299px;
  display: flex;
 flex-direction: column;
}

`


const InputCon = styled.div`
height: 200px;

display: flex;
justify-content: center;
align-items: center;
color:#6C747C ;


`

const RegTitle = styled.div`

width: 170px;

 height: 60px;
 display: flex;
 font-weight: 700;
 justify-content: center;
 line-height: 50px;
 align-items: center;
 font-size: 21px;
 color: #F7F8F9;

`
const RegIcon = styled.div`
 width: 21px;

 height: 60px;
 display: flex;
 justify-content: center;
 align-items: center;

`

const RegCon = styled.div`
 width: 170px;

 height: 60px;
 display: flex;
 justify-content: space-between;
`

const RegHeader = styled.div`

height: 50px;
background-color: #6C747C;
border-radius: 5px 5px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
`

const RegContainer = styled.div`
 height: 360px;
 width: 600px;
 background-color: #FFFFFF;
 border-radius: 5px;
 display: flex;
 flex-direction: column;
 border:  1px solid white;

 @media screen and (max-width:425px){
  width:400px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:375px){
  width:350px;
  display: flex;
 flex-direction: column;
}
 @media screen and (max-width:320px){
  width:310px;
  display: flex;
  height: 400px;
 flex-direction: column;
}
`
const AllContainer = styled.div`


`

const Container = styled.div`


height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${img});
background-repeat: white;
background-size: cover;

`
