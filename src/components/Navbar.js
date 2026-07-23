'use client';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const { cart, user, logoutUser } = useShop();

  return (
    <header>
      <div className="nav-container">
        <Link href="/" className="logo">GADGET<span>FLUX</span></Link>
        <nav>
          <Link href="/">Home Shop</Link>
          <Link href="/cart">Cart Bag 🛒 ({cart.length})</Link>
          {user ? (
            <>
              <span style={{ fontWeight: 600, color: '#2563eb' }}>Hi, {user.name}</span>
              <button onClick={logoutUser} className="btn" style={{ padding: '6px 12px', background: '#ef4444' }}>Logout</button>
            </>
          ) : (
            <Link href="/login" className="btn">Login / Signup</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
