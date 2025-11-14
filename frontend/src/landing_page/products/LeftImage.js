import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-5 p-5">
          <img src={imageURL} alt="kite app"></img>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5 fs-6 text-muted">
          <h2 style={{ marginBottom: "20px" }}>{productName}</h2>
          <p>{productDescription}</p>
          {(tryDemo || learnMore) && (
            <div className="mt-5">
              {tryDemo && (
                <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
              )}
             {learnMore && (
                <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
             )}
          </div>
          )}
          <div className="mt-5">
            <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="" className="me-3"/>
            </a>
            <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" alt="" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
