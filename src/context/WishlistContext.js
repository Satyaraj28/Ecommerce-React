import React, { createContext, useState, useContext } from 'react';

// Create Wishlist Context
const WishlistContext = createContext();

// Custom Hook to use the Wishlist Context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }

  return context;
};

// Wishlist Provider Component
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to add an item to the wishlist
  const addToWishlist = (item) => {
    if (!wishlist.some((product) => product.id === item.id)) {
      setWishlist([...wishlist, item]);
    } else {
      alert("Item is already in the wishlist!");
    }
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
