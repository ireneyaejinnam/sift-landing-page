const Privacy = () => (
  <div className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last updated: May 1, 2026</p>

    <div className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-lg font-semibold mb-2">What We Collect</h2>
        <p>
          Sift collects the minimum data needed to personalize your event
          recommendations and save your preferences:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Email address and display name (if you create an account)</li>
          <li>Event preferences: interests, borough, vibe, budget, availability</li>
          <li>Saved events, going events, and custom lists</li>
          <li>Event submissions: URLs you paste and extracted event details</li>
          <li>Usage data: events viewed, saved, shared, and dismissed</li>
          <li>Device identifier for analytics (no personal information)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personalize event recommendations based on your taste</li>
          <li>Save your events, lists, and plans across sessions</li>
          <li>Process event submissions you share with us</li>
          <li>Improve the app through anonymous usage analytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Third-Party Services</h2>
        <p>We use the following services to operate Sift:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Supabase</strong> — database, authentication, and storage</li>
          <li><strong>Amplitude</strong> — anonymous usage analytics</li>
          <li><strong>Firebase/Google Analytics</strong> — anonymous app analytics</li>
          <li><strong>OpenAI</strong> — event extraction from submitted links (text only, no personal data sent)</li>
          <li><strong>Vercel</strong> — API hosting</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Data Sharing</h2>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes. Data is only shared with the service
          providers listed above to operate the app.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Data Retention</h2>
        <p>
          Your account data is retained as long as your account is active. Event
          submissions are stored to improve matching and prevent duplicates. You
          can request deletion of your data at any time.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Your Rights</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access your data through the Profile tab in the app</li>
          <li>Delete your account and all associated data by contacting us</li>
          <li>Opt out of analytics by using the app without an account</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href="mailto:hello@siftapp.site" className="text-blue-600 underline">
            hello@siftapp.site
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default Privacy;
