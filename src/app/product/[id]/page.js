'use client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { products } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart, pushGA4Event } = useShop();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      pushGA4Event('view_item', {
        value: product.price,
        currency: 'USD',
        items: [{ item_id: product.id, item_name: product.name, price: product.price }]
      });
    }
  }, [product]);

  if (!product) return <div className="container"><h2>Product Not Found</h2></div>;

  return (
    <div className="container">
      <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>&larr; Back to Catalog</Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', background: '#fff', padding: '30px', borderRadius: '8px', marginTop: '20px', border: '1px solid #e2e8f0' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '350px', objectFit: 'cover' }} />
        <div>
          <span className="product-cat">{product.category}</span>
          <h1 style={{ margin: '10px 0' }}>{product.name}</h1>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>{product.description}</p>
          <h2>${product.price}</h2>
          <button onClick={() => addToCart(product)} className="btn btn-success" style={{ marginTop: '20px', padding: '12px 24px' }}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
