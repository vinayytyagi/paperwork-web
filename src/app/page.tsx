import GstInvoiceStudioDemo from '@/components/GstInvoiceStudioDemo';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">
          <span>🧾</span>
          <span>100% Offline • Windows 10 & 11 • GST Rule 46 Compliant</span>
        </div>
        <h1 className="hero-title">
          Automated GST Invoicing &amp; Software License Distribution.
        </h1>
        <p className="hero-subtitle">
          Built for Indian software founders, micro-ISVs, and digital exporters. 
          Paperwork connects to your Razorpay webhooks, automatically generates GST Rule 46 tax invoices 
          with correct IGST vs CGST/SGST splits, signs tamper-evident Ed25519 licenses, and exports CA-ready GSTR-1 ledgers.
        </p>
        <div className="hero-cta">
          <a href="https://valentir.org/releases/paperwork/Paperwork-Setup-1.0.0.exe" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            Download Paperwork v1.0.0
          </a>
          <a href="#compliance" className="btn btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            View GST Rule 46 Specs
          </a>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Installer: <code>Paperwork-Setup-1.0.0.exe</code> • SHA256 Verified: <code>DB03F792...C53E</code>
        </div>
      </section>

      {/* Interactive Hero Study */}
      <GstInvoiceStudioDemo />

      {/* Core Features */}
      <section id="features" style={{ margin: '6rem 0' }}>
        <h2 className="section-title">Designed for Indie Founders &amp; Software Exporters</h2>
        <p className="section-desc">
          Stop manually drawing up Word document invoices or paying thousands every month for SaaS accounting tools that don&apos;t understand software licensing.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Razorpay Webhook Daemon</h3>
            <p className="feature-text">
              Paperwork listens locally or via a secure reverse tunnel for <code>payment.captured</code> webhooks. It instantly extracts customer GSTIN, computes state tax split, and fires fulfillment emails.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3 className="feature-title">Strict GST Rule 46 Compliance</h3>
            <p className="feature-text">
              Generates PDF invoices with all mandatory statutory fields: Supplier GSTIN, Place of Supply, SAC code 997331, sequential non-repeating serial numbers, and B2B ITC claim indicators.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3 className="feature-title">Ed25519 Cryptographic Licenses</h3>
            <p className="feature-text">
              Upon successful payment capture, Paperwork signs a cryptographic offline license key embedded in the customer&apos;s invoice PDF, allowing instant desktop product activation without cloud validation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">1-Click GSTR-1 &amp; GSTR-3B Ledgers</h3>
            <p className="feature-text">
              Send clean, pre-formatted monthly sales ledgers to your Chartered Accountant. Automatically segments Table 4 (B2B), Table 5 (B2C Large), Table 7 (B2C Small), and Table 6 (Zero-rated export of services with LUT).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">LUT Export Invoicing (0% GST)</h3>
            <p className="feature-text">
              Selling software licenses to international clients via Stripe or PayPal? Paperwork automatically applies your Letter of Undertaking (LUT ARN) for zero-rated export of services without GST friction.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3 className="feature-title">100% Local SQLite Ledger</h3>
            <p className="feature-text">
              Never worry about your financial turnover being sold to data brokers. All customers, tax amounts, and license keys are stored locally on your Windows machine with automated daily encrypted backups.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Specs */}
      <section id="compliance" style={{ margin: '6rem 0', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '1rem', padding: '3.5rem 2.5rem' }}>
        <h2 className="section-title">GST Statutory Verification Suite</h2>
        <p className="section-desc">Audited against the Central Goods and Services Tax Rules, 2017.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Rule 46(a) - (d)</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Full name, address, and GSTIN of supplier; sequential invoice number not exceeding 16 characters in a unique financial year sequence; date of issue.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Rule 46(e) - (f)</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Name and address of the recipient; recipient GSTIN or UIN for taxable value exceeding ₹50,000; address of delivery along with name of State and code.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Rule 46(g) - (m)</div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Harmonised System of Nomenclature (HSN/SAC) 997331 for licensing of intellectual property; taxable value; rate of tax (IGST or split CGST/SGST); signature or digital signature.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
