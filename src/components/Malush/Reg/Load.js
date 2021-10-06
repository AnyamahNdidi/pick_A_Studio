import React, { useEffect, useState, useRef } from 'react'

import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { useHistory } from "react-router-dom";



const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
function Load() {
  const hist = useHistory();
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setInterval(() => {
      setLoading(!loading)
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ? (<div
          style={{ height: "100vh", background: "#191a1c" }}>
          <div style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column"
          }}>
            <MoonLoader
              color={color}
              loading={loading}
              css={override}
              size={50}
            />
          </div>
        </div>) : (
          hist.push("/dashoard")
        )
      }
    </div>
  )
}

export default Load
