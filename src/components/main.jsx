import React from "react";

const Home = () => {
  return (
    <section className="hero border-bottom pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        {/* Use a relative path or appropriate URL for the image */}
        <img
          className="card-img img-fluid"
          src="./assets/main.png.webp"
          alt="New Season Arrivals"
          style={{ 
            height: "auto", 
            maxHeight: "100vh", 
            minWidth: "300px", 
            minHeight: "200px" 
          }}
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <div className="text-center container">
            {/* Updated text classes for better readability */}
            <h1 className="card-title display-4 fw-light">New Season Arrivals</h1>
            <p className="card-text fs-5 d-none d-sm-block mt-3">
              Check out the latest trends and collections in fashion!
            </p>
            {/* Add a call-to-action button */}
            <a
              href="/product"
              className="btn btn-primary mt-3 px-4 py-2 fw-bold"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
