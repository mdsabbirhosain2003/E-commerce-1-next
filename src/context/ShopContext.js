'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('gadget_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const pushGA4Event = (eventName, eventData) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ecommerce: eventData });
      console.log(`🔌 [GA4 Event Push]: ${eventName}`, eventData);
    }
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    pushGA4Event('add_to_cart', {
      value: product.price,
      currency: 'USD',
      items: [{ item_id: product.id, item_name: product.name, price: product.price, quantity: 1 }]
    });
  };

  const removeFromCart = (index) => {
    const removedItem = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    pushGA4Event('remove_from_cart', {
      value: removedItem.price,
      currency: 'USD',
      items: [{ item_id: removedItem.id, item_name: removedItem.name, price: removedItem.price }]
    });
  };

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('gadget_user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('gadget_user');
  };

  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider value={{ cart, user, addToCart, removeFromCart, clearCart, loginUser, logoutUser, pushGA4Event }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
