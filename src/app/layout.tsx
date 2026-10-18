import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Paperwork | Automated GST Invoicing & Software License Distribution',
  description: 'Self-hosted desktop automation for Indian software founders & exporters. Paperwork converts Razorpay webhooks into GST Rule 46 compliant PDF invoices, calculates split IGST vs CGST/SGST, and signs offline Ed25519 license keys.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <div className="brand-icon">P</div>
              <span>Paperwork</span>
            </Link>
            <nav className="nav-links">
              <Link href="/#features" className="nav-link">Features</Link>
              <Link href="/#calculator" className="nav-link">GST Simulator</Link>
              <Link href="/#compliance" className="nav-link">Rule 46 Specs</Link>
              <Link href="/support" className="nav-link">Support</Link>
            </nav>
            <a href="https://valentir.org/releases/paperwork/Paperwork-Setup-1.0.0.exe" className="btn btn-primary">
              Download for Windows
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="brand" style={{ marginBottom: '1rem' }}>
                  <div className="brand-icon">P</div>
                  <span>Paperwork</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Zero-cloud invoicing, Razorpay reconciliation, and Ed25519 software license distribution engine for Indian software founders.
                </p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><Link href="/#features">Features</Link></li>
                  <li><Link href="/#calculator">GST Calculator</Link></li>
                  <li><a href="https://valentir.org/releases/paperwork/Paperwork-Setup-1.0.0.exe">Download v1.0.0</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Compliance &amp; Legal</h4>
                <ul>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                  <li><Link href="/eula">EULA</Link></li>
                  <li><Link href="/acceptable-use">Acceptable Use</Link></li>
                  <li><Link href="/refunds">Refund Policy</Link></li>
                  <li><Link href="/third-party-notices">Third-Party Notices</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <ul>
                  <li><Link href="/support">CA Ledger Export Guide</Link></li>
                  <li><a href="mailto:support@valentir.org">support@valentir.org</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2026 Valentir Software Inc. Paperwork is a trademark of Valentir.</div>
              <div>GST Rule 46 Compliant • SAC 997331 • 100% Offline Database</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
