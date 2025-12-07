export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-12">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>We respect your privacy and treat your merchant statements with the highest security.</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Your uploaded statements are encrypted in transit and at rest.</li>
            <li>We never share your data with third parties except the processors you approve.</li>
            <li>All statements are automatically and permanently deleted after 30 days.</li>
            <li>We do not sell your information. Ever.</li>
            <li>You can request deletion at any time by emailing calvin@nofeeadvisor.com</li>
          </ul>
          <p className="text-center text-sm text-gray-500 mt-12">
            Last updated: December 2025
          </p>
        </div>
      </div>
    </main>
  );
}
