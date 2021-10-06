import { Button, Input, Select } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../../../base";
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Selector from "react-select";
import { Option } from "antd/lib/mentions";

const PostProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const [picture, setPicture] = useState("");
  const [picture1, setPicture1] = useState("");
  const [picture2, setPicture2] = useState("");
  const [picture3, setPicture3] = useState("");

  const [pic, setPic] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");
  const [pic3, setPic3] = useState("");

  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0.0000000001);
  const [percentage2, setPercentage2] = useState(0.0000000001);
  const [percentage3, setPercentage3] = useState(0.0000000001);

  const options = [
    { value: "Studio Equipement", label: "Studio Equipement" },
    { value: "Studio Space", label: "Studio Space" },
  ];

  const uploadImage = async ({ target }) => {
    const file = target.files[0];
    setPicture(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("images/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(counted);
        console.log(counted);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setPic(URL);
        });
      }
    );
  };

  const uploadImage1 = async ({ target }) => {
    const file = target.files[0];
    setPicture1(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("images/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage1(counted);
        console.log(counted);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setPic1(URL);
        });
      }
    );
  };

  const uploadImage2 = async ({ target }) => {
    const file = target.files[0];
    setPicture2(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("images/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage2(counted);
        console.log(counted);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setPic2(URL);
        });
      }
    );
  };

  const uploadImage3 = async ({ target }) => {
    const file = target.files[0];
    setPicture3(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("images/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const counted = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage3(counted);
        console.log(counted);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          console.log(URL);
          setPic3(URL);
        });
      }
    );
  };

  const addToStudio = async () => {
    await app.firestore().collection("studio").doc().set({
      pic1,
      pic2,
      pic3,
      pic,
      title: name,
      type,
      price,
      description: desc,
      location,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setPic3("");
    setPic2("");
    setPic1("");
    setPic("");
    setName("");
    setDesc("");
    setPrice("");
    setLocation("");
    setType("");
  };

  return (
    <Container>
      <Images>
        {picture ? (
          <Image>
            <Img src={picture} />
            <Line>
              <Text>
                {percentage === 100 ? (
                  <div>Uploaded</div>
                ) : percentage >= 0.09 ? (
                  <Div>
                    <CircularProgress />
                    <span>{Math.floor(percentage)}%</span>
                  </Div>
                ) : null}
              </Text>
            </Line>
          </Image>
        ) : null}
        {picture1 ? (
          <Image>
            <Img src={picture1} />
            <Line>
              <Text>
                {percentage1 === 100 ? (
                  <div>Uploaded</div>
                ) : percentage1 >= 0.09 ? (
                  <Div>
                    <CircularProgress />
                    <span>{Math.floor(percentage1)}%</span>
                  </Div>
                ) : null}
              </Text>
            </Line>
          </Image>
        ) : null}
        {picture2 ? (
          <Image>
            <Img src={picture2} />
            <Line>
              <Text>
                {percentage2 === 100 ? (
                  <div>Uploaded</div>
                ) : percentage2 >= 0.09 ? (
                  <Div>
                    <CircularProgress />
                    <span>{Math.floor(percentage2)}%</span>
                  </Div>
                ) : null}
              </Text>
            </Line>
          </Image>
        ) : null}
        {picture3 ? (
          <Image>
            <Img src={picture3} />
            <Line>
              <Text>
                {percentage3 === 100 ? (
                  <div>Uploaded</div>
                ) : percentage3 >= 0.09 ? (
                  <Div>
                    <CircularProgress />
                    <span>{Math.floor(percentage3)}%</span>
                  </Div>
                ) : null}
              </Text>
            </Line>
          </Image>
        ) : null}
      </Images>
      {picture ? <Hr /> : null}
      <Inputs>
        <MyInputs>
          <MyInputFile>
            <label>First Image</label>
            <MyInputPix type="file" onChange={uploadImage} />
          </MyInputFile>
          <MyInputFile>
            <label>Second Image</label>
            <MyInputPix type="file" onChange={uploadImage1} />
          </MyInputFile>
        </MyInputs>
        <MyInputs>
          <MyInputFile>
            <label>Third Image</label>
            <MyInputPix type="file" onChange={uploadImage2} />
          </MyInputFile>
          <MyInputFile>
            <label>Fouth Image</label>
            <MyInputPix type="file" onChange={uploadImage3} />
          </MyInputFile>
        </MyInputs>
      </Inputs>
      <Hr />
      <Inputs>
        <MyInputs>
          <MyInputFile>
            <label>Name</label>
            <MyInput
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </MyInputFile>
          <MyInputFile>
            <label>Type</label>

            {/* <Selector
              options={options}
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            /> */}

            <MySelection
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="Hello">Hello</option>
              <option value="People">People</option>
            </MySelection>
          </MyInputFile>
          <MyInputFile>
            <label>Location</label>
            <MyInput
              placeholder="Enter Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </MyInputFile>
        </MyInputs>
        <MyInputs>
          <MyInputFile>
            <label>Price</label>
            <MyInput
              placeholder="Enter Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </MyInputFile>
          <MyInputFile>
            <label>Description</label>
            <MyInput
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </MyInputFile>
          {/* <MyInputFile>
            <label>Name</label>
            <MyInput placeholder="Enter Name" />
          </MyInputFile> */}
        </MyInputs>
      </Inputs>
      <ButtonContainer>
        <MyButton
          type="primary"
          danger
          onClick={() => {
            addToStudio();
            console.log("ready for Upload: ", type);
          }}
        >
          Post
        </MyButton>
      </ButtonContainer>
    </Container>
  );
};

export default PostProduct;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MyButton = styled(Button)`
  margin: 10px;
  width: 300px;
  height: 40px;
`;

const Hr = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.03);
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 100%;

  span {
    font-weight: bold;
    position: absolute;
    font-size: 10px;
  }
`;

const MyInputPix = styled(Input)`
  background-color: transparent;
  border: 0;
  outline: 0;
`;
const MySelection = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 8px;
`;
const UploadImages = styled.div``;

const MyInputs = styled.div`
  width: 300px;
  margin: 10px 10px;
`;
const MyInputFile = styled.div`
  margin: 20px 0;
  label {
    font-weight: 500;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 10px;
`;
const MyInput = styled(Input)`
  height: 38px;
  margin-top: 2px;
`;

const Text = styled.div`
  color: white;
`;
const Line = styled.div`
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0px 10px 10px;
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`;
const Image = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  /* background-color: #3da2b8; */
  margin: 10px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f0f2f5;
  border: 1px solid lightgray;
  border-radius: 7px;
`;
