export default function Thanks() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-black text-green-600 mb-6">Thanks for Uploading!</h1>
        <p className="text-xl text-gray-700 mb-8">We’ll review your statement and send you 3–5 competing bids in 24 hours</p>
        <p className="text-lg text-gray-600 mb-8">Check your email (and spam folder)</p>
        <a href="/" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700">
          Back to Home
        </a>
      </div>
    </main>
  );
}
