'use client';
import { useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, pushGA4Event } = useShop();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (cart.length > 0) {
      pushGA4Event('view_cart', {
        value: total,
        currency: 'USD',
        items: cart.map((i) => ({ item_id: i.id, item_name: i.name, price: i.price }))
      });
    }
  }, [cart]);

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={{ marginTop: '20px' }}>Your bag is empty.</p>
      ) : (
        <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <h4>{item.name}</h4>
                <p style={{ color: '#2563eb' }}>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}>Remove</button>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h3>Total Amount: ${total}</h3>
            <Link href="/checkout" className="btn btn-success" style={{ marginTop: '15px' }}>Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
