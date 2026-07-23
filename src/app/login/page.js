'use client';
import { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useShop();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const userName = email.split('@')[0];
      loginUser({ name: userName, email: email });
      router.push('/');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>User Login</h2>
        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn" style={{ width: '100%', padding: '12px' }}>Login</button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '13px' }}>
          New User? <Link href="/signup" style={{ color: '#2563eb' }}>Create Account</Link>
        </p>
      </div>
    </div>
  );
}
