'use client';
import { useEffect, useState } from 'react';
import { useShop } from '@/context/ShopContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart, pushGA4Event } = useShop();
  const [trxId, setTrxId] = useState('');
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const generatedTrxId = 'NEXT-' + Math.floor(100000 + Math.random() * 900000);
      const total = cart.reduce((sum, item) => sum + item.price, 0);

      setTrxId(generatedTrxId);
      setPurchaseTotal(total);

      pushGA4Event('purchase', {
        transaction_id: generatedTrxId,
        value: total,
        currency: 'USD',
        items: cart.map((i) => ({ item_id: i.id, item_name: i.name, price: i.price, quantity: 1 }))
      });

      clearCart();
    }
  }, []);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', maxWidth: '500px', margin: 'auto', border: '1px solid #e2e8f0' }}>
        <h1 style={{ color: '#10b981', fontSize: '50px' }}>✓</h1>
        <h2 style={{ margin: '10px 0' }}>Order Placed Successfully!</h2>
        {trxId && (
          <p style={{ margin: '15px 0', color: '#64748b' }}>
            Transaction ID: <strong>{trxId}</strong> | Paid: <strong>${purchaseTotal}</strong>
          </p>
        )}
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>GA4 DataLayer purchase event fired in console.</p>
        <Link href="/" className="btn">Continue Shopping</Link>
      </div>
    </div>
  );
}
