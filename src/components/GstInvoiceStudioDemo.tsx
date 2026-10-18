'use client';

import React, { useState } from 'react';

export default function GstInvoiceStudioDemo() {
  const [sellingPrice, setSellingPrice] = useState<number>(1499);
  const [buyerState, setBuyerState] = useState<string>('Karnataka (29)');
  const [isB2B, setIsB2B] = useState<boolean>(true);
  const [gstin, setGstin] = useState<string>('29AABCU9603R1ZM');
  const [licenseType, setLicenseType] = useState<string>('Perpetual Pro License');

  // Supplier state: Haryana (06)
  const isInterState = !buyerState.includes('(06)');
  const basePrice = Math.round((sellingPrice / 1.18) * 100) / 100;
  const totalTax = Math.round((sellingPrice - basePrice) * 100) / 100;
  
  const igst = isInterState ? totalTax : 0;
  const cgst = isInterState ? 0 : Math.round((totalTax / 2) * 100) / 100;
  const sgst = isInterState ? 0 : Math.round((totalTax / 2) * 100) / 100;

  return (
    <div className="interactive-demo" id="calculator">
      <div className="demo-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="demo-dots">
            <span className="demo-dot dot-red"></span>
            <span className="demo-dot dot-yellow"></span>
            <span className="demo-dot dot-green"></span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Paperwork Live GST Rule 46 Invoice &amp; License Dispatch Simulator
          </span>
        </div>
        <div style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
          SAC 997331 • 18% TAX ENGINE
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr', minHeight: '460px' }}>
        {/* Controls */}
        <div style={{ padding: '1.75rem', borderRight: '1px solid var(--border-color)', background: 'rgba(6, 78, 59, 0.3)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>
            Transaction Parameters
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Total Paid Amount (Inclusive of 18% GST)
              </label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '0 0.75rem' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>₹</span>
                <input 
                  type="number"
                  value={sellingPrice}
                  onChange={e => setSellingPrice(Number(e.target.value) || 0)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    padding: '0.65rem',
                    outline: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    width: '100%'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Place of Supply (Buyer State)
              </label>
              <select
                value={buyerState}
                onChange={e => setBuyerState(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '0.65rem 0.75rem',
                  borderRadius: '0.5rem',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <option value="Karnataka (29)">Karnataka (Code 29 - Inter-State)</option>
                <option value="Maharashtra (27)">Maharashtra (Code 27 - Inter-State)</option>
                <option value="Delhi (07)">Delhi (Code 07 - Inter-State)</option>
                <option value="Haryana (06)">Haryana (Code 06 - Intra-State CGST+SGST)</option>
                <option value="Tamil Nadu (33)">Tamil Nadu (Code 33 - Inter-State)</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox"
                id="b2b-check"
                checked={isB2B}
                onChange={e => setIsB2B(e.target.checked)}
              />
              <label htmlFor="b2b-check" style={{ fontSize: '0.85rem', color: '#fff', cursor: 'pointer' }}>
                B2B Purchase (Require GSTIN &amp; ITC Claim)
              </label>
            </div>

            {isB2B && (
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Customer GSTIN
                </label>
                <input 
                  type="text"
                  value={gstin}
                  onChange={e => setGstin(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: '#34d399',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.65rem 0.75rem',
                    borderRadius: '0.5rem',
                    outline: 'none',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Software License Tier
              </label>
              <select
                value={licenseType}
                onChange={e => setLicenseType(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '0.65rem 0.75rem',
                  borderRadius: '0.5rem',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <option value="Perpetual Pro License">Perpetual Pro License (1 Seat)</option>
                <option value="Team Commercial License">Team Commercial License (5 Seats)</option>
                <option value="Enterprise Site License">Enterprise Site License (Unlimited)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Live Rule 46 Invoice Document Preview */}
        <div style={{ padding: '1.75rem', background: '#03140f', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(16, 185, 129, 0.25)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>TAX INVOICE</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>As prescribed under Rule 46 of CGST Rules, 2017</div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#a7f3d0' }}>
                <div>INV-2026-0841</div>
                <div>Date: 18-Oct-2026</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.8rem', marginBottom: '1.25rem', color: '#cbd5e1' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--accent)' }}>ISSUED BY (SUPPLIER):</div>
                <div>VALENTIR SOFTWARE INC.</div>
                <div>GSTIN: 06AAECV4190Q1Z8</div>
                <div>State: Haryana (Code 06)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--accent)' }}>BILLED TO (RECIPIENT):</div>
                <div>{isB2B ? 'ACME ENTERPRISES PVT LTD' : 'Individual Consumer'}</div>
                <div>{isB2B ? `GSTIN: ${gstin}` : 'Unregistered (B2C)'}</div>
                <div>Place of Supply: {buyerState}</div>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
              <thead>
                <tr style={{ background: 'rgba(6, 78, 59, 0.6)', borderBottom: '1px solid var(--border-color)', color: '#fff', textAlign: 'left' }}>
                  <th style={{ padding: '0.5rem' }}>Description</th>
                  <th style={{ padding: '0.5rem' }}>SAC</th>
                  <th style={{ padding: '0.5rem', textAlign: 'right' }}>Taxable</th>
                  <th style={{ padding: '0.5rem', textAlign: 'right' }}>Tax</th>
                  <th style={{ padding: '0.5rem', textAlign: 'right' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#f1f5f9' }}>
                  <td style={{ padding: '0.5rem' }}>{licenseType}</td>
                  <td style={{ padding: '0.5rem', fontFamily: 'var(--font-mono)' }}>997331</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>₹{basePrice.toFixed(2)}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>₹{totalTax.toFixed(2)}</td>
                  <td style={{ padding: '0.5rem', textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#34d399' }}>₹{sellingPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ background: 'rgba(6, 78, 59, 0.35)', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span>Tax Breakdown:</span>
                <span style={{ color: 'var(--accent)' }}>{isInterState ? 'IGST (18%)' : 'CGST (9%) + SGST (9%)'}</span>
              </div>
              {isInterState ? (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a7f3d0' }}>
                  <span>Integrated Tax (IGST @ 18%):</span>
                  <span>₹{igst.toFixed(2)}</span>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a7f3d0' }}>
                    <span>Central Tax (CGST @ 9%):</span>
                    <span>₹{cgst.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a7f3d0' }}>
                    <span>State Tax (SGST @ 9%):</span>
                    <span>₹{sgst.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.75rem', color: '#6ee7b7' }}>
              🔑 Ed25519 Signed Key Generated &amp; Attached in PDF metadata
            </div>
            <button className="btn btn-primary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }} onClick={() => alert('Sample PDF Tax Invoice generated with Ed25519 signature!')}>
              Download Sample PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
