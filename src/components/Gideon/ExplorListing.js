import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pic from "./img/1.jpeg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect, useDispatch } from "react-redux"
import { app } from "../../base"
import { addbook, viewsinglebook } from "../ReduxState/actionState"
import { Link } from "react-router-dom"
const db = app.firestore().collection("studio")
const ExplorListing = ({ products, single }) => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  const getData = async () => {
    const res = await db.onSnapshot((snap) => {
      const i = []
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id })
      });
      if (res) {
        dispatch(addbook(i))
      }
      setData(i)
    })

  }

  useEffect(() => {
    getData()
    console.log(data)
  }, [])
  return (
    <Container>
      {
        data.map((item) => (
          <ExploreCard>
            <ExploreImg src={item.pic} />
            <ExploreTitle>{item.title}</ExploreTitle>
            <ExploreType>
              <span style={{ color: "gray", fontSize: "14px" }}>Type</span> : {item.type}
            </ExploreType>
            <ExploreLocation>
              {" "}
              <span style={{ color: "gray", fontSize: "14px" }}>Location</span> : {item.location}

            </ExploreLocation>
            <ExplorePrice>
              {" "}
              <span style={{ color: "gray", fontSize: "14px" }}>Price</span> : ₦
              {item.price}
            </ExplorePrice>
            <ExploreDescription>
              {" "}
              <span style={{ color: "gray", fontSize: "14px" }}>Desciption</span>: &nbsp;
              {item.description}
            </ExploreDescription>
            <ExploreDetails
              onClick={() => {
                single(item)
                console.log("this is rhe item", item)
              }}
              to={`/details/${item.id}`
              }>
              <ShoppingCartIcon style={{ color: "white" }} />
              <DetailText

              >Details and Booking</DetailText>
            </ExploreDetails>
          </ExploreCard>
        ))
      }




    </Container >
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    single: (id) => {
      dispatch(viewsinglebook(id))
    }
  }
}



export const mapbookings = state => {
  return {
    products: state.shop.products
  }
}

export default connect(mapbookings, mapDispatchToprops)(ExplorListing);

const DetailText = styled.div`
  color: white;
`;
const ExploreDetails = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid gray;
  width: 200px;
  margin: 5px;
  margin-left: 60px;
  border-radius: 10px;
  margin-bottom: 20px;

  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const ExploreDescription = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
  /* background-color: red; */
  width: 300px;
  font-size: 13.5px;
  overflow: hidden;
`;
const ExplorePrice = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
`;

const ExploreLocation = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
  font-size: 15px;
`;

const ExploreType = styled.div`
  /* margin: 10px; */
  color: white;
  margin: 5px;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #191a1c;
  padding-top: 100px;
  height: 100%;
  min-height: 100vh;

`;
const ExploreCard = styled.div`
  /* height: 430px; */
  width: 320px;
  background-color: #191919;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 7px 3px rgba(0, 0, 0, 0.35);

  /* justify-content: center; */
  flex-direction: column;
  margin: 10px;
`;
const ExploreTitle = styled.div`
  margin: 10px;
  font-size: 17px;
  color: white;
  font-weight: bold;
`;
const ExploreImg = styled.img`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
