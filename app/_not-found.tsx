export default function NotFound() {
  return (
    <main style={{ padding: '3rem 1rem', textAlign: 'center', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', color: '#333' }}>Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', margin: '1rem 0' }}>Sorry, that page doesn't exist.</p>
      <a href="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#4f46e5', color: 'white', textDecoration: 'none', borderRadius: '0.5rem' }}>
        Go Home
      </a>
    </main>
  );
}
