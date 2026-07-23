'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { useShop } from '@/context/ShopContext';

export default function HomePage() {
  const { pushGA4Event, addToCart } = useShop();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Smartphones', 'Audio & Sound', 'Wearable Tech'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter((p) => p.category === filter);

  useEffect(() => {
    pushGA4Event('view_item_list', {
      item_list_name: filter,
      items: filteredProducts.slice(0, 10).map((p, idx) => ({
        item_id: p.id,
        item_name: p.name,
        index: idx + 1,
        price: p.price
      }))
    });
  }, [filter]);

  return (
    <div className="container">
      <div className="hero">
        <h2>GA4 eCommerce Next.js Electronics Sandbox</h2>
        <p>৫২টি সম্পূর্ণ ইউনিক ইলেকট্রনিক্স প্রোডাক্ট এবং ইন্টিগ্রেটেড মাল্টি-পেজ পারচেজ ফানেল ট্র্যাকিং।</p>
      </div>

      {/* Category Filter Bar */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '30px', paddingBottom: '5px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="btn"
            style={{
              backgroundColor: filter === cat ? '#2563eb' : '#ffffff',
              color: filter === cat ? '#ffffff' : '#64748b',
              border: '1px solid #e2e8f0',
              padding: '8px 18px'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 52 Products Grid */}
      <div className="grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <Link href={`/product/${prod.id}`}>
              <img src={prod.image} alt={prod.name} className="product-img" loading="lazy" />
            </Link>
            <div className="product-info">
              <span className="product-cat">{prod.category}</span>
              <Link href={`/product/${prod.id}`} className="product-title">{prod.name}</Link>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '18px' }}>${prod.price}</strong>
                <button onClick={() => addToCart(prod)} className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
