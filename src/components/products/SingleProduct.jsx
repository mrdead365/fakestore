import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    if (!Object.keys(product).length) return <div>Product not found</div>;

    const handleAddToCart = () => {
        addToCart(product);
        window.alert('Product added to cart');
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt="Product" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;