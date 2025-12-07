export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white py-12">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find that page.</p>
      <a href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
        Go Home
      </a>
    </main>
  );
}
