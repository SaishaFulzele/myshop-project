import React, { useState } from "react";

const ShoppingCart = () => {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1500,
      image: "https://via.placeholder.com/150?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2500,
      image: "https://via.placeholder.com/150?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1200,
      image: "https://via.placeholder.com/150?text=Speaker",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 900,
      image: "https://via.placeholder.com/150?text=Mouse",
    },
  ];

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };


  const updateQuantity = (productId, amount) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="title">🛒 Shopping Cart</h1>

      <div className="content">
        {/* Product List */}
        <div className="product-list">
          <h2>Products</h2>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <h3 className="total">Total: ₹{total}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
