import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    let fecthCategory = async () => {
      let res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      //   console.log(data)
      setCategory(data);
    };
    fecthCategory();
  }, []);

  if (category.lenght < 1) return <div> koi nai ha</div>;

  return (
    <>
      <div className="container">
        <div className="row">
          {category.map((j) => {
            return (
              <Link to={`categories/${j}`} key={j[2]} className="col-lg-3 col-md-6 col-12">
                <h4>{j}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
