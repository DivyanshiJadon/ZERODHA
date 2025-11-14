import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h2>Charges</h2>
        <h3 className="text-muted">List of all charges and taxes</h3>
      </div>

      <div className="row p-5 mt-5">
        <div className="col-4 p-5 text-muted">
          <img
            src="media/images/zero.png"
            style={{ width: "250px", height: "150px", objectFit: "contain" }}
          ></img>
          <h2 className="fs-3 mt-5 mb-3">Free equity delivery</h2>
          <p className="text-small ">
           All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-5 text-muted">
          <img
            src="media/images/twenty.png"
            style={{ width: "250px", height: "150px", objectFit: "contain" }}
          ></img>
          <h2 className="fs-3 mt-5 mb-3">Intraday and F&O trades</h2>
          <p className="text-small">
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 p-5 text-muted">
          <img
            src="media/images/zero.png"
            style={{ width: "250px", height: "150px", objectFit: "contain" }}
          ></img>
          <h2 className="fs-3 mt-5 mb-3">Free direct MF</h2>
          <p className="text-small">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
