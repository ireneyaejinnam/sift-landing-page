const Terms = () => (
  <div className="min-h-screen bg-white px-6 py-16 max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
    <p className="text-sm text-gray-500 mb-8">Last updated: May 1, 2026</p>

    <div className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-lg font-semibold mb-2">1. Acceptance</h2>
        <p>
          By using Sift, you agree to these terms. If you don't agree, please
          don't use the app.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">2. What Sift Does</h2>
        <p>
          Sift helps you discover events in New York City. We aggregate event
          information from public sources and user submissions. We are not an
          event organizer or ticket seller — we link to third-party event pages
          and ticket vendors.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">3. Your Account</h2>
        <p>
          You can use Sift without an account. If you create one, you're
          responsible for keeping your credentials secure. We may suspend
          accounts that violate these terms.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">4. User Submissions</h2>
        <p>
          When you submit event links or information, you grant Sift permission
          to process, display, and share that event information with other
          users. Don't submit content you don't have the right to share.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">5. Event Information</h2>
        <p>
          Event details (dates, prices, venues) come from third-party sources
          and AI extraction. We do our best to keep information accurate, but
          we can't guarantee it. Always verify details on the official event
          page before making plans.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">6. Acceptable Use</h2>
        <p>Don't use Sift to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Submit spam, fake events, or misleading content</li>
          <li>Scrape or bulk-access our data</li>
          <li>Attempt to access other users' private data</li>
          <li>Abuse the event submission system</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">7. Limitation of Liability</h2>
        <p>
          Sift is provided "as is" without warranties. We're not responsible
          for event cancellations, incorrect information, or issues with
          third-party ticket purchases.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">8. Changes</h2>
        <p>
          We may update these terms. Continued use of Sift after changes means
          you accept the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">9. Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:hello@siftapp.site" className="text-blue-600 underline">
            hello@siftapp.site
          </a>
        </p>
      </section>
    </div>
  </div>
);

export default Terms;
