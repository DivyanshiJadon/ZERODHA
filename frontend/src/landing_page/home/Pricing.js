import React from "react";

function Pricing() {
  return (
    <div className="conatiner">
      <div className="row">
        <div
          className="col-6 "
          style={{
            textAlign: "left",
            alignItems: "left",
            paddingLeft: "210px",
          }}
        >
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div
          className="col-6 mt-4 mb-5"
          style={{ paddingRight: "100px", fontSize: "12px" }}
        >
          <div className="row text-muted mt-3">
            <div className="col" style={{ display: "flex" }}>
              <img
                src="media/images/zero.png"
                style={{ width: "100px", height: "90px" }}
              ></img>
              <p style={{ paddingTop: "20px" }}> Free account opening</p>
            </div>

            <div className="col" style={{ display: "flex" }}>
              <img
                src="media/images/zero.png"
                style={{ width: "100px", height: "90px" }}
              ></img>
              <p style={{ paddingTop: "20px" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col" style={{ display: "flex" }}>
              <img
                src="media/images/twenty.png"
                style={{ width: "100px", height: "90px" }}
              ></img>
              <p style={{ paddingTop: "20px" }}> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
