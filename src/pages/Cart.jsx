import React from 'react';

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <div className="container mt-5">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="row">
                        {cart.map((product, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card mb-4">
                                    <img src={product.image} className="card-img-top" alt="Product" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h3>Total Price: ${totalPrice}</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;