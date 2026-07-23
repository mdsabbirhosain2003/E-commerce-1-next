export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Contact Details</h3>
          <p style={{ color: '#94a3b8' }}>Mobile: +8801400058699</p>
          <p style={{ color: '#94a3b8' }}>Email: mdsabbirhosain@gmail.com</p>
          <p style={{ color: '#94a3b8' }}>Location: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Corporate Links</h3>
          <a href="https://sabbirbio.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', display: 'block', marginBottom: '8px', textDecoration: 'none' }}>🌐 My Website</a>
          <a href="https://www.facebook.com/sabbir.hosain.154794" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', display: 'block', textDecoration: 'none' }}>🔗 Facebook Profile ID</a>
        </div>

        <div style={{ flex: 2, minWidth: '300px' }}>
          <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Featured Showcase</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px' }}>
              <iframe
                src="https://www.youtube.com/embed/9No-FiEInLA?start=0&end=10"
                title="Tech Video 1"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen
              />
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '6px' }}>
              <iframe
                src="https://www.youtube.com/embed/2M7Z0SClGqE?start=0&end=10"
                title="Tech Video 2"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '30px', color: '#64748b', fontSize: '13px', borderTop: '1px solid #334155', paddingTop: '20px' }}>
        &copy; 2026 GadgetFlux Studio. All Analytical Tracking Rights Reserved.
      </p>
    </footer>
  );
}
