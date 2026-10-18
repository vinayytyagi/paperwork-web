
export const metadata = {
  title: 'Privacy Policy - Paperwork',
};

export default function Page() {
  return (
    <div className="container">
      <div className="legal-content">
        
      <h1>Paperwork Privacy Policy</h1>
      <p>Last updated: October 2026</p>
      <h2>1. Local Financial Data Architecture</h2>
      <p>Paperwork was created to provide Indian software founders complete financial confidentiality. All payment logs, customer GSTIN identifiers, invoice PDFs, and Ed25519 private keys reside exclusively on your local workstation in encrypted SQLite storage.</p>
      <h2>2. What We Do NOT Collect</h2>
      <p>Valentir Software Inc. does not collect, receive, or monetize:</p>
      <ul>
        <li>Your business turnover, transaction volumes, or invoice values.</li>
        <li>Your customer names, email addresses, or phone numbers.</li>
        <li>Your Razorpay or Stripe API keys and webhook secrets.</li>
        <li>Your Ed25519 master licensing private keys.</li>
      </ul>
    
      </div>
    </div>
  );
}
