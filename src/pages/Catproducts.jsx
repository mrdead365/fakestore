import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../components/products/category";

function Catproducts() {
  const { name } = useParams();
  const [catproducts, setCatproducts] = useState([]);
  useEffect(() => {
    let fecthCatproducts = async () => {
      let res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      //   console.log(data)
      setCatproducts(data);
    };
    fecthCatproducts();
  }, []);

  if (catproducts.length === 0) return <h1> opssss.......</h1>;

  return (
    <>
      <div classNameName="container">
        <div className="row ">
          {catproducts.map((i) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12 col" key={i.id}>
                  <div classNameName="card">
                    <img src={i.image}  className="card-img-top cc" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Catproducts;
