import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("storeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <h2 className="text-primary mt-5">Our services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="align-item-center col-lg-4 col-md-6 col-sm-12" key={service.id}>
            <Card style={{ width: "23rem", height: "100%" }}>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
                <Link to={`/product/${service.id}`}>
                  <button className="btn btn-warning">
                    {service.name.toLowerCase()}
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
     
    </div>
    

  );
};

export default Services;
