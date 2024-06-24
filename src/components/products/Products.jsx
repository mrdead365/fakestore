import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products = [] }) => {
  return (
    <>
      
      <div className="container my-5">
        <div className="row">
          {products.map((product) => {
            // console.log(product, "product");
            const {id}= product

            return (
              <Link to={`/product/${id}`}
                className="col-lg-3 col-md-4 col-sm-6 mb-4 mycard"
                key={product.id}
              >
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title limited-text">{product.title}</h5>
                    <p className="card-text price">${product.price}</p>
                    <p className=" card-text cat"> {product.category}</p>

                    <Link to = {`/product/${id}`}  className="btn btn-primary">
                      view product
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
