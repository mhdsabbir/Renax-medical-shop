import React, { useEffect, useState } from "react";
import "./Category.css";
const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("storeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="category-container">
        <div className="top-part-category">
          <h5 className="mt-4">
            
            OUR PRODUCTS

          </h5>
          <h1 className="mt-5">Shop By Category</h1>
          <div className="button-continer">
            <button id="NewAv" className="btn-0">New Arrivals</button>
            <button className="btn-1">Featured</button>
            <button className="btn-1">Best Companies</button>
          </div>
        </div>
        <div className="row">
          {data.map((pd) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={pd.id}>
              <div className="product-cart p-2">
                <div className="product-img p-2">
                  <img className="w-100" src={pd.image} alt="" />
                  <p className="mt-3">
                    <b>{pd.name}</b>
                  </p>
                  <h5 className="text-info">{pd.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
