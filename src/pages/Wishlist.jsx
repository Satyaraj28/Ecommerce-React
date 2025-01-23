import React from "react";
import { Footer, Header } from "../components"; // Import Header and Footer components
import { useWishlist } from "../context/WishlistContext"; // Correct path to WishlistContext
import { useDispatch } from "react-redux"; // For dispatching the addCart action
import { addCart } from "../redux/action"; // Your action to add to cart
import "../styles/Wishlist.css"; // Add a CSS file for styling if needed

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Destructure the context values
  const dispatch = useDispatch(); // Initialize dispatch function

  // Function to move item from wishlist to cart
  const moveToCart = (item) => {
    dispatch(addCart(item)); // Dispatch the item to the cart
    removeFromWishlist(item.id); // Remove the item from the wishlist
  };

  return (
    <div className="wishlist-page">
      {/* Include the Header */}
      <Header />
      
      <div className="wishlist-container">
        <h2 className="wishlist-title">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="empty-wishlist">Your wishlist is empty. Start adding some products!</p>
        ) : (
          <ul className="wishlist-items">
            {wishlist.map((item) => (
              <li key={item.id} className="wishlist-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />
                <div className="wishlist-details">
                  <h3 className="wishlist-item-title">{item.name}</h3>
                  <p className="wishlist-item-description">{item.description}</p> {/* Added description */}
                  <p className="wishlist-item-price">Price: ${item.price}</p>
                  <div className="wishlist-buttons">
                    <button
                      onClick={() => moveToCart(item)} // Move to cart functionality
                      className="move-to-cart-button"
                    >
                      Move to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)} // Remove from wishlist
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Include the Footer */}
      <Footer />
    </div>
  );
};

export default Wishlist;
