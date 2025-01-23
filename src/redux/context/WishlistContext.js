import React, { createContext, useState, useContext } from "react";

// Create Context
const WishlistContext = createContext();

// Create a provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add an item to the wishlist
  const addToWishlist = (item) => {
    if (!wishlist.some((product) => product.id === item.id)) {
      setWishlist([...wishlist, item]);
    } else {
      alert("Item is already in the wishlist!");
    }
  };

  // Remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => useContext(WishlistContext);
