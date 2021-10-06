import React from "react";
import "./Home3.css";
import Bounce from "react-reveal/Bounce";

const Home3 = () => {
  return (
    <div className="ContainerMain">
      <div className="Container">
        <Bounce>
          <div className="Card">
            <div
              className="Box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="Percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="Number">
                  <h2>
                    99<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="Text">SECURITY ASSURED</h2>
            </div>
          </div>
        </Bounce>
        <Bounce>
          <div className="Card">
            <div
              className="Box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="Percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="Number">
                  <h2>
                    93<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="Text">Time Saved</h2>
            </div>
          </div>
        </Bounce>
        <Bounce>
          <div className="Card">
            <div
              className="Box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="Percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="Number">
                  <h2>
                    98<span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className="Text">CUSTOMER SATISFACTION</h2>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Home3;
