import React from 'react';
import { useParams } from 'react-router';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
    const { pdId } = useParams();
    return (
        <div>
            <h2>Product details {pdId}</h2>
            <img src={pdId.image} alt="" />
            
            
        </div>
    );
};

export default Product;

