import React from "react";

function RightImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5 fs-6 text-muted">
          <h2 style={{ marginBottom: "20px" }}>{productName}</h2>
          <p>{productDescription}</p>
        
            <div className="mt-5">
                <a href={learnMore}>
                  Learn More{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        {/* <div className="col-2"></div> */}
            <div className="col-6">
            <img src={imageURL}></img>
          </div>
       </div>
    </div>
  );
}

export default RightImage;
