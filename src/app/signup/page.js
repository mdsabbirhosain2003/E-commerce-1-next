'use client';
import { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useShop();
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email) {
      loginUser({ name: name, email: email });
      router.push('/');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn" style={{ width: '100%', padding: '12px' }}>Register & Login</button>
        </form>
      </div>
    </div>
  );
}
